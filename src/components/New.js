import React, { useState, useContext, useEffect, useRef } from 'react'
// defined styles
import {PageLayout,PageContainer, Icon} from '../style/styles'
import {HideParent, likeAnim} from '../animation'
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
// apollo
import { gql, useMutation, useQuery } from '@apollo/client';
// styles
import * as palette from './style-variables'
// icons
import like from '../images/icons/thumbs-up-solid.svg'
import likeEmpty from '../images/icons/thumbs-up-regular.svg'
// comment section
import PostComment from './PostComment'
 

const New = () => {
    const {news, userData} = useContext(UserContext)
    const [post, setPost] = useState()
    const {pathname} = useLocation()
    const [activeLike, setActiveLike] = useState(false)

    const inputRef = useRef();

    const FETCH_LIKES = gql`
        query LikesQuery($POST_ID: ID!) {
                news(where: {id: $POST_ID}) {
                userLikes {
                    userId
                }
            }
        }
    `


    const ADD_LIKE = gql`
        mutation AddLikeToPost($POST_ID: ID!, $USER_NAME: String!, $USER_ID: String!) {
            updateNews(
                where: { id: $POST_ID }
                data: {
                    userLikes: {
                    create: {
                        data: { userName: $USER_NAME, userId: $USER_ID }
                    }
                }
            }
            ) {
                id
                title
                stage
            }
            publishNews(where: { id: $POST_ID }, to: PUBLISHED) {
                id
            }
        }
    `;

    const DELETE_LIKE = gql`
        mutation DeleteLikeFromPost ($POST_ID: ID!, $USER_ID: String!){
            updateNews(
                where: {id: $POST_ID}
                data: {userLikes: {delete: {userId: $USER_ID}}}
            ) {
                id
                title
            },
                publishNews(where:{id: $POST_ID}) {
                id
            }
        }
    `;

   

    // console.log(getCommentsData)

    // fetch likes query
    const { data: getLikesData, loading: getLikesLoading, error: getLikesError } = useQuery(FETCH_LIKES, {
        variables: { POST_ID: post?.id }
    })

    // add like query
    const [addLike, { data: addLikeData, loading: addLikeLoading, error: addLikeError }] = useMutation(ADD_LIKE, {
        variables: { POST_ID: post?.id, USER_NAME: userData?.name, USER_ID: userData?.id },
        refetchQueries: [
            FETCH_LIKES,
        ],
    });
    
    // del like query
    const [deleteLikeFromPost, { data: deleteLikeData, loading: deleteLikeLoading, error: deleteLikeError }] = useMutation(DELETE_LIKE, {
        variables: { POST_ID: post?.id, USER_ID: userData?.id },
        refetchQueries: [
            FETCH_LIKES,
        ],
    });

    
    // set news to active one from slug in link
    useEffect(()=>{
        if (news){
            const split = pathname.split('/');
            const last = split.pop() || split.pop()
            let activePost = news.filter(link => link.slug == last)
            setPost(activePost[0])
        }
    }, [news])
      
    // get likes
    useEffect(() => {
        function checkAccLike() {
            if (getLikesData && getLikesData.news && getLikesData.news?.userLikes) {
                const filteredLikes = getLikesData.news?.userLikes.filter((like) => {
                return like.userId == userData?.id;
                });
                if (filteredLikes.length > 0) {
                    setActiveLike(true);
                }else {
                    setActiveLike(false);
                }
            }
        }
      
        // Wywołaj funkcję checkAccLike podczas zmiany getLikesData
        checkAccLike();
    }, [getLikesData, userData]);

    function likeHandler() {
        if(activeLike){
            deleteLikeFromPost()
        } else if (activeLike && userData.id == null){
            // deleteLikeFromPost()
        } else {
            addLike()
        }
    }

      

    return(
        <PageContainer>
            <PageLayout 
            variants={HideParent}
            animate='show'
            initial='hidden'
            >
                {post && (
                    <>
                    <PostContainer>
                        <div key={post.id}>
                            <Helmet>
                                <title>{post.title}</title>
                                <meta name='description' content={post.MetaDescription} />
                            </Helmet>
                            <PostCover>
                                <img className='bg' src={post.coverPhoto.url}></img>
                                <img className='main' src={post.coverPhoto.url}></img>
                            </PostCover>
                            
                            <Content>
                                <LikeContainer>
                                    <LikeList>
                                        {getLikesData?.news.userLikes.map((like)=> (
                                            <h3>{like.userName}</h3>
                                        ))}
                                    </LikeList>
                                    <LikeCount className={activeLike ? 'active flex' : 'flex'}>
                                        <p>{getLikesData?.news.userLikes.length}</p>
                                        <LikeButton 
                                            variants={likeAnim}
                                            animate={activeLike ? 'active' : 'deactivated'}
                                            exit='exit'
                                            initial='deactivated'
                                            onClick={()=>likeHandler()}>
                                                {activeLike ? <Icon className="filter-white" src={like} />
                                                : 
                                                <Icon className="filter-white" src={likeEmpty} />}
                                                
                                                
                                        </LikeButton>
                                    </LikeCount>
                                </LikeContainer>
                                <h2 className='title'>{post.title}</h2>
                                <div className='htmlContent' dangerouslySetInnerHTML={{__html: post.article.html}}></div>
                                
                                <PostComment inputRef={inputRef} post={post} setPost={setPost}/>
                            </Content>
                        </div>
                        
                    </PostContainer>
                    
                    </>
                )}
            </PageLayout>
        </PageContainer>
    )
}


const LikeContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 1.2rem;
    overflow: hidden;
    justify-content: flex-end;
    width: 100%;
`
const LikeButton = styled(motion.button)`
`

const LikeList = styled.div`
    width: auto;
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid ${palette.GRAY_COLOR};
    flex-direction: column;
    padding: 1rem;
    
`
const LikeCount = styled.div`
    border: 1px solid ${palette.GRAY_COLOR};
    border-radius: 1rem;
    column-gap: .5rem;
    padding: 0.5rem;
    border-right: 1px solid ${palette.GRAY_COLOR};
    transition: all .15s ease-in-out;
    /* &.active {
        background-color: ${palette.SEC_COLOR};
    } */
`

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