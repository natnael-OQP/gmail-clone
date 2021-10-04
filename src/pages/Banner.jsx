import React from 'react'
import styled from 'styled-components';
import Sidebar from '../component/sidebar/Sidebar';

export const BannerContainer = styled.div`
    display: flex;
`;

function Banner() {
    return (
        <BannerContainer>
            <Sidebar />
            
        </BannerContainer>
    )
}

export default Banner
