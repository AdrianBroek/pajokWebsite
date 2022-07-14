import React from "react";
import InstaIcon from '../images/social/instagram-brands.svg'
import FbIcon from '../images/social/facebook-brands.svg'
import { Icon } from "../style/styles";
import { motion } from "framer-motion";
import styled from "styled-components";
//link
import {LinkHref} from './LinkHref'

const Socials = () => {
    const instaUrl = 'https://www.instagram.com/pajok.photography/';
    const fbUrl = 'https://www.facebook.com/Pajok-VideoPhotoMurals-106104814717702';

    return (
        <>

            <SocialContainer>
                <IconCont
                whileTap={{scale: .8}}
                whileHover={{
                    scale: 0.8,
                }}
                onClick={()=>LinkHref(instaUrl)}>
                    <Icon src={InstaIcon} ></Icon>
                </IconCont>
                <IconCont 
                whileTap={{scale: .8}}
                whileHover={{
                    scale: 0.8,
                }}
                onClick={()=>LinkHref(fbUrl)}>
                    <Icon src={FbIcon} ></Icon>
                </IconCont>
            </SocialContainer>
        </>
    )
}

const SocialContainer = styled(motion.div)`
    width: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const IconCont = styled(motion.div)`
    cursor: pointer;
`
export default Socials