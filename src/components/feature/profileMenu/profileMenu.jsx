import React from 'react'

import { Transition } from "@headlessui/react";
import logo from '../../../assets/icons/nav__logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch, faUser, faUserAlt, faUserCircle, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import userIcon from '../../../assets/icons/user.svg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {  alpha } from '@mui/material/styles';

import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../profileMenu/profileMenu.css'
import { Divider } from '@mui/material';



const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: "#9D9AA2",
      backgroundColor :"#413F45",
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:hover":{
            color : "#fff"
        },
        '&:active': {

          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
export default function ProfileMenu() {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex">
    <button 
         id="demo-customized-button"
         aria-controls={open ? 'demo-customized-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         variant="contained"
         disableElevation
         onClick={handleClickMenu}
         endIcon={<ArrowDropDownIcon />}
         type="button" className="max-w-xs ml-2 login__btn flex items-center text-sm focus:outline-none" >
        <img src={userIcon} alt="" />
      </button>
 
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      
      >
        <MenuItem className='profileMenu' onClick={()=> {handleClose()}} disableRipple >
        <PermIdentityIcon   style={{color : "#9D9AA2",fontSize: "21px"}}/>
         Profile
        </MenuItem>
        <MenuItem className='profileMenu' onClick={()=> {handleClose()}}  disableRipple>
        <FavoriteBorderIcon   style={{color : "#9D9AA2"}}/>
          Watchlist
        </MenuItem>
        <Divider style={{margin : 0, background : "#9D9AA2", marginRight : "15px", marginLeft : "15px"}} /> 
        <MenuItem  className='profileMenu'onClick={()=> {handleClose()}} disableRipple>
          <LogoutIcon   style={{color : "#9D9AA2", transform : "rotate(180deg)"}}/>
          Sign out
        </MenuItem>
      </StyledMenu>
      
    </div>
  )
}
