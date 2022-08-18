import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageInfo from '../PageInfo'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { GraphQLClient, gql } from "graphql-request";
import axios from "axios";
import { useQuery } from "react-query";
// segregate
import Segregate from "../components/SegregatePhotos";

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
    //graph
    const endpoint  = 'https://api-eu-central-1.hygraph.com/v2/cl6rxv2tg0ogt01ujc798fpc0/master'
    const QUERY = gql`
    {
        photos {
            title
            url
            description
            imgs {
              url
              id
              createdAt
            }
          }
      }
    `;

    // location
    const location = useLocation()
    const url = location.pathname

    // state
    const [photos, setPhotos] = useState([])
    const [img, setImg] = useState(null)
    const [grid, setGrid] = useState('30% 30% 30%')

    // graph api
    const { data, isLoading, error } = useQuery("launches", () => {
        return axios({
          url: endpoint,
          method: "POST",
          data: {
            query: QUERY
          }
        }).then(res => setPhotos(res.data.data.photos));
      });

    // filter photo category
    useEffect(()=>{
        const currentPhoto = photos.filter((statePhoto) => statePhoto.url === url)
        setImg(currentPhoto[0])

    }, [photos, url])

    console.log(photos[0].imgs[0].createdAt)
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
            <Segregate gird={grid} setGrid={setGrid}/>

            <ImgCont
            style={{
                gridTemplateColumns: grid
            }}>
                {img.imgs.map((item, index) => (
                    <Picture>
                        <img 
                        key={item.id}
                        variants={showImg}
                        initial="hidden"
                        animate='show'
                        src={item.url} />
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

const Picture = styled(motion.div)`
    height: 85%;
    min-height: 40vw;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    max-height: 100%;
    min-height: 100%;
    width: 90%;
    object-fit: cover;
    border-radius: .5rem;
    box-shadow: 0 10px 10px -5px;
    }
`

const Desc = styled(Description)`
    max-width: 90%;
`

export default Photos