import { IconButton } from '@material-ui/core'
import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import React from 'react'
import {
    EmailListContainer,
    EmailListSetting,
    EmailListSettingLeft,
    EmailListSettingRight,
    EmailListSection,

} from '.'
import EmailSection from '../EmailSection/EmailSection';

function MailList() {
    return (
        <EmailListContainer >
            <EmailListSetting>
                <EmailListSettingLeft>
                    <CheckBox />
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </EmailListSettingLeft>
                <EmailListSettingRight>
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </EmailListSettingRight>
            </EmailListSetting>
            <EmailListSection >
                <EmailSection Icon={Inbox} title="primary" color="red" selected={true}/>
                <EmailSection Icon={People} title="social" color="#1A73E8" />
                <EmailSection Icon={LocalOffer} title="promotion" color="green" />
            </EmailListSection>
        </EmailListContainer>
    )
}

export default MailList
