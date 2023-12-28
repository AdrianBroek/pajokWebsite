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

import TextShadow from "../TextShadow";

// import user context
import UserContext from '../fetchData/data'

const Photos = () => {
    const { photoObjectData, 
        singleObject, 
        setSingleObject, 
        open, 
        setOpen, 
        setCopiedObject } = useContext(UserContext)
    // location
    const {pathname} = useLocation()

    // state
    const [copy, setCopy] = useState(photoObjectData)
    const [grid, setGrid] = useState({
        grid: '33% 33% 33%',
        text: 'triple-view',
    })

    // setting the active category of photos
    useEffect(() => {
        setCopy(photoObjectData)

        if(copy){
            let subWord = pathname.split('/')[2]
            const singleData = copy.filter((e) => {
                return e.title.toLowerCase().includes(subWord)
            })
            setSingleObject(singleData[0])
        }
    }, [photoObjectData,copy])
    

    // local storage for grid options
    useEffect(() => {
        // download localstorage data while loading
        const gls = JSON.parse(localStorage.getItem('grid-options'));
        // console.log(gls.grid)
        if(gls!=undefined){
            if (gls[0]) {
                setGrid(gls[0]);
            }
        }
        
    }, [])

    useEffect(() => {
        if(singleObject){
            setCopiedObject(singleObject.photoModule)
        }
        // console.log(singleObject)
    }, [singleObject])

    return (
        <motion.div className="test">
        {singleObject && (
            <PageContainer>
                <PageLayout 
                    // variants={HideParent}
                    // initial="hidden"
                    // animate="show"
                    // exit="exit"
                >
                    <TextShadow text={singleObject.title}/>
                    <Line />
                    <Desc>
                    <h3>{singleObject.description}</h3>
                    </Desc>
                    <Segregate grid={grid} setGrid={setGrid}/>

                    <ImgCont style={{gridTemplateColumns: grid.grid}}>
                        {singleObject.photoModule.map((item, index) => (
                            <PhotoGrid
                                photos={singleObject}
                                open={open}
                                setOpen={setOpen}
                                item={item}
                                index={index}
                                key={item.id}
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
    grid-template-columns: 33% 33% 33%;
    @media screen and (max-width: 501px) {
        grid-template-columns: 50% 50%;
    }
    @media screen and (max-width: 501.99px) {
        padding: .5rem;
    }
    
`

const Desc = styled(Description)`
    max-width: 90%;
`

export default Photos