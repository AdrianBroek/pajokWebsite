import React from 'react'
// styled components
import styled from 'styled-components'
// images
import background from '../images/background.jpg'
import pajoklogo from '../images/pajok_logo.png'
import pajokLogoWhite from '../images/pajok_logo_w.png'
import photo_icon from '../images/camera.png'
import video_icon from '../images/video.png'
import video_gif from '../images/gifs/video.gif'
// animations
import {PageAnimation,buttonAnim} from '../animation'
import { motion } from 'framer-motion'

// defined styles
import {
    PageLayout,
    PageContainer,
    LinkBtn,
    BackgroundImg,
    Description,
    Logo,
    PajokThemeTxt,
    Icon,
    Line,
    ImageContainer
} from '../style/styles'
// routes
import {Link} from 'react-router-dom'
// images
const MainPage = () => {

    return(
        <Container
        variants={PageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        >
        <PageContainerMain>
            <PageLayout>
            <ImageContainer>
                <LogoMainPage src={pajokLogoWhite} />
            </ImageContainer>
            <Line />
            <Description>
            <h3>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Minima, distinctio.Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Minima, distinctio.
            </h3>
            </Description>
            <Link to="/photo">
                <Linkbutton
                variants={buttonAnim}
                whileHover= "hover">
                <ImageContainer>
                    <h3>Foto</h3>
                    <Icon src={photo_icon}/>
                </ImageContainer>
                </Linkbutton>
            </Link>
            <Link to="/video">
                <Linkbutton 
                variants={buttonAnim}
                whileHover= "hover">
                <ImageContainer>
                    <h3>Wideo</h3>
                    <Icon src={video_gif}/>
                </ImageContainer>
                </Linkbutton>
            </Link>

            </PageLayout>
        </PageContainerMain>
        </Container>
    )
}

const PageContainerMain = styled(motion.PageContainer)`
    &:before {
        content: '';
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    display: block;
    background-image: url(${background});
    -webkit-filter: grayscale(100%);
    filter: blur(5px);
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: center;
    background-size: cover;
    /* object-position: 0%; */
    opacity: .35;
    position: absolute;
    z-index: -1;
    }
`



const Container = styled(motion.article)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

const Linkbutton = styled(LinkBtn)`
    background: #ffffff7a;
`

const LogoMainPage = styled(Logo)`
    max-width: 500px;
    max-height: 400px;
    object-fit: fill;
    margin: -5rem 0;
`

export default MainPage