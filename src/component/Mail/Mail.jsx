import React from 'react'
import { useHistory } from 'react-router';
import {css} from 'styled-components/macro/';
import { IconButton } from '@material-ui/core';
import {
    ArrowBack, 
    Delete,
    Email,
    Error,
    ExitToApp,
    LabelImportant,
    MoveToInbox,
    Print,
    UnfoldMore,
    WatchLater
} from '@material-ui/icons';
import {
    H3,
    MailBody,
    MailBodyHeader,
    MailContainer,
    MailHeader,
    MailHeaderLeft,
    MailHeaderRight,
    P,
    Time,
    MailMessage,
} from '.';

import { useSelector } from 'react-redux';
import { SelectMailSelected } from '../../features/mailSlice';

function Mail() {

    const history = useHistory();
    const SelectedMail = useSelector(SelectMailSelected);

    return (
        <MailContainer>
            <MailHeader>
                <MailHeaderLeft>
                    <IconButton fontSize="small" onClick={()=>history.push('/')}  >
                        <ArrowBack fontSize="small"/>
                    </IconButton>
                    <IconButton fontSize="small" >
                        <MoveToInbox  fontSize="small"/>
                    </IconButton>
                    <IconButton fontSize="small" >
                        <Error  fontSize="small"/>
                    </IconButton>
                    <IconButton fontSize="small" >
                        <Delete fontSize="small"/>
                    </IconButton>
                    <IconButton fontSize="small" >
                        <Email  fontSize="small"/>
                    </IconButton>
                    <IconButton fontSize="small" >
                        <WatchLater  fontSize="small"/>
                    </IconButton>
                </MailHeaderLeft>
                <MailHeaderRight >
                    <IconButton fontSize="small" >
                        <UnfoldMore  fontSize="small"/>
                    </IconButton>
                    <IconButton fontSize="small" >
                        <Print  fontSize="small"/>
                    </IconButton>
                    <IconButton fontSize="small" >
                        <ExitToApp  fontSize="small"/>
                    </IconButton>
                </MailHeaderRight>
            </MailHeader>
            <MailBody>
                <MailBodyHeader>
                    <H3>{SelectedMail.subject}</H3>
                    <LabelImportant/>
                    <P>( {SelectedMail.title} )</P>
                    <Time>{SelectedMail.time}</Time>
                </MailBodyHeader>
                <MailMessage >{ SelectedMail.message }</MailMessage>
            </MailBody>
        </MailContainer>
    )
}

export default Mail;
