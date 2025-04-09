import { Suspense } from "react";
import Loader from "@/app/components/Loader";
import RecipeDetails from "@/app/components/RecipeDetails";

const RecipeDetailsPage = async ({ params }) => {
  const { id } = await params;
  return (
    <main>
      <div>
        <Suspense fallback={<Loader />}>
          <RecipeDetails id={id} />
        </Suspense>
      </div>
    </main>
  );
};

export default RecipeDetailsPage;
