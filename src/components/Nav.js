import React, {useState,useEffect} from "react";
import {motion, useAnimationControls } from 'framer-motion'
import styled from 'styled-components'
// social
import Socials from './Socials';
// location
import { Link, useLocation } from "react-router-dom";
// styles
import {Logo} from '../style/styles'
//logo
import pajokLogoWhite from '../images/pajok_logo.png'


const Nav = ({open, setOpen}) => {
    const [shownav, setShownav] = useState(false)
    window.addEventListener('scroll', function(e) {
        let scroll_position = window.scrollY;
        scroll_position > 100 ? setShownav(true) : setShownav(false)
        }
    );
    const [home, setHome] = useState(false)
    const {pathname} = useLocation()

    useEffect(
        () => pathname == '/' ? setHome(!home) : setHome(false),
        [pathname])
    return (
        <NavBar
            style={{ 
                background: shownav ? '#fff' : 'transparent',
                boxShadow: shownav ? '1px 3px 5px rgb(0 0 0 / 16%)' : 'none'
            }}>
            <div />
            <Link to="/" style={{height: '80%'}}>
            <Logo 
                style={{ 
                    opacity: shownav ? '1' : '0',
                    transition: '.2s ease-in' ,
                    maxHeight: "100%"         
                }}
                src={pajokLogoWhite} 
            />
            </Link>
            <Socials />
        </NavBar>       
    )
}

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
    transition: all .18s ease-in;
`





export default Nav