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
    const { objectData, singleObject, setSingleObject, photoData, open, setOpen, copiedObject, setCopiedObject } = useContext(UserContext)
    // location
    const {pathname} = useLocation()
    
    const [copy, setCopy] = useState(objectData)

    useEffect(() => {
        setCopy(objectData)

        if(copy){
            let subWord = pathname.split('/')[2]
            const singleData = copy.filter((e) => {
                return e.title.toLowerCase().includes(subWord)
            })
            setSingleObject(singleData[0])
        }
    }, [objectData,copy])
    
    // state
    const [grid, setGrid] = useState()

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

                    <ImgCont style={{gridTemplateColumns: grid}}>
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

export default Photos