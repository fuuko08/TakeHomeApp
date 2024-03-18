import { LargeCard } from "../RecipeCards/LargeCard"
import { SmallCard } from "../RecipeCards/SmallCard"
import React, { useState, useEffect } from 'react';
import { fetchData } from '../../services/recipeServices.js';

export const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const recipesToDisplay = recipes.slice(1);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = await fetchData();
        setRecipes(data.recipes);
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
          image={recipes[0].image}
          name={recipes[0].name}
          instruction={recipes[0].instructions}
          prepTimeMinutes={recipes[0].prepTimeMinutes}
          cookTimeMinutes={recipes[0].cookTimeMinutes}
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