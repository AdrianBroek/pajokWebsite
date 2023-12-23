import React, {useEffect, useState, useRef, useContext} from 'react'
// defined styles
import {PageLayout,PageContainer, Hide, Line} from '../style/styles'
// routes
import {Link} from 'react-router-dom'
import {HideParent, titleAnim, scrollReveal, ImgHover, Slide} from '../animation'
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
// scroll
import { useScroll } from '../components/useScroll'
import { v4 as uuidv4 } from 'uuid';
import UserContext from '../components/fetchData/data'
import TextShadow from '../components/TextShadow'

const PhotoPage = () => {
    const { photoObjectData } = useContext(UserContext)
    // console.log(photoObjectData)

    const [element1, controls1] = useScroll()
    const [element2, controls2] = useScroll()
    const [element3, controls3] = useScroll()

    const constraintsRef = useRef(null);
    return(
        <>
        {photoObjectData && (
            <PageContainerPhotos>
            <PageLayoutPhotos 
                variants={HideParent}
                animate='show'
                initial='hidden'
                exit='exit'
            >
                <Title>
                    <TextShadow text='Fotografia'/>
                    <LinePhoto />
                </Title>
                    <LinkCont>
                    <Parent variants={Slide} initial="hidden" animate="show" exit="exit" ref={constraintsRef}>
                        <SliderContainer drag="x" dragConstraints={constraintsRef}>
                        {photoObjectData.map((item)=>(
                            <Children variants={Slide}>
                                <LinkContainer key={uuidv4()}>        
                                    <ImgSlider src={item.backgroundPhoto.url} />
                                    <div 
                                    
                                    style={{
                                        userSelect: 'none',
                                        '-webkit-user-drag': 'none',
                                        zIndex: 1,
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }} 
                                    >
                                        <CatTitle 
                                        variants={titleAnim}
                                        whileHover='show'
                                        >
                                            <div>
                                            <Link
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                display: 'block',
                                            }} 
                                            to={item.url}>
                                                <h3>{item.title}</h3>
                                            </Link>
                                            </div>
                                            
                                        </CatTitle>
                                    </div>
                                </LinkContainer>
                            </Children>
                        ))}
                        </SliderContainer>
                        </Parent>
                    </LinkCont>
            </PageLayoutPhotos>
        </PageContainerPhotos>
        )}
        </> 
    )
}

const PageContainerPhotos = styled(PageContainer)`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2.5rem;
    padding-bottom: 0;
`

const PageLayoutPhotos = styled(PageLayout)`
    /* margin: 2rem 0; */
    .overlay.open {
        background: rgba(0,0,0,0.95);
    }
`

const Parent = styled(motion.div)`
    width: 100%;
    @media screen and (min-width: 1024px){
        background: transparent;
        overflow: hidden;
    }
`
const Children = styled(motion.h2)`
@media screen and (min-width: 1024px){
    width: 400px;
    height: 90%;
    background: #f5f5f5;
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

`
const SliderContainer = styled(motion.div)`
    @media screen and (min-width: 1024px){
        width: fit-content;
        height: 100%;
        display: flex;
        justify-content: space-around;
        cursor: 'grab';
    }

`

const LinkCont = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 100%;
    @media screen and (max-width: 1024px){
        width: 100%;
        flex-direction: column;
    }
`
const Title = styled.div`
    margin-top: 5rem;
    
    @media screen and (max-width: 1024px){
        margin-top: 1rem;
    }
`

const LinePhoto = styled(Line)`
    width: 100%;
`

const CatTitle = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    h3 {
        border-bottom: 1px solid #fff;
        margin: auto;
    }
    @media screen and (max-width: 1024px){
        height: 100%;
        margin: 0;
    }
    div {
        width: 100%;
        height: 100%;
    }
`

const ImgSlider = styled(motion.img)`
    width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    object-position: center;
    top: 0;
    left: 0;
    display: block;
    transition: .15s ease-in;
`

const LinkContainer = styled(Hide)`
    width: 100%;
    height: 50vw;
    display: flex;
    justify-content: center;
    position: relative;
    @media screen and (min-width: 1024px){
        align-items: flex-end;
    }
    @media screen and (max-width: 1024px){
        height: 100vw;

    }
    h3 {
        width: fit-content;
        color: #000;
        font-size: 1.35rem;
        text-shadow: 1px 5px 6px rgba(0,0,0,0.15);
        background-color: #f5f5f5;
        padding: 1rem;
        @media screen and (max-width: 1024px){
            font-size: 3vw;
            margin: 0;
            
            color: #000;
            
            font-weight: 300;
            font-family: 'Raleway', sans-serif;
        }
    }
`

export default PhotoPage