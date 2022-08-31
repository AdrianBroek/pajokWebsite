import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {showImg} from '../animation'
import { useLocation, useNavigate } from "react-router-dom";
// import user context
import UserContext from './fetchData/data'
// overlay
import Overlay from './Overlay'

const PhotoOpen = () => {
    const [formattedDate, setFormattedDate] = useState(false)
    const navigate = useNavigate();
    const {pathname} = useLocation()
    let result = /[^/]*$/.exec(pathname)[0];
    // console.log(result)
    const { openDetail, setOpenDetail, setOpen, open, copiedObject, setCopiedObject } = useContext(UserContext)

    useEffect(()=>{
        setOpen(true)
    }, [openDetail])

    useEffect(() => {
        result = /[^/]*$/.exec(pathname)[0];
    }, [pathname])

    useEffect(()=>{
        if(copiedObject) {
            const objectCopy = copiedObject.filter(
                (item) => item.id === result)
            setOpenDetail(objectCopy[0])
        }
        
    }, [copiedObject])



    useEffect(()=> {
        if (openDetail) {
            let date = new Date(openDetail.photo.createdAt)
            console.log(date)
            // Get year, month, and day part from the date
            let year = date.toLocaleString("default", { year: "numeric" });
            let month = date.toLocaleString("default", { month: "2-digit" });
            let day = date.toLocaleString("default", { day: "2-digit" });

            // Generate yyyy-mm-dd date string
            setFormattedDate(day + "-" + month + "-" + year) 
            // console.log(formattedDate);  // Prints: 04-05-2022
        }
    }, [copiedObject])

    // console.log(formattedDate)

    return (
        <>
        {openDetail
         && formattedDate
          && (
            <Picture onClick={() => navigate(-1)}>
                <div className="imgCont">
                    <img src={openDetail.photo.url}/>
                </div>
                <div className="photoDescription">
                    <div className="container">
                        <div>Model: 
                            {openDetail.model.map((model) => (
                                <h3>{model}</h3>
                            ))}
                        </div>
                        <div className="line" />
                        <p>{openDetail.photoDescription}</p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </Picture>
        )}
        </>
    )
}

const Picture = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
    max-height: 90%;
    z-index: 99;
    display: flex;
    justify-content: center;
    color: #fff;
    .imgCont {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .photoDescription {
        padding: 0 1rem 1rem 1rem;
        .container {
            background: #000;
            padding: 1rem;
            width: 100%;
            .line {
                width: 90%;
                margin: auto;
                margin: .5rem auto;
                height: 0.15px;
                background: white;
            }
        }
    }
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    h3,p {
        color: #fff;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        .photoDescription {
            padding: 0;
        }
        .imgCont {
            max-height: 80vh;
        }
    }
`

export default PhotoOpen