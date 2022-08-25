import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {showImg} from '../animation'
import PhotoOpen from "./PhotoOpen";
import { useNavigate, useLocation } from "react-router-dom";
// import user context
import UserContext from './fetchData/data'


const PhotoGrid = ({open, setOpen, item, index, photos}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const { openDetail, setOpenDetail } = useContext(UserContext)
    
    function photoClickHandler(e, index) {
        setOpenDetail(item)
        navigate(`${pathname}/${item.id}`)
        console.log(openDetail)
    }

    return (
        <Picture>
            <img 
                key={item.id}
                // variants={showImg}
                // initial="hidden"
                // animate='show'
                src={item.photo.url} 
                onClick={(e) => photoClickHandler(e, index)}
            />
        </Picture>
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

export default PhotoGrid