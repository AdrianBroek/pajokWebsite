import React,{useCallback, useEffect, useMemo, useState} from 'react'
// styled components
import styled from 'styled-components'
import * as palette from '../components/style-variables'
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
// graph
import { gql } from "graphql-request";
import axios from "axios";
import { useQuery } from "react-query";
import playIcon from "../images/icons/play-button.png"
// components
import VideoComponent from '../components/VideoComponent'
import CreativeExp from '../components/CreativeExp'
import WhyMe from '../components/WhyMe'
import ContactMe from '../components/ContactMeComponent'

const MainPage = () => {
    // if api loaded
    const [load, setLoad] = useState(false)
    // full data from graph
    const [mainData, setMainData] = useState('')
    // single data from graph api
    const [videos, setVideos] = useState()
    const [backgroundImage, setBackgroundImage] = useState()
    const [header, setHeader] = useState()
    const [description, setDescription] = useState()
    const [bubbleComponent, setBubbleComponent] = useState()
    const [myPassionText, setMyPassionText] = useState()
    // graph settings
    const api_key = process.env.REACT_APP_GRAPH_KEY
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    const QUERY = gql`
    {
        mainPages {
            mainPhoto {
              url
            }
            mainPageHeader
            mainPageDescription
            bubbleComponent {
                bubbleText
                bubbleHeader
                bubbleImage {
                  url
                }
            }
            myPassionText {
                myPassionText
            }
        }
        videoPages {
            videoAssets {
                embedVimeoLink
                videoCover {
                  url
                }
            }
        }
      }
    `
    // graph api
    const { data, isLoading, error } = useQuery("launches", async () => {
        return await axios({
            url: endpoint,
            method: "POST",
            data: {
            query: QUERY
            }
        })
        .then(res => {
            setMainData(res.data.data)
            setLoad(true)
        })
    });

    useEffect(()=> {   
        if (load){   
            setBackgroundImage(mainData.mainPages[0].mainPhoto.url);
            setHeader(mainData.mainPages[0].mainPageDescription)
            setDescription(mainData.mainPages[0].mainPageHeader)
            setBubbleComponent(mainData.mainPages[0].bubbleComponent)
            setMyPassionText(mainData.mainPages[0].myPassionText.myPassionText)
            setVideos(mainData.videoPages[0])
        }
    }, [mainData])
    
    // console.log(bubbleComponent)
    
    return(
        <Container
            variants={PageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            
            <PageContainerMain style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className='description'>
                    <h5><strong>{description}</strong></h5>
                    <h2><strong>{header}</strong></h2>
                        {/* <motion.div variants={btnSlideUp} whileHover='work' className="button">
                            <Link className='btn' to='/photo'>
                                <div>
                                    <p>Zdjęcia</p>
                                </div>
                            </Link>
                        </motion.div> */}
                        <motion.button 
                        // variants={btnSlideUp} whileHover='work'
                        whileTap={{scale: .9}}
                        whileHover={{
                            scale: 0.9,
                        }}
                        className="button">
                            <Link className='btn' to='/video'>
                                <div className='flex'>
                                    <img className='filter-white' height="25px" src={playIcon} alt="play-Icon"/>
                                    {/* <p>Wideo</p> */}
                                </div>
                            </Link>
                        </motion.button>
                    <InvisibleLine><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></InvisibleLine>
                </div>


            </PageContainerMain>
            <CreativeExp props={myPassionText}/>
            <VideoComponent videos={videos}/>
            <WhyMe props={bubbleComponent}/>
            <ContactMe />
        </Container>
    )

    
}

export default MainPage

const PageContainerMain = styled(PageContainer)`
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    color: #fff;

    .description {
        font-family: 'Raleway', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1.25rem;
        /* border: 1px solid ${palette.SEC_COLOR}; */
        padding: 5rem;
        margin: 2rem;
        position: relative;
        h2 {
            font-size: 4rem;
            font-weight: 400;
            line-height: 1;
            text-align: center;
            @media screen and (max-width: 600px){
                font-size: 2rem;
            }
        }
        h5 {
            font-size: 1rem;
            font-weight: 300;
        }
        button {
            z-index: 2;
            .btn {
                div{
                    border: 1px solid ${palette.SEC_COLOR};
                    padding: 1.7rem;
                    text-align: center;
                    border-radius: 100%;
                    justify-content: center;
                    align-items: center;
                    img {
                    }
                    p {
                        font-size: .9rem;
                        font-weight: 600;
                    }
                }

            }
        }
    }

`

const InvisibleLine = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    div {
        position: absolute;
        background-color: ${palette.SEC_COLOR};
        &:nth-child(even){
            width: 25%;
            height: 1px;
        }
        &:nth-child(odd){
            width: 1px;
            height: 25%;
        }
        &:nth-child(1){
            top: 0;
            
        }
        &:nth-child(2){
            top: 0;
        }
        &:nth-child(3){
            top: 0;
            right: 0;
        }
        &:nth-child(4){
            top: 0;
            right: 0;
        }
        &:nth-child(5){
            top: 75%;
            
        }
        &:nth-child(6){
            top: 100%;
        }
        &:nth-child(7){
            top: 75%;
            right: 0;
        }
        &:nth-child(8){
            top: 100%;
            right: 0;
        }
    }
`

const Container = styled(motion.article)`
    height: 100%;
    width: 100%;
`
