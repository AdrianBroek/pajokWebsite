import React from "react";
import * as palette from './style-variables';
import { 
    ComponentPageLayout,
    BasicMediumImage,
    Line,
 } from "../style/styles";
import styled from "styled-components";

import {buttonAnim} from '../animation'
import { Icon } from "../style/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const ContactMe = () => {

    return (

        <ComponentPageLayout>
            <CreativeExpStyle>
                {/* <BasicMediumImage>
                    <img src="https://promo-theme.com/novo/wp-content/uploads/2018/10/side-img6.jpg?id=1217" alt="background-image"/>
                </BasicMediumImage> */}
                <Description className="flex">
                    <Header>
                        <h1>Skontaktuj się <span><strong>ze mną!</strong></span></h1>
                    </Header>
                    
                    <p>Jesteś zainteresowany? Napisz do mnie maila lub wypełnij formularz.</p>
                    <SendBtn
                    variants={buttonAnim}
                    whileTap={{
                        scale: 0.95,
                    }}
                    whileHover="hover">
                        <Link to="/kontakt">
                            <h4>Przejdź do formularza</h4>
                        </Link>
                    </SendBtn>
                </Description>
            </CreativeExpStyle>
        </ComponentPageLayout>
    )

}

const CreativeExpStyle = styled.article`
    position: relative;
    top: -30px;
    width: 80%;
    background-color: ${palette.MAIN_COLOR};
`

const Header = styled.header`

    h1 {
        font-size: 2.2rem;
        font-weight: bold;
        text-transform: capitalize;
        font-family: ${palette.ROBOTO};
        text-align: center;
    }

    span {
        color: ${palette.SEC_COLOR};
        font-size: inherit;
    }

`

const Description = styled.div`
    padding: 2rem;
    flex-direction: column;
    row-gap: 2rem;
    text-align: center;
`

const CreativeExpLine = styled(Line)`
    width: 35px;
`

const SendBtn = styled(motion.div)`
    position: relative;
    border: 1px solid ${palette.SEC_COLOR};
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 120px;
    background-color: transparent;
    h4 {
        font-size: .8rem;
        font-weight: 500;
        text-align: center;
    }
`


export default ContactMe