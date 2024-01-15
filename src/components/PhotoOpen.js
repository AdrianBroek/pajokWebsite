import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import { useLocation, useNavigate } from "react-router-dom";
import leftArrow from '../images/icons/up-arrow left.png'
import rightArrow from '../images/icons/up-arrow right.png'
// import user context
import UserContext from './fetchData/data'
import { AnimatePresence } from "framer-motion";
import x from "../images/icons/x.png"

const PhotoOpen = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation()
    let result = /[^/]*$/.exec(pathname)[0];

    const { singleObject, objectData, openDetail, setOpenDetail, setOpen, open, copiedObject, setCopiedObject } = useContext(UserContext)

    useEffect(()=>{
        setOpen(true)
    }, [openDetail])

    const changePhoto = (pagination) => {
        let activeId;
        const allphotos = singleObject.photoModule
        // check index of active photoOpen
        const checkActiveId = allphotos.findIndex((el)=> el.id == openDetail.id)

        // console.log(singleObject.url)

        if(pagination == 'left') {
            activeId = checkActiveId - 1
            if(activeId < 0){
                activeId = allphotos.length - 1
            }
            
        }else if(pagination == 'right') {
            activeId = checkActiveId + 1
            if(activeId > allphotos.length - 1){
                activeId = 0
            }
        }
        // set new photo as open detail
        const filteredIndex = allphotos[activeId]
        setOpenDetail(filteredIndex)
        // console.log(filteredIndex)
        const newURL = `${singleObject.url}/${filteredIndex.id}`;
        window.history.pushState({}, '', newURL);
    }

    function navigateBack() {
        const lastSlashIndex = pathname.lastIndexOf('/');
        const newUrl = pathname.substring(0, lastSlashIndex);
        navigate(newUrl)
    }


    useEffect(() => {
        result = /[^/]*$/.exec(pathname)[0];
    }, [pathname])

    useEffect(()=>{
        if(copiedObject) {
            const objectCopy = copiedObject.filter(
                (item) => item.id === result)
            setOpenDetail(objectCopy[0])
        }
        // console.log(openDetail)
    }, [copiedObject])

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
    };


    return (
        <>
        <AnimatePresence>
        {openDetail
          && (
            
            <Picture >
                <button onClick={() => navigateBack()} className="escape">
                    <img src={x} alt="escape photo button"/>
                </button>
                <div id="left" className="arrow left" onClick={ ()=>changePhoto('left')}>
                    <img src={leftArrow} />
                </div>
                <div id="right" className="arrow right" onClick={()=>changePhoto('right')}>
                    <img src={rightArrow} />
                </div>
                <div className="imgCont">
                    <motion.img 
                        key={openDetail.photo.url}
                        src={openDetail.photo.url}
                        // custom={direction}
                        initial={{  opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{  opacity: 0 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                
                            if (swipe < -swipeConfidenceThreshold) {
                                changePhoto('left');
                            } else if (swipe > swipeConfidenceThreshold) {
                                changePhoto('right');
                            }
                          }}
                    />
                </div>
                <div className="photoDescription">
                    <div className="container">
                        <div className="modelName" style={{padding: openDetail.model.length > 0 ? '1rem' : ''}}>
                            {openDetail.model.length > 0 && (
                                <h3>Model: </h3>
                            )}
                            <ul>
                                {openDetail.model.map((model, index) => (
                                    <li key={index}><h4>{model}</h4></li>
                                ))}
                            </ul>
                        </div>
                        <p className="desc">{openDetail.photoDescription}</p>
                    </div>
                </div>
            </Picture>
        )}
        </AnimatePresence>
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
    max-height: 100%;
    z-index: 99;
    display: flex;
    justify-content: center;
    color: #fff;
    .escape {
        background: transparent;
        border: none;
        padding: .5rem;
        filter: invert(100%) sepia(0%) saturate(24%) hue-rotate(114deg) brightness(108%) contrast(108%);
    }
    .escape,.arrow {
        position: absolute;
        cursor: pointer;
        width: 50;
        height: 50px;
        z-index: 1;
        top: 0;
        right: 0;
       
    }
    .arrow {
        top: 50%;
        transform: translateY(-50%);
        width: 80px;
        height: 80px;
        &.left {
            left: 5%;
        }
        &.right {
            right: 5%;
        }
    }
    .imgCont {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .photoDescription {
        padding: 2.5rem 1rem 1rem 1rem;
        max-width: 50%;
        position: absolute;
        bottom: 0;
        right: 0;
        width: fit-content;
        .container {
            background: #0000008c;
            /* width: 100%; */
            .modelName {
                h3 {
                    font-weight: 500;
                    font-size: 1rem;
                }
                ul li {
                    list-style: none;
                    
                    h4 {
                        font-size: 1rem;
                        font-weight: 400;
                        &:before {
                            content: '- '
                        } 
                    }
                }
            }
            .line {
                width: 90%;
                margin: auto;
                margin: .5rem auto;
                height: 0.15px;
                background: white;
            }
        }
    }
    img {
        max-width: 100%;
        max-height: 90%;
        object-fit: contain;
    }
    h3,p {
        color: #fff;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        /* overflow-y: auto;
        ::-webkit-scrollbar {
            width: 5px;
        } */
        .photoDescription {
            padding: 0;
            max-width: 100%;
            .container {
                max-height: 350px;
                overflow-y: auto;
                .desc {
                    padding: 1rem;
                    padding-top: 0;
                    font-style: italic;
                    font-weight: 100;
                    font-size: 1.15rem;
                }
                /* width */
                ::-webkit-scrollbar {
                width: 5px;
                }

                /* Track */
                ::-webkit-scrollbar-track {
                background: #f5f5f5;
                }

                /* Handle */
                ::-webkit-scrollbar-thumb {
                background: #555;
                }
            }
        }
    }
    @media screen and (max-width: 501px) {
        .photoDescription {
            .container {
                .desc {
                    font-size: .95rem;
                }
            }
        }
    }
`

export default PhotoOpen