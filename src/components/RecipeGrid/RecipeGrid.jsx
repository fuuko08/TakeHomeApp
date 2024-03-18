import { LargeCard } from "../RecipeCards/LargeCard"
import { SmallCard } from "../RecipeCards/SmallCard"
import React, { useState, useEffect } from 'react';
import { fetchData } from '../../services/recipeServices.js';

export const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [resultRecipes, setResultRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const recipesToDisplay = resultRecipes.slice(1);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
   
    return (
    <>
      <div className="cardGrid flex flex-wrap my-5 max-w-screen-xl mx-auto px-5">
        <LargeCard 
          image={resultRecipes[0].image}
          name={resultRecipes[0].name}
          instruction={resultRecipes[0].instructions}
          prepTimeMinutes={resultRecipes[0].prepTimeMinutes}
          cookTimeMinutes={resultRecipes[0].cookTimeMinutes}
        />
        {recipesToDisplay.map((recipe, index) => (
          <SmallCard 
            key={index}
            image={recipe.image}
            name={recipe.name}
            instruction={recipe.instructions}
            prepTimeMinutes={recipe.prepTimeMinutes}
            cookTimeMinutes={recipe.cookTimeMinutes}
          />
        ))}
      </div>
    </>
    )
}