import styled from 'styled-components';

export const EmailListContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    /* firefox */
    scrollbar-width: none;
    /* IE and Edge */
    -ms--ms-overflow-style:none;
    /* hide scroll bar for chrome brave safari opera */
    ::-webkit-scrollbar{
        display:none;
    }

`;

export const EmailListSetting = styled.div`
    flex: 1;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    z-index:999;
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
    display: flex;
    top: 0;
    border-bottom: 1px solid whitesmoke;
    background-color: #fff;
    z-index:999;    
`;
export const EmailListWrapper = styled.div`
    
`;