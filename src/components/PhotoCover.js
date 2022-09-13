import React, {useState} from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {showCover} from '../animation'
const PhotoCover = ({item}) => {

    return (
        <>

        <PhotoCoverStyle
            variants={showCover}        
            whileHover='show'
            initial='hidden'
            class="photoCover">
            <div className='container'>
               <div>
                <svg 
                width="35px" 
                height="35px" 
                viewBox="0 0 49 49" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M24.5 23.98C28.354 23.98 31.5 20.832 31.5 16.9133C31.5 
                12.9946 28.354 9.84668 24.5 9.84668C20.646 9.84668 
                17.5 12.9946 17.5 16.9133C17.5 20.832 20.646 23.98 24.5 
                23.98ZM33.5 16.9133C33.5 21.9227 29.4725 25.98 24.5 
                25.98C19.5275 25.98 15.5 21.9227 15.5 16.9133C15.5 
                11.904 19.5275 7.84668 24.5 7.84668C29.4725 7.84668 
                33.5 11.904 33.5 16.9133Z" 
                fill="#fff"/>
                <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M18.6254 29.7991C18.3971 29.3313 17.8814 29.0785 
                17.3786 29.2021C11.9745 30.5301 6.5 33.238 6.5 
                37.3116V39.845C6.5 40.9495 7.39543 41.845 8.5 
                41.845H40.5C41.6046 41.845 42.5 40.9495 42.5 
                39.845V37.3116C42.5 33.238 37.0255 30.5301 31.6214 
                29.2021C31.1186 29.0785 30.6029 29.3313 30.3746 
                29.7991L26.3105 32.7991C25.4218 32.7993 24.9693 
                32.7993 24.5248 32.7993C24.0637 32.7992 23.6112 
                32.7992 22.6893 32.7994L18.6254 29.7991ZM31.7205 
                31.2915L26.9689 34.799L26.3109 34.7991C25.4163 34.7993 
                24.9661 34.7993 24.524 34.7993C24.0658 34.7992 23.6163 
                34.7992 22.6898 34.7994L22.0312 34.7996L17.2795 
                31.2915C14.9077 31.9204 12.6639 32.8054 11.0162 
                33.8953C9.19262 35.1016 8.5 36.2704 8.5 
                37.3116V39.845H40.5V37.3116C40.5 36.2704 
                39.8074 35.1016 37.9838 33.8953C36.3361 32.8054 
                34.0924 31.9204 31.7205 31.2915Z" 
                fill="#fff"/>
                </svg>
                
                <p className="modelName">Model: </p>
                </div>
                {item.model.map((model)=>(
                    <p>- {model}</p>
                ))}
            </div>

        </PhotoCoverStyle>
        </>
    )   
}

const PhotoCoverStyle = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(transparent 10%, #181818);
    .container {
        width: 100%;
        max-width: 90%;
        margin-bottom: 10%;
        div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: .5rem;
        }
        svg {
        }
        p {
            color: #fff;
            font-size: 1rem;
            font-weight: 500;
            padding: 0 .5rem;
        }
        .modelName{
            font-weight: 600;
            font-size: .65rem;
            padding: 0;
        }
    }
`

export default PhotoCover
