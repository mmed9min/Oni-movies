import { Button } from '@mui/material';
import React from 'react';
import SearchCard from '../searchCard/searchCard';

const results = ["movie 1", "movie 2","movie 3"]

const SearchResult = () => {
    return (
        <>
            {results.map((result) =><SearchCard name ={result}/> )}
          
        </>
    );
}

export default SearchResult;
