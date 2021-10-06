import styled from 'styled-components';

export const SendMessageContainer = styled.div`
    position: absolute;
    bottom: 0;
    right:35px;
    width:494px;
    height:434px;
    background-color: #fff;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    .MuiSvgIcon-root{
        color:whitesmoke;
    }
`;

export const SendMessageHeader = styled.div`

    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #404040;
`;

export const H3 = styled.h4`
    color: whitesmoke;
    text-transform: capitalize;
    font-size:14px;
    letter-spacing:.028rem;
    font-family: Arial, Helvetica, sans-serif;
    padding:0 10px ;
    z-index: 9999;
`;

export const Form = styled.form`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:10px;
`;

export const Input = styled.input`
    height:30px;
    border-bottom: 1px solid whitesmoke;
    padding:10px;
`;

export const InputS = styled.input`
    flex:1;
    height:30px;
    border-bottom: 1px solid whitesmoke;
    padding:10px;
    color: gray;
    font-size: 15px;
    letter-spacing: 0.03rem;
`;

export const SendMessageOption = styled.div`
    margin-top: auto;
    .MuiButton-root{
        background-color: #3079e6 !important;
        text-transform: capitalize;
        letter-spacing:0.029rem;
        margin: 15px;
        color:#fff;
    }
`;

export const Error = styled.p`
    color: #FF9494;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: .03rem ;
    text-align:center;
    background-color: #fff;
    padding: 3px;
    
`;


