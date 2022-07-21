import React, {useRef, useState, useEffect} from "react";
import pajokLogoWhite from '../images/pajok_logo_w.png'
import like from '../images/aboutMe/thumbs-up.svg'
import emailjs from '@emailjs/browser';
import loadingif from '../images/contact/spinner.gif'
import abstract from '../images/contact/abstract2.jpg'

//icons
import sendPNG from '../images/gifs/png/message.png'
import sendGIF from '../images/gifs/message.gif'
import SendBtn from '../components/SendBtn'
// styles
import {
    PageContainer,
    PageLayout
}
from '../style/styles'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import {Icon} from '../style/styles'

import {PageAnimation, buttonAnim} from '../animation'

const ContactPage = () => {
    const api_key = process.env.REACT_APP_API_KEY
    const [load, setLoad] = useState(false)
    const [success, setSuccess] = useState(false)
    const form = useRef();

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
    <PageContainer>
      <PageLayoutContact
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      >
        <Block1 />
        <Block2 />

        <ItemContainer>

            <Logo src={pajokLogoWhite} />

        <ContactCont>
            <TitleContainer>
                <h2>Kontakt</h2>
                <p>ze mną</p>
            </TitleContainer>
            <Form ref={form} onSubmit={sendEmail}>
                <InputContainer>
                    <input required type="text" name="user_name" id="user_name" />
                    <label className="label-name">
                        <span className="content-name">Imię</span>
                    </label>
                </InputContainer>
                <InputContainer>
                    <input required type="text" name="user_email" id="user_email"/>
                    <label className="label-name">
                    <span className="content-name">E-mail</span></label>
                </InputContainer>
                <TextAreaContainer>
                    <textarea maxLength="200" placeholder="Wiadomość" required name="message" />
                </TextAreaContainer>
                <SendBtn png={sendPNG} gif={sendGIF}/>
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
    </PageContainer>
    );
}



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


const Load = styled(Send)`
    background: rgba(70,130,180, .1);
`

const ContactCont = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 40%;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
`

const TitleContainer = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-family: 'system-ui';
    h2 , p{
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
    }
    h2 {
        font-size: 4.25rem;
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
        font-family: 'Roboto', sans-serif;
        background: #ffffff7a;
        outline: none;
        width: 100%;
        height: 100px;
        border: 1px solid #000;
        font-size: 1rem;
        border-radius: 0.5rem;
        padding: .5rem .5rem;
        &::placeholder {
            font-size: 1rem;
            font-weight: 300;
            color: #000;
        }
    } 
`

const Block1 = styled.div`
    position: absolute;
    top: -49%;
    left: -13%;
    width: 150%;
    height: 700px;
    z-index: 1;
    background-color: #fff;
    transform: rotate(35deg) translateX(-0px);
`

const Block2 = styled.div`
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${abstract});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scaleX(-1);
    filter: brightness(0.7);
`
const ItemContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`


const InputContainer = styled.div`
    position: relative;
    height: 60px;
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
            transform: translateX(-100%)
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

const PageLayoutContact = styled(PageLayout)`
    position: relative;
    overflow: hidden;
    max-width: 1000px;
    margin: auto;
    border-radius: .5rem;
    box-shadow: 0 3px 10px -5px;
    /* padding: 10rem 0; */
    height: 700px;
    row-gap: 0;
    display: block;
`
export default ContactPage
