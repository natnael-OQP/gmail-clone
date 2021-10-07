import React,{useState,useEffect} from 'react'
import {
    Checkbox,
    IconButton
} from '@material-ui/core'
import {
    ArrowDropDown, 
    ChevronLeft, 
    ChevronRight, 
    Inbox,
    KeyboardHide, 
    LocalOffer,
    MoreVert,
    People,
    Redo, Settings
} from '@mui/icons-material'
import {
    EmailListContainer,
    EmailListSetting,
    EmailListSettingLeft,
    EmailListSettingRight,
    EmailListSection,
    EmailListWrapper,

} from '.'

import EmailRow from '../EmailRow/EmailRow';
import EmailSection from '../EmailSection/EmailSection';
import db from '../../database/firebase'
import FlipMove from 'react-flip-move';

function MailList() {
    const [email, setEmail] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy("timestamp", 'desc').onSnapshot((snapshot) => {
            setEmail(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data:doc.data(),
                }))
            )
        })
    },[])
    return (
        <EmailListContainer >
            <EmailListSetting>
                <EmailListSettingLeft>
                    <Checkbox size="small" />
                    <IconButton size="small" >
                        <ArrowDropDown size="small"/>
                    </IconButton>
                    <IconButton size="small" >
                        <Redo size="small" />
                    </IconButton>
                    <IconButton size="small" >
                        <MoreVert  size="small"/>
                    </IconButton>
                </EmailListSettingLeft>
                <EmailListSettingRight>
                    <IconButton size="small" >
                        <ChevronLeft size="small" />
                    </IconButton>
                    <IconButton size="small" >
                        <ChevronRight size="small" />
                    </IconButton>
                    <IconButton size="small" >
                        <KeyboardHide size="small" />
                    </IconButton>
                    <IconButton size="small" >
                        <Settings size="small" />
                    </IconButton>
                </EmailListSettingRight>
            </EmailListSetting>
            <EmailListSection >
                <EmailSection Icon={Inbox} title="primary" color="red" selected={true}/>
                <EmailSection Icon={People} title="social" color="#1A73E8" />
                <EmailSection Icon={LocalOffer} title="promotion" color="green" />
            </EmailListSection>
            <EmailListWrapper>
                <FlipMove>
                    {
                        email.map(({ id, data: { to, subject, message, timestamp }}) => (
                            <EmailRow
                                key={id} 
                                id={id} 
                                title={to} 
                                subject={subject}
                                message={message} 
                                time={new Date(timestamp?.seconds*1000).toLocaleTimeString() } />
                        ))
                    }
                </FlipMove>
            </EmailListWrapper>
        </EmailListContainer>
    )
}

export default MailList
