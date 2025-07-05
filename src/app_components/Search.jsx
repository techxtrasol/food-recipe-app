"use client"

import { useEffect, useState } from "react"
import { SearchIcon, X } from "lucide-react"

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("pasta")
  const URL = "https://api.spoonacular.com/recipes/complexSearch"
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`)
      const data = await res.json()
      console.log(data.results)
      setFoodData(data.results)
    }
    fetchRecipe()
  }, [apiKey, query, setFoodData])

  const clearSearch = () => {
    setQuery("")
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-emerald-500" />
        </div>

        {/* Search Input */}
        <input
          className="w-full pl-12 pr-12 py-4 text-lg border-2 border-emerald-200 rounded-2xl bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search for delicious recipes..."
        />

        {/* Clear Button */}
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-emerald-500 transition-colors duration-200"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Suggestions/Info */}
      <div className="mt-3 text-center">
        <p className="text-sm text-gray-600">
          {query ? (
            <>
              Searching for <span className="font-semibold text-emerald-600">"{query}"</span>
            </>
          ) : (
            "Enter a recipe name to start searching"
          )}
        </p>
      </div>

      {/* Popular Searches */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <span className="text-xs text-gray-500 mr-2">Popular:</span>
        {["pasta", "chicken", "salad", "pizza", "soup"].map((term) => (
          <button
            key={term}
            onClick={() => setQuery(term)}
            className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
              query.toLowerCase() === term
                ? "bg-emerald-500 text-white border-emerald-500"
                : "bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
            }`}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Search
