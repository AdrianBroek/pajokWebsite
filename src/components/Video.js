import React, {useState} from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LoadingSkeleton } from "../animation";

const Video = ({video}) => {

    const [loaded, setLoaded] = useState(false)


    return (
        <Content>
        
        <div className="container">
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
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    height: 100%;
    max-height: 750px;
    background: #ffffff;
    padding: 1rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    .title,.author,.duration,.video {
        /* position: absolute; */
        background-color: #f5f5f5;
        border-radius: .25rem;
    }
    .title {
        width: 80%;
        height: 10%;
        border-radius: .25rem;
    }
    .author {
        width: 20%;
        height: 10%;
        
    }
    .video {
        width: 97%;
        height: 50%;
        
    }
    .duration {
        width: 97%;
        height: 10%;
    }
`

const Content = styled.div`
    position: relative;
    margin: .5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        position: relative;
        border: none;
        height: 100%;
        padding-top: 40%;
        width: 100%;
        iframe {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
`

export default Video

