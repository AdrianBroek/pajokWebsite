import React from "react";
import styled from "styled-components";

const TextShadow = ({text}) => {

    return (
        <CategoryName className="text-shadow">
            <h1>{text}</h1>
            <h1 className="noselect" style={{visibility: 'hidden'}}>{text}</h1>
            <p className="noselect">{text}</p>
        </CategoryName>
    )
}

const CategoryName = styled.div`
    position: relative;
    h1 {
        line-height: 0.75;
    }
    p {
        position: absolute;
        top: 45%;
        left: 1.5%;
        width: 100%;
        font-family: 'Assistant',sans-serif;
        text-transform: uppercase;
        font-size: 5rem;
        font-weight: 300;
        transform: rotateX(130deg) skewX(-10deg);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(0, #77777741 0, transparent 80%);
        line-height: 0.75;
        @media screen and (max-width: 768px){
            font-size: 10vw;
        }
    }
`

export default TextShadow