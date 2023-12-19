import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
    PageContainer,
    PageLayout,
    Icon,
    LinkBtn,
    Description,
    Line,
    ImageContainer
} from '../../style/styles'
import like from '../../images/icons/thumbs-up.svg'
import copySvg from '../../images/icons/file.png'
// styles
import * as palette from '../style-variables'
import { glow, buttonAnim, PageAnimation } from '../../animation'

export default function ClickToCopy ({text}) {
    const [copy, setCopy] = useState(false)

    const clickForLink = () => {
        if (!copy) {
        copyToClipboard(text)
        setCopy(true)
        clearTimeout()
        }
    }
    useEffect(() => {
        if (copy) {
            setTimeout(()=> {
                setCopy(false)
            }, 2500)
        }
    }   
    , [copy])

    // copy text
    const copyToClipboard = (text) => navigator.clipboard.writeText(text)
    
    return (
        <>
        <LinkBtn 
        onClick={clickForLink}
        whileHover="hover"
        variants={buttonAnim}
        whileTap={{
                scale: 0.95,
            }}
        >
            <ImageContainer>
                <h3>{text}</h3>
                    <Icon src={copySvg} />
                </ImageContainer>

            
        </LinkBtn>
        <Copied
            variants={PageAnimation}
            animate={copy ? 'show' : 'hidden'}
            initial='hidden'>
                <h5>Skopiowano</h5>
                <Icon src={like} />
        </Copied> 
        </>
    )
}

const Copied = styled(motion.div)`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    top: 15%;
    right: 2.5%;
    border-radius: .5rem;
    padding: .5rem;
    background: ${palette.SEC_COLOR};
    h5 {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }
    img {
        max-width: 20px;
        filter: invert(93%) sepia(100%) saturate(27%) hue-rotate(103deg) brightness(108%) contrast(106%);
    }
`