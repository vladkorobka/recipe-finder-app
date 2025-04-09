import { Suspense } from "react";
import Loader from "../components/Loader";
import RecipesList from "../components/RecipesList";

const RecipesPage = ({ searchParams }) => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-center my-5">Recipes</h1>
      <Suspense fallback={<Loader />}>
        <RecipesList searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default RecipesPage;
