import React from 'react'
import styled from 'styled-components'
//logo
import pajokLogo from '../images/pajok_logo.png'
// styles
import {Logo} from '../style/styles'
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <FooterStyle>
            <div className='top'>
                <div className='footer-logo'>
                    <div className='footer-img-container'>
                        <Logo src={pajokLogo}></Logo>
                    </div>
                </div>
                <div className='footer-info'>
                    <h2>Kontakt</h2>
                    <h5>+48 510 894 764</h5>
                    <h5>lucaskrzyzak@gmail.com</h5>
                </div>
                <div className='footer-map'>
                    <h2>Mapa strony</h2>
                    <div className='footer-map-items'>
                    
                    <Link to="/o-mnie">
                        <h5>O mnie</h5>
                    </Link>

                    <Link to="/kontakt">
                        <h5>Kontakt</h5>
                    </Link>

                    <Link to="/photo">
                        <h5>Zdjęcia</h5>
                    </Link>

                    <Link to="/video">
                        <h5>Wideo</h5>
                    </Link>
                        
                    </div>
                </div>

            </div>
            <div className='bottom'>
                <p>Created by Adrian Brożek</p>
                <p><a href="mailto:Adrianbro96@gmail.com">Adrianbro96@gmail.com</a></p>
            </div>
        </FooterStyle>
    )
}

const FooterStyle = styled.section`
    width: 100%;
    /* height: 25vh; */
    display: flex;
    flex-direction: column;
    background: #1a1919;
    .top {
        max-width: 1640px;
        padding: 2rem;
        column-gap: 2rem;
        /* height: 85%; */
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .footer-logo, .footer-map, .footer-info{
            flex: 2;
        }
        .footer-logo {
            .footer-img-container {
                margin: auto;
                height: 80px;
                width: 80px;
                border-radius: 50%;
                overflow: hidden;
            }
        }
        .footer-map {
            .footer-map-items {
                width: 40%;
                h5 {
                    display: inline-block;
                    padding: 0 1rem 0 0;
                }
            }
        }
        .footer-info {

        }
        h5, h2 {
            color: white;
            font-weight: 300;
        }
        h2 {
            font-weight: 600;
            margin-bottom: 1rem;
        }
        h5 {
            font-size: 1rem;
            margin-bottom: .5rem;
        }
        @media screen and (max-width: 768px){
            .footer-logo, .footer-info {
                flex: 1;
            }
            .footer-map {
                .footer-map-items {
                    width: 100%;
                }
            }
        }
        @media screen and (max-width: 501px){
            flex-direction: column;
            row-gap: 2rem;
        }
    }
    .bottom {
        padding: .25rem;
        background: #000;
        /* height: 15%; */
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 1rem;
        p {
            color: #ffffff7e;
            font-size: 1rem;
            &:last-child {
                a{
                    font-size: 1rem;
                    color: #fff;
                }
            }
        }
        @media screen and (max-width: 501px){
            p  {
                font-size: 4vw;
                &:last-child {
                a{
                    font-size: 4vw;
                }
            }
        }
    }
    }
`

export default Footer