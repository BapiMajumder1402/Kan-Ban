import React, { useState } from 'react';
import PopOver from '../PopOver/PopOver';
import card from './card.module.css';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { ListAtom } from '../Atom/Atom';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function CardComponent() {
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);
    const [mainList, setMainList] = useRecoilState(ListAtom);

    const [todo, setTodo] = useState({
        cardId: Date.now() + Math.random() * 500,
        task: '',
        cardDate: new Date(),
        isComplete: false,
    });

    function toggle() {
        setShow(!show);
    }

    function changeHandler(e) {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value });
        console.log(todo);
    }

    function submitTodo() {
        setMainList([...mainList, todo]);
        setTodo({
            cardId: Date.now() + Math.random() * 500,
            task: '',
            cardDate: new Date(),
            isComplete: false,
        });
    }

    return (
        <div className={card.container}>
            <div>
                {mainList.map((item) =>
                    item.todo.map((e) => (
                        <div className={card.todo} key={e.cardId}>
                            <p>{e.task}</p>
                            <p>
                                <PopOver />
                            </p>
                        </div>
                    ))
                )}
            </div>
            <div className={card.card}>
                {!show ? (
                    <p className={card.addBtn} onClick={toggle}>
                        + Add a Card
                    </p>
                ) : (
                    <div>
                        <Input
                            name="task"
                            value={todo.task}
                            placeholder="Add task Here"
                            onChange={changeHandler}
                        />
                        <div className={card.btns}>
                            <Button colorScheme="blue" onClick={submitTodo}>
                                Add
                            </Button>
                            <AiOutlineCloseCircle onClick={toggle} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardComponent;
