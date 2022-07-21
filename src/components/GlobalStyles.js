import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Joan', serif;
    }
    h1 {
        font-size: 5rem;
    }
    a, p, span, h3 {
        font-size: 1.5rem;
        color: #000;
        font-weight: 300;
    }
    a {
        text-decoration: none;
    }
    .even {
        margin-bottom: 3rem;
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