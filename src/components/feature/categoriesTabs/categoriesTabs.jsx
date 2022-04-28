import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import '../categoriesTabs/categoriesTabs.css'
import MovieCard from '../movieCard/movieCard';
import movieImg1 from '../../../assets/images/movie.png'
import movieImg2 from '../../../assets/images/movie2.png'
import movieImg3 from '../../../assets/images/movie3.png'
import movieImg4 from '../../../assets/images/movie4.png'

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #9D9AA2;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;

  padding: 12px 16px;

  border: none;
 
  display: flex;
  width: fit-content;


  &:hover {
    background-color: #9d9aa222;
    border-radius: 8px 8px 0 0;
  }

  &:focus {
    color: #fff;
    border-radius: 8px 8px 0 0;
    outline: none;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    border-bottom : 2px solid #782CE8;
    color: #fff;
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

  width:30%;
  margin-bottom: 16px;
  display: flex;
  justify-content : flex-start;

`;

const CategoriesTabs = () => {
    const [value, setValue] = React.useState('1');

     const handleChange = (event, newValue) => {
       setValue(newValue);
     };
    return (
        <div className=' mx-auto px-4 sm:px-6 lg:px-14 2xl:px-12  mt-16 categoriesTabs'>
          <div>

        
             <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Popular</Tab>
        <Tab>Series</Tab>
        <Tab>Anime</Tab>
        <Tab>Bollywood</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div className='grid  grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 sm:gap-4  '>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
          <MovieCard movieImg={movieImg1}/>
        </div>
        
      </TabPanel>
      <TabPanel value={1}>
        <div className='grid  grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 sm:gap-4  '>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         <MovieCard movieImg={movieImg2}/>
         
        </div>
      </TabPanel>
      <TabPanel value={2}>
      <div className='grid  grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 sm:gap-4 '>
        <MovieCard movieImg={movieImg3}/>
        <MovieCard movieImg={movieImg3}/>
        <MovieCard movieImg={movieImg3}/>
        <MovieCard movieImg={movieImg3}/>
        <MovieCard movieImg={movieImg3}/>
        </div>
      </TabPanel>
      <TabPanel value={3}>
      <div className='grid  grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 sm:gap-4  '>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        <MovieCard movieImg={movieImg4}/>
        </div>
      </TabPanel>
    </TabsUnstyled>
    </div>
        </div>
    );
}

export default CategoriesTabs;
