import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {showImg} from '../animation'
// router
import PhotoOpen from "./PhotoOpen";


const PhotoGrid = ({open, setOpen, item, index, photos}) => {

    function photoClickHandler(e, index) {
        setOpen(!open)
        // e.target.classList.toggle('openPhoto')
        console.log(photos.imgs[index])
        if (e.target.classList.contains('openPhoto')){
            document.body.style.overflowY = 'hidden'
        }else {
            document.body.style.overflowY = 'unset'
        }
    }

    useEffect(()=>{
        console.log(item)
    }, [open])

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