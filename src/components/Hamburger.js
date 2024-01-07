import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// animations
import {HambLine1, HambLine2} from '../animation'

const Hamburger = ({open, setOpen}) => {
    return (
        <HambContainer>
        <HamburgerStyle 
        onClick={()=> setOpen(!open)}
        whileTap={{
            scale: 0.8,
        }}
        >
            <HamburgLine 
            variants={HambLine1}
            animate={open ? 'open' : 'close'}
            />
            <HamburgLine 
            variants={HambLine2}
            animate={open ? 'open' : 'close'}
            />
            <HamburgLine />
        </HamburgerStyle> 
        </HambContainer>
    )
}

const HambContainer = styled(motion.div)`
    position: fixed;
    z-index: 6;
    top: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HamburgerStyle = styled(motion.div)`
    display: flex;
    flex-direction: column;
    row-gap: .2rem;
    padding: 0 1rem;
    cursor: pointer;
    padding: 2rem;
    position: relative;
    width: fit-content;
`

const HamburgLine = styled(motion.div)`
    width: 20px;
    height: 2px;
    background-color: #fff;
    border-radius: 1rem;
`

export default Hamburger