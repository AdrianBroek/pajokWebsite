import React, {useState,useEffect} from "react";
import {motion, useAnimationControls } from 'framer-motion'
import styled from 'styled-components'
// social
import Socials from './Socials';
// google singup
import SignIn from '../components/google/SignIn'
// location
import { Link, useLocation } from "react-router-dom";
// styles
import {Logo} from '../style/styles'
//logo
import pajokLogoWhite from '../images/pajok_logo.png'
// styles
import * as palette from '../components/style-variables'


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
                background: shownav ? palette.MAIN_COLOR : 'transparent',
                boxShadow: shownav ? '1px 13px 15px rgb(0 0 0 / 50%)' : 'none'
            }}>
            <div style={{width: '85px'}}/>
            <Link to="/" style={{
                height: '80%',
                // opacity: pointerEvents ? 'all' : 'none',
                }}>
                <h4>PAJOK</h4>
            </Link>
            <Socials />
            <SignIn /> 
        </NavBar>       
    )
}

const NavBar = styled(motion.div)`
    position: fixed;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    place-content: center center;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 3;
    transition: all .18s ease-in;
`





export default Nav