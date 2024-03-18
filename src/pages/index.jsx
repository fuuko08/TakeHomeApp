import '../index.scss';
import { SearchForm } from "../components/SearchForm"
import { RecipeGrid } from '../components/RecipeGrid/RecipeGrid';
import React, { useState } from 'react';

export const Page = () => {
    const [searchValue, setSearchValue] = useState([]); 

    const handleOnChange = (data) => {
        setSearchValue(data)
    }

    return (
        <>
            <h1 className='my-5 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl center'>Recipe Search Page</h1>
            <SearchForm onChange={handleOnChange}/>
            <RecipeGrid />
        </>
    )
}