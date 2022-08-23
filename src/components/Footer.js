import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    return (
        <FooterStyle>
            <div className='top'>
                <h3>Pajok Website</h3>
                <h5>Lorem ipsum dolor sit amet.</h5>
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
    height: 20vh;
    display: flex;
    flex-direction: column;
    .top {
        background: #1a1919;
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h5, h3 {
            color: white;
            font-weight: 300;
        }
        h3 {
            font-weight: 600;
        }
        h5 {
            font-size: 1rem;
        }
    }
    .bottom {
        background: #000;
        height: 35%;
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
    }
`

export default Footer