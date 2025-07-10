"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search, Bell, User, Heart, ChefHat, Sparkles, TrendingUp, Star, ArrowRight } from "lucide-react"

const AdvancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications] = useState(3) // Mock notification count

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-100"
          : "bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600"
      }`}
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-1 text-sm font-medium">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-4 w-4" />
          <span>🎉 New recipes added daily! Join 50K+ food lovers</span>
          <TrendingUp className="h-4 w-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 group">
            <a href="/" className="flex items-center space-x-3 transition-all duration-300 group-hover:scale-105">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
                  <ChefHat
                    className={`h-8 w-8 transition-colors duration-300 ${scrolled ? "text-emerald-600" : "text-white"}`}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-2xl transition-colors duration-300 ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  FoodApp
                </span>
                <span
                  className={`text-xs font-medium transition-colors duration-300 ${
                    scrolled ? "text-emerald-600" : "text-emerald-100"
                  }`}
                >
                  Discover. Cook. Share.
                </span>
              </div>
            </a>
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Search
                  className={`absolute left-4 h-5 w-5 transition-colors duration-300 ${
                    scrolled ? "text-gray-400" : "text-white/70"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Search 10,000+ recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                    scrolled
                      ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-200"
                      : "bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-white/20"
                  }`}
                />
                {searchQuery && (
                  <button className="absolute right-3 p-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", href: "/", icon: null },
              { name: "Recipes", href: "/recipes", icon: null },
              { name: "Trending", href: "/trending", icon: TrendingUp, badge: "Hot" },
              { name: "Favorites", href: "/favorites", icon: Heart },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative group px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                    : "text-white hover:text-emerald-100 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
            ))}

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-white/20">
              {/* Search Toggle (Mobile) */}
              <button
                onClick={toggleSearch}
                className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Notifications */}
              <button
                className={`relative p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
              >
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                    {notifications}
                  </span>
                )}
              </button>

              {/* User Profile */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-2 p-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="hidden xl:block font-medium">Chef John</span>
                </button>
              </div>

              {/* CTA Button */}
              <a
                href="/premium"
                className="relative group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>Go Pro</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleSearch}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isSearchOpen ? "max-h-20 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 bg-white/10 backdrop-blur-xl rounded-2xl mt-4 border border-white/20">
            {[
              { name: "Home", href: "/", icon: null },
              { name: "Recipes", href: "/recipes", icon: null },
              { name: "Trending", href: "/trending", icon: TrendingUp, badge: "Hot" },
              { name: "Favorites", href: "/favorites", icon: Heart },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="relative group flex items-center space-x-3 text-white hover:text-emerald-100 hover:bg-white/10 px-4 py-3 rounded-xl font-medium transition-all duration-300"
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                <span>{item.name}</span>
                {item.badge && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="border-t border-white/20 pt-4 mt-4">
              <a
                href="/premium"
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Star className="h-5 w-5" />
                <span>Upgrade to Pro</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AdvancedNavbar
