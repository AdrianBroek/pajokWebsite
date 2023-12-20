import React, {useEffect, useState} from "react";
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {HideParent2, titleAnim} from '../animation'
import {PageLayout,PageContainer, Line, Hide} from '../style/styles'
import TextShadow from "../components/TextShadow";
import * as palette from '../components/style-variables'
// graph
import { gql } from "graphql-request";
import axios from "axios";
import { useQuery } from "react-query";
import Price from "../components/Price";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation, Scrollbar } from 'swiper/modules';
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
        <PriceListPageContainer>
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
                    scrollbar={{
                        hide: true,
                    }}
                    speed={600}
                    parallax={true}
                    // pagination={{
                    // clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Parallax, Scrollbar]}
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
                    <BackgroundHider />
                    {prices.map((el, index)=> (
                        <SwiperSlide>
                            <SlideContainer className="flex">
                                <Header className="flex">
                                    <p className="number">{index < 9 ? "0"+(index + 1) : index + 1}</p>
                                    <TextShadow className="title" data-swiper-parallax="-300" text={el.priceComponent[0].priceName}/>
                                </Header>
                                <Line />
                                <p className="subtitle" data-swiper-parallax="-200">
                                    {el.priceComponent[0].priceText}
                                </p>
                                <PriceListContainer className="text" data-swiper-parallax="-100">                           
                                    {el.priceComponent[0].priceListComponent?.map((priceList)=> (
                                        <>
                                        <div className="single-price-list flex">
                                            <h3>{priceList.priceListText}</h3>
                                            <p>{priceList.priceListNumber}</p>
                                        </div>
                                        <Line />
                                        </>
                                    ))}
                                </PriceListContainer>
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
        </PriceListPageContainer>
    )
}

const PriceListContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 2rem 0;
    .single-price-list {
        justify-content: space-between;
        color: ${palette.WHITE_COLOR};
        h3,p {
            
            font-size: 1.4rem;
        }
        h3 {
            color: inherit;
        }
        p {
            color: ${palette.SEC_COLOR};
        }
    }
`

const Header = styled.div`
    align-items: flex-start;
    .number {
        font-size: 7rem;
        opacity: .1;
        line-height: .8;
        color: ${palette.SEC_COLOR};
        @media screen and (max-width: 768px){
            font-size: 15vw;
        }
    }
    
`

const PriceListPageContainer = styled(PageContainer)`
    padding-top: 0;
`

const ParallaxContainer = styled.div`
    height: 100vh;
    max-width: 100%;
`

const SlideContainer = styled.div`
    flex-direction: column;
    /* background-color: #0000008d; */
    padding: 2rem;
    .subtitle {
        max-width: 800px;
    }
`
const BackgroundHider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;height: 100%;
    background-color: #00000084;
`

export default Prices