import React, {useEffect, useState} from "react";
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {HideParent2, titleAnim} from '../animation'
import {PageLayout,PageContainer, Line, Hide} from '../style/styles'
import TextShadow from "../components/TextShadow";
// graph
import { gql } from "graphql-request";
import axios from "axios";
import { useQuery } from "react-query";
import Price from "../components/Price";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation } from 'swiper/modules';
import TESTBACKGROUND from '../images/background2.webp'

const Prices = () => {
    const [graphData, setGraphData] = useState()
    const [load, setLoad] = useState(false)
    const [prices, setPrices] = useState([])
    const [background, setBackground] = useState()

    const api_key = process.env.REACT_APP_GRAPH_KEY
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    const QUERY = gql`
    {
        priceListPages {
            priceListPageBackgroundImage {
              url
            }
        }
        pricess {
            priceComponent {
              priceText
              priceName
              priceListComponent {
                priceListText
                priceListNumber
              }
            }
        }
    }
    `
     // graph api
     const { data, isLoading, error } = useQuery("launches", () => {
        return axios({
          url: endpoint,
          method: "POST",
          data: {
            query: QUERY
          }
        })
        // .then(res => setPrices(res.data.data.pricess));
        // .then(res => setBackground(res.data.data.pricess));
        // .then(res => setGraphData(res.data.data.pricess));
        .then(res => setGraphData(res.data.data))
        .then(res => setLoad(true));

    });
    

    useEffect(()=> {   
        if (load){   
            setBackground(graphData.priceListPages[0].priceListPageBackgroundImage.url);
            setPrices(graphData.pricess)
            // console.log(graphData)
        }
    }, [graphData])

    return (
        <PageContainer>
        <PageLayout 
            variants={HideParent2}
            animate='show'
            initial='hidden'
        >
            <ParallaxContainer>
                
                 <Swiper
                    style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                    >
                    <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                        // 'url(https://swiperjs.com/demos/images/nature-1.jpg)',
                        `url(${background})`
                    }}
                    data-swiper-parallax="-23%"
                    ></div>
                    {prices.map((el)=> (
                        <SwiperSlide>
                            <SlideContainer className="flex">
                                <TextShadow className="title" data-swiper-parallax="-300" text={el.priceComponent[0].priceName}/>
                                <Line />
                                <p className="subtitle" data-swiper-parallax="-200">
                                    {el.priceComponent[0].priceText}
                                </p>
                                <div className="text" data-swiper-parallax="-100">                           
                                    {el.priceComponent[0].priceListComponent?.map((priceList)=> (
                                        <>
                                            {priceList.priceListText}
                                            {priceList.priceListNumber}
                                        </>
                                    ))}
                                </div>
                            </SlideContainer>
                        </SwiperSlide>
                    ))}
                    {prices.map((el)=> (
                        console.log(el.priceComponent[0])
                    ))}

                </Swiper>
                </ParallaxContainer>
                
        {/* <TextShadow text='Cennik'/>
        <Line />
        {prices ? 
            <>
            {prices.map((el)=> (
                <Price price={el} />
            ))}
            </>
        : "proszę czekać..." } */}
        </PageLayout>
        </PageContainer>
    )
}


const ParallaxContainer = styled.div`
    height: 100vh;
    max-width: 100%;
`

const SlideContainer = styled.div`
    flex-direction: column;
    background-color: #0000009c;
`


export default Prices