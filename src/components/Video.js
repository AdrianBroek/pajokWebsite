import React, { useState, useEffect, useContext } from 'react'
// defined styles
import {PageLayout,PageContainer, Line} from '../style/styles'
// routes
import {Link, Outlet} from 'react-router-dom'
import {HideMenuItems, HideParent, HideParent2, Slide, segregateAnim, showImg, showNav, videoAnim} from '../animation'
// styled
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
// axios
import axios from 'axios'
// styles
import { Icon } from "../style/styles";
import PlayIcon from '../images/icons/play-button-2.png'
import x from "../images/icons/x.png"

import { Routes, Route, useLocation, HistoryRouterProps } from "react-router-dom"
// import user context
import UserContext from './fetchData/data'

import ChangeVideoCategory from '../components/ChangeVideoCategory'

const Video = () => {
    const {pathname} = useLocation()
    // context data
    const { videoData, loading } = useContext(UserContext)
    // state
    const [videos, setVideos] = useState([])

    const [activeFrame, setActiveFrame] = useState('')

    // set data
    useEffect(()=> {   
      if (loading){   
        let subWord = pathname.split('/')[2] +"/"+ pathname.split('/')[3]
        const category = videoData.filter(cat => cat.videoCategorySlug == subWord)
        setVideos(category)
      }
      
    }, [videoData])

    function showFrame(url){
      // console.log(url)
      setActiveFrame(url)
    }

    return (
        <GridContainer>
          {videos.map((video, index)=> (
            <Grid variants={videoAnim}
            animate='show'
            initial='hidden'
            key={index}>
            {video.videoComponent.map((vidata,index)=> (
              <motion.div key={index} variants={videoAnim}>
              <VideoContainer>
                <VideoCover style={{zIndex: 1}}>
                    <motion.img style={{filter: 'grayscale(.5)'}} src={vidata.videoCover.url} alt="video-cover"/>
                    <motion.button whileHover={{scale: 0.9,}} onClick={()=>showFrame(vidata.videoEmbedLink)}>
                      <Icon className="filter-white" src={PlayIcon} alt="play icon for showing a video"/>
                    </motion.button>
                </VideoCover>
              </VideoContainer> 
              {activeFrame && (
                <PopupIframe>
                  <motion.button whileTap={{scale: .9}}
                    whileHover={{
                        scale: 0.9,
                    }} onClick={() => setActiveFrame()} className="filter-white">
                    <img src={x} alt="escape video button"/>
                  </motion.button>
                  <Iframe
                    frameBorder="none"
                    src={activeFrame}
                    loading="lazy"
                    title="vimeo-player" 
                    width="500"
                    allowFullScreen
                  >
                  </Iframe>
                </PopupIframe>
              )}
              </motion.div>
            ))} 
            </Grid>
          ))}
        </GridContainer>
    )
}

const GridContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(50px, 1fr) );
  place-content: center center;
  padding: 2rem;
  min-height: 30vh;
  gap: 1rem;
  /* @media screen and (max-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 350px){
    grid-template-columns: 1fr;
  } */
`

const VideoCover = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  button {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 21px;
    height: auto;
    img {
      
    }
  }
`

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300px;
  
  @media screen and (max-width: 1024px){
    height: 250px;
  }
  @media screen and (max-width: 768px){
    height: 180px;
  }
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`

const PopupIframe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 2;
  button {
    cursor: pointer;
    z-index: 2;
    position: absolute;
    top: 0;
    right: 20px;
    background: transparent;
    border: none;
    padding: .5rem;
    width: 50px;
    height: 50px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`


export default Video

