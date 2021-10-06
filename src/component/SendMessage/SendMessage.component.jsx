import { Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react'
import {
    Form,
    H3,
    Input,
    InputS,
    SendMessageContainer, SendMessageHeader, SendMessageOption,
} from '.'

const SendMessage = () => {
    return (
        <SendMessageContainer >
            <SendMessageHeader>
                <H3>new message</H3>
                <IconButton>
                    <Close />
                </IconButton>
            </SendMessageHeader>
            <Form>
                <Input type="text" placeholder="To" />
                <InputS type="text" placeholder="Subject" />
                <InputS type="text" placeholder=" Type your message ...." />
                <SendMessageOption>
                    <Button>send</Button>
                </SendMessageOption>
            </Form>
        </SendMessageContainer>
    )
}

export default SendMessage;
