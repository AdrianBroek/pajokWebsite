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

const Prices = () => {
    const [prices, setPrices] = useState([])
    const api_key = process.env.REACT_APP_GRAPH_KEY
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    const QUERY = gql`
    {
        pricess {
            photoCount {
              text
            }
            cena
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
        .then(res => setPrices(res.data.data.pricess));
        // .then(res => console.log(res.data.data.pricess.pricess));

    });
    
    return (
        <PageContainer>
        <PageLayout 
            variants={HideParent2}
            animate='show'
            initial='hidden'
        >
        <TextShadow text='Cennik'/>
        <Line />
        {/* <Hide>
            <Price variants={titleAnim}>
                <div className="ball"></div>
                <p>10 zdjęć - 300zł</p>
            </Price>
        </Hide>
        <Hide>
            <Price variants={titleAnim}>
                <div className="ball"></div>
                <p>15 zdjęć - 400zł</p>
            </Price>
        </Hide>
        <Hide>
            <Price variants={titleAnim}>
                <div className="ball"></div>
                <p>20 zdjęć - 500zł</p>
            </Price>
        </Hide> */}
        {prices ? 
            <>
            {prices.map((el)=> (
                <Price price={el} />
            ))}
            </>
        : "proszę czekać..." }
        </PageLayout>
        </PageContainer>
    )
}



export default Prices