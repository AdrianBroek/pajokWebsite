import React, {useState, useEffect, useRef, useContext} from "react";
// anim,style
import styled from 'styled-components'
import {motion} from 'framer-motion'
// router
import { Routes, Route, Link, useNavigate, useLocation, Outlet  } from "react-router-dom"
// segregate
import Segregate from "../SegregatePhotos";
// overlay
import Overlay from '../Overlay'
// components
import PhotoGrid from '../PhotoGrid'
// import styles
import {
    PageContainer,
    PageLayout,
    Description,
    Line
} from '../../style/styles'
// import animation
import {
    HideParent,
    showImg
} from '../../animation'

// import user context
import UserContext from '../fetchData/data'

const CityPhoto = () => {
    const { photoData, open, setOpen, copiedObject, setCopiedObject } = useContext(UserContext)
    const [singleObject, setSingleObject] = useState(photoData.city)
    // state
    const [grid, setGrid] = useState()

    // location
    const {pathname} = useLocation()

    useEffect(() => {
        setSingleObject(photoData.city)
       
    }, [pathname, photoData])

    useEffect(() => {
        singleObject ? setCopiedObject(singleObject.photoModule) : console.log('nie')
        // copiedObject ? console.log(copiedObject) : console.log('nie2')
    }, [singleObject])


    return (
        <motion.div >
        {singleObject && (
                <PageContainer>
                <PageLayout 
                    // variants={HideParent}
                    // initial="hidden"
                    // animate="show"
                    // exit="exit"
                >
                    <h1>{singleObject.title}</h1>
                    <Line />
                    <Desc>
                    <h3>{singleObject.description}</h3>
                    </Desc>
                    <Segregate grid={grid} setGrid={setGrid}/>

                    <ImgCont layout style={{gridTemplateColumns: grid}}>
                        {singleObject.photoModule.map((item, index) => (
                            <PhotoGrid 
                                photos={singleObject}
                                open={open}
                                setOpen={setOpen}
                                item={item}
                                index={index}
                            />
                        ))}
                    </ImgCont>
                    <Overlay zindex='2' className='overlay' open={open} setOpen={setOpen} />
                </PageLayout>
                </PageContainer>
                
                )}
                <Outlet />
        </motion.div>
    )
}

const ImgCont = styled(motion.div)`
    width: 100%;
    max-width: 1400px;
    height: auto;
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    row-gap: 1rem;
    column-gap: 1rem;
    grid-template-columns: 30% 30% 30%;
    @media screen and (max-width: 501px) {
        grid-template-columns: 45% 45%;
    }
    @media screen and (max-width: 501.99px) {
        padding: .5rem;
    }
    
`

const Desc = styled(Description)`
    max-width: 90%;
`

export default CityPhoto