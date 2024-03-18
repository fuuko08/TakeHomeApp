import { DifficultyDropDown } from "../DifficultyDropDown/DifficultyDropDown"
import { SearchBar } from "../SearchBar/Search"
import { SearchButton } from "../SearchButton/SearchButton"
import { TimeDropDown } from "../TimeDropdown/TimeDropdown"
import React, { useState, useEffect } from 'react';


export const SearchForm = (props) => {
    const [searchBarValue, setSearchBarValue] = useState(""); 
    const [timeValue, setTimeValue] = useState(""); 
    const [difficultyValue, setDifficultyValue] = useState(""); 

    // useEffect(() => {
    //    props.onChange([searchBarValue, timeValue, difficultyValue])
    // }, [searchBarValue, timeValue, difficultyValue]);

    const handleOnChange = (e) => {
        setSearchBarValue(e.target.value);        
    };

    const handleOnChangeTime = (e) => {
        setTimeValue(e.target.value);  
        
    };

    const handleOnChangeDiff = (e) => {
        setDifficultyValue(e.target.value);              
    };

    const handleOnClick = () => {
        if (timeValue.length === 0) {
            setTimeValue("All");
        }   
        if (difficultyValue.length === 0) {
            setTimeValue("Any");
        }  
        props.onChange([searchBarValue, timeValue, difficultyValue])
    };

    return (
        <div className="search-bar">
            <form id="searchForm" className="mt-5 flex max-w-screen-xl mx-auto px-5 justify-center align-center">
                <SearchBar onChange={handleOnChange}/>
                <TimeDropDown  onChange={handleOnChangeTime}/>
                <DifficultyDropDown  onChange={handleOnChangeDiff}/>
                <SearchButton onClick={handleOnClick}/>
            </form>
        </div>
    )
}