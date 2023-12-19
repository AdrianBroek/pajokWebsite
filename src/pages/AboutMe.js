import React, {useEffect, useState, useMemo} from "react";
// styles
import styled from 'styled-components'
import axios from "axios";
import { useQuery } from "react-query";
// graph
import { gql } from "graphql-request";
import {
    PageContainer,
    PageLayout,
    Icon,
    LinkBtn,
    Description,
    Line,
    ImageContainer
}
from '../style/styles'
import TextShadow from "../components/TextShadow";

// animations
import { motion } from 'framer-motion'
import { glow, buttonAnim, PageAnimation } from '../animation'
import ClickToCopy from "../components/reusable/ClickToCopy";
// styles
import * as palette from '../components/style-variables'



const OmniePage = () => {
    const [avatar, setAvatar] = useState()
    const [text, setText] = useState()
    const api_key = process.env.REACT_APP_GRAPH_KEY
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    const QUERY = gql`
    {
        aboutMePages {
            photo {
              photoAboutMePage {
                photo {
                  url
                }
                aboutMeText {
                    html
                }
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
        }).then((res) => {
            // console.log(res.data.data.aboutMePages[0].photo.photoAboutMePage[0].photo.url)
            // console.log(res.data.data.aboutMePages[0].photo.photoAboutMePage[0].aboutMeText.html)
            setAvatar(res.data.data.aboutMePages[0].photo.photoAboutMePage[0].photo.url)
            setText(res.data.data.aboutMePages[0].photo.photoAboutMePage[0].aboutMeText.html)
            }
        );
    });

    const backgroundImg = useMemo(()=> avatar, [avatar])
    const pageText = useMemo(()=> text, [text])

    
    return (
        <PageContainerAboutMe>
            <PageLayout
             variants={PageAnimation}
             initial="hidden"
             animate="show"
             exit="exit" >
                

                <AvContainer
                // variants={glow}
                animate='show'
                >
                    <AvatarBlur src={backgroundImg}/>
                    <Avatar src={backgroundImg}/>
                </AvContainer>
                <div>
                    <TextShadow text='O mnie'/>
                </div>
                <Line />
                <DescriptionAM>
                    <div dangerouslySetInnerHTML={{ __html: pageText }} />
                </DescriptionAM>
                
                <WriteToMe>
                <h4><strong>Napisz do mnie!</strong></h4>
                    <ClickToCopy text={'lucaskrzyzak@gmail.com'}/>
                </WriteToMe>
            </PageLayout>
        </PageContainerAboutMe>
    )
}


const WriteToMe = styled(motion.div)`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    margin: 2.5rem 0;
    @media screen and (max-width: 601px){
        flex-direction: column;
        margin: 0;
        row-gap: 1rem;
        max-width: 90%;
        @media screen and (max-width: 401px){
            h3 {
                font-size: 5vw;
            }
        }
    }
`

const PageContainerAboutMe = styled(PageContainer)`
    padding: 5rem 0;
`

const DescriptionAM = styled(Description)`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 2rem 2rem;
    @media screen and (max-width: 768px){
        padding: 1rem .5rem;
        max-width: 90%;
    }
`

const Avatar = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    min-height: 100%;
    position: relative;
`

const AvatarBlur = styled.img`
    -webkit-filter: blur(10px);
    filter: blur(10px);
    position: absolute;
    left: 0;
    top: 0;
    width: 120%;
    height: 120%;
    object-fit: fill;
`

const AvContainer = styled(motion.div)`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    /* border: 2px solid #44D62C; */
    position: relative;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 400px){
        max-width: 90%;
        height: auto;
        max-height: 300px;
    }
`
export default OmniePage
