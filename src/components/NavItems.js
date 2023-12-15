import React, {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import {motion, useAnimationControls } from 'framer-motion'
import {HideMenuItems, titleAnim} from '../animation'
import {PageLayout,PageContainer, Hide} from '../style/styles'
import styled from 'styled-components'
// links
import pages_nav from '../pages_nav_info'
// style
import * as palette from '../components/style-variables'

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
                    <Link style={{width: '100%',display: 'block'}} to={page.url}>
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

const HideItem = styled(motion.div)`
    overflow: hidden;
    &:hover {
        background-color: ${palette.SEC_TEXT_COLOR};
    }
    &.active {
        background: ${palette.SEC_COLOR};
    }
`

export default NavItem