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
            <HideItem key={page.key} className={pathname == page.url ? 'active' : ''}>
                <motion.div whileHover={{ x: 5 }} variants={titleAnim}>
                    <Link style={{width: 'fit-content',display: 'block'}} to={page.url}>
                        <MenuItem className={pathname == page.url ? 'active' : ''}>
                                {page.title}
                                {/* {pathname == page.url ? <MenuLine initial={{width: '0'}} animate={{width: '100%'}} /> : ''} */}
                        </MenuItem>
                        
                        
                    </Link>
                </motion.div>
            </HideItem>
        )
        )}
    </Menu>
    )
}

const MenuItem = styled.h3`
    padding: 1rem 0;
    font-size: .95rem;
    font-weight: 300;
    font-family: 'Jost', sans-serif;
    transition: all .3s ease-in;
    margin-left: 2rem;
    &.active {
        font-weight: 500;
    }
`

const Menu = styled(motion.div)`
    margin: 5rem 0;
`
const MenuLine = styled(motion.div)`
    width: 0;
    background: #4b494942;
    /* box-shadow: 5px 2px 3px rgb(0 0 0 / 50%); */
    border-bottom: .1px solid #4b4949bb;
    transition: .3s ease-out;
`

const HideItem = styled(motion.div)`
    overflow: hidden;
    &:hover {
        background-color: #f5f5f5;
    }
    &.active {
        background: #ebebeb;
    }
`

export default NavItem