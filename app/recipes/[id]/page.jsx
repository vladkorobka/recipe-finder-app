import { Suspense } from "react";
import Loader from "@/app/components/Loader";
import RecipeDetails from "@/app/components/RecipeDetails";

const RecipeDetailsPage = ({ params }) => {
  return (
    <main>
      <div>
        <Suspense
          fallback={
            <p className="text-center text-gray-500">
              <Loader />
            </p>
          }
        >
          <RecipeDetails id={params.id} />
        </Suspense>
      </div>
    </main>
  );
};

export default RecipeDetailsPage;
