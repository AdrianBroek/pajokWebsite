import React from "react";
import * as palette from './style-variables';
import { 
    ComponentPageLayout,
    BasicMediumImage,
    Line,
 } from "../style/styles";
import styled from "styled-components";

const CreativeExp = () => {

    return (

        <ComponentPageLayout>
            <CreativeExpStyle className="flex">
                <BasicMediumImage>
                    <img src="https://promo-theme.com/novo/wp-content/uploads/2018/10/side-img6.jpg?id=1217" alt="background-image"/>
                </BasicMediumImage>
                <Description className="flex">
                    <Header>
                        <h1>Moja <span><strong>Pasja</strong></span></h1>
                    </Header>
                    <CreativeExpLine />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure vel sequi ratione sit et tempore dolorum quasi totam animi praesentium asperiores explicabo quos labore, maiores fugit, nesciunt hic, temporibus quaerat.</p>
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
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

const Header = styled.header`
    padding: 1.75rem;
    h1 {
        font-size: 2.2rem;
        font-weight: bold;
        text-transform: capitalize;
        font-family: ${palette.ROBOTO}
    }

    span {
        color: ${palette.SEC_COLOR};
        font-size: inherit;
    }

`

const Description = styled.div`
    padding: 2rem;
    flex-direction: column;
`

const CreativeExpLine = styled(Line)`
    width: 35px;
`

export default CreativeExp