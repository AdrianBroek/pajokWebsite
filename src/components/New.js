import React, { useState, useContext, useEffect } from 'react'
// defined styles
import {PageLayout,PageContainer, Line, Description} from '../style/styles'
import {HideParent, titleAnim} from '../animation'
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
// shadow
import TextShadow from '../components/TextShadow'
// context
import UserContext from './fetchData/data'
// Router
import { Routes, Route, useLocation, HistoryRouterProps, Link } from "react-router-dom"
// helmet
import { Helmet } from 'react-helmet-async';

const New = () => {
    const {news} = useContext(UserContext)
    const [post, setPost] = useState()
    const {pathname} = useLocation()

    useEffect(()=>{
        if (news){
            const split = pathname.split('/');
            const last = split.pop() || split.pop()
            setPost(news.filter(link => link.slug == last))
        }
    }, [news])

    // console.log(post[0])

    return(
        <PageContainer>
            <PageLayout 
            variants={HideParent}
            animate='show'
            initial='hidden'
            >
                {post && (
                    <PostContainer>
                        {post.map((item)=>(
                            <div key={item.id}>
                                <Helmet>
                                    <title>{item.title}</title>
                                    <meta name='description' content={item.MetaDescription} />
                                </Helmet>
                                <PostCover>
                                    <img className='bg' src={item.coverPhoto.url}></img>
                                    <img className='main' src={item.coverPhoto.url}></img>
                                </PostCover>
                                <Content>
                                    <h2 className='title'>{item.title}</h2>

                                    <div className='htmlContent' dangerouslySetInnerHTML={{__html: item.article.html}}></div>
                                </Content>
                            </div>
                        ))}
                    </PostContainer>
                )}
            </PageLayout>
        </PageContainer>
    )
}

const PostContainer = styled.article`
    width: 100%;
`

const Content = styled.section`
    width: 90%;
    max-width: 960px;
    margin: auto;
    .title {
        font-size: 3rem;
        margin: 1rem 0;
    }
    .htmlContent {
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        li {
            list-style-position: inside;
        }
    }
`

const PostCover = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
        max-width: 100%;
        height: auto;
        max-height: 750px;
        position: relative;
        &.bg{
            filter: blur(10px);
            position: absolute;
            left: 0;
            top: 0;
            width: 120%;
            height: 120%;
            object-fit: fill;
        }
        &.main{
            object-fit: contain;
        }
    }
`


export default New