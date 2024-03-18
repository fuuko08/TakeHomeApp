async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  module.exports = {
    fetchData
  };
  