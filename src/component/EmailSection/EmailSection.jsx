import React from 'react'
import {css}  from 'styled-components/macro';
import { EmailSectionContainer,H4 } from '.'


const EmailSection = ({Icon,title,color,selected,}) => {
    return (
        <EmailSectionContainer
                css={`
                &:hover{
                    background-color: whitesmoke;
                    border-width:2px !important;
                    border-bottom: 1px solid ${color};
                }
            `}
            color={color} selected={selected}  >
            <Icon fontSize="small" />
            <H4 >{title}</H4>
        </EmailSectionContainer>
    )
}

export default EmailSection
