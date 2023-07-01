'use client'
import React, { useState } from 'react';

const Form = () => {
  // const [visibility, setVisibility] = useState('');
  const [visibility, setVisibility] = useState("");


  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling here
    // You can access the selected value using the state variable (visibility)
    console.log('Selected Answer:', visibility);
  };

  return (
    <div onSubmit={handleSubmit} className="flex justify-center items-center gap-4">
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500"
            value="Public"
            checked={visibility === 'Public'}
            onChange={handleInputChange}
          />
          <span className="ml-2">Public</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-500"
            value="Private"
            checked={visibility === 'Private'}
            onChange={handleInputChange}
          />
          <span className="ml-2">Private</span>
        </label>
      </div>
{/* 
      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button> */}
    </div>
  );
};

export default Form;
