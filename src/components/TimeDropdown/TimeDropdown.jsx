export const TimeDropDown = () => {
    return (
        <select id="times" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option defaultValue>Total Time to Make</option>
            <option value="less15">15 minutes or less</option>
            <option value="15-30">15-30 minutes</option>
            <option value="more30">30 minutes or more</option>
        </select>
    )
}