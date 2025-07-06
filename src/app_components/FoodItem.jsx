const FoodItem = ({ food }) => {
  return (
    <>
      <div className="mx-auto justify-center">
        <div className="container">
          <h3> {food.title} </h3>
          <img src={food.image} alt={food.title} />
          <button
            className="p-2 bg-green-600 text-white text-2xl rounded-md cursor-pointer my-3 font-bold">
            View Recipe
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
