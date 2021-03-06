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
        {/* <LinkCont>
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
        
        </LinkCont> */}
        <div style={{padding:'35% 0 0 0',position: 'relative',width:'60%',height:'auto'}}>

        <iframe 
        style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%'
        }}
        src="https://player.vimeo.com/video/729598207?h=dc9c020d1b" 
        frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen>
        </iframe>
        </div>
        <p>
        <a href="https://vimeo.com/729598207">Anhelika Video</a> from 
        <a href="https://vimeo.com/user115069247"> Pajok </a>
         on <a href="https://vimeo.com">Vimeo</a>.
        </p>

        {/* <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe src="https://player.vimeo.com/video/729598207?h=dc9c020d1b" 
        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
        </iframe>
        </div>
        <p><a href="https://vimeo.com/729598207">Anhelika Video</a> from <a href="https://vimeo.com/user115069247">Pajok</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        <p></p> */}
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