const InnerContainer = ({ children }) => {
  return (
    <>
      <div className="w-1/2 bg-gray-100 p-4 rounded-md overflow-auto">
        {children}
      </div>

    </>
  );
}

export default InnerContainer;
