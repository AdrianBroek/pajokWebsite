import React, {useState} from "react";
import * as palette from './style-variables';
import styled from "styled-components";
// styles
import {
    ComponentPageLayout,
    Line
} from '../style/styles'
import Slider from "./Slider";

const VideoComponent = ({videos}) => {

    return (
        <VideoComponentLayout>
            <Header>
                <h1>Moje <span><strong>Prace</strong></span></h1>
            </Header>
            <VideoLine />
            <Slider props={videos}/>
        </VideoComponentLayout>
        
    )
}

const VideoComponentLayout = styled(ComponentPageLayout)`
    background-color: ${palette.TH_COLOR};
    padding: 4rem 0;
    row-gap: 1rem;
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

const VideoLine = styled(Line)`
    width: 35px;
`

export default VideoComponent