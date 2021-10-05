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

function Mail() {

    const history = useHistory();

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
                    <H3>jonas blue</H3>
                    <LabelImportant css={`
                         color: #e8ab02 !important;
                        margin-right:.4rem;
                    `} />
                    <P>(natnaelEmaye@Gmail.com)</P>
                    <Time>10pm</Time>
                </MailBodyHeader>
                <MailMessage >jonas</MailMessage>
            </MailBody>
        </MailContainer>
    )
}

export default Mail;
