import { useState } from "react"
import Search from "./app_components/Search"
import FoodList from "./app_components/FoodList"
import Navbar from "./app_components/Nav"

function App() {
  const [foodData, setFoodData] = useState([])

  return (
    <>
      < Navbar />
      < Search foodData={foodData} setFoodData={setFoodData} />
      < FoodList foodData={foodData} />
    </>
  )
}

export default App
