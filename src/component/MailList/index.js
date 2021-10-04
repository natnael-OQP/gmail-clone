import styled from 'styled-components';

export const EmailListContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

export const EmailListSetting = styled.div`
    flex: 1;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid whitesmoke;
`;

export const EmailListSettingLeft = styled.div`
    display: flex;
    align-items: center;
    .MuiButtonBase-root{
        padding: 7px;
        font-size: 1.2rem;
    }
`;

export const EmailListSettingRight = styled.div`
    display: flex;
    align-items: center;
    .MuiButtonBase-root{
        padding: 7px;
        font-size: 1.2rem;
    }
`;
export const EmailListSection = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
`;