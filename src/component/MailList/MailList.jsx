import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import React from 'react'
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

function MailList() {
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
                <EmailRow title="descored" subject="Flutter js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="web " subject="java js job " discretion="new 20 web development job in  hello world job development job in  hello nathan" time="09pm"  />
                <EmailRow title="papa react " subject="React js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="Html development js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="Ai js js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="React js job " discretion="new 20 web development job in  hello world" time="sdfshgjfhgjfh"  />
                <EmailRow title="descored" subject="React js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="web " subject="React js job " discretion="new 20 web development job in  hello world job development job in  hello nathan" time="09pm"  />
                <EmailRow title="papa react " subject="React js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="web development js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="Ai js js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="React js job " discretion="new 20 web development job in  hello world" time="sdfshgjfhgjfh"  />
                <EmailRow title="descored" subject="React js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="web " subject="React js job " discretion="new 20 web development job in  hello world job development job in  hello nathan" time="09pm"  />
                <EmailRow title="papa react " subject="React js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="web development js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="Ai js js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="React js job " discretion="new 20 web development job in  hello world" time="sdfshgjfhgjfh"  />
                <EmailRow title="descored" subject="React js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="web " subject="React js job " discretion="new 20 web development job in  hello world job development job in  hello nathan" time="09pm"  />
                <EmailRow title="papa react " subject="React js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="web development js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="Ai js js job " discretion="new 20 web development job in  hello world" time="09pm"  />
                <EmailRow title="indeed" subject="React js job " discretion="new 20 web development job in  hello world" time="sdfshgjfhgjfh"  />
            </EmailListWrapper>
        </EmailListContainer>
    )
}

export default MailList
