import { createContext, useState, useEffect, useCallback } from "react";
// axios
import axios from "axios";
import { useQuery } from "react-query";
// graph
import { gql } from "graphql-request";
// location
import { useLocation } from "react-router-dom";

const UserContext = createContext()

export function UserProvider({children}){
    const api_key = process.env.REACT_APP_GRAPH_KEY
    const {pathname} = useLocation()

    // api data
    const [object, setObject] = useState({
      data: []
    })
    const [loading, setLoading] = useState(false)
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
    // category
    const [categories, setCategories] = useState([])
    // grahpQl
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    const QUERY = gql`
    {
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
        .then(res => setObject(state => ({
          data: res.data.data,
        })))
        .then(res => setLoading(true))
    });

    // console.log(loading)

    useEffect(()=> {
      if(loading){
        setMainPageData(object.data.mainPages[0])
        setPhotoObjectData(object.data.photos)
        setNews(object.data.newss)
        setVideoData(object.data.videoPages)
        setLastAddedVideo(object.data.lastAddedVideoss)
      }
    },[object,pathname])

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
            categories
        }}>

        {children}

        </UserContext.Provider>
    )
}

export default UserContext