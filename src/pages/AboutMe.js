import React, {useEffect, useState} from "react";
// styles
import styled from 'styled-components'
import {
    PageContainer,
    PageLayout,
    Icon,
    LinkBtn,
    Description,
    Line,
    ImageContainer
}
from '../style/styles'

// animations
import { motion } from 'framer-motion'
import { glow, buttonAnim, PageAnimation } from '../animation'


// images
import avatar from '../images/aboutMe/avatar2.jpg'
import copySvg from '../images/aboutMe/copy.svg'
import like from '../images/aboutMe/thumbs-up.svg'

const OmniePage = () => {
    const [copy, setCopy] = useState(false)
    const clickForLink = () => {
        if (!copy) {
        copyToClipboard('lucaskrzyzak@gmail.com')
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

    // Copies the email variable to clipboard
    function copyToClipboard(text) {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }
    return (
        <PageContainer
        >
            <PageLayout
             variants={PageAnimation}
             initial="hidden"
             animate="show"
             exit="exit"git >
                <AvContainer
                variants={glow}
                animate='show'
                >
                    <Avatar src={avatar}/>
                </AvContainer>
                <div>
                    <h1>O mnie</h1>
                    <Underline />
                </div>
                <Description>
                    <h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, praesentium.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, praesentium.
                    </h3>
                </Description>
                <div>
                    <LinkBtn 
                    onClick={clickForLink}
                    whileHover="hover"
                    variants={buttonAnim}
                    >
                        <ImageContainer>
                        <h3>lucaskrzyzak@gmail.com</h3>
                        <Icon src={copySvg} />
                        </ImageContainer>
                    </LinkBtn>

                        <Copied
                        variants={PageAnimation}
                        animate={copy ? 'show' : 'hidden'}
                        initial='hidden'>
                        
                        <h5>Skopiowano</h5>
                        <Icon
                        src={like} 
                        />
                        </Copied> 
                </div>
            </PageLayout>
        </PageContainer>
    )
}

const Copied = styled(motion.div)`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    top: 10%;
    right: 2.5%;
    border-radius: .5rem;
    /* border: 1px solid rgb(70,130,180); */
    padding: .5rem;
    background: rgba(70,130,180, .5);
    h5 {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }
    img {
        max-width: 20px;
        filter: invert(93%) sepia(100%) saturate(27%) hue-rotate(103deg) brightness(108%) contrast(106%);
    }
`

const Avatar = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`

const AvContainer = styled(motion.div)`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #44D62C;
`

const Underline = styled(Line)`
    width: 80%;
    margin: auto;
`
export default OmniePage
