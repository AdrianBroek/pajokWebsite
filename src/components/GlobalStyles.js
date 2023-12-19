import { createGlobalStyle } from "styled-components";
import * as palette from './style-variables'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
    body {
        font-family: ${palette.JOST};
        overflow-x: hidden;
    }
    .vimeoVideo {
        width: 100%;
        .content {
            iframe {
            height: 500px;
            width: 100%;
        }
        @media screen and (max-width: 768px){
            width: 90%;
            margin: auto;
            iframe {
                height: 50vw;
                width: 100%;
            }
        }
        }
        
    }
    .invisible {
        background: transparent;
    }
    .mediumDark {
        background: rgba(0,0,0,0.35);
    }
    .dark {
        background: rgba(0,0,0,0.95);
    }
    h1 {
        font-family: ${palette.ASSISTANT};
        text-transform: uppercase;
        font-size: 5rem;
        font-weight: lighter;
        @media screen and (max-width: 768px){
            font-size: 10vw;
        }
    }
    h2,h4,h1 {
        font-family: ${palette.ROBOTO};
    }
    h1,h2, h4 {color: ${palette.WHITE_COLOR};}
    a, p, span, h3 {
        font-size: 1.25rem;
        color: ${palette.MAIN_TEXT_COLOR};
        font-weight: 300;
        @media screen and (max-width: 601px){
            font-size: 1.1rem;
        }
    }
    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    .htmlContent {
        li {
            list-style-type: inside;
        }
    }
    .filter-white {
        filter: invert(95%) sepia(5%) saturate(18%) hue-rotate(140deg) brightness(104%) contrast(107%);
    }
    .filter-orange {
        filter: invert(91%) sepia(50%) saturate(765%) hue-rotate(313deg) brightness(89%) contrast(98%);
    }
    a {
        text-decoration: none;
    }
    .even {
        margin-bottom: 3rem;
    }
    .flex {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f5f5f5;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #000;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
    
    .swiper {
    width: 100%;
    height: 100%;
    }

    .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    .swiper-button-prev,.swiper-button-next {
    color: ${palette.SEC_COLOR}; 
    }
    .swiper-pagination-bullet {
    background: ${palette.SEC_COLOR}; 
    }
    .parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}

`

export default GlobalStyles