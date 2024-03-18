import { DifficultyDropDown } from "../DifficultyDropDown/DifficultyDropDown"
import { SearchBar } from "../SearchBar/Search"
import { SearchButton } from "../SearchButton/SearchButton"
import { TimeDropDown } from "../TimeDropdown/TimeDropdown"
import React, { useState, useEffect } from 'react';


export const SearchForm = () => {
    const [searchBarValue, setSearchBarValue] = useState(""); 
    const [timeValue, setTimeValue] = useState(""); 
    const [difficulityValue, setDifficultyValue] = useState(""); 

    const handleOnChange = (e) => {
        setSearchBarValue(e.target.value);        
    };

    const handleOnChangeTime = (e) => {
        setTimeValue(e.target.value);  
        
    };

    const handleOnChangeDiff = (e) => {
        setDifficultyValue(e.target.value);   
        console.log(e.target.value)           
    };

    return (
        <div className="search-bar">
            <form id="searchForm" className="mt-5 flex max-w-screen-xl mx-auto px-5 justify-center align-center">
                <SearchBar onChange={handleOnChange}/>
                <TimeDropDown  onChange={handleOnChangeTime}/>
                <DifficultyDropDown  onChange={handleOnChangeDiff}/>
                <SearchButton />
            </form>
        </div>
    )
}