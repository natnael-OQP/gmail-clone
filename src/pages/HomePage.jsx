import React from 'react'
import Header from '../component/header/Header';
import Banner from './Banner';
import styled from 'styled-components';
export const Main = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;

`;

export const HomePage = () => {
    return (
        <Main>
            <Header />
            <Banner />
        </Main>
    )
}
