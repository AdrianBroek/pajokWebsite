import React from 'react'
import styled from 'styled-components'
//logo
import pajokLogo from '../images/pajok_logo.png'
// styles
import {Logo, Icon} from '../style/styles'
import { Link } from "react-router-dom";
// icons
import telIcon from '../images/icons/telephone.png'
import email from '../images/icons/email.png'
// style
import * as palette from '../components/style-variables'

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
                    <div className="flex">
                        <IconStyle
                         src={telIcon}/>
                        <h5>+48 510 894 764</h5>
                    </div>
                    <div className="flex">
                        <IconStyle src={email}/>
                        <h5><a href="mailto:lucaskrzyzak@gmail.com">lucaskrzyzak@gmail.com</a></h5>
                    </div>
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

                    <Link to="/videos">
                        <h5>Filmy</h5>
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

const IconStyle = styled(Icon)`
    max-width: 18px;
    filter: invert(98%) sepia(28%) saturate(3%) hue-rotate(95deg) brightness(120%) contrast(100%);
`

const FooterStyle = styled.section`
    width: 100%;
    border-top: 1px solid ${palette.GRAY_COLOR};
    display: flex;
    flex-direction: column;
    background: ${palette.MAIN_COLOR};
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
                h5, a {
                    display: inline-block;
                    padding: 0 1rem 0 0;
                    margin-bottom: .5rem;
                }
            }
        }
        .footer-info {
            text-align: left;
            .flex {
                justify-content: flex-start;
                column-gap: 1rem;
                margin-bottom: .5rem;
            }
        }
        h5, h2, a {
            color: white;
            font-weight: 300;
        }
        h2 {
            font-weight: 600;
            margin-bottom: 1rem;
        }
        h5, a {
            font-size: 1rem;

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