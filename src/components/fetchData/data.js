import { createContext, useState, useEffect } from "react";
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
    // state
    const [object, setObject] = useState([])
    const [open, setOpen] = useState(false)
    const [openDetail, setOpenDetail] = useState()
    const [objectData, setObjectData] = useState([])
    const [copiedObject, setCopiedObject] = useState()
    const [singleObject, setSingleObject] = useState()
    const [news, setNews] = useState([])
    // console.log(objectData)
    const endpoint  = `https://api-eu-central-1.hygraph.com/v2/${api_key}/master`
    const QUERY = gql`
    {
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
        .then(res => setObject(res.data.data))
    });

    useEffect(()=> {
      setObjectData(object.photos)
    }, [object])

    useEffect(()=> {
      setNews(object.newss)
    }, [object])

    return (
        <UserContext.Provider 
        value={{
            objectData,
            openDetail,
            singleObject,
            setSingleObject,
            setOpenDetail,
            open,
            setOpen,
            copiedObject, 
            setCopiedObject,
            news
        }}>

        {children}

        </UserContext.Provider>
    )
}

export default UserContext