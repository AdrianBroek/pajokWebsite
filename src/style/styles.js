import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PageContainer = styled(motion.article)`
    height: 100%;
    min-height: 80vh;
    width: 100%;
    position: relative;
    margin-top: 5rem;
    margin-bottom: 5rem;
`

export const PageLayout = styled(motion.section)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;
    .overlay.open{
        background: rgba(0,0,0,0.95) !important;
    }
`

export const LinkBtn = styled(motion.div)`
    width: fit-content;
    text-align: center;
    padding: 1rem;
    min-width: 160px;
    border-radius: .5rem;
    cursor: pointer;
    color: #fff;
    background: #1A1919;
    img {
        filter: invert(98%) sepia(28%) saturate(3%) hue-rotate(95deg) brightness(120%) contrast(100%);
    }
`

export const Description = styled.div`
    text-align: center;
    max-width: 70%;
`

export const BackgroundImg = styled.img`
    width: 100%;
    filter: grayscale(.5);
    max-height: 35vh;
    object-fit: cover;
`

export const Logo = styled.img`
    width: 100%;
    filter: grayscale(.5);
    object-fit: cover;
    max-width: 100px;
    border-radius: .25rem;
`

export const Icon = styled(motion.img)`
    width: 100%;
    object-fit: cover;
    max-width: 25px;
`


export const PajokThemeTxt = styled.h1`
    font-family: 'Yellowtail', cursive;
`

export const Line = styled.div`
    height: .5px;
    width: 90%;
    background: #f5f5f5;
    margin-bottom: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 7px;
`
export const Hide = styled(motion.div)`
    overflow: hidden;
`
export const ImageContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    h3 {
        color: #fff;
    }
`