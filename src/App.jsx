import { useState } from "react"
import Search from "./app_components/Search"
import FoodList from "./app_components/FoodList"
import Navbar from "./app_components/Nav"
import Container from "./app_components/Container"
import InnerContainer from "./app_components/InnerContainer"
import FoodDetail from "./app_components/FoodDetail"

function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("642583")

  return (
    <>
      < Navbar />
      < Search foodData={foodData} setFoodData={setFoodData} />
      < Container>
        <InnerContainer>
          < FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          < FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  )
}

export default App
