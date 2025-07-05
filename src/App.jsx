import { useState } from "react"
import Search from "./app_components/Search"
import FoodList from "./app_components/FoodList"

function App() {
  const [foodData, setFoodData] = useState([])

  return (
    <>
      < Search foodData={foodData} setFoodData={setFoodData} />
      < FoodList foodData={foodData} />
    </>
  )
}

export default App
