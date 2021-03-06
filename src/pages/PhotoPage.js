import React, {useRef} from 'react'
// defined styles
import {PageLayout,PageContainer, Hide, Line} from '../style/styles'
// routes
import {Link} from 'react-router-dom'
import {HideParent, titleAnim, scrollReveal} from '../animation'
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
// koleczka
import CirclePhoto from '../components/CirclePhoto'
// imgForSliders
import fashionPhoto from '../images/photoPageImgs/webp/fashion3.webp'
import portraitPhoto from '../images/photoPageImgs/webp/portrait3.webp'
import cityPhoto from '../images/photoPageImgs/webp/city4.webp'
import weddingPhoto from '../images/photoPageImgs/webp/wedding2.webp'
// scroll
import { useScroll } from '../components/useScroll'

const PhotoPage = () => {
    const [element1, controls1] = useScroll()
    const [element2, controls2] = useScroll()
    const [element3, controls3] = useScroll()

    return(
        <PageContainerPhotos>
    
    <PageLayoutPhotos 
        variants={HideParent}
        animate='show'
        initial='hidden'
        exit='exit'
    >
        <Title>
            <h1 
            style={{marginTop: '5rem'}}
            >Fotografia
            </h1>
            <LinePhoto />
        </Title>

        <LinkCont>

        <LinkContainer>
            <ImgSlider src={portraitPhoto} />
            <Link
             style={{
                zIndex: 1,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center'
             }} 
             to="/photo/portrety">
                <CatTitle 
                variants={titleAnim}
                >
                    Portrety
                </CatTitle>
            </Link>
        </LinkContainer>

        <LinkContainer
        variants={scrollReveal}
        animate={controls1}
        initial="hidden"
        ref={element1}>
        <ImgSlider src={fashionPhoto}/>
        <Link 
        style={{
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
         }} 
         to="/photo/fashion">
            <CatTitle 
            variants={titleAnim}
            >Fashion</CatTitle>
        </Link>
        </LinkContainer>

        <LinkContainer
        variants={scrollReveal}
        animate={controls2}
        initial="hidden"
        ref={element2}>
        <ImgSlider 
        src={cityPhoto}
        />
        <Link 
        style={{
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
         }} 
        to="/photo/miasto">
            <CatTitle 
            variants={titleAnim}
            >Miasto</CatTitle>
        </Link>
        </LinkContainer>

        <LinkContainer
        variants={scrollReveal}
        animate={controls3}
        initial="hidden"
        ref={element3}>
        <ImgSlider src={weddingPhoto}/>
        <Link
        style={{
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
         }} 
        to="/photos/slubne">
            <CatTitle
            variants={titleAnim}
            >??lubne</CatTitle>
        </Link>
        </LinkContainer>
        </LinkCont>

        </PageLayoutPhotos>
        {/* <CirclePhoto /> */}
        </PageContainerPhotos>
    )
}

const PageContainerPhotos = styled(PageContainer)`
    width: 80%;
    margin: auto;
`

const PageLayoutPhotos = styled(PageLayout)`
    margin: 2rem 0;
`

const LinkCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 5rem;
    flex-direction: column;
    width: 100%;

`
const Title = styled.div`
`

const LinePhoto = styled(Line)`
    width: 100%;
`

const CatTitle = styled(motion.h3)`
    margin-left: 5rem;
    padding: 2rem;
    background: #000;
`

const ImgSlider = styled.img`
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    position: absolute;
    object-position: center;
    top: 0;
    left: 0;
    border-radius: .5rem;
    box-shadow: 0 10px 10px -5px;
`

const LinkContainer = styled(Hide)`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    box-shadow: 0 10px 10px -5px;
    h3 {
        color: #fff;
        font-size: 4rem;
    }
`

export default PhotoPage