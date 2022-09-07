import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {showImg} from '../animation'
import { useLocation, useNavigate } from "react-router-dom";
// import user context
import UserContext from './fetchData/data'

const PhotoOpen = () => {
    // const [formattedDate, setFormattedDate] = useState(false)
    const navigate = useNavigate();
    const {pathname} = useLocation()
    let result = /[^/]*$/.exec(pathname)[0];
    // console.log(result)
    const { openDetail, setOpenDetail, setOpen, open, copiedObject, setCopiedObject } = useContext(UserContext)

    useEffect(()=>{
        setOpen(true)
        // open ? document.body.style.overflowY='hidden' : document.body.style.overflowY='unset'
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



    // useEffect(()=> {
    //     if (openDetail) {
    //         let date = new Date(openDetail.photo.createdAt)
    //         console.log(date)
    //         // Get year, month, and day part from the date
    //         let year = date.toLocaleString("default", { year: "numeric" });
    //         let month = date.toLocaleString("default", { month: "2-digit" });
    //         let day = date.toLocaleString("default", { day: "2-digit" });

    //         // Generate yyyy-mm-dd date string
    //         setFormattedDate(day + "-" + month + "-" + year) 
    //         // console.log(formattedDate);  // Prints: 04-05-2022
    //     }
    // }, [copiedObject])

    // console.log(formattedDate)

    return (
        <>
        {openDetail
          && (
            <Picture onClick={() => navigate(-1)}>
                <div className="imgCont">
                    <img src={openDetail.photo.url}/>
                    {/* <p className="date">{formattedDate}</p> */}
                </div>
                <div className="photoDescription">
                    <div className="container">
                        <div className="modelName">
                            <p>Model: </p>
                            <ul>
                            {openDetail.model.map((model) => (
                                <li><h3>{model}</h3></li>
                            ))}
                            </ul>
                        </div>
                        <div className="line" />
                        <p className="desc">{openDetail.photoDescription}</p>
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
    max-height: 100%;
    z-index: 99;
    display: flex;
    justify-content: center;
    color: #fff;
    .imgCont {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .photoDescription {
        padding: 2.5rem 1rem 1rem 1rem;
        max-width: 50%;
        .container {
            background: #000;
            padding: 1rem;
            width: 100%;
            .modelName {
                p {
                    font-weight: 500;
                    font-size: .9rem;
                }
                ul li {
                    list-style: none;
                    h3 {
                        &:before {
                            content: '- '
                        } 
                    }
                }
            }
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
        max-height: 90%;
        object-fit: contain;
    }
    h3,p {
        color: #fff;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        .photoDescription {
            padding: 0;
            max-width: 100%;
            .container {
                max-height: 350px;
                overflow-y: auto;
                /* width */
                ::-webkit-scrollbar {
                width: 5px;
                }

                /* Track */
                ::-webkit-scrollbar-track {
                background: #f5f5f5;
                }

                /* Handle */
                ::-webkit-scrollbar-thumb {
                background: #555;
                }
            }
        }
    }
    @media screen and (max-width: 501px) {
        .photoDescription {
            .container {
                .desc {
                    font-size: .95rem;
                }
            }
        }
    }
`

export default PhotoOpen