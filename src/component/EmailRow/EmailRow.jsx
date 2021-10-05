import { Checkbox, IconButton } from '@material-ui/core'
import { CheckBox, LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import React from 'react'
import { useHistory } from 'react-router'
import {
    EmailRowWrapper,
    EmailRowOption, 
    EmailRowTitleH4,
    EmailRowMessageH5, 
    EmailRowDescriptionSpan, 
    Time
} from '.'

const EmailRow = (({id,title,subject, discretion,time}) => {
    const history = useHistory();
    return (
        <EmailRowWrapper onClick={()=>history.push('/mail')} >
            <EmailRowOption>
                <Checkbox size="small" />
                <IconButton size="small">
                    <StarBorderOutlined size="small" />
                </IconButton>
                <IconButton size="small">
                    <LabelImportantOutlined size="small" />
                </IconButton>
            </EmailRowOption>
            <EmailRowTitleH4>
                {title}
            </EmailRowTitleH4>
            <EmailRowMessageH5>
                {subject}{" "}
                <EmailRowDescriptionSpan>- {discretion}</EmailRowDescriptionSpan>
            </EmailRowMessageH5>
            <Time>{time}</Time>
        </EmailRowWrapper>
    )
})

export default EmailRow
