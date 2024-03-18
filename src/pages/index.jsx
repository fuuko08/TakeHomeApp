import '../index.scss';
import { SearchForm } from "../components/SearchForm"
import { RecipeGrid } from '../components/RecipeGrid/RecipeGrid';

export const Page = () => {
    return (
        <>
            <h1 className='my-5 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl center'>Recipe Search Page</h1>
            <SearchForm/>
            <RecipeGrid />
        </>
    )
}