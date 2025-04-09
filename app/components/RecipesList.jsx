import Link from "next/link";

const RecipesList = async ({ searchParams }) => {
  const { query = "", cuisine = "", maxReadyTime = "" } = await searchParams;

  const params = new URLSearchParams({
    apiKey: process.env.SPOONACULAR_API_KEY,
  });

  if (query) {
    params.append("query", query);
  }

  if (cuisine) {
    params.append("cuisine", cuisine);
  }

  if (maxReadyTime) {
    params.append("maxReadyTime", maxReadyTime);
  }

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const recipesArr = await res.json();

  if (!recipesArr.results || recipesArr.results.length === 0) {
    return (
      <div className="flex justify-center">
        <p className="text-gray-700 text-center">No recipes found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {recipesArr.results.map((recipe) => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="rounded-sm shadow hover:shadow-md transition"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-sm"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipesList;
