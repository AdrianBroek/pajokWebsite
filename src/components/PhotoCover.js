import React, {useState} from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {showCover} from '../animation'
const PhotoCover = ({item}) => {
    const [active, setActive] = useState(false)


    function clickHandler(e) {
        console.log(e)
    }

    return (
        <>

        <PhotoCoverStyle
            variants={showCover}        
            whileHover='show'
            initial='hidden'
            class="photoCover">
            <div className='container'>
                <p>Model: </p>
                
                {item.model.map((model)=>(
                    <p>{model}</p>
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
    .container {
        background-color: #fff;
        border-radius: .25rem;
        width: fit-content;
        max-width: 90%;
        p {
            &:first-child{
                font-weight: 600;
                font-size: .65rem;
            }
            font-size: 1rem;
            font-weight: 500;
            padding: 0 .5rem;
        }
    }
`

export default PhotoCover

