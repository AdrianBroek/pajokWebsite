import React from 'react'
// styled components
import styled from 'styled-components'
// images
import background from '../images/background2.webp'
import pajoklogo from '../images/pajok_logo.png'
import pajokLogoWhite from '../images/pajok_logo_w.png'
import photo_icon from '../images/camera.png'
import video_icon from '../images/video.png'
import video_gif from '../images/gifs/video.gif'
// animations
import { PageAnimation,buttonAnim} from '../animation'
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
                <h3>
                    Fotograf i filmowiec z Krakowa
                </h3>
            </Description>
            <div className='btnContainer'>
                <Link to="/photo">
                    <Linkbutton
                        variants={buttonAnim}
                        whileTap={{
                            scale: 0.95,
                        }}
                        whileHover="hover">
                        <ImageContainer>
                            <h6>Zdjęcia</h6>
                            <Icon src={photo_icon}/>
                        </ImageContainer>
                    </Linkbutton>
                </Link>
                <Link to="/video">
                    <Linkbutton
                        variants={buttonAnim}
                        whileTap={{
                            scale: 0.95,
                        }}
                        whileHover="hover">
                        <ImageContainer>
                            <h6>Wideo</h6>
                            <Icon src={video_icon}/>
                        </ImageContainer>
                    </Linkbutton>
                </Link>
            </div>
            </PageLayout>
        </PageContainerMain>
        </Container>
    )
}

const PageContainerMain = styled(motion.PageContainer)`
    .btnContainer {
        display: flex;
        column-gap: 1rem;
    }
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
    @media screen and (max-width: 501px){
        .btnContainer {
            flex-direction: column;
            row-gap: 1.5rem;
        }
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
    background: #1A1919;
    img {
        max-width: 40px;
    }
    h3 {
        color: #fff;
    }
`

const LogoMainPage = styled(Logo)`
    max-width: 500px;
    max-height: 400px;
    object-fit: fill;
    margin: -5rem 0;
    @media screen and (max-width: 768px){
        max-width: 60vw;
    }
`

export default MainPage