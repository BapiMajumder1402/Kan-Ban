import React, { useState } from 'react'
import PopOver from '../PopOver/PopOver'
import card from './card.module.css'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { TodoAtom, ListAtom } from '../Atom/Atom'
import { AiOutlineCloseCircle } from 'react-icons/ai'


function CardComponent({ id, tasklist }) {
    const [mainList, setMainList] = useRecoilState(ListAtom)
    const [show, setshow] = useState(false)
    const [todo, setTodo] = useState({
        id: Date.now() + Math.random() * 500,
        task: "",
    })
    const [todoList, setTodoList] = useRecoilState(TodoAtom)
    function toogle() {
        setshow(!show)
    }
    function changeHandler(e) {
        const { name, value } = e.target
        setTodo({ ...todo, [name]: value })
        console.log(todo);
    }
    // function submitTodo(){
    //     setTodoList([...todoList,todo])
    //     localStorage.setItem("todo", JSON.stringify([...todoList,todo]));
    //     setTodo({
    //         id:Date.now()+Math.random()*500,
    //         task:""
    //     })
    //     let list1 = [...mainList]
    //     let currentList= list1.filter(elm=>elm.listId===id)[0]
    //     console.log(currentList);
    //     currentList.task =[...currentList.task,todo]
    //     console.log(currentList);

    // }
    function submitTodo() {
        let list1 = [...mainList];
        let currentListIndex = list1.findIndex((elm) => elm.listId === id);
        if (currentListIndex !== -1) {
            let currentList = { ...list1[currentListIndex] };
            currentList.tasklist = [...currentList.tasklist, todo];
            list1[currentListIndex] = currentList;
            setMainList(list1);
            localStorage.setItem('List', JSON.stringify(mainList))
        }
    }
    console.log(todoList)
    return (
        <div className={card.container}>
            <div>{mainList.map((item) => {
                return item.tasklist.map((elm) => {
                    return (
                        <div className={card.todo} key={elm.id}>
                            <p>{elm.task}</p>
                            <p><PopOver /></p>
                        </div>
                    );
                });
            })}</div>

            <div className={card.card}>
                {!show ? <p className={card.addBtn} onClick={toogle}>+ Add a Card</p> :
                    <div>
                        <Input name='task' value={todo.task} placeholder='Add task Here' onChange={changeHandler} />
                        <div className={card.btns}>
                            <Button colorScheme='blue' onClick={submitTodo}>Add</Button>
                            <AiOutlineCloseCircle onClick={toogle} />
                        </div>
                    </div>}
            </div>

        </div>
    )
}

export default CardComponent