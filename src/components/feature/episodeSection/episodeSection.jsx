import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../episodeSection/episodeSection.css'
import { useState } from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import ServerCard from '../serverCard/serverCard';
import EpCard from '../epCard/epCard';


const Tab = styled(TabUnstyled)`
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #605D65;
  white-space: nowrap;
  padding : "5px 20px"
  &:focus {
    color: #fff;
    outline: none;
    outline-offset: 0px;
  }
  &:hover{
    background-color: #413F45 !important;
  }

  &.${tabUnstyledClasses.selected} {
    background: #782CE8;
    border-radius: 8px;
    border: 1px solid #782CE8;
    &:hover{
        background-color: #782CE8 !important;
      }
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width : 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  display: flex;
`;

const TabsList = styled(TabsListUnstyled)` 
  width:50%;
  margin-bottom: 16px;
  display: flex;
  justify-content : flex-start;

`;


const season1Eps = [
    {name : "1. Pilot" },
    {name : "2. Look before you leap" },
    {name : "3. Foundation of youth"},
    {name : "4. Long bad man"},
    {name : "5. Look before you leap"},
    {name : "7. Long bad man"},
    {name : "4. Long bad man"},
    {name : "5. Look before you leap"},
    {name : "7. Long bad man"},
    {name : "4. Long bad man"},
    {name : "5. Look before you leap"},
    {name : "7. Long bad man"},
]
const season2Eps = [
    {name : "1. Pilot" },
    {name : "2. Look before you leap" },
    {name : "3. Foundation of youth"},
    {name : "7. Long bad man"},
    {name : "4. Long bad man"},
    {name : "5. Look before you leap"},
    {name : "7. Long bad man"},
]
const season3Eps = [
    {name : "1. Pilot" },
    {name : "2. Look before you leap" },
    {name : "3. Foundation of youth"},
    {name : "4. Long bad man"},
    {name : "5. Look before you leap"},
    {name : "7. Long bad man"},
    {name : "4. Long bad man"},
    {name : "5. Look before you leap"},
]

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: "white",
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
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  

export default function EpisodeSection() {
    const [season, setSeason] = useState("Season 1")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <div>
    <Button
      id="demo-customized-button"
      aria-controls={open ? 'demo-customized-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      variant="contained"
      disableElevation
      onClick={handleClick}
      endIcon={<ArrowDropDownIcon />}
      className="seasonBtn"
    >
      {season}
    </Button>
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    
    >
      <MenuItem onClick={()=> {handleClose();setSeason("Season 1")}} disableRipple >
        Season 1
      </MenuItem>
      <MenuItem onClick={()=> {handleClose();setSeason("Season 2")}}  disableRipple>
        Season 2
      </MenuItem>
      <MenuItem onClick={()=> {handleClose();setSeason("Season 3")}}  disableRipple>
        Season 3
      </MenuItem>
    </StyledMenu>

    <div className='mt-2 epSection'>
    {season === "Season 1" && (
        <TabsUnstyled className='epSection'  defaultValue={0}>
                   
        <TabsList className="flex sm:flex-row eps flex-wrap gap-2">
        {season1Eps.map((ep)=> <Tab><EpCard epName={ep.name}/></Tab>)}
        </TabsList>
       
        </TabsUnstyled>
    )}
      {season === "Season 2" && (
        <TabsUnstyled  defaultValue={0}>
                   
        <TabsList className="flex eps flex-wrap gap-2">
        {season2Eps.map((ep)=> <Tab><EpCard epName={ep.name}/></Tab>)}
        </TabsList>
       
        </TabsUnstyled>
    )}
      {season === "Season 3" && (
        <TabsUnstyled  defaultValue={0}>
                   
        <TabsList className="flex eps flex-wrap gap-2">
        {season3Eps.map((ep)=> <Tab><EpCard epName={ep.name}/></Tab>)}
        </TabsList>
       
        </TabsUnstyled>
    )}
    
    </div>
  </div>
  )
}
