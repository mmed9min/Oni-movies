import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../../../assets/icons/nav__logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch, faUser, faUserAlt, faUserCircle, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import '../navbar/navbar.css'
import userIcon from '../../../assets/icons/user.svg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { TextField } from "@material-ui/core";
import Popover from '@mui/material/Popover';
import SearchCard from "../../feature/searchCard/searchCard";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Collapse from '@mui/material/Collapse';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {  alpha } from '@mui/material/styles';


import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProfileMenu from "../../feature/profileMenu/profileMenu";


import LogoutIcon from '@mui/icons-material/Logout';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
background : "unset",
padding : 0,
  '&:not(:last-child)': {
    borderBottom: 0,
    padding : 0,
  },
  '&:before': {
    display: 'none',
    padding : 0,
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
 
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:"unset",
  flexDirection: 'row-reverse',
  padding : 0,
  margin : 0,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: 0,
    margin : 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop : 0,
  paddingBottom: 0,
  border: "none",
}));

const options = [
  {name : "The godFather"},
  {name : "inception"},
  {name : "Catch me"}
];




function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [focus, setFocus] = useState("");
 const [typing, setTyping] = useState("")
  const [placement, setPlacement] = React.useState();

  const [checked, setChecked] = React.useState(false);

  const [expanded, setExpanded] = React.useState('');


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSearchMobile = () => {
    setChecked((prev) => !prev);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFocus =()=>{
  setFocus("inputFocus")
  }
  const handleUnfocus =()=>{
    setFocus("")
    }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <nav >
        <div className="relative mx-auto px-4 md:py-4 sm:px-6 lg:px-14 2xl:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/">
                <img
                  width="60px"
                  src={logo}
                  alt="Workflow"
                />
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="ml-3 lg:ml-10 flex items-baseline space-x-1 lg:space-x-4">
                <a
                    href="#"
                    className="text-gray-300  hover:text-white md:px-1 py-2 rounded-md text-xs md:text-sm xl:text-lg font-medium"
                  >
                    Channels
                  </a>
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white md:px-1 py-2 rounded-md text-xs mdtext-sm xl:text-lg font-medium"
                  >
                    Anime
                  </a>

                  <a
                    href="#"
                    className="text-gray-300  hover:text-white md:px-1 py-2 rounded-md text-xs  md:text-sm xl:text-lg font-medium"
                  >
                    Bollywood
                  </a>
                  <a
                      type="button" aria-describedby={id} variant="contained" onClick={handleClick}
                     className="text-gray-300 cursor-pointer  hover:text-white md:px-1 py-2 rounded-md text-xs md:text-sm xl:text-lg font-medium whitespace-nowrap"
                   >
                    Genre
                    <FontAwesomeIcon icon={faChevronDown} className="ml-1" width="10px"/>
                   </a>
                   <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      sx={{borderRadius : '8px', overflow: "hidden"}}
                    >
                      <Typography sx={{ bgcolor: '#413F45',overflow : "hidden" }}>
                          <div className="grid grid-cols-3 gap-x-6 gap-y-2 px-5 py-3">
                              <span className="genre__txt"><a href="http://">Adventure</a></span> 
                              <span className="genre__txt"><a href="http://">Mystery</a></span> 
                              <span className="genre__txt"><a href="http://">Drama</a></span> 
                              <span className="genre__txt"><a href="http://">Sci-fi</a></span> 
                              <span className="genre__txt"><a href="http://">Drama</a></span> 
                              <span className="genre__txt"><a href="http://">Romance</a></span> 
                              <span className="genre__txt"><a href="http://">Music</a></span> 
                              <span className="genre__txt"><a href="http://">Documentry</a></span> 
                              <span className="genre__txt"><a href="http://">Adventure</a></span> 
                              <span className="genre__txt"><a href="http://">Sci-fi</a></span> 
                              <span className="genre__txt"><a href="http://">Drama</a></span> 
                              <span className="genre__txt"><a href="http://">Sci-fi</a></span> 
                              <span className="genre__txt"><a href="http://">Drama</a></span> 
                              <span className="genre__txt"><a href="http://">Romance</a></span> 
                              <span className="genre__txt"><a href="http://">Adventure</a></span> 
                            </div>
                      </Typography>
                    </Popover>
                   
                  
               
                   <a
                     id="fade-button"
                     aria-controls={open ? 'fade-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                     className="text-gray-300 cursor-pointer  hover:text-white md:px-1 py-2 rounded-md text-xs md:text-sm xl:text-lg font-medium"
                   >
                    Imdb
                    <FontAwesomeIcon icon={faChevronDown} className="ml-1" width="10px"/>
                   </a>
             
                  

                

                 
                </div>
              </div>
            </div>
            <div className="hidden md:block">
          <div className="nav__right ml-0 lg:ml-4 flex items-center">
          <label>
            <Autocomplete
               sx={{
                display: 'inline-block',
                margin : 0,
                padding : 0,
        
              }}
            
              onInputChange={(e) => setTyping(e.target.value)}
              options={options}
              fullWidth
              PaperComponent={({ children }) => (
                <Paper style={{ background: "#413F45" ,marginTop: "5px",padding: "0"}}>
                  {children}
                  <div className="flex justify-center">
                  <Button className="viewSearch__btn">View all</Button>
                  </div>
                 
                </Paper>
              )}
              disableCloseOnSelect
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                
                  <SearchCard name ={option.name}  {...props}/>

              )}
              renderInput={(params) => (
                <div className={"nav__search flex justify-between items-center p-0 m-0"+ " "+ focus} ref={params.InputProps.ref} >
              
                    <input type="text" placeholder="Search Oni"  {...params.inputProps}   className="nav__search__input"  autoFocus={false} />
                  
                <FontAwesomeIcon icon={faSearch} color="#9D9AA2"/>
                </div>
             
              )}
              open={typing.length > 0}
             />
           </label>
            

         
           <div className="ml-0 md:ml-5 lg:ml-8 relative">
           <ProfileMenu />

            
              
            </div>
          </div>
        </div>
            <div className="-mr-2 flex md:hidden">
              <Button className="searchMobile__btn" onClick={handleSearchMobile}>
                <FontAwesomeIcon className="searchMobile__icon" size="xl" icon={faSearch}/>
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
              <Collapse in={checked} >
              <label className="search__mobile">
               <Autocomplete
                     sx={{
                      display: 'inline-block',
                      margin : 0,
                      padding : 0,
                    }}
                    onInputChange={(e) => setTyping(e.target.value)}
                    options={options}
                    fullWidth
                    PaperComponent={({ children }) => (
                      <Paper style={{ background: "#413F45" ,marginTop: "5px",padding: "0"}}>
                        {children}
                        <div className="flex justify-center">
                  <Button className="viewSearch__btn">View all</Button>
                  </div>
                      </Paper>
                    )}
                    disableCloseOnSelect
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option) => (
                      
                        <SearchCard name ={option.name}  {...props}/>
                        
                     
                    )}
                    renderInput={(params) => (
                      <div className={"nav__search flex justify-between items-center h-11 p-0 m-0"+ " "+ focus} ref={params.InputProps.ref} >
                    
                          <input type="text" placeholder="Search Oni"  {...params.inputProps}   className="nav__search__input"  autoFocus={false} />
                        
                
                      </div>
                   
                    )}
                />
  
    
                 </label>
              </Collapse>
              
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                  href="#"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Channels
                </a>
                <a
                  href="#"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Anime
                </a>

                <a
                  href="#"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Bollywood
                </a>
                <Accordion expanded={expanded === 'panel1'} className="genre" onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  
                    <a
                      href="#"
                      className="text-gray-300  hover:text-white block px-3  py-2 rounded-md text-base font-medium"
                    >
                      Genre
                      <FontAwesomeIcon icon={faChevronDown} className="ml-1" width="10px"/>
                    </a>
                
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography sx={{ bgcolor: '#413F45',overflow : "hidden",borderRadius: "8px" }}>
                          <div className="grid grid-cols-3 gap-x-6 gap-y-2 px-5 py-3 ">
                              <span className="genre__txt"><a href="http://">Adventure</a></span> 
                              <span className="genre__txt"><a href="http://">Mystery</a></span> 
                              <span className="genre__txt"><a href="http://">Drama</a></span> 
                              <span className="genre__txt"><a href="http://">Sci-fi</a></span> 
                              <span className="genre__txt"><a href="http://">Drama</a></span> 
                              <span className="genre__txt"><a href="http://">Romance</a></span> 
                              <span className="genre__txt"><a href="http://">Music</a></span> 
                              <span className="genre__txt"><a href="http://">Documentry</a></span> 
                              <span className="genre__txt"><a href="http://">Adventure</a></span> 
                              <span className="genre__txt"><a href="http://">Sci-fi</a></span> 
                              <span className="genre__txt"><a href="http://">Drama</a></span> 
                              <span className="genre__txt"><a href="http://">Sci-fi</a></span> 
                              <span className="genre__txt"><a href="http://">Drama</a></span> 
                              <span className="genre__txt"><a href="http://">Romance</a></span> 
                              <span className="genre__txt"><a href="http://">Adventure</a></span> 
                            </div>
                      </Typography>
                  </AccordionDetails>
                </Accordion>

               

                <Accordion expanded={expanded === 'panel2'} className="genre" onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  
                    <a
                      href="#"
                      className="text-gray-300  hover:text-white block px-3  py-2 rounded-md text-base font-medium"
                    >
                      Imdp
                      <FontAwesomeIcon icon={faChevronDown} className="ml-1" width="10px"/>
                    </a>
                
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography>
                         <span className="text-white">Imdp</span>
                      </Typography>
                  </AccordionDetails>
                </Accordion>

                <Divider style={{ background : "#9D9AA2", margin: "15px"}} />

                <a
                  href="#"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                >
                    <PermIdentityIcon className="text-gray-300  hover:text-white"   style={{fontSize: "21px"}}/>
                    <span className="text-gray-300 ml-2 hover:text-white">Profile</span>
                    
                </a>
                <a
                  href="#"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                >
                    <LogoutIcon className="text-gray-300  hover:text-white"   style={{fontSize: "21px"}}/>
                    <span className="text-gray-300 ml-2 hover:text-white">Sign out</span>
                    
                </a>
              </div>
             
            </div>
          )}
        </Transition>
      </nav>

     
    </div>
  );
}

export default Navbar;
