"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchForm = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [preparationTime, setPreparationTime] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (query || cuisine || preparationTime > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [query, cuisine, preparationTime]);

  const handleNextBtnClick = () => {
    const params = new URLSearchParams();

    if (query) {
      params.append("query", query);
    }

    if (cuisine) {
      params.append("cuisine", cuisine);
    }

    if (preparationTime > 0) {
      params.append("maxReadyTime", preparationTime);
    }
    console.log(params.toString());

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-center">Find a Recipe</h1>

      <div className="w-[360px] mx-auto mt-4 flex flex-col justify-center gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="find dish..."
        />

        <label className="flex justify-between gap-1">
          <span>Select cuisine</span>
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value=""></option>
            <option value="Italian">Italian</option>
            <option value="French">French</option>
            <option value="Chinese">Chinese</option>
            <option value="Thai">Thai</option>
          </select>
        </label>

        <label className="flex justify-between gap-1">
          <span>Preparation time</span>
          <input
            type="number"
            value={preparationTime}
            onChange={(e) => setPreparationTime(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
            min="0"
          />
        </label>

        <button
          disabled={!isFormValid}
          onClick={handleNextBtnClick}
          className={`w-full p-3 rounded-xl font-semibold transition ${
            isFormValid
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
