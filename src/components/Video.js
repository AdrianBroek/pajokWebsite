import React, { useState, useEffect, useContext } from 'react'
// defined styles
import {PageLayout,PageContainer, Line,} from '../style/styles'
// routes
import {Link, Outlet} from 'react-router-dom'
import {HideMenuItems, showVideoCover,HideParent, HideParent2, Slide, segregateAnim, showImg, showNav, videoAnim} from '../animation'
// styled
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import * as palette from '../components/style-variables'
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
    const [activeHover, setActiveHover] = useState(false)

    // set data
    useEffect(()=> {   
      if (!loading){   
        let subWord = pathname.split('/')[2] +"/"+ pathname.split('/')[3]
        const category = videoData.filter(cat => cat.videoCategorySlug == subWord)
        setVideos(category)
      }
      
    }, [videoData])

    function showFrame(url){
      // console.log(url)
      setActiveFrame(url)
    }

    
    // useEffect(()=> {
    //   console.log(activeHover)
    // }, [activeHover])

  return (
    <GridContainer>
      {videos.map((video, index)=> (
        <Grid 
        variants={videoAnim}
        animate='show'
        initial='hidden'
        key={index}>
        {video.videoComponent.map((vidata,index)=> (
          <motion.div key={index} variants={videoAnim}>
          <VideoContainer 
          onTouchLeave={()=>setActiveHover(false)}
          onTouchStart={()=>setActiveHover(index)}
          onMouseLeave={()=>setActiveHover(false)} 
          whileHover={()=>setActiveHover(index)}>
            <VideoCover style={{zIndex: 1}}>
                <motion.img style={{filter: 'grayscale(.5)'}} src={vidata.videoCover.url} alt="video-cover"/>
            </VideoCover>
            <VideoNameCover 
            variants={showVideoCover}
            animate={activeHover === index ? 'show' : 'hidden'}
            initial='hidden'
            exit="exit"
            >
              <Header className='flex'>
                  <h1>{vidata.videoTitle}</h1>
              </Header>
              <motion.button 
              whileHover={{scale: 0.9,}} 
              onClick={()=>showFrame(vidata.videoEmbedLink)}>
                  <Icon className="filter-white" src={PlayIcon} alt="play icon for showing a video"/>
              </motion.button> 
            </VideoNameCover>
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



const VideoNameCover = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.335);
  padding: 1rem;
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
const Header = styled.header`
  width: 100%;
  height: 100%;
  h1 {
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: capitalize;
      font-family: ${palette.ROBOTO};
      text-align: center;
  }
  span {
      color: ${palette.SEC_COLOR};
      font-size: inherit;
  }
`

const GridContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, .25fr) );
  place-content: center center;
  padding: 2rem;
  min-height: 30vh;
  gap: 1rem;
  @media screen and (max-width: 400px){
    grid-template-columns: 1fr;
  }
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

`

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
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

