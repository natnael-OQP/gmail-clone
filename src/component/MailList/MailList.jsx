import { IconButton } from '@material-ui/core'
import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings } from '@mui/icons-material'
import React from 'react'
import {
    EmailListContainer,
    EmailListSetting,
    EmailListSettingLeft,
    EmailListSettingRight,
    EmailListSection,

} from '.'

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
                <EmailListSection>
                    <h1>section</h1>
                </EmailListSection>
        </EmailListContainer>
    )
}

export default MailList
