import React,{useState, useEffect, useContext} from "react";
// axios
import axios from "axios";
import { useQuery } from "react-query";
// graph
import { gql } from "graphql-request";
// styled
import styled from "styled-components";
// shadow
import TextShadow from '../components/TextShadow'
import {HideParent, titleAnim} from '../animation'
// defined styles
import {PageLayout,PageContainer, Line} from '../style/styles'
// router
import { Routes, Route, useLocation, HistoryRouterProps, Link } from "react-router-dom"
// context
import UserContext from './fetchData/data'

const News = () => {
    const {news} = useContext(UserContext)
    console.log(news)
    return (
        <PageContainer>
        <PageLayout 
        variants={HideParent}
        animate='show'
        initial='hidden'
        >
            <TextShadow text='Aktualności' />
            <Line />
            {news && (
                

            <NewsContainer>
                    {news.map((item, index)=>(
                        <Link key={index} to={item.slug}>
                        <Blog>
                            <h2>{item.title}</h2>
                            <div className='tags'>{item.tagList[0].tag.map((tag)=>(
                                <h6>{tag},</h6>
                            ))}</div>
                            <div className="photoCover">
                                <img src={item.coverPhoto.url} />
                            </div>
                        </Blog>
                        </Link>
                    ))}


            </NewsContainer>

        )}
        </PageLayout>
        </PageContainer>
    )
}

const NewsContainer = styled.section`
    margin: auto;
`

const Blog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .photoCover{
        width: 85%;
        img {
            max-width: 100%;
        }
    }
    .tags {
        display: flex;
        column-gap: .5rem;
    }

`

export default News