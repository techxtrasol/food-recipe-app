"use client"

import { Clock, Users, DollarSign, Star, Heart } from "lucide-react"
import { useState } from "react"

const RecipeDetail = ({ food }) => {
  const [activeTab, setActiveTab] = useState("ingredients")

  if (!food) {
    return (
      <div className="flex items-center justify-center h-full text-center p-8">
        <div>
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Select a Recipe</h2>
          <p className="text-gray-500">Choose a recipe from the list to see the details</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6">
        {/* Recipe Image and Title */}
        <div className="mb-6">
          <img
            src={food.image || "/placeholder.svg?height=300&width=500"}
            alt={food.title}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{food.title}</h1>

          {/* Recipe Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-emerald-600" />
              <span>{food.readyInMinutes || 30} mins</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Users className="h-4 w-4 text-emerald-600" />
              <span>{food.servings || 4} servings</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <DollarSign className="h-4 w-4 text-emerald-600" />
              <span>${food.pricePerServing ? (food.pricePerServing / 100).toFixed(2) : "0.77"} per serving</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-emerald-600" />
              <span>Health Score: {food.healthScore || 6}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 2 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-sm text-gray-600">({food.aggregateLikes || 3} likes)</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("ingredients")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "ingredients"
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Ingredients
            </button>
            <button
              onClick={() => setActiveTab("instructions")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "instructions"
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Instructions
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "ingredients" && (
          <div>
            <div className="space-y-3 mb-6">
              {/* Sample ingredients - replace with actual data */}
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img src="/placeholder.svg?height=40&width=40" alt="Butter" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium text-gray-900">Butter</p>
                  <p className="text-sm text-gray-600">1 teaspoon</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img src="/placeholder.svg?height=40&width=40" alt="Pasta" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium text-gray-900">Farfalle Pasta</p>
                  <p className="text-sm text-gray-600">2 cups</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img src="/placeholder.svg?height=40&width=40" alt="Peas" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium text-gray-900">Green Peas</p>
                  <p className="text-sm text-gray-600">1 cup</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">About This Recipe</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The recipe {food.title} can be made in <strong>about 30 minutes</strong>. This delicious dish combines
                the perfect balance of flavors and textures, making it an ideal choice for a quick and satisfying meal.
              </p>
            </div>
          </div>
        )}

        {activeTab === "instructions" && (
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <p className="text-gray-800">Cook the farfalle pasta according to package directions until al dente.</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <p className="text-gray-800">
                In a large pan, melt butter over medium heat and add the ham, cooking until lightly browned.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <p className="text-gray-800">Add the peas and cream, simmer for 2-3 minutes until heated through.</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <p className="text-gray-800">
                Toss with the cooked pasta and serve immediately with freshly ground pepper.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipeDetail
