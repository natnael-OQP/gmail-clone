import React from 'react'
import styled from 'styled-components';
import Header from '../component/header/Header';
import EmailBodyPage from './EmailBodypage';

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    overflow: hidden;
`;

const HomePage = () => {
    return (
        <Main>
            <Header />
            <EmailBodyPage/>
        </Main>
    )
}

export default HomePage;
