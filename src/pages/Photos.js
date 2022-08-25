import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import PhotoGrid from '../components/PhotoGrid'
import PhotoOpen from "../components/PhotoOpen";
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { GraphQLClient, gql } from "graphql-request";
import axios from "axios";
import { useQuery } from "react-query";
// segregate
import Segregate from "../components/SegregatePhotos";
// overlay
import Overlay from '../components/Overlay'

import { Routes, Route, Link, useNavigate  } from "react-router-dom"

// import user context
import UserContext from '../components/fetchData/data'

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


const Photos = ({current, setCurrent}) => {

    // location
    const location = useLocation()
    const url = location.pathname

    // state
    const [singleObject, setSingleObject] = useState(null)
    const [grid, setGrid] = useState('30% 30% 30%')
    const [open, setOpen] = useState(false)


    return (
        <>
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
            <Segregate open={open} setOpen={setOpen} gird={grid} setGrid={setGrid}/>
            <Overlay open={open} setOpen={setOpen} />
            <ImgCont style={{gridTemplateColumns: grid}}>
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
    flex-direction: column;
    row-gap: 5rem;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    @media screen and (max-width: 767.99px) {
        row-gap: unset;
    }
    @media screen and (max-width: 501.99px) {
        padding: .5rem;
    }
    
`

const Desc = styled(Description)`
    max-width: 90%;
`

export default Photos