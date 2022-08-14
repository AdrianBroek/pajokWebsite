import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageInfo from '../PageInfo'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { GraphQLClient, gql } from "graphql-request";
import axios from "axios";
import { useQuery } from "react-query";

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
            }
          }
      }
    `;

    const location = useLocation()
    const url = location.pathname

    // state
    const [photos, setPhotos] = useState([])
    const [img, setImg] = useState(null)
    const [grid, setGrid] = useState('30% 30% 30%')

    const { data, isLoading, error } = useQuery("launches", () => {
        return axios({
          url: endpoint,
          method: "POST",
          data: {
            query: QUERY
          }
        }).then(res => setPhotos(res.data.data.photos));
      });

    useEffect(()=>{
        const currentPhoto = photos.filter((statePhoto) => statePhoto.url === url)
        setImg(currentPhoto[0])
        console.log(img)

    }, [photos, url])

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

            <Segregate>
                    <div
                    onClick={() => setGrid('90%')}
                    className="block single">
                        <div className="">

                        </div>
                    </div>

                    <div className="block double"
                    onClick={() => setGrid('45% 45%')}>
                        <div className="">

                        </div>
                    </div>

                    <div className="block trio"
                    onClick={() => setGrid('30% 30% 30%')}>
                        <div className="">

                        </div>
                    </div>
            </Segregate>
            
            <ImgCont
            style={{
                gridTemplateColumns: grid
            }}>
                {img.imgs.map((item, index) => (
                    <Picture>
                        <img 
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

const Segregate = styled.div`
    height: 65px;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(0,0,0, 0.03);
    padding: .5rem;
    .block {
        width: 100px;
        border: 1px solid #0000008d;
        border-radius: 0.5rem;
        height: 100%;
    }
    .double {

    }
    .trio {

    }
    .single {

    }
`

export default Photos