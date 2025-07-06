import { useState } from "react"
import Search from "./app_components/Search"
import FoodList from "./app_components/FoodList"
import Navbar from "./app_components/Nav"
import Container from "./app_components/Container"
import InnerContainer from "./app_components/InnerContainer"
import FoodDetail from "./app_components/FoodDetail"

function App() {
  const [foodData, setFoodData] = useState([])

  return (
    <>
      < Navbar />
      < Search foodData={foodData} setFoodData={setFoodData} />
      < Container>
        <InnerContainer>
          < FoodList foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          < FoodDetail />
        </InnerContainer>
      </Container>
    </>
  )
}

export default App
