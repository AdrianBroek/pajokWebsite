import React, {useEffect, useState, useRef, useContext} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {HideParent, titleAnim, scrollReveal, ImgHover, Slide} from '../animation'

export default function Slider(props) {

  const constraintsRef = useRef(null);
  console.log(props.props)
  return (
      <Parent variants={Slide} initial="hidden" animate="show" exit="exit" ref={constraintsRef}>
        <SliderContainer drag="x" dragConstraints={constraintsRef}>
        {props.props.map((video)=>(
            <Children variants={Slide}>

                <Video>
                <iframe
                    className="noselect"
                    frameBorder="none"
                    src={video}
                    loading="lazy"
                    title="vimeo-player" 
                    height="100%"
                    // allowFullScreen
                >
                </iframe>
                </Video>

            </Children>
        ))} 
        </SliderContainer>
      </Parent>
  );
}

const SliderContainer = styled(motion.div)`
    @media screen and (min-width: 1024px){
        width: fit-content;
        height: 100%;
        display: flex;
        justify-content: space-around;
        cursor: 'grab';
    }

`

const Parent = styled(motion.div)`
    width: 100%;
    background: transparent;
    overflow: hidden;
    height: 500px;
`
const Children = styled(motion.h2)`
    width: 600px;
    height: 100%;
    background: #f5f5f5;
    padding: 2rem;
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
`

const Video = styled.div`
  height: 80%;
  width: 100%;
  position: relative;
  background-color: red;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
  }
`