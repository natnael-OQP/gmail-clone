import React from 'react'
import styled from 'styled-components';
import Header from '../component/header/Header';
import SendMessage from '../component/SendMessage/SendMessage.component';
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
            <EmailBodyPage />
            <SendMessage/>
        </Main>
    )
}

export default HomePage;
