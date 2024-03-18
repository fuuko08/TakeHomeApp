import { DifficultyFilter } from '../../services/difficultyFilter.js';
import React, { useState, useEffect } from 'react';

export const DifficultyDropDown = (props) => {
    const [difficulties, setDifficulties] = useState([]);
    const [selectedDiff, setSelectedDiff] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDiffChange = (e) => {
      props.onChange(e);
      setSelectedDiff(e);
  };

    useEffect(() => {
        async function fetchDifficulty() {
          try {
            const data = await DifficultyFilter();
            setDifficulties(data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
        fetchDifficulty();
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return (
        
        <select onChange={handleDiffChange} id="difficulty" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            {difficulties.map((difficulty, index) => (
                <option key={index} value={difficulty}>{difficulty}</option>
            ))}
            
        </select>
    )    
}