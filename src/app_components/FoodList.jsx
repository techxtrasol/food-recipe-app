import FoodItem from './FoodItem'


const FoodList = ({ foodData, setFoodId, selectedFoodId }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {foodData.map((food) => (
          <FoodItem key={food.id} food={food} setFoodId={setFoodId} isSelected={selectedFoodId === food.id} />
        ))}
      </div>
    </div>
  )
}

export default FoodList

