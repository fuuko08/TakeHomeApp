import { DifficultyDropDown } from "../DifficultyDropDown/DifficultyDropDown"
import { SearchBar } from "../SearchBar/Search"
import { SearchButton } from "../SearchButton/SearchButton"
import { TimeDropDown } from "../TimeDropdown/TimeDropdown"

export const SearchForm = () => {
    return (
        <div className="search-bar">
            <form id="searchForm" className="mt-5 flex max-w-screen-xl mx-auto px-5 justify-center align-center">
                <SearchBar />
                <TimeDropDown />
                <DifficultyDropDown />
                <SearchButton />
            </form>
        </div>
    )
}