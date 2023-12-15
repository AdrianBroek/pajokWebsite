import React from "react";
import styled from "styled-components";
import {HideParent2, titleAnim} from '../animation'
import {PageLayout,PageContainer, Line, Hide} from '../style/styles'
import {motion} from 'framer-motion'
import * as palette from '../components/style-variables'

const Price = ({price}) => {

    return (
        <HidePrice>
            <PriceStyle variants={titleAnim} animate='show' initial='hidden'>
                <p>{price.photoCount.text}:</p>
                <p>{price.cena} zł</p>
            </PriceStyle>
        </HidePrice>
    )
}

const HidePrice = styled(Hide)`
    box-shadow: ${palette.SHADOW1};
`

const PriceStyle = styled(motion.div)`
    display: flex;
    align-items: center;
    column-gap: .25rem;
    background-color: ${palette.RD_COLOR};
    padding: 4rem;
`

export default Price