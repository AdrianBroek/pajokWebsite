import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PageContainer = styled.article`
    height: 100%;
    width: 100%;
    position: relative;
    margin-top: 5rem;
`

export const PageLayout = styled(motion.section)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;
`

export const LinkBtn = styled(motion.div)`
    border: 1.5px solid #000;
    width: fit-content;
    text-align: center;
    padding: 1rem;
    min-width: 160px;
    border-radius: .5rem;
    cursor: pointer;
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

export const Icon = styled.img`
    width: 100%;
    object-fit: cover;
    max-width: 25px;
`

export const PajokThemeTxt = styled.h1`
    font-family: 'Yellowtail', cursive;
`

export const Line = styled.div`
    height: .5px;
    width: 7.5%;
    background: #000;
    margin-bottom: 1rem;
`
export const Hide = styled(motion.div)`
    overflow: hidden;
`
export const ImageContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    column-gap: 2.5rem;
`