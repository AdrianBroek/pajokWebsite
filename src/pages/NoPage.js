import React from "react";
import {PageLayout,PageContainer, Line} from '../style/styles'
import {HideParent, titleAnim} from '../animation'


const NoPage = () => {

    return (
        <PageContainer>
        <PageLayout 
        variants={HideParent}
        animate='show'
        initial='hidden'
        >

        <h1>Error 404</h1>
        <Line />
        <p>Nie znaleziono strony</p>
        <p>Sprawdź czy wprowadzony link jest poprawny</p>

        </PageLayout>
        </PageContainer>
    )
}

export default NoPage