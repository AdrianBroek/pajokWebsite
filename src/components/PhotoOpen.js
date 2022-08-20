import React, {useState} from "react";
import styled from "styled-components";
import Overlay from '../components/Overlay'

const PhotoOpen = ({current, setCurrent, open, setOpen}) => {
    
    return (
        <Container>
        <Overlay setCurrent={setCurrent} open={open} setOpen={setOpen} />
        <PhotoStyle>
            <div className="imgContainer">
                <img src={current} alt='' />
            </div>
        </PhotoStyle>
        </Container>
    )
}

const Container = styled.div`
    z-index: 2;
    .overlay {
        display: none;
        &.open {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0000009c;
        }
    }
    
    
`

const PhotoStyle = styled.section`
        width: fit-content;
        height: fit-content;
        max-height: 90%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    .imgContainer {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
`

export default PhotoOpen