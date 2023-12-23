import React, { useState, useEffect, useContext } from 'react'
// defined styles
import {PageLayout,PageContainer, Line} from '../style/styles'
// routes
import {Link} from 'react-router-dom'
import {HideParent} from '../animation'
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
// axios
import axios from 'axios'
import { Routes, Route, useLocation, HistoryRouterProps } from "react-router-dom"
// shadow
import TextShadow from '../components/TextShadow'
// video component
import Video from '../components/Video'

// import user context
import UserContext from '../components/fetchData/data'

const VideosPage = () => {
    // context data
    const { videoData, loading } = useContext(UserContext)
    // state
    const [videos, setVideos] = useState([])

    // set data
    useEffect(()=> {   
        if (loading){   
            setVideos(videoData)
        }
        console.log(videos)
    }, [videoData])

    return(
        <PageContainer>
            <PageLayout 
            variants={HideParent}
            animate='show'
            initial='hidden'
            >
                <VideoCatContainer>
                    {videos?.map(video=>(
                    
                        <VideoComponent>
                            <Link to={video.videoCategorySlug}>
                            <ImageContainer>
                                <CatCover 
                                src={video.videoCategoryBackground.url} 
                                alt="video-category-cover"
                                />
                            </ImageContainer>
                            <Header>
                                <h1>{video.videoCategoryTitle}</h1>
                                <p>{video.videoCategoryDescription}</p>
                            </Header>
                            </Link>
                        </VideoComponent>
                        // </Link>
                    ))}
                </VideoCatContainer>
                {/* <Link to={"videos/"+{vidoes.videoComponent.videoSlug}}></Link> */}

            </PageLayout>
            
        </PageContainer>

    )
}



export default VideosPage

const VideoCatContainer = styled.div`
    width: 100%;
`

const VideoComponent = styled.div`
    position: relative;
    height: 500px;
    width: 100%;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;

`

const CatCover = styled.img`
    max-height: 100%;
    object-fit: cover;

`

const Header = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    max-width: 400px;
`