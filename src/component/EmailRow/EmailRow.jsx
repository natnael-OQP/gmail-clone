import React from 'react'
import { useHistory } from 'react-router'
import { Checkbox, IconButton } from '@material-ui/core'
import { CheckBox, LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import {
    EmailRowWrapper,
    EmailRowOption, 
    EmailRowTitleH4,
    EmailRowMessageH5, 
    EmailRowDescriptionSpan, 
    Time
} from '.'
import { useDispatch } from 'react-redux'
import { MailSelected } from '../../features/mailSlice'

const EmailRow = (({id,title,subject, message,time}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onSelected = () => {
        dispatch(MailSelected({
            id: id,
            title: title,
            subject: subject,
            message: message,
            time: time,
        }))
        history.push('/mail')
    }
    return (
        <EmailRowWrapper onClick={onSelected} >
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
                <EmailRowDescriptionSpan>- {message}</EmailRowDescriptionSpan>
            </EmailRowMessageH5>
            <Time>{time}</Time>
        </EmailRowWrapper>
    )
})

export default EmailRow
