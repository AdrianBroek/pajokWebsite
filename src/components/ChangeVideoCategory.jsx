import React, { useState, useEffect, useContext, useCallback } from 'react'

import styled from "styled-components";
import * as palette from './style-variables';
// import user context
import UserContext from './fetchData/data'
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"

export default function ChangeVideoCategory(){
    const {pathname} = useLocation()
    // context data
    const { videoData, loading, categories } = useContext(UserContext)

    const [activeCat, setActiveCat] = useState('')

    useEffect(()=>{
        setActiveCat(pathname.split('/')[3])
    },[categories])

    return (
        <CategoryContainer className='flex'>
            {categories?.map((cat)=> (
                <>
                    <Link style={{position: 'relative' }} to={cat}>
                        <p>{cat}</p>
                        {activeCat == cat ? 
                        <ActiveBall 
                        initial={{ opacity: 0,  }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        /> : ""}
                    </Link>
                    
                </>
            ))}
            <BorderLine></BorderLine>
            <BorderLine></BorderLine>
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    position: relative;
    width: fit-content;        
    justify-content: center;
    gap: .5rem;
    p {
        text-transform: capitalize;
        font-size: .8rem;
        &:hover {
            opacity: .5;
        }
    }

`

const BorderLine = styled.div`
    position: absolute;
    height: 60%;
    width: 20%;
    max-width: 50px;
    :nth-child(odd) {
        top: -20px;
        right: -10px;
        border-top:1px solid ${palette.SEC_COLOR};
        border-right:1px solid ${palette.SEC_COLOR};
    }
    :nth-child(even) {
        bottom: -20px;
        left: -10px;
        border-bottom:1px solid ${palette.SEC_COLOR};
        border-left:1px solid ${palette.SEC_COLOR};
    }
`

const ActiveBall = styled(motion.div)`
    width: 6px;
    height: 6px;
    background-color: ${palette.SEC_COLOR};
    border-radius: 100%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
`


