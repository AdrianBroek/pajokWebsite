import React, {useState} from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LoadingSkeleton } from "../animation";

const Video = ({video}) => {

    const [loaded, setLoaded] = useState(false)


    return (
        <Content>
        {!loaded ? 
        <Loader
            // variants={LoadingSkeleton}
            // animate='loading'
            // initial='hidden'
        >
            <p className="title"></p>
            <p className="author"></p>
            <p className="video"></p>
            <p className="duration"></p>
        </Loader>:""}
        <div className="container">
            <iframe
                src={video}
                loading="lazy"
                title="vimeo-player" 
                width="100%"
                allowFullScreen
                onLoad={()=>setLoaded(true)}
            >
            </iframe>
        </div>
        
        </Content>
    )
}

const Loader = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    max-height: 750px;
    background: #ffffff;
    padding: 0.5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .title,.author,.duration,.video {
        position: absolute;
        background-color: #f5f5f5;
        border-radius: .25rem;
    }
    .title {
        top: 2%;
        width: 80%;
        height: 20px;
        border-radius: .25rem;
    }
    .author {
        top: 10%;
        width: 20%;
        height: 20px;
        
    }
    .video {
        top: 30%;
        width: 97%;
        height: 200px;
        
    }
    .duration {
        top: 90%;
        width: 97%;
        height: 20px;
    }
`

const Content = styled.div`
    position: relative;
    margin: .5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        border: none;
        height: 100%;
        padding-top: 56.25%;
        iframe {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            right: 0;
            width: 80%;
            height: 100%;
            border: 0;
        }
    }
`

export default Video

