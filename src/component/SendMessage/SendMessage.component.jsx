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
import db from '../../database/firebase';
import firebase from 'firebase/compat/app';


const SendMessage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        db.collection('emails').add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        dispatch(CloseSendMessage())
    }
    console.log(watch("to"));
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
