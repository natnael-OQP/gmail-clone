import React from 'react'
import { H4, P, SidebarOptionWrapper } from '.'

const SidebarOption = ({Icon,title,number,selected})=> {
    return (
        <SidebarOptionWrapper>
            <Icon />
            <H4>{title}</H4>
            <P selected={selected} >{ number}</P>
        </SidebarOptionWrapper>
    )
}

export default SidebarOption
