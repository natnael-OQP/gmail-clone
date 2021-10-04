import React from 'react'
import { Btn, SidebarContainer } from '.'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from '../sidebaOption/SidebarOption';
import { Inbox } from '@mui/icons-material';
import { Star } from '@material-ui/icons';

function Sidebar() {
    return (
        <SidebarContainer >
            <Btn
                startIcon={<AddIcon fontSize='large'/>}
            >
                compact
            </Btn>
            <SidebarOption Icon={Inbox} title="inbox" number={20} selected={true} />
            <SidebarOption Icon={Star} title="starred" number={20} />
        </SidebarContainer>
    )
}

export default Sidebar
