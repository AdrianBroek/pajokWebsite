import React, {useState,useEffect} from "react";
import {motion, useAnimationControls } from 'framer-motion'
import styled from 'styled-components'
// social
import Socials from './Socials';
// animations
import {HambLine1, HambLine2} from '../animation'
// location
import { useLocation } from "react-router-dom";

const Nav = ({open, setOpen}) => {
    const [home, setHome] = useState(false)
    const {pathname} = useLocation()

    useEffect(
        () => pathname == '/' ? setHome(!home) : setHome(false),
        [pathname])
    return (
        <NavBar>
            <Hamburger 
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
            </Hamburger>
            <Socials />
        </NavBar>       
    )
}

const Hamburger = styled(motion.div)`
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
    background-color: #000;
    border-radius: 1rem;
`
const NavBar = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
`



export default Nav