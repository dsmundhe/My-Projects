import React from 'react';
import { useLocation } from 'react-router-dom';

const Conform = () => {
  const { state } = useLocation();
  const mentor = state?.mentor || {};

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">Confirmation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-gray-700 font-medium">Name:</h3>
          <p className="text-gray-900">{mentor.name}</p>
        </div>
        {/* Other details here */}
        <div>
          <h3 className="text-gray-700 font-medium">Email:</h3>
          <p className="text-gray-900">{mentor.email}</p>
        </div>
        {/* Add other mentor details as needed */}
        <div className="text-center mt-6">
          
        </div>
      </div>
    </div>
  );
};

export default Conform;
