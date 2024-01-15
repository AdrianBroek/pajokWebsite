import React, {useRef, useEffect, useState,useContext} from "react";
// styles
import * as palette from './style-variables'
// graphql
import { gql, useQuery, useMutation } from "@apollo/client";
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
// styles
import { Line,Icon } from "../style/styles";
// context
import UserContext from './fetchData/data'
import TextEditor from "./TinyTextEditor";
// Icon
import delIcon from '../images/icons/delete.png'
// animations
import { commentLoading } from "../animation";
// gif
import loader from "../images/gif/loader.gif"


const PostComment = ({post, setPost}) => {
    // const [text, setText] = useState('')
    const [postContent, setPostContent] = useState('')
    const {news, userData} = useContext(UserContext)

    const inputRef = useRef()

    const FETCH_COMMENTS = gql`
        query CommentsQuery($POST_ID: ID!) {
            news(where: {id: $POST_ID}) {
                userComments {
                    userComment 
                    userName
                    userId
                    userPicture
                    id
                }
            }
        }
    `

    // fetch comment query
    const { data: getCommentsData, loading: getCommentsLoading, error: getCommentsError } = useQuery(FETCH_COMMENTS, {
        variables: { POST_ID: post?.id }
    })

    const ADD_COMMENT = gql`
        mutation AddCommentToPost($POST_ID: ID!, $USER_NAME: String!, $USER_ID: String!,$USER_COMMENT: String!, $USER_PICTURE: String!) {
            updateNews(
                where: { id: $POST_ID }
                data: {
                    userComments: {
                    create: {
                        data: { userName: $USER_NAME, userId: $USER_ID, userComment:$USER_COMMENT, userPicture:$USER_PICTURE }
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

    const DELETE_COMMENT = gql`
        mutation DeletePostComment(
            $POST_ID: ID!, $COMMENT_ID: ID!) {
                updateNews(
                where: {id: $POST_ID}
                data: {userComments: {delete: { 
                id: $COMMENT_ID}}}
            ) {
                id
                title
                stage
            }
            publishNews(where: { id: $POST_ID }, to: PUBLISHED) {
                id
            }
        }
      
    `
    
    // comment post query
    const [addComment, { data: addCommentData, loading: addCommentLoading, error: addCommentError }] = useMutation(ADD_COMMENT, {
        onCompleted: () => {
          // Tutaj możesz dodać kod obsługi, który ma być wykonany po zakończeniu mutacji
        },
    });

    // comment post query
    const [deleteComment, { data: deleteCommentData, loading: deleteCommentLoading, error: deleteCommentError }] = useMutation(DELETE_COMMENT);

    function sendComment(e) {
        e.preventDefault();
        const userComment = inputRef.current?.value;
        addComment({
          variables: { POST_ID: post?.id, USER_ID: userData?.id, USER_NAME: userData?.name, USER_COMMENT: userComment, USER_PICTURE: userData?.picture },
            refetchQueries: [
                FETCH_COMMENTS,
            ],
            onCompleted: () => {
                // Tutaj możesz dodać kod obsługi, który ma być wykonany po zakończeniu mutacji
                e.target[0].value = ''
            },
        })
    }

    function delComment(id) {
        // console.log(id)
        deleteComment({
          variables: { POST_ID: post?.id, COMMENT_ID: id },
            refetchQueries: [
                FETCH_COMMENTS,
            ],
        });
    }

    return (
        <CommentContainer>
            <Header>
                <h1>Komentarze</h1>
            </Header>
            <Line />
            <CommentSection>
                {getCommentsData?.news.userComments.map((comment, index)=> (
                    <Comment key={index}>
                        <div className="user">
                            <Icon src={comment.userPicture} width="20px" />
                            <h4>{comment.userName}</h4>
                        </div>
                        <p>{comment.userComment}</p>
                        {userData?.id === comment?.userId ? 
                        <button onClick={()=> delComment(comment.id)}>
                            <Icon src={delIcon}></Icon>
                        </button>
                        : ""}
                    </Comment>
                ))}
            </CommentSection>
            <FormContainer>
                <form 
                className={!userData?.id ? "blur" : ""}

                onSubmit={sendComment}>
                    <motion.input
                    variants={commentLoading}
                    animate={addCommentLoading ? "loading" : "loaded"}
                    initial="loaded"
                    placeholder="Napisz komentarz..." contentEditable type='text' ref={inputRef}/>
                    <SendBtn 
                        type='submit'
                        variants={commentLoading}
                        animate={addCommentLoading ? "loading" : "loaded"}>
                            SEND
                        {addCommentLoading ? <Loader src={loader}/> : ""}    
                    </SendBtn>
                    
                </form>
                {!userData?.id && (
                    <CommentCover className="flex">
                        <p>Dla zalogowanych użytkowników</p>
                    </CommentCover>
                )}
            </FormContainer>
            
        </CommentContainer>
    )
}


export default PostComment

const CommentCover = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
`

const Loader = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10%;
    width: 15px;
`

const CommentContainer = styled.div`
    padding: 2rem 0;
`

const CommentSection = styled.div`
    width: 100%;
    margin: 1rem 0;
    
    
`
const Comment = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    margin: 1rem;
    padding: 1rem;
    background: ${palette.GRAY_COLOR};
    .user {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem;
        img {
            border-radius: 100%;
        }
    }
    button {
        position: absolute;
        right: 0;
        margin-right: 1rem;
    }
`
    


const FormContainer = styled.div`
    position: relative;
    form {

    }
    input {
        width: 100%;
        padding: 1rem;
        background: ${palette.GRAY_COLOR};
        border: none;
        color: #fff;
    }
`

const Header = styled.header`
    h1 {
        font-size: 2.2rem;
        font-weight: bold;
        text-transform: capitalize;
        font-family: ${palette.ROBOTO};
        text-align: center;
        margin-bottom: 1rem;
    }

    span {
        color: ${palette.SEC_COLOR};
        font-size: inherit;
    }

`

const SendBtn = styled(motion.button)`
    position: relative;
    border: 1px solid ${palette.SEC_COLOR};
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    width: 120px;
    background-color: transparent;
    h4 {
        font-size: .8rem;
        font-weight: 500;
        text-align: center;
    }
`