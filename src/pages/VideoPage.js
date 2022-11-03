import React, { useState } from 'react'
// defined styles
import {PageLayout,PageContainer, Line} from '../style/styles'
// routes
import {Link} from 'react-router-dom'
import {HideParent, titleAnim} from '../animation'
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
import PhotoOpen from '../components/PhotoOpen'
// axios
import axios from 'axios'
import { Routes, Route, useLocation, HistoryRouterProps } from "react-router-dom"
// api
import { useQuery } from "react-query";
// graph
import { gql } from "graphql-request";
// shadow
import TextShadow from '../components/TextShadow'


const VideoPage = () => {
    const [videos, setVideos] = useState()
    const api_key = process.env.REACT_APP_GRAPH_KEY
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    const QUERY = gql`
    {
        videoPages {
            embedVimeoLink
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
        }).then(res => setVideos(res.data.data.videoPages));
    });

    // useEffect(()=> {
    //     axios.get('https://api.vimeo.com/users/115069247/videos')
    //     .then(data => {
    //         console.log(data)
    //     })
    // }, [])

    return(
        <PageContainer>
            <PageLayout 
            variants={HideParent}
            animate='show'
            initial='hidden'
            >
                
                {videos && (
                    <>
                    <TextShadow text='Wideo' />
                    <Line />
                        <div className="vimeoVideo">
                            {videos.map((link)=> (
                                <div className="content" dangerouslySetInnerHTML={{__html: link.embedVimeoLink}}></div>
                            ))}
                        </div>
                    </>
                )}
            </PageLayout>
            
        </PageContainer>
                    // <Line />
            // <LinkCont>
            // <Hide>
            //     <Link to="/klipy">
            //         <motion.h3 variants={titleAnim}>Klipy</motion.h3>
            //     </Link>
            // </Hide>
    
            // <Hide>
            // <Link to="/wesela">
            //     <motion.h3 variants={titleAnim}>Wesela</motion.h3>
            // </Link>
            // </Hide>
            
            // </LinkCont>
    )
}

const Hide = styled(motion.div)`
    overflow: hidden;
`

const LinkCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;
    flex-direction: column;
`

const LinePhoto = styled(Line)`
    width: 100%;
`


export default VideoPage