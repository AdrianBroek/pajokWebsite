import React from "react";
import * as palette from './style-variables';
import { 
    ComponentPageLayout,
    BasicMediumImage,
    SmallLine,
 } from "../style/styles";
import styled from "styled-components";

const CreativeExp = ({props}) => {

    return (
        <ComponentPageLayout>
            <CreativeExpStyle className="flex">
                <BasicMediumImage style={{flex: 1}}>
                    <img src="https://promo-theme.com/novo/wp-content/uploads/2018/10/side-img6.jpg?id=1217" alt="background-image"/>
                </BasicMediumImage>
                <Description className="flex" style={{flex: 1}}>
                    <Header>
                        <h1>Moja <span><strong>Pasja</strong></span></h1>
                    </Header>
                    <SmallLine />
                    <p>{props}</p>
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
    row-gap: 1rem;
    flex-direction: column;
`

export default CreativeExp