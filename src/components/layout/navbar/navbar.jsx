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
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import Popover from '@mui/material/Popover';
const options = ['Option 1', 'Option 2'];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [placement, setPlacement] = React.useState();



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <nav >
        <div className=" mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  width="55px"
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-5 lg:ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                  >
                    Anime
                  </a>

                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                  >
                    Bollywood
                  </a>
                  <a
                      type="button" aria-describedby={id} variant="contained" onClick={handleClick}
                     className="text-gray-300 cursor-pointer  hover:text-white px-1 py-2 rounded-md text-sm font-medium"
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
                     className="text-gray-300 cursor-pointer  hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                   >
                    Imdb
                    <FontAwesomeIcon icon={faChevronDown} className="ml-1" width="10px"/>
                   </a>
             
                  

                

                 
                </div>
              </div>
            </div>
            <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
          <label>
 
      <Autocomplete
        sx={{
          display: 'inline-block',
         
          '& input': {
            width: 200,
          
          },
        }}
        PaperComponent={({ children }) => (
          <Paper style={{ background: "#413F45" }}>{children}</Paper>
        )}
        id="custom-input-demo"
        options={options}
        renderInput={(params) => (
          <div className="nav__search flex justify-between items-center" ref={params.InputProps.ref}>
              <input placeholder="Search Onion" type="text"  {...params.inputProps} className="nav__search__input"/>
              <FontAwesomeIcon icon={faSearch} color="#9D9AA2"/>
            </div>
      
        )}
      />
    </label>
            

         
           <div className="ml-5 lg:ml-8 relative">
              <div className="flex">
                <h6 className="text-white font-medium mt-1  ">Login</h6>
                <button type="button" className="max-w-xs ml-2 login__btn flex items-center text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img src={userIcon} alt="" />
                </button>
              </div>

            
              
            </div>
          </div>
        </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
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
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Anime
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Bollywood
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Genre
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Imdp
                </a>

               
              </div>
              <div className="ml-4  md:ml-6">
            <div className="nav__search flex justify-between items-center mb-3">
              <input placeholder="Search Onion" type="text" className="nav__search__input"/>
              <FontAwesomeIcon icon={faSearch} color="#9D9AA2"/>
            </div>

         
           <div className="flex justify-center mt-6 relative ">
              <div className="flex">
                <h6 className="text-white font-medium mt-1  ">Login</h6>
                <button type="button" className="max-w-xs ml-2 login__btn flex items-center text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img src={userIcon} alt="" />
                </button>
              </div>

            
              
            </div>
          </div>
            </div>
          )}
        </Transition>
      </nav>

     
    </div>
  );
}

export default Navbar;

