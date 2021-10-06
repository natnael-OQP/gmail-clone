import React from "react";
import { Btn, SidebarContainer, SidebarFooter } from ".";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "../sidebaOption/SidebarOption";
import { AccessTime, Duo, ExpandMore, Inbox, Note, Person, Phone } from "@mui/icons-material";
import { NearMe, Star } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { OpenSendMessage } from "../../features/mailSlice";

function Sidebar() {
    const dispatch = useDispatch();
return (
    <SidebarContainer>
        <Btn startIcon={<AddIcon fontSize="large" />} onClick={() =>( dispatch(OpenSendMessage()))} >compact</Btn>
        <SidebarOption Icon={Inbox} title="inbox" number={20} selected={true} />
        <SidebarOption Icon={Star} title="starred" number={20} />
        <SidebarOption Icon={AccessTime} title="snooze" number={20} />
        <SidebarOption Icon={NearMe} title="sent" number={20} />
        <SidebarOption Icon={Note} title="draft" number={20} />
        <SidebarOption Icon={ExpandMore} title="more" number={20} />
        <SidebarFooter>
            <IconButton>
                <Person fontSize="small"/>
            </IconButton>
            <IconButton>
                <Duo fontSize="small"/>
            </IconButton>
            <IconButton>
                <Phone fontSize="small"/>
            </IconButton>
        </SidebarFooter>
    </SidebarContainer>
)}

export default Sidebar;
