import React, { useState, useEffect, useContext } from 'react'
// defined styles
import styled from 'styled-components'
// defined styles
import {PageLayout,PageContainer, Header} from '../style/styles'
import {HideParent} from '../animation'
import ChangeVideoCategory from '../components/ChangeVideoCategory'
import * as palette from '../components/style-variables';

import { Outlet } from 'react-router-dom'

const VideoCategoryPage = () => {

    return (
      <>
        <PageContainer>
        <PageLayout 
            // variants={HideParent}
            // animate='show'
            // initial='hidden'
        >
            <Header>
                <h1>Filmy <span><strong>Wideo</strong></span></h1>
            </Header>
            <ChangeVideoCategory />
            <Outlet />
        </PageLayout>
            
        </PageContainer>
        </>
    )
}



export default VideoCategoryPage

