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
    h2 {
        font-family: ${palette.ROBOTO};
    }
    h1,h2 {color: ${palette.WHITE_COLOR};}
    a, p, span, h3, h4 {
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
    }
    .htmlContent {
        li {
            list-style-type: inside;
        }
    }
    .filter-white {
        filter: invert(95%) sepia(5%) saturate(18%) hue-rotate(140deg) brightness(104%) contrast(107%);
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
`

export default GlobalStyles