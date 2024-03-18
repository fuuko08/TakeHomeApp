import { LargeCard } from "../RecipeCards/LargeCard"
import { SmallCard } from "../RecipeCards/SmallCard"
import React, { useState } from 'react';

export const RecipeGrid = (props) => {
  const [resultRecipes, setResultRecipes] = useState(props.data);
  const recipesToDisplay = resultRecipes.slice(1);

   
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