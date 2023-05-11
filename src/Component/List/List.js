import React, { useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import { Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import list from './List.module.css'
import { Input } from '@chakra-ui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function List() {
    const [show, setshow] = useState(false)
    function toogle() {
        setshow(!show)
    }

    return (
        <div className={list.mainContainer}>
            {!show ?
                <Button
                    size='md'
                    height='45px'
                    width='200px'
                    color='white'
                    backgroundColor='#252525'
                    border='none'
                    onClick={toogle}
                    className={list.main_btn}
                >
                    + Add Title
                </Button> : <Card>
                    <CardBody >
                        <Input variant='filled' placeholder='Filled' />
                        <div className={list.input_close}>
                            <Button colorScheme='teal' variant='outline' >
                                Add
                            </Button>
                            <AiOutlineCloseCircle onClick={toogle} />
                        </div>

                    </CardBody>
                </Card>}
            <CardComponent/>
        </div>
    )
}
