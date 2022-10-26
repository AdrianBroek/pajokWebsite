import React, {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import {motion, useAnimationControls } from 'framer-motion'
import {HideMenuItems, titleAnim} from '../animation'
import {PageLayout,PageContainer, Hide} from '../style/styles'
import styled from 'styled-components'
// links
import pages_nav from '../pages_nav_info'

const NavItem = ({open}) => {
    const {pathname} = useLocation()
    const [link, setLink] = useState(pages_nav)
    const [activeLink, setActiveLink] = useState(pages_nav)

    useEffect(() => {
        const filterLink = link.filter((stateLink) => stateLink.url == pathname)
        setActiveLink(filterLink[0])
    }, [link, pathname])

    return (
    <Menu variants={HideMenuItems} initial='hidden' animate={open ? 'show' : 'hidden'}>
            {pages_nav.map((page) => (
                <Hide key={page.key}>
                <motion.div whileHover={{ x: 5 }} variants={titleAnim}>
                <Link style={{width: 'fit-content',display: 'block'}} to={page.url}>
                    <MenuItem> {page.title}</MenuItem>
                    {pathname == page.url ? <MenuLine initial={{width: '0'}} animate={{width: '100%'}} /> : ''}
                   
                </Link>
                </motion.div>
                </Hide>
            )
            )}
    </Menu>
    )
}

const MenuItem = styled.h3`
    padding: 1rem 0;
    font-size: 1.2rem;
    font-weight: 300;
    font-family: 'Jost', sans-serif;
`

const Menu = styled(motion.div)`
    padding: 5rem 2rem;
`
const MenuLine = styled(motion.div)`
    width: 0;
    background: black;
    height: 1px;
    transition: .3s ease-out;
`

export default NavItem