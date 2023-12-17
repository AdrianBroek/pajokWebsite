import React, {useState} from "react";
import * as palette from './style-variables';
import styled from "styled-components";
// styles
import {
    ComponentPageLayout,
    SmallLine,
    Icon,
    BasicSmallImage
} from '../style/styles'

const WhyMe = ({props}) => {

    // console.log(props)

    return (

        <ComponentPageLayout>
            <Description className="flex">
                <Header>
                    <h1>Co daje współpraca <span><strong>ze mną</strong></span></h1>
                </Header>
                <SmallLine />

                <BubbleContainer>
                {props?.map((bubbleData, index)=> (
                    <Bubble key={index} className="flex">
                        <BasicSmallImageWhyMe>
                            <WhyMeIcon className="filter-orange" src={bubbleData.bubbleImage.url} alt="bubble icon"/>
                        </BasicSmallImageWhyMe>
                        <h2>{bubbleData.bubbleHeader}</h2>
                        <p>{bubbleData.bubbleText}</p>
                    </Bubble>
                ))}
                </BubbleContainer>
            </Description>
        </ComponentPageLayout>
    )
}



export default WhyMe

const WhyMeIcon = styled(Icon)`
    max-width: 50px !important;
    height: 50px;
`

const BasicSmallImageWhyMe = styled(BasicSmallImage)`
    border-radius: 100%;
    border: 1px solid ${palette.SEC_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
`

const BubbleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    place-content: center;
    gap: 3rem .5rem;
    padding: 2rem 0;
    width: 100%;
`
const Bubble = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 1rem;
    padding: 3rem;
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
    width: 100%;
`

