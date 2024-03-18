import '../index.scss';
import { SearchForm } from "../components/SearchForm"
import { RecipeGrid } from '../components/RecipeGrid/RecipeGrid';
import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/recipeServices.js';

export const Page = () => {
    const [recipes, setRecipes] = useState([]);
    const [resultRecipes, setResultRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchValue, setSearchValue] = useState([]); 

    useEffect(() => {
        async function fetchRecipes() {
          try {
            const data = await fetchData();
            setRecipes(data.recipes);
            setResultRecipes(data.recipes);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
       fetchRecipes();
      }, []);
    
      function searchRecipes(data, query) {
        const { name, prepTimeMinutes, difficulty } = query;
      
        return data.filter(recipe => {
          let matches = true;
      
          if (name && !recipe.name.toLowerCase().includes(name.toLowerCase())) {
            matches = false;
          }
          return matches;
        });
      }

    const handleOnChange = (data) => {
        setSearchValue(data);
        if (recipes.length > 0) {

            const query = {
                name: data[0],
                prepTimeMinutes: data[1],
                difficulty: data[2],
            };
            

            const searchResult = searchRecipes(recipes, query);
            console.log(searchResult)
            setResultRecipes(searchResult)
        }
    }

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return (
        <>
            <h1 className='my-5 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl center'>Recipe Search Page</h1>
            <SearchForm onChange={handleOnChange}/>
            <RecipeGrid data={resultRecipes}/>
        </>
    )
}