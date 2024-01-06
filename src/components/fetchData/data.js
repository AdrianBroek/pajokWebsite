import { createContext, useState, useEffect, useCallback } from "react";
// axios
import axios from "axios";
import { gql, useQuery } from '@apollo/client';

// location
import { useLocation } from "react-router-dom";

const UserContext = createContext()

export function UserProvider({children}){
    const api_key = process.env.REACT_APP_GRAPH_KEY
    const {pathname} = useLocation()
    // google user
    const [userData, setUserData] = useState(false)
    // main page state
    const [mainPageData, setMainPageData] = useState([])
    // photo state
    const [photoObjectData, setPhotoObjectData] = useState([])
    const [open, setOpen] = useState(false)
    const [openDetail, setOpenDetail] = useState()
    const [copiedObject, setCopiedObject] = useState()
    const [singleObject, setSingleObject] = useState()
    // news
    const [news, setNews] = useState([])
    // videos
    const [videoData, setVideoData] = useState([])
    const [lastAddedVideos, setLastAddedVideo] = useState([])
    // prices 
    const [prices, setPrices] = useState([])
    const [priceListPage, setPriceListPage] = useState([])
    // category
    const [categories, setCategories] = useState([])
    // aboutMePage
    const [aboutMePages, setAboutMePages] = useState([])
    // grahpQl
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    
    const FETCH_DATA = gql`
      query FetchData {
        mainPages {
          mainPhoto {
            url
          }
          mainPageHeader
          mainPageDescription
          bubbleComponent {
              bubbleText
              bubbleHeader
              bubbleImage {
                url
              }
          }
          myPassionText {
              myPassionText
          }
        }
        photos {
            title
            url
            description
            backgroundPhoto {
                id
                url
            }
            photoModule {
                id
                model
                photo {
                  url
                  createdAt
                }
                photoDescription
            }
        }
        newss {
          userLikes {
            userName
            userId
            userAvatar {
              url
            }
          }
          article {
            html
          }
          coverPhoto {
            url
          }
          tagList {
            tag
          }
          slug
          title
          date
          id
        }
        videoPages {
          videoCategoryTitle
          videoCategorySlug
          videoCategoryDescription
          videoCategoryBackgroundMobile {
            url
          }
          videoCategoryBackground {
            url
          }
          videoComponent {
            videoTitle
            videoSlug
            videoEmbedLink
            videoCover {
              url
            }
          }
        }
        lastAddedVideoss {
          link
          title
          videoCover {
            url
          }
          createdAt
        }
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
    const { loading, error, data } = useQuery(FETCH_DATA);

    useEffect(()=> {
      if(!loading){
        setMainPageData(data.mainPages[0])
        setPhotoObjectData(data.photos)
        setNews(data.newss)
        setVideoData(data.videoPages)
        setLastAddedVideo(data.lastAddedVideoss)
        setPrices(data.pricess)
        setPriceListPage(data.priceListPages)
        setAboutMePages(data.aboutMePages)
        // console.log(data.newss)
      }
    },[loading,pathname])


    // select video categories 
    function setCategoryState(){
      const copiedCategories = [...videoData];

      copiedCategories.map((el) => {
        const cat = el.videoCategorySlug.split("/")[1]
        // console.log(cat)
        setCategories(prevState => [
          ...prevState,
          cat
        ])
      })  
    }
    

    useEffect(()=> {
      if(videoData && categories.length<=0){
        setCategoryState()
      }
    },[videoData])
    

    return (
        <UserContext.Provider 
          value={{
            loading,
            userData,
            setUserData,
            mainPageData,
            photoObjectData,
            photoObjectData,
            openDetail,
            singleObject,
            setSingleObject,
            setOpenDetail,
            open,
            setOpen,
            copiedObject, 
            setCopiedObject,
            news,
            videoData,
            lastAddedVideos,
            prices,
            priceListPage,
            categories,
            aboutMePages,
            
        }}>

        {children}

        </UserContext.Provider>
    )
}

export default UserContext