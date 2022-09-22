import React from "react";
import styled from "styled-components";
import upArrow from '../images/icons/up-arrow.png'
import {Icon} from '../style/styles'
import { motion } from "framer-motion";

const MoveUp = () => {
    const moveUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <MoveUpStyle className='noselect' whileTap={{
            y: 10
        }} onClick={moveUp}>
            <ArrowIcon src={upArrow} />
        </MoveUpStyle>
    )

}

const MoveUpStyle = styled(motion.div)`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    box-shadow: 0 10px 10px -5px;
`

const ArrowIcon = styled(Icon)`
    width: 96px;
    display: block;
    pointer-events: none;
    max-width: unset;
`

export default MoveUp