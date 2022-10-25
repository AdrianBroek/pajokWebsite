import React, {useEffect, useState} from "react";
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

// animations
import { motion } from 'framer-motion'
import { glow, buttonAnim, PageAnimation } from '../animation'

// images
// import avatar from '../images/aboutMe/avatar2.jpg'
import copySvg from '../images/aboutMe/file.png'
import like from '../images/aboutMe/thumbs-up.svg'

const OmniePage = () => {
    const [avatar, setAvatar] = useState()
    const api_key = process.env.REACT_APP_GRAPH_KEY
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    const QUERY = gql`
    {
        aboutMePhotos {
            id
            photo {
              url
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
        }).then(res => setAvatar(res.data.data.aboutMePhotos[0].photo.url));
    });


    const [copy, setCopy] = useState(false)
    const clickForLink = () => {
        if (!copy) {
        copyToClipboard('lucaskrzyzak@gmail.com')
        setCopy(true)
        clearTimeout()
        }
    }
    useEffect(() => {
        if (copy) {
            setTimeout(()=> {
                setCopy(false)
            }, 2500)
            
        }
    }   
    , [copy])

    // copy text
    const copyToClipboard = (text) => navigator.clipboard.writeText(text)
    return (
        <PageContainerAboutMe
        >
            <PageLayout
             variants={PageAnimation}
             initial="hidden"
             animate="show"
             exit="exit" >
                <AvContainer
                variants={glow}
                animate='show'
                >
                    <Avatar src={avatar}/>
                </AvContainer>
                <div>
                    <div></div>
                    <h1>O mnie</h1>
                    <div></div>
                </div>
                <DescriptionAM>
                    <p>
                    Cześć, nazywam się Łukasz.
                    </p> 

                    <p>
                    Odkąd pamiętam, fotografia i film zawsze przeplatały się w moim życiu.
                    Jestem fanem niebanalnych kadrów. 
                    </p>
                    
                    <p> 
                    Lubię również 
                    wykonywać portrety ludziom oraz 
                    dokumentować ważne wydarzenia z ich życia. 
                    Stale podnoszę sobie poprzeczkę i szlifowuję 
                    swoje umiejętności.
                    </p>
                </DescriptionAM>

                <WriteToMe>
                <h2>Napisz do mnie!</h2>
                    <LinkBtn 
                        onClick={clickForLink}
                        whileHover="hover"
                        variants={buttonAnim}
                        whileTap={{
                            scale: 0.95,
                        }}
                    >
                        <ImageContainer>
                            <h3>lucaskrzyzak@gmail.com</h3>
                            <Icon src={copySvg} />
                        </ImageContainer>
                    </LinkBtn>

                    <Copied
                        variants={PageAnimation}
                        animate={copy ? 'show' : 'hidden'}
                        initial='hidden'>
                        
                        <h5>Skopiowano</h5>
                        <Icon
                            src={like} 
                    />
                    </Copied> 
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
    margin: 5rem 0;
`


const InfoCont = styled(motion.div)`
    display: grid;
    align-items: center;
    justify-content: space-around;
    grid-template-columns: 15% 85%;
    text-align: left;
    h3 {
    }
    @media screen and (max-width: 501px){
        grid-template-columns: 15% 80%;
        justify-content: space-between;
    }
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

const IconAM = styled(Icon)`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    object-fit: contain;
    max-width: 40px;
`

const Copied = styled(motion.div)`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    top: 15%;
    right: 2.5%;
    border-radius: .5rem;
    padding: .5rem;
    background: rgb(70,130,180);
    h5 {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }
    img {
        max-width: 20px;
        filter: invert(93%) sepia(100%) saturate(27%) hue-rotate(103deg) brightness(108%) contrast(106%);
    }
`

const Avatar = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`

const AvContainer = styled(motion.div)`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #44D62C;
    @media screen and (max-width: 400px){
        max-width: 90%;
        height: auto;
    }
`

const Underline = styled(Line)`
    width: 100%;
    margin: auto;
    height: 1px;
    border-radius: 20px;
    background: #000;
`
export default OmniePage
