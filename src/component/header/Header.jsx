import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  Image,
  Input,
} from ".";
// material-ui
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Apps, ArrowDropDown, Notifications } from "@material-ui/icons";
import { logout, SelectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "../../database/firebase";
// img
let img = [
  "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png",
];

const Header = () => {
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    })
  }
  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Image  src={img[0]} alt="Gmail Logo" />
      </HeaderLeft>
      <HeaderMiddle>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Input type="search" placeholder="search mail" />
        <IconButton>
          <ArrowDropDown />
        </IconButton>
      </HeaderMiddle>
      <HeaderRight>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar src={user.photo} onClick={SignOut} />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
