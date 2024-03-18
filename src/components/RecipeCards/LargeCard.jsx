import { CookTime } from "./CookTime"
import { LargeImage } from "./LargeImage"
import { PrepTime } from "./PrepTime"
import { RecipeName } from "./RecipeName"
import { DifficultyLevel } from "./DifficultyLevel"

export const LargeCard = () => {
    return (
        <div className="grid w-2/3 h-full mb-3">
            <LargeImage />
            <RecipeName />
            <DifficultyLevel />
            <div>
                <PrepTime />
                <CookTime />
            </div>
        </div>
    )
}