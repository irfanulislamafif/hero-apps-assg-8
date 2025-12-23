import React from "react";
import Logo from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <style>{`
        @keyframes zoom-in-out {
          0% { transform: scale(0.6); }
          50% { transform: scale(1.4); }
          100% { transform: scale(0.6); }
        }
        .animate-zoom-infinite {
          animation: zoom-in-out 3s ease-in-out infinite;
        }
      `}</style>

      <div className="flex items-end text-7xl font-bold text-white animate-zoom-infinite space-x-2">
        <span className="text-gray-400">L</span>

        <div className="relative flex items-center justify-center mb-2">
          <img src={Logo} alt="Logo" className="w-16 h-16 animate-spin" />
        </div>

        <span className="text-gray-400">oading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;