import React from 'react'
import { useDispatch } from 'react-redux';
import { Bar, Image, LoginWrapper, Logo, Btn } from '.'
import { auth, provider } from '../../database/firebase';
import { login } from '../../features/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const SignIn = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(login({
                email: user.email,
                displayName: user.displayName,
                photo: user.photoURL,
            }))
        }).catch(error=>alert(error))
    }
    return (
        <LoginWrapper >
            <Logo>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' alt="Gmail Logo" />
            </Logo>
            <Bar/>
            <h1>Gmail-clone created by natnael-OQP </h1>
            <Btn onClick={SignIn} >Sign In</Btn>
        </LoginWrapper>
    )
}

export default Login
