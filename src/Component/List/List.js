import React, { useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import { Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import list from './List.module.css'
import { Input } from '@chakra-ui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ListAtom } from '../Atom/Atom'
import { useRecoilState } from 'recoil'
import {MdDeleteForever} from 'react-icons/md'

export default function List() {
    const [listInput, setListInput] = useState("")
    const [mainList , setMainList ] = useRecoilState(ListAtom)
    const [show, setshow] = useState(false)
    
    function toogle() {
        setshow(!show)
    }

    function handleDelete(id){
        const updatedList=mainList.filter((item) => item.listId !== id);
        setMainList(updatedList);
    }

    function handleListInput(){
        const newList ={
            listId:Date.now()+Math.random()*1000,
            listTitle: listInput,
            listDate : new Date(),
            task :[],
        } 
        setMainList([...mainList,newList])
        setshow(!show)
        localStorage.setItem("List" , JSON.stringify(mainList))
        setListInput("")
    }
        console.log(mainList)

    return (
        <div className={list.mainContainer}>
            <div className={list.title}>
                {mainList.map((item )=>{
                    return(<div className={list.box} key={item.listId}>
                        {item.listTitle} < MdDeleteForever onClick={() => handleDelete(item.listId)}/>
                        <div><CardComponent/></div>
                        </div>)
                })}
            </div>
            <div>
            {!show ?
                <Button
                    size='md'
                    height='45px'
                    width='200px'
                    color='#fffff'
                    backgroundColor='#f1f2f4'
                    border='2px'
                    onClick={toogle}
                    className={list.main_btn}>
                    + Add Title
                </Button> : <Card>
                    <CardBody >
                        <Input value={listInput} variant='filled' placeholder='Filled' onChange={(e)=>setListInput(e.target.value)} />
                        <div className={list.input_close}>
                            <Button colorScheme='teal' variant='outline' onClick={handleListInput} >
                                Add
                            </Button>
                            <AiOutlineCloseCircle onClick={toogle} />
                        </div>
                    </CardBody>
                </Card>}</div>
            
        </div>
    )
}
