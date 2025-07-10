"use client"

import { useEffect, useState } from "react"
import { Clock, Users, DollarSign, Heart, Leaf, Wheat, Milk, Star, ChefHat, Calendar, Info } from "lucide-react"

const FoodDetail = ({ foodId }) => {
  const [food, setFood] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${apiKey}`)
      const data = await response.json()
      console.log(data)
      setFood(data)
      setIsLoading(false)
    }
    fetchFood()
  }, [foodId, URL, apiKey])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  const getDietaryTags = () => {
    const tags = []
    if (food.vegetarian) tags.push({ label: "Vegetarian", icon: Leaf, color: "bg-green-100 text-green-800" })
    if (food.vegan) tags.push({ label: "Vegan", icon: Leaf, color: "bg-green-100 text-green-800" })
    if (food.glutenFree) tags.push({ label: "Gluten Free", icon: Wheat, color: "bg-yellow-100 text-yellow-800" })
    if (food.dairyFree) tags.push({ label: "Dairy Free", icon: Milk, color: "bg-blue-100 text-blue-800" })
    if (food.veryHealthy) tags.push({ label: "Very Healthy", icon: Heart, color: "bg-red-100 text-red-800" })
    return tags
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={food.image || "/tomato-soup.jpg"}
                alt={food.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{food.title}</h1>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">{food.readyInMinutes} mins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">{food.servings} servings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">${(food.pricePerServing / 100).toFixed(2)} per serving</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Health Score: {food.healthScore}</span>
                </div>
              </div>

              {/* Dietary Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {getDietaryTags().map((tag, index) => {
                  const IconComponent = tag.icon
                  return (
                    <span
                      key={index}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                    >
                      <IconComponent className="w-4 h-4 mr-1" />
                      {tag.label}
                    </span>
                  )
                })}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(food.spoonacularScore / 20) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({food.aggregateLikes} likes)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ChefHat className="w-6 h-6 mr-2 text-orange-500" />
                Ingredients
              </h2>
              <div className="space-y-3">
                {food.extendedIngredients?.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                      alt={ingredient.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 capitalize">{ingredient.name}</p>
                      <p className="text-sm text-gray-600">
                        {ingredient.amount} {ingredient.unit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-orange-500" />
                Recipe Info
              </h3>
              <div className="space-y-3">
                {food.dishTypes && (
                  <div>
                    <p className="font-medium text-gray-700">Dish Types:</p>
                    <p className="text-gray-600 capitalize">{food.dishTypes.join(", ")}</p>
                  </div>
                )}
                {food.occasions && food.occasions.length > 0 && (
                  <div>
                    <p className="font-medium text-gray-700 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Best For:
                    </p>
                    <p className="text-gray-600 capitalize">{food.occasions.join(", ")}</p>
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-700">Source:</p>
                  <a
                    href={food.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 underline"
                  >
                    {food.sourceName}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>

              {/* Summary */}
              {food.summary && (
                <div className="mb-8 p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">About This Recipe</h3>
                  <div
                    className="text-gray-700 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: food.summary }}
                  />
                </div>
              )}

              {/* Step by step instructions */}
              <div className="space-y-6">
                {food.analyzedInstructions?.[0]?.steps.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 leading-relaxed mb-3">{step.step}</p>

                      {/* Ingredients for this step */}
                      {step.ingredients && step.ingredients.length > 0 && (
                        <div className="mb-2">
                          <p className="text-sm font-medium text-gray-600 mb-1">Ingredients:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.ingredients.map((ingredient, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                <img
                                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                                  alt={ingredient.name}
                                  className="w-4 h-4 rounded-full mr-1"
                                />
                                {ingredient.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Equipment for this step */}
                      {step.equipment && step.equipment.length > 0 && (
                        <div className="mb-2">
                          <p className="text-sm font-medium text-gray-600 mb-1">Equipment:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.equipment.map((equipment, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                              >
                                {equipment.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Timing for this step */}
                      {step.length && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {step.length.number} {step.length.unit}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodDetail
