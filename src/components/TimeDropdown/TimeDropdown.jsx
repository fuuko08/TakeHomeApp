import { timeMakeFilter } from '../../services/timeMakeFilter.js';
import React, { useState, useEffect } from 'react';

export const TimeDropDown = (props) => {
    const [timeRanges, setTimeRanges] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleTimeChange = (e) => {
      props.onChange(e);
      setSelectedTime(e);
  };
      
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
        
        <select onChange={handleTimeChange} id="times" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            {timeRanges.map((timeRange, index) => (
                <option key={index} value={timeRange}>{timeRange}</option>
            ))}           
        </select>
    )    
}