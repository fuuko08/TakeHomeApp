export const SearchBar = (props) => {
  const handleStepTitleChange = (e) => {
    props.onChange(e);
};

  return (
    <input 
    type="search" 
    id="default-search" 
    className="mr-3 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
    placeholder="Search For Your Recipe" 
    required 
    onChange={handleStepTitleChange}/>
  )
}