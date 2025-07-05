import { useEffect, useState } from "react";


const Search = ({ foodData, setFoodData }) => {
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
  }, [query])
  return (
    <>
      <div className="mx-auto p-2">
        <input className="border border-green-500 caret-green-900 px-2 rounded-xs outline-none" value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
      </div>
    </>
  );
}

export default Search;
