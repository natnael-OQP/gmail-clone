import React from 'react'
import styled from 'styled-components';
import Header from '../component/header/Header';
import SendMessage from '../component/SendMessage/SendMessage.component';
import EmailBodyPage from './EmailBodypage';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../features/mailSlice';

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    overflow: hidden;
`;

const HomePage = () => {
    
    const SendMessageIsOpen = useSelector(selectSendMessageIsOpen );

    return (
        <Main>
            <Header />
            <EmailBodyPage />
            {SendMessageIsOpen && <SendMessage/> }
        </Main>
    )
}

export default HomePage;
