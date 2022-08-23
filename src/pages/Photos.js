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
    //graph
    const endpoint  = 'https://api-eu-central-1.hygraph.com/v2/cl6rxv2tg0ogt01ujc798fpc0/master'
    const QUERY = gql`
    {
        photos {
            title
            url
            description
            photoModule {
                id
                model
                photo {
                  url
                  createdAt
                }
                photoDescription
            }
          }
      }
    `;

    // location
    const location = useLocation()
    const url = location.pathname

    // state
    const [objectData, setObjectData] = useState([])
    const [singleObject, setSingleObject] = useState(null)
    const [grid, setGrid] = useState('30% 30% 30%')
    const [open, setOpen] = useState(false)

    // graph api
    const { data, isLoading, error } = useQuery("launches", () => {
        return axios({
          url: endpoint,
          method: "POST",
          data: {
            query: QUERY
          }
        }).then(res => setObjectData(res.data.data.photos));
    });

    // filter photo category
    useEffect(() => {
        // const currentPhoto = objectData.filter((statePhoto) => statePhoto.url === url)
        // setSingleObject(currentPhoto[0])
        if(url == '/photo/portrety' || url == '/photo/portrety/likes'){
            setSingleObject(objectData[1])
        }else if (url == '/photo/miasto' || url == '/photo/miasto/likes'){
            setSingleObject(objectData[0])
        }else if (url == '/photo/fashion' || url == '/photo/fashion/likes'){
            setSingleObject(objectData[2])
        }else if (url == '/photo/slubne' || url == '/photo/slubne/likes'){
            setSingleObject(objectData[3])
        }
    }, [objectData, url])

    const navigate = useNavigate()
    const handleClick = () => navigate(`${url}/likes`)

    return (
        <>
       {/* {singleObject && (
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
            <Segregate gird={grid} setGrid={setGrid}/>
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
        
        )} */}
        <h1>siemanko</h1>
        <Routes>
            <Route path="likes" element={ <PhotoOpen />}></Route>
        </Routes>  

        <Link to="likes">
            <div>Siema</div>
        </Link>

        <div onClick={() => handleClick()}>KLKIK</div>

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