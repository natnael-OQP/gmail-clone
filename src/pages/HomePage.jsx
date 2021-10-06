import React from 'react'
import styled from 'styled-components';
import Header from '../component/header/Header';
import { SendMessageContainer } from '../component/SendMessage';
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
            <SendMessageContainer/>
        </Main>
    )
}

export default HomePage;
