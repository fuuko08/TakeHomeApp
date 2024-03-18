import { CookTime } from "./CookTime"
import { LargeImage } from "./LargeImage"
import { PrepTime } from "./PrepTime"
import { RecipeName } from "./RecipeName"
import { DifficultyLevel } from "./DifficultyLevel"

export const SmallCard = (props) => {
    return (
        <div className="grid w-1/3 h-full mb-3">
            <LargeImage src={props.image}/>
            <RecipeName name={props.name}/>
            <DifficultyLevel instruction={props.instruction}/>
            <div>
                <PrepTime prepTimeMinutes={props.prepTimeMinutes}/>
                <CookTime cookTimeMinutes={props.cookTimeMinutes}/>
            </div>
        </div>
    )
}