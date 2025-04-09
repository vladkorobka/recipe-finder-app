const RecipeDetails = async ({ id }) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    return (
      <div className="flex justify-center">
        <p className="inline-block px-4 py-2 my-auto bg-red-400 text-white rounded-xl">
          Failed to fetch recipe details!
        </p>
      </div>
    );
  }

  const recipe = await res.json();

  if (!recipe.title) {
    return (
      <div className="flex justify-center">
        <p className="text-gray-700 text-center">No recipes found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-xl max-w-[400px] object-cover mb-4"
      />

      <div className="text-sm text-gray-600 flex gap-4 flex-wrap">
        {recipe.readyInMinutes && (
          <span>Time: {recipe.readyInMinutes} min</span>
        )}
        {recipe.servings && <span>Serves: {recipe.servings}</span>}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-800">
          {recipe.extendedIngredients?.map((item) => (
            <li key={item.id}>{item.original}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
