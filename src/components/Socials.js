import React from "react";
import InstaIcon from '../images/social/instagram-brands.svg'
import FbIcon from '../images/social/facebook-brands.svg'
import { Icon } from "../style/styles";
import { motion } from "framer-motion";
import styled from "styled-components";
//link
import {LinkHref} from './LinkHref'
//styled
import * as palette from './style-variables'

const Socials = () => {
    const instaUrl = 'https://www.instagram.com/pajok.art/';
    const fbUrl = 'https://www.facebook.com/Pajok-VideoPhotoMurals-106104814717702';

    return (
        <>

            <SocialContainer>
                <IconCont
                className='flex'
                whileTap={{scale: .95}}
                whileHover={{
                    scale: 0.95,
                }}
                onClick={()=>LinkHref(instaUrl)}>
                    <Icon className="filter-white" src={InstaIcon} ></Icon>
                    <p>Instagram</p>
                </IconCont>
                <IconCont 
                className='flex'
                whileTap={{scale: .95}}
                whileHover={{
                    scale: 0.95,
                }}
                onClick={()=>LinkHref(fbUrl)}>
                    <Icon className="filter-white" src={FbIcon} ></Icon>
                    <p>Facebook</p>
                </IconCont>
            </SocialContainer>
        </>
    )
}

const SocialContainer = styled(motion.div)`
    width: fit-content;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    padding: 0 1rem;
    align-items: center;
    background-color: ${palette.MAIN_COLOR};
    column-gap: .5rem;
`

const IconCont = styled(motion.div)`
    cursor: pointer;
    column-gap: .5rem;
    p {
        font-size: .6rem;
    }
`
export default Socials