import React from "react";
import { useNavigate } from "react-router";

const NoAppFound = ({ message, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <img src={imageUrl} alt="Not Found" className="w-64 mb-6" />
      <h1 className="text-3xl font-bold mb-2">OPPS!! APP NOT FOUND</h1>
      <p className="text-gray-500 mb-6">
        {message}
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
      >
        Go Back!
      </button>
    </div>
  );
};

export default NoAppFound;
