const Container = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {children}
    </div>
  )
}

export default Container
