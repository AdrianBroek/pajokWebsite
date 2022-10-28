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
    const [open, setOpen] = useState(false)
    const [openDetail, setOpenDetail] = useState()
    const [objectData, setObjectData] = useState([])
    const [copiedObject, setCopiedObject] = useState()
    const [singleObject, setSingleObject] = useState()
    const [photoData, setPhotoData] = useState({
        city: '',
        portrait: '',
        fashion: '',
        wedding: '',
        studio: ''
    })
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
        }).then(res => setObjectData(res.data.data.photos));
    });

    useEffect(()=>{
        setPhotoData({
            city: objectData[0],
            portrait: objectData[1], 
            wedding: objectData[3],
            fashion: objectData[2],
            studio: objectData[4] })
    }, [objectData, pathname])

    return (
        <UserContext.Provider 
        value={{
            objectData,
            photoData,
            openDetail,
            singleObject,
            setSingleObject,
            setOpenDetail,
            open,
            setOpen,
            copiedObject, 
            setCopiedObject
        }}>

        {children}

        </UserContext.Provider>
    )
}

export default UserContext