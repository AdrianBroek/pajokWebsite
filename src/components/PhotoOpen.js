import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {showImg} from '../animation'
import { useLocation, useNavigate } from "react-router-dom";
// import user context
import UserContext from './fetchData/data'
// overlay
import Overlay from './Overlay'

const PhotoOpen = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation()
    let result = /[^/]*$/.exec(pathname)[0];
    // console.log(result)
    const { openDetail, setOpenDetail, setOpen, open, copiedObject, setCopiedObject } = useContext(UserContext)

    useEffect(()=>{
        setOpen(true)
    }, [openDetail])

    useEffect(()=>{
        result = /[^/]*$/.exec(pathname)[0];
    }, [pathname])

    useEffect(()=>{
        if(copiedObject) {
            const objectCopy = copiedObject.filter(
                (item) => item.id === result)
            setOpenDetail(objectCopy[0])
        }
        
    }, [copiedObject])

    return (
        <>
        {openDetail && (
            <Picture onClick={() => navigate(-1)}>
                <img src={openDetail.photo.url}/>
                <div className="photoDescription">
                    <div>Model: 
                        {openDetail.model.map((model) => (
                            <h3>{model}</h3>
                        ))}
                    </div>
                    <p>{openDetail.photoDescription}</p>
                </div>
            </Picture>
        )}
        </>
    )
}

const Picture = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
    max-height: 90%;
    z-index: 99;
    display: flex;
    justify-content: center;
    color: #fff;
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    h3,p {
        color: #fff;
    }
`

export default PhotoOpen