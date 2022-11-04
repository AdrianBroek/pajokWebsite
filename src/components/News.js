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
                            <div className="photoCover">
                                <img src={item.coverPhoto.url} />
                            </div>
                            <div className="postInfo">
                                <h2>{item.title}</h2>
                                <h6 className="date">{item.date.substring(0, 10)}</h6>
                                <div className='tags'>
                                    {item.tagList[0].tag.map((tag)=>(
                                        <h6>#{tag},</h6>
                                    ))}
                                </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1rem;
    column-gap: 1rem;
    padding: 0 3rem;
    max-width: 1640px;
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 1rem;
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: 100%;
        
    }
`

const Blog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1rem;
    overflow: hidden;
    &:hover {
        box-shadow: rgba(38, 57, 77, 0.384) 0px 20px 30px -10px;
    }
    .postInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1rem;
        h2 {
            font-size: 1.7rem;
        }
        .date {
            font-size: .85rem;
            font-weight: 500;
        }
    }
    .photoCover{
        width: 100%;
        height: 50%;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .tags {
        display: flex;
        column-gap: .5rem;
        font-size: .8em;
        font-style: italic;
        h6 {
            font-weight: 300;
        }
    }

`

export default News