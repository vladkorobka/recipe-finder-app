import Link from "next/link";

const RecipesList = async ({ searchParams }) => {
  const { query = "", cuisine = "", maxReadyTime = "" } = searchParams;
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const params = new URLSearchParams();

  if (query) {
    params.append("query", query);
  }

  if (cuisine) {
    params.append("cuisine", cuisine);
  }

  if (maxReadyTime) {
    params.append("maxReadyTime", maxReadyTime);
  }

  params.append("apiKey", apiKey);

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return (
      <p className="inline-block px-4 py-2 my-auto bg-red-400 text-white rounded-xl">
        Failed to fetch recipes!
      </p>
    );
  }

  const recipesArr = await res.json();

  if (!recipesArr.results || recipesArr.results.length === 0) {
    return <p className="text-gray-700 text-center">No recipes found.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {recipesArr.results.map((recipe) => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-t-2xl"
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
