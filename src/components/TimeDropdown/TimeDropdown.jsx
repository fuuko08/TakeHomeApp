import { timeMakeFilter } from '../../services/timeMakeFilter.js';
import React, { useState, useEffect } from 'react';

export const TimeRangeDropDown = () => {
    const [timeRanges, setTimeRanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTimeRange() {
          try {
            const data = await timeMakeFilter();
            setTimeRanges(data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
        fetchTimeRange();
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return (
        
        <select id="times" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            {timeRanges.map((timeRange, index) => (
                <option key={index} value={timeRange}>{timeRange}</option>
            ))}
            
        </select>
    )    
}
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