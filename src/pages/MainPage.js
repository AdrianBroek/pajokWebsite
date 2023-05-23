import React from 'react'
// styled components
import styled from 'styled-components'
// images
import background from '../images/mainPage/background.jpg'
import backgroundMobile from '../images/mainPage/background2.webp'
// animations
import { PageAnimation, btnSlideUp} from '../animation'
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
            <div className='description'>
                <h2>Łukasz Pająk</h2>
                <h5>Photography & Videography</h5>
                    <motion.div variants={btnSlideUp} whileHover='work' className="button">
                        <Link className='btn' to='/photo'>
                            <div>
                                <p>Zobacz zdjęcia</p>
                            </div>
                        </Link>
                    </motion.div>
            </div>
        </PageContainerMain>
        </Container>
    )
}

const PageContainerMain = styled(PageContainer)`
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .description {
        margin-left: 20vw;
        font-family: 'Raleway', sans-serif;
        display: flex;
        flex-direction: column;
        row-gap: 1.25rem;
        @media screen and (max-width: 1024px){
            margin-left: 15vw;
        }
        @media screen and (max-width: 768px){
            margin-left: 10vw;
        }
        @media screen and (max-width: 600px){
            margin: auto;
        }
        h2 {
            font-size: 4rem;
            font-weight: 400;
            line-height: 1;
            @media screen and (max-width: 600px){
                font-size: 2rem;
            }
        }
        h5 {
            font-size: 1rem;
            font-weight: 300;
        }
        .btn {
            div{
                border: 1px solid #000;
                padding: 1rem;
                text-align: center;
                p {
                    font-size: 1.1rem;
                    font-weight: 600;
                }
            }

        }
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
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        background-position: center;
        background-size: cover;
        /* object-position: 0%; */
        position: absolute;
        z-index: -1;
        @media screen and (max-width: 500px){
            background-position: left;
            background-image: url(${backgroundMobile});
        }
    }
`

const Container = styled(motion.article)`
    height: 100%;
    width: 100%;
`

export default MainPage