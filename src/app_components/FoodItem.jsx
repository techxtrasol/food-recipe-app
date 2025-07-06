import { Clock, Users, Star } from "lucide-react"

const FoodItem = ({ food }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={food.image || "/placeholder.svg"}
          alt={food.title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white hover:scale-110 transition-all duration-200">
          <Star className="h-4 w-4 text-gray-600 hover:text-yellow-500" />
        </button>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
          {food.title}
        </h3>

        {/* Recipe Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>30 min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>4 servings</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>4.5</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
            Quick & Easy
          </span>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Healthy</span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-200">
          View Recipe
        </button>
      </div>

      {/* Subtle Border Animation */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-200 transition-colors duration-300 pointer-events-none"></div>
    </div>
  )
}

export default FoodItem
