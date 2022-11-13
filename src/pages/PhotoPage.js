import React, {useEffect, useState, useRef, useContext} from 'react'
// defined styles
import {PageLayout,PageContainer, Hide, Line} from '../style/styles'
// routes
import {Link} from 'react-router-dom'
import {HideParent, titleAnim, scrollReveal, ImgHover} from '../animation'
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
// scroll
import { useScroll } from '../components/useScroll'
import { v4 as uuidv4 } from 'uuid';
import UserContext from '../components/fetchData/data'
import TextShadow from '../components/TextShadow'

const PhotoPage = () => {
    const { objectData } = useContext(UserContext)
    // console.log(objectData)

    const [element1, controls1] = useScroll()
    const [element2, controls2] = useScroll()
    const [element3, controls3] = useScroll()

    return(
        <>
        {objectData && (
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
                        {objectData.map((item)=>(
                        <LinkContainer key={uuidv4()}
                        >        
                            <ImgSlider src={item.backgroundPhoto.url} />
                            <Link 
                            style={{
                                zIndex: 1,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center'
                            }} 
                            to={item.url}>
                                <CatTitle 
                                variants={titleAnim}
                                whileHover='show'
                                >
                                    {item.title}
                                </CatTitle>
                            </Link>
                        </LinkContainer>
    
                        ))}
                    </LinkCont>
            </PageLayoutPhotos>
        </PageContainerPhotos>
        )}
        </> 
    )
}

const PageContainerPhotos = styled(PageContainer)`
    width: 100%;
    max-width: 1640px;
    margin-left: auto;
    margin-right: auto;
`

const PageLayoutPhotos = styled(PageLayout)`
    margin: 2rem 0;
    .overlay.open {
        background: rgba(0,0,0,0.95);
    }
`

const LinkCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const Title = styled.div`
    margin-top: 5rem;
    
    @media screen and (max-width: 768px){
        margin-top: 1rem;
    }
`

const LinePhoto = styled(Line)`
    width: 100%;
`

const CatTitle = styled(motion.h3)`
    margin-left: 5rem;
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
    height: 40vw;
    max-height: 600px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    h3 {
        color: #fff;
        font-size: 4rem;
        border-bottom: 1px solid white;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
        @media screen and (max-width: 1024px){
            font-size: 6vw;
            margin-left: 3vw;
            font-weight: lighter;
            font-family: 'Raleway', sans-serif;
        }
    }
`

export default PhotoPage