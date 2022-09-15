import { createGlobalStyle } from "styled-components";

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
        /* font-family: 'Joan', serif; */
        font-family: 'Jost', sans-serif;
        overflow-x: hidden;
    }
    .vimeoVideo {
        padding: 35% 0 0 0;
        position: relative;
        width:60%;
        height:auto;
        @media screen and (max-width: 768px){
            padding: 45% 0 0 0;
            width: 90%;
        }
    }
    h1 {
        font-family: 'Assistant', sans-serif;
        text-transform: uppercase;
        font-size: 5rem;
        @media screen and (max-width: 768px){
            font-size: 10vw;
        }
    }
    a, p, span, h3 {
        font-size: 1.5rem;
        color: #000;
        font-weight: 300;
        @media screen and (max-width: 601px){
            font-size: 1.3rem;
        }
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