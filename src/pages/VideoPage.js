import React from 'react'
// defined styles
import {PageLayout,PageContainer} from '../style/styles'
// routes
import {Link} from 'react-router-dom'
import {HideParent, titleAnim} from '../animation'
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'


const VideoPage = () => {

    return(
        <PageContainer>
        <PageLayout 
        variants={HideParent}
        animate='show'
        initial='hidden'
        >

        <h1>Wideo</h1>
        <LinkCont>
        <Hide>
            <Link to="/klipy">
                <motion.h3 variants={titleAnim}>Klipy</motion.h3>
            </Link>
        </Hide>

        <Hide>
        <Link to="/wesela">
            <motion.h3 variants={titleAnim}>Wesela</motion.h3>
        </Link>
        </Hide>

        </LinkCont>

        </PageLayout>
        </PageContainer>
    )
}

const Hide = styled(motion.div)`
    overflow: hidden;
`

const LinkCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;
    flex-direction: column;
`


export default VideoPage