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
// styles
import { Icon } from "../style/styles";
import PlayIcon from '../images/icons/play-button-2.png'
import x from "../images/icons/x.png"

import { Routes, Route, useLocation, HistoryRouterProps } from "react-router-dom"
// import user context
import UserContext from './fetchData/data'

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
        let subWord = pathname.split('/')[2]
        const category = videoData.filter(cat => cat.videoCategorySlug == subWord)
        setVideos(category)
        console.log(videos)
      }
      
    }, [videoData])

    function showFrame(url){
      // console.log(url)
      setActiveFrame(url)
    }

    return (
        <PageContainer>
        <PageLayout 
        variants={HideParent}
        animate='show'
        initial='hidden'
        >
          <GridContainer>
              {videos.map((video, index)=> (
                <Grid key={index}>
                {video.videoComponent.map((vidata,index)=> (
                  <div key={index}>
                  <VideoContainer className="noselect">
                      {/* <VideoCover style={{zIndex: 1}}>
                          <img src={vidata.videoCover.url} alt="video-cover"/>
                      </VideoCover> */}
                      <VideoCover style={{zIndex: 1}}>
                          <img style={{filter: 'grayscale(.5)'}} src={vidata.videoCover.url} alt="video-cover"/>
                          <motion.button whileHover={{
                            scale: 0.9,
                        }} onClick={()=>showFrame(vidata.videoEmbedLink)}>
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
                  </div>
                ))} 
                </Grid>
              ))}

          </GridContainer>
        </PageLayout>
            
        </PageContainer>
    )
}

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: start center;
  padding: 2rem;
  min-height: 500px;
  gap: 1rem;
`

const VideoCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
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

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
`

const Iframe = styled.iframe`
  width:100%;
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

