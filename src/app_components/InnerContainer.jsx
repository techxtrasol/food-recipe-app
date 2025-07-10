const InnerContainer = ({ children, className = "" }) => {
  return (
    <div className={`w-full lg:w-1/2 bg-white p-4 sm:p-6 rounded-xl shadow-lg overflow-auto max-h-screen ${className}`}>
      {children}
    </div>
  )
}

export default InnerContainer
