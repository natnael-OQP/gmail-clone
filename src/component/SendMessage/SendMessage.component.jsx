import { Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react'
import {
    Error,
    Form,
    H3,
    Input,
    InputS,
    SendMessageContainer, SendMessageHeader, SendMessageOption,
} from '.'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { CloseSendMessage } from '../../features/mailSlice';


const SendMessage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    console.log(watch("to"));
    const dispatch = useDispatch();
    return (
        <SendMessageContainer >
            <SendMessageHeader>
                <H3>new message</H3>
                <IconButton onClick={() => dispatch(CloseSendMessage())} >
                    <Close />
                </IconButton>
            </SendMessageHeader>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input   {...register("to", { required: true })} type="email" placeholder="To" />
                {errors.to && <Error>&#9888; Email is required </Error>}
                <InputS  {...register("subject", { required: true })} type="text" placeholder="Subject" />
                {errors.subject && <Error>&#9888; subject is required  </Error>}
                <InputS  {...register("message", { required: true })} type="text" placeholder=" Type your message ...." />
                {errors.message && <Error> &#9888; message is required  </Error>}
                <SendMessageOption>
                    <Button type="submit" >Send</Button>
                </SendMessageOption>
            </Form>
        </SendMessageContainer>
    )
}

export default SendMessage;
