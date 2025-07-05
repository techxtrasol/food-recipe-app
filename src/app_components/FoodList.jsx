import FoodItem from "./FoodItem";

const FoodList = ({foodData}) => {
  return (
    <>
   {foodData.map((food) => (
        < FoodItem key={food.id} food={food} />
      ))}
    </>
   );
}

export default FoodList;
