"use client"

import { Clock, Users, Heart } from "lucide-react"
import { useState } from "react"

const FoodItem = ({ food, setFoodId, isSelected }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-2 ${
        isSelected ? "border-emerald-500 ring-2 ring-emerald-200" : "border-transparent hover:border-emerald-200"
      }`}
    >
      {/* Image Container */}
      <div className="relative">
        <img
          src={food.image || "/placeholder.svg?height=200&width=300"}
          alt={food.title}
          className="w-full h-40 object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all"
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "text-red-500 fill-current" : "text-gray-600"}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">{food.title}</h3>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{food.readyInMinutes || 30} min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span>{food.servings || 4} servings</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setFoodId(food.id)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
        >
          View Recipe
        </button>
      </div>
    </div>
  )
}

export default FoodItem
