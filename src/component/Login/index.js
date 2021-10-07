import styled from 'styled-components';
import { Button } from '@material-ui/core'

export const LoginWrapper = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`;

export const Logo = styled.div`
    width:200px;
    height:190px;
`;

export const Bar = styled.div`
    background-color: #EA4335;
    height:3px;
    width:230px;
    margin-top:6px ;
    margin-bottom:10px ;
`;

export const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit:contain;
`;
export const AboutH3 = styled.h4`
    font-family: 'Roboto' sans-serif;
    font-weight: lighter; ;
    color:#1A1C2C;
    font-style: italic;
    margin: 7px;
`;
export const Btn = styled(Button)`
    margin-top: .5rem !important;
    .MuiButton-label{
        display:flex !important;
        align-items: center !important;
        justify-content: center !important;
        width:200px !important;
        height:40px !important;
        background-color: #42A6F8 !important;
        color:#fff !important;
        border-radius: 5px !important;
    }
    .MuiButton-text,.MuiButton-root{
        padding:0 !important;
        margin:0 !important;
    }
`;
