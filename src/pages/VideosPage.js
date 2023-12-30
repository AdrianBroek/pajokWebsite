import React, { useState, useEffect, useContext } from 'react'
// defined styles
import {
    PageLayout,
    PageContainer, 
    Header, 
    SmallLine, 
    ImageDarker } from '../style/styles'
// routes
import {Link} from 'react-router-dom'
import {HideParent} from '../animation'
// styled
import styled from 'styled-components'
// animations
import { motion } from 'framer-motion'
import { videoAnimSlow } from '../animation'

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
            // variants={HideParent}
            // animate='show'
            // initial='hidden'
            >
                <VideoCatContainer 
                variants={videoAnimSlow}
                animate='show'
                initial='hidden'
                >
                    {videos?.map((video,index) => (
                        <VideoComponent 
                        variants={videoAnimSlow} 
                        key={index}>
                            <Link to={video.videoCategorySlug}>
                            <ImageContainer>
                                <ImageDarker />
                                <PCBackground 
                                src={video.videoCategoryBackground.url} 
                                alt="video-category-cover"
                                />
                                <MobileBackground 
                                src={video.videoCategoryBackgroundMobile.url} 
                                alt="video-category-cover"
                                />
                            </ImageContainer>
                            <HeaderCustom>
                                <motion.h1 variants={videoAnimSlow}>{video.videoCategoryTitle}</motion.h1>
                                <SmallLine />
                                <motion.p variants={videoAnimSlow}>{video.videoCategoryDescription}</motion.p>
                                
                            </HeaderCustom>
                            
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



const VideoCatContainer = styled(motion.div)`
    width: 100%;
`

const VideoComponent = styled(motion.div)`
    position: relative;
    height: 500px;
    width: 100%;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;

`

const PCBackground = styled.img`
    max-height: 100%;
    object-fit: cover;
    width: 100%;
    @media screen and (max-width: 768px){
        display: none;
    }
`

const MobileBackground = styled.img`
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    display: none;
    @media screen and (max-width: 768px){
        display: block;
    }
`

const HeaderCustom = styled(Header)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    max-width: 800px;
    text-align: justify;
    gap: 1rem;
    
    h1 {
        text-align: inherit;
        font-size: 3rem;
    }
`