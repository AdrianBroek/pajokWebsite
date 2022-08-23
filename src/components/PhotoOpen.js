import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {showImg} from '../animation'
import { useLocation } from "react-router-dom";

const PhotoOpen = () => {
    const location = useLocation()
    const url = location.pathname

    console.log('jestem')
    return (
        // <Picture>
        //     <img />
        // </Picture>
        <>
                <div className="siema">
                    <h2>SiEmA</h2>
                </div>
        </>
    )
}

const Picture = styled(motion.div)`
    height: 85%;
    min-height: 40vw;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        transition: all .3s ease;
        max-height: 100%;
        min-height: 100%;
        width: 90%;
        object-fit: cover;
        border-radius: .5rem;
        box-shadow: 0 10px 10px -5px;
        &.openPhoto {
            position: absolute;
            object-fit: contain;
            width: 90vw;
            box-shadow: none;
        }
    }
`

export default PhotoOpen