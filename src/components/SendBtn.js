import React, {useEffect, useRef, useState} from "react";
import {buttonAnim} from '../animation'
import {Icon} from '../style/styles'

import styled from 'styled-components'
import { motion } from "framer-motion";

const SendBtn = ({png, gif}) => {
    const [hidden, setHidden] = useState(true)
    console.log(hidden)
    const iconEl = useRef()
    const showGif = () => {
        hidden ? iconEl.current.style.display = 'none' : iconEl.current.style.display = 'block'
    }

    useEffect(()=> {
        showGif()
        console.log(hidden)
    }, [hidden])

    return (
        <SendInput
        variants={buttonAnim}
        whileHover= "hover">
        <input 
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
        type="submit" 
        value="" />
        <h4>Wyślij</h4>

        <Container

        >         
        <Icon src={png} />
        <HiddenIcon ref={iconEl} src={gif} />
        
        </Container>
        </SendInput>
    )


}

const SendInput = styled(motion.div)`
    position: relative;
    border-radius: .5rem;
    border: 1px solid #000;
    padding: .5rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: .85rem;
    margin: auto;
    width: 50%;
    input {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        padding: 1rem;
        font-size: 1rem;
        margin: auto;
        background: transparent;
        z-index: 2;
    }
    h4 {
        font-size: 1rem;
        font-weight: 300;
    }
`

const Container = styled.div`
    position: relative;
`

const HiddenIcon = styled(motion.img)`
    width: 100%;
    object-fit: cover;
    max-width: 35px;
    width: 35px;
    display: none;
    position: absolute;
    top: -8px;
    left: -5px;
`

export default SendBtn