import styled from 'styled-components';


export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    height:60px;
    padding:0 10px;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width:109px;
    height: 40px;
    object-fit:contain;
    cursor: pointer;
`;

export const HeaderMiddle = styled.div`
    display: flex;
    align-items: center;
    flex:.6;
    background-color: whitesmoke;
    padding: 7px;
    border-radius: 5px;
    height:42px;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        background-color: #fff;
    }
    .MuiIconButton-root{
        padding: 7px;
        font-size:1.3rem;
        margin-right: .5rem;
    }
`;

export const Input = styled.input`
    background-color: transparent;
    height: 100%;
    width: 100%;
    font-size: 15px;
    letter-spacing:.02rem;
    font-family:sans-serif;
    font-weight: lighter;
`;

export const HeaderRight = styled.div`
    display:flex;
    align-items: center;
    flex:.3;
    justify-content: flex-end;
    .MuiIconButton-root{
        padding: 10px;
        font-size:1.3rem;
        margin-right: .5rem;
    }
`;

