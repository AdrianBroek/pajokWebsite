import React from "react";
import styled from "styled-components";
import {HideParent2, titleAnim} from '../animation'
import {PageLayout,PageContainer, Line, Hide} from '../style/styles'
import {motion} from 'framer-motion'

const Price = ({price}) => {

    return (
        <Hide>
            <PriceStyle variants={titleAnim} animate='show' initial='hidden'>
                <div className="ball"></div>
                <p>{price.photoCount.text}:</p>
                <p>{price.cena} zł</p>
            </PriceStyle>
        </Hide>
    )
}

const PriceStyle = styled(motion.div)`
    display: flex;
    align-items: center;
    column-gap: .25rem;
    .ball {
        background-color: #000;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        margin-right: 1rem;
    }
`

export default Price