import { Suspense } from "react";
import Loader from "../components/Loader";
import RecipesList from "../components/RecipesList";

const RecipesPage = ({ searchParams }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Recipes</h1>

      <Suspense fallback={<Loader />}>
        <RecipesList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default RecipesPage;
