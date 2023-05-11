import React, { useState } from 'react'
import PopOver from '../PopOver/PopOver'
import card from './card.module.css'
import { Textarea } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function CardComponent() {
    const [show, setshow] = useState(false)
    function toogle() {
        setshow(!show)
    }
    return (
        <div className={card.container}>
            <div className={card.card}>
                {!show ? <p className={card.addBtn} onClick={toogle}>+ Add a Card</p> :
                    <div>
                        <Textarea placeholder='Add task Here' />
                        <div className={card.btns}>
                            <Button colorScheme='blue'>Add</Button>
                            <AiOutlineCloseCircle onClick={toogle} />
                        </div>
                    </div>}
            </div>
            <PopOver />
        </div>
    )
}

export default CardComponent

