import { LargeCard } from "../RecipeCards/LargeCard"
import { SmallCard } from "../RecipeCards/SmallCard"

export const RecipeGrid = () => {
    const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse", "a", "b", "c"];
    return (
    <>
      <div className="cardGrid flex flex-wrap my-5 max-w-screen-xl mx-auto px-5">
        <LargeCard />
        
        {animals.map(animal => (
          <SmallCard />
        ))}
      </div>
    </>
    )
}