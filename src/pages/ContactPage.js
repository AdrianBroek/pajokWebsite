import React, {useRef, useState, useEffect} from "react";
import like from '../images/aboutMe/thumbs-up.svg'
import emailjs from '@emailjs/browser';
import loadingif from '../images/contact/spinner.gif'
import background from '../images/contact/background.webp'
//icons
import PaperPlane from '../images/icons/paper-plane.png'
// styles
import {
    PageContainer,
    PageLayout
}
from '../style/styles'


import styled from 'styled-components'
import { motion } from 'framer-motion'
import {Icon} from '../style/styles'

import {PageAnimation,HideParent, svgAnimate, pathAnimate, buttonAnim} from '../animation'

const ContactPage = () => {
    const api_key = process.env.REACT_APP_MAIL_KEY
    const [load, setLoad] = useState(false)
    const [success, setSuccess] = useState(false)
    const [agree, setAgreed] = useState(false)
    const form = useRef();
    const check = useRef();

    const sendEmail = (e) => {
      setLoad(true)
      e.preventDefault();
  
      emailjs.sendForm('service_spv36b4', 'pajok_contact_form', form.current, api_key)
        .then((result) => {
            console.log(result);
            setLoad(false)
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    useEffect(() => {
        if (success) {
            setTimeout(()=> {
                setSuccess(false)
            }, 4000)
        }
    }   
    , [success])
  
    return (

    <ContactContainer>
        <div className="background">
            <img src={background} alr='' />
        </div>
        <PageLayoutContact
        variants={HideParent}
        animate='show'
        initial='hidden'
        exit='exit'
        >
            <ItemContainer>

            <ContactCont>
                <div className='pCont'>
                    <p>Jesteś zainteresowany współpracą?</p>
                    <p>Daj mi znać wypełniając <b>poniższy formularz.</b></p>
                </div>
                <Form ref={form} onSubmit={sendEmail}>
                    <InputContainer>
                        <input minLength='3' required type="text" name="user_name" id="user_name" />
                        <label className="label-name">
                            <span className="content-name">Imię</span>
                        </label>
                    </InputContainer>
                    <InputContainer>
                        <input required type="email" name="user_email" id="user_email"/>
                        <label className="label-name">
                        <span className="content-name">E-mail</span></label>
                    </InputContainer>
                    <div className="agreement" onClick={() => setAgreed(!agree)}>
                        <input checked={agree} required type="checkbox"/>
                        <div className="svgContainer" whileTap={{
                                    scale: 0.95,
                                }}>
                            <motion.svg 
                                
                                className="agreedSvg"
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 448 512">
                                <motion.path
                                    variants={pathAnimate}
                                    initial='hidden'
                                    animate={ agree ? 'visible' : 'hidden'}
                                    d="M438.6 105.4C451.1 117.9 451.1 138.1 
                                    438.6 150.6L182.6 406.6C170.1 419.1 149.9 
                                    419.1 137.4 406.6L9.372 278.6C-3.124 
                                    266.1-3.124 245.9 9.372 233.4C21.87 220.9 
                                    42.13 220.9 54.63 233.4L159.1 338.7L393.4 
                                    105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" 
                                    stroke="#0ec717" 
                                    strokeWidth="20"
                                />
                            </motion.svg>
                        </div>
                        <span className="content-name"><i>Wyrażam zgodę na przetwarzanie danych
                        osobowych w związku z umieszczeniem przeze mnie danych osobowych do formularza kontaktowego.
                        Podanie danych jest dobrowolne, ale niezbędne do przetwodzenia zapytania.
                        Zostałem/am poinformowany/a, że przysługuje mi prawo dostępu do swoich
                        danych, możliwości ich poprawienia, żądania zaprzestania ich przetwarzania.
                        Administratorem danych jest administrator strony internetowej
                        Pajok Website.com</i></span>
                    </div>
                    <TextAreaContainer>
                        <textarea maxLength="1000" minLength='20' placeholder="Wiadomość" required name="message" />
                    </TextAreaContainer>
                    <SendBtn
                    variants={buttonAnim}
                    whileTap={{
                        scale: 0.95,
                    }}
                    whileHover="hover">
                        <input 
                            type="submit" 
                            value="">
                        </input>
                        <h4>Wyślij</h4>
                        <Icon src={PaperPlane} />
                    </SendBtn>
                </Form>
            </ContactCont>

            <Load
                variants={PageAnimation}
                animate={load ? 'show' : 'hidden'}
                initial='hidden'>
                
                <h5>Wysyłam...</h5>
                <Icon
                src={loadingif} 
                />        
            </Load>

            <Send
                variants={PageAnimation}
                animate={success ? 'show' : 'hidden'}
                initial='hidden'>
                <h5>Wiadomość wysłana</h5>
                <Icon src={like} 
            />        
            </Send>
            </ItemContainer>
        </PageLayoutContact>
    </ContactContainer>
    );
}

const PageLayoutContact = styled(PageLayout)`
    position: relative;
    overflow: hidden;
    max-width: 1000px;
    margin: auto;
    margin-bottom: 5rem;
    border-radius: .5rem;
    height: 700px;
    row-gap: 0;
    display: block;
`

const ContactContainer = styled(PageContainer)`
    margin-top: 0;
    .background {
        width: 100%;
        max-height: 350px;
        position: relative;
        &:before{
            font-family: 'Assistant', sans-serif;
            text-transform: uppercase;
            z-index: 1;
            content: 'Kontakt';
            font-size: 5rem;
            font-weight: 600;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            @media screen and (max-width: 768px){
                font-size: 10vw;
            }
        }
        img {
            max-width: 100%;
            width: 100%;
            max-height: 350px;
            object-fit: cover;
            filter: blur(3px);
            opacity: .35;
        }
    }
`
const Send = styled(motion.div)`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    top: 10%;
    right: 2.5%;
    border-radius: .5rem;
    padding: .5rem;
    background: rgba(70,130,180, .5);
    h5 {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }
    img {
        max-width: 20px;
        filter: invert(93%) sepia(100%) saturate(27%) hue-rotate(103deg) brightness(108%) contrast(106%);
    }
`

const SendBtn = styled(motion.div)`
    position: relative;
    border-radius: .5rem;
    border: 1px solid #000;
    padding: .5rem;
    background: #fff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: .85rem;
    margin: auto;
    width: 50%;
    background-color: #1A1919;
    input {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        padding: 1rem;
        font-size: 1rem;
        margin: auto;
        background: transparent;
        z-index: 2;
    }
    h4 {
        font-size: 1rem;
        font-weight: 500;
    }
    img {
        filter: invert(93%) sepia(100%) saturate(27%) hue-rotate(103deg) brightness(108%) contrast(106%);
    }
`


const Load = styled(Send)`
    background: rgba(70,130,180, .1);
`

const ContactCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .pCont {
        text-align: center;
        padding: 2rem;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    width: 80%;
    font-weight: normal;
    font-family: 'Jost', sans-serif;
    .agreement {
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        column-gap: .8rem;
        .svgContainer {
            position: relative;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            &::before {
                content: "";
                display: block;
                width: 80%;
                height: 80%;
                border: 1px solid black;
                border-radius: 0.25rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
            }
        }
        input[type="checkbox"] {
            display: none;
        }
        .content-name {
            font-size: .85rem;
            max-height: 100px;
            overflow-y: auto;
            display: block;
            &::-webkit-scrollbar {
                width: 4px;
            }
        }
        .agreedSvg {
            max-width: 20px;
            min-width: 20px;
        }
    }
`

const Logo = styled(Icon)`
    width: 100px;
    max-width: unset;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`

const TextAreaContainer = styled.div`
    textarea {
        font-family: 'Jost', sans-serif;
        background: #ffffff7a;
        outline: none;
        width: 100%;
        height: 100px;
        border: 1px solid #000;
        font-size: 1rem;
        border-radius: 0.5rem;
        padding: .5rem .5rem;
        max-height: 280px;
        max-width: 100%;min-width: 100%;
        &::placeholder {
            font-size: 1rem;
            font-weight: 300;
            color: #000;
        }
    } 
`

const ItemContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
`


const InputContainer = styled.div`
    position: relative;
    height: 70px;
    label {
        background: transparent;
        position: absolute;
        bottom: 0px;
        left: 0%;
        width: 100%;
        height: 100%;
        pointer-events: none;
        font-size: 1rem;
        border-bottom: 1px solid #000;
        overflow: hidden;
        &::after {
            content: '';
            width: 100%;
            position: absolute;
            top: -2px;
            left: 0;
            height: 100%;
            border-bottom: 2px solid #5fa8d3;
            transition: .3s ease;
            transform: translateX(-101%)
        }
        span {
            position: absolute;
            bottom: 15px;
            left: 0px;
            transition: all .3s ease;
            font-size: .9rem;
        }
    }
    input {
        background: transparent;
        font-size: 1rem;
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
        padding: 1rem 0 0 .5rem;
    }
    input:focus + .label-name .content-name,
    input:valid + .label-name .content-name{
        transform: translateY(-150%);
        color: #5fa8d3;
        font-size: .8rem;
        bottom: 20px;
    }
    input:focus + .label-name::after,
    input:valid + .label-name::after
    {
        transform: translateX(0%)
    }
`


export default ContactPage
