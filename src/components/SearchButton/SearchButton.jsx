export const SearchButton = (props) => {
    const handleOnClick = (e) => {
        e.preventDefault();
        props.onClick(e);
    };
    
    return (
        <button onClick={handleOnClick} type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Search</button>
    )
}