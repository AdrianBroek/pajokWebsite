import React from "react";
// styled
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {HideParent2, titleAnim} from '../animation'
import {PageLayout,PageContainer, Line, Hide} from '../style/styles'
import TextShadow from "../components/TextShadow";

const Prices = () => {

    return (
        <PageContainer>
        <PageLayout 
        variants={HideParent2}
        animate='show'
        initial='hidden'
        >
        <TextShadow text='Cennik'/>
        <Line />
        <Hide>
            <Price variants={titleAnim}>
                <div className="ball"></div>
                <p>10 zdjęć - 150zł</p>
            </Price>
        </Hide>
        <Hide>
            <Price variants={titleAnim}>
                <div className="ball"></div>
                <p>15 zdjęć - 200zł</p>
            </Price>
        </Hide>
        <Hide>
            <Price variants={titleAnim}>
                <div className="ball"></div>
                <p>20 zdjęć - 250zł</p>
            </Price>
        </Hide>

        </PageLayout>
        </PageContainer>
    )
}

const Price = styled(motion.div)`
    display: flex;
    align-items: center;
    .ball {
        background-color: #000;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        margin-right: 1rem;
    }
`

export default Prices