import styled, { css } from 'styled-components/macro';

const Flexy = css`
    display: flex;
    align-items: center;
`

export const EmailRowWrapper = styled.div`
    ${Flexy};
    justify-content:space-between;
    border-bottom: 1px solid whitesmoke;
    height: 40px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        border-bottom: 1px solid whitesmoke;
        transform: scale(1.005);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;
    }
`;

export const EmailRowOption = styled.div`
    margin-right:.5rem
`;

export const EmailRowTitleH4 = styled.h4`
    flex: .2;
    font-size:14px;
    padding: 0 5px;
    font-weight:600;
    letter-spacing: .03rem;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const EmailRowMessageH5 = styled.h5`
    flex: .7;
    font-size:14px;
    font-weight: 500;
    font-size: 15px;
    letter-spacing:.03rem;
    padding-right:50px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
`;

export const EmailRowDescriptionSpan = styled.span`
    font-weight: 400;
    color: gray;
    text-transform: lowercase;
`;

export const Time = styled.p`
    flex: .1;
    display: flex;
    justify-content: flex-end;
    padding-right:10px;
    font-size:13px;
    font-weight:bold;
    letter-spacing:0.02rem;
`;