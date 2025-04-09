import { Suspense } from "react";
import Loader from "@/app/components/Loader";
import RecipeDetails from "@/app/components/RecipeDetails";

const RecipeDetailsPage = ({ params }) => {
  return (
    <main>
      <div>
        <Suspense fallback={<Loader />}>
          <RecipeDetails id={params.id} />
        </Suspense>
      </div>
    </main>
  );
};

export default RecipeDetailsPage;
