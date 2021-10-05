import styled from 'styled-components';

export const MailContainer = styled.div`
    flex:1;
    background-color: whitesmoke ;
    
`;

export const MailHeader = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .MuiIconButton-roo{
        font-size: 1.3rem;
        padding: 7px;
    }
    padding: 0 6px 0px 2px;
`;

export const MailHeaderLeft = styled.div`
`;
export const MailHeaderRight = styled.div`
`;

export const MailBody = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
`;

export const MailBodyHeader = styled.div`
    display: flex;
    align-items:center;
    border-bottom: 1px solid whitesmoke;
    padding: 10px 20px;
    .MuiSvgIcon-root{
       
    }
`;

export const H3 = styled.h3`
    font-weight: 500;
    margin-right: 12px;
    letter-spacing:.03rem;
`;

export const P = styled.p`
    flex: 1;
    color: gray;
    font-weight:400;
`;

export const Time = styled.p`
    color: gray;
    font-weight:400;
`;

export const MailMessage = styled.p`
    font-weight:400;
    padding: 10px 5px;
    letter-spacing:.03rem;
    margin-right: 15px;
    overflow-wrap:break-word;
`;