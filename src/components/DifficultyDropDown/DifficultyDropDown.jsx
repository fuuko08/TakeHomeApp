export const DifficultyDropDown = () => {
    return (
        <select id="difficulty" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option defaultValue>Choose the Difficulty</option>
            <option value="Difficulty">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
        </select>
    )    
}