import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PlayIcon from '../images/icons/play-button-2.png'
import x from "../images/icons/x.png"

import { motion } from "framer-motion";
// import './styles.css';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';
import { Icon } from "../style/styles";

export default function Slider(props) {
  
  // console.log(props)
  const [activeFrame, setActiveFrame] = useState('')
  useEffect(()=> {
    if(props.props != undefined) {
      setVideoData(state => ({
        data: [props.props.videoAssets],
        loaded: true
      }))
      // console.log(videoData)
    }
  }, [props])

  const [videoData, setVideoData] = useState({
    data: [],
    loaded: false
  })

  function showFrame(url){
    // console.log(url)
    setActiveFrame(url)
  }
  
  return (
    <>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {videoData.loaded && videoData.data[0].map((video,index) => (
        <SwiperSlide key={index} style={{height: '400px', paddingBottom: '2rem'}}>
          <VideoContainer className="noselect">
            <VideoCover style={{zIndex: 1}}>
              <img src={video.videoCover.url} alt="video-cover"/>
              <motion.button whileHover={{
                scale: 0.9,
            }} onClick={()=>showFrame(video.embedVimeoLink)}>
                <Icon className="filter-white" src={PlayIcon} alt="play icon for showing a video"/>
              </motion.button>
            </VideoCover>
          </VideoContainer>
        </SwiperSlide>
        
      ))}
      </Swiper>
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

      </>
  );
}

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

const VideoCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  img {
    max-width: 100%;
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
`