import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {showImg} from '../animation'
import PhotoOpen from "./PhotoOpen";
import { useNavigate, useLocation } from "react-router-dom";
// import user context
import UserContext from './fetchData/data'
import { LazyLoadImage } from "react-lazy-load-image-component";
import PhotoCover from './PhotoCover'
import * as palette from '../components/style-variables'

const PhotoGrid = ({open, setOpen, item, index, photos}) => {

    const {pathname} = useLocation()
    const navigate = useNavigate()
    const { openDetail, setOpenDetail } = useContext(UserContext)
    
    function photoClickHandler(e, index) {
        setOpenDetail(item)
        navigate(`${pathname}/${item.id}`)
        // console.log(openDetail)
    }

    open ? document.body.style.overflowY='hidden' : document.body.style.overflowY='unset'
    
    return (
        <Picture onClick={(e) => photoClickHandler(e, index)}>
            <div className="imgContainer">
                <LazyLoadImage
                    key={item.id}
                    src={item.photo.url}
                />
                <PhotoCover
                    item={item} 
                />

            </div>
        </Picture>
    )
}

const Picture = styled(motion.div)`
    height: 100%;
    min-height: 550px;
    max-height: 700px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    .imgContainer {
        height: 100%;
        width: 100%;
        overflow: hidden;
        background-color: #9e9e9e00;
        box-shadow: ${palette.SHADOW1};
    }
    img {
        transition: all .3s ease;
        max-height: 100%;
        min-height: 100%;
        width: 100%;
        object-fit: cover;

        &.openPhoto {
            position: absolute;
            object-fit: contain;
            width: 90vw;
            box-shadow: none;
        }
    }
    @media screen and (max-width: 768px){
        min-height: 350px;
    }
`

export default PhotoGrid