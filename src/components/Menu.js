import React from "react";
import NavItem from './NavItems'
import { motion } from "framer-motion";
import styled from "styled-components";
import {MenuAnim} from '../animation'

const Menu = ({open}) => {
    return (
        <MenuStyle
        variants={MenuAnim}
        animate={open ? "show" : "hidden"}
        initial='hidden'
        >
            <NavItem open={open}/>
        </MenuStyle>
    )
}

const MenuStyle = styled(motion.section)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background: #fff;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, .16);
    z-index: 2;
`

export default Menu