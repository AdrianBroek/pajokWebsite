import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageInfo from '../PageInfo'
import styled from 'styled-components'
import {motion} from 'framer-motion'

// import styles
import {
    PageContainer,
    PageLayout,
    Description,
    Line
} from '../style/styles'
// import animation
import {
    HideParent,
    showImg
} from '../animation'


const Photos = () => {
    const location = useLocation()
    const url = location.pathname

    // state
    const [photos, setPhotos] = useState(PageInfo)
    const [img, setImg] = useState(null)

    useEffect(()=>{
        const currentPhoto = photos.filter((statePhoto) => statePhoto.url === url)
        setImg(currentPhoto[0])
    }, [url, photos])

    return (
        <>
       {img && (
        <PageContainer>
        <PageLayout 
        variants={HideParent}
        initial="hidden"
        animate="show"
        exit="exit"
        >
            <h1>{img.title}</h1>
            <Line />
            <Desc>
            <h3>{img.description}</h3>
            </Desc>

            <ImgCont>
                {img.imgs.map((item, index) => (
                    <Picture>
                        <Image 
                        variants={showImg}
                        initial="hidden"
                        animate='show'
                        src={item.img} />
                    </Picture>
                ))}
            </ImgCont>


        </PageLayout>
        </PageContainer>
        )}
        </>
    )
}

const ImgCont = styled(motion.div)`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 45% 45%;
    flex-direction: column;
    row-gap: 5rem;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    @media screen and (max-width: 767.99px) {
        grid-template-columns: 100%;
    }
    @media screen and (max-width: 501.99px) {
        padding: .5rem;
    }
`

const Picture = styled(motion.div)`
    height: 85%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled(motion.img)`
    max-height: 100%;
    min-height: 100%;
    width: 90%;
    object-fit: cover;
    border-radius: .5rem;
    box-shadow: 0 10px 10px -5px;
`

const Desc = styled(Description)`
    max-width: 90%;
`

export default Photos