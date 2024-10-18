// frontend/src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-wrap w-full max-w-4xl">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Create your professional quote now
          </h1>
          <p className="text-gray-600 mb-8">
            Our SaaS helps you generate quotes quickly and professionally. Save time and impress your clients.
          </p>
          <Link to="/register" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Create Now
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 flex justify-center">
          <img
            src="https://via.placeholder.com/500x500" // Replace with the actual image path
            alt="Quote Illustration"
            className="rounded-lg w-500 h-500 object-cover"
            style={{ width: '500px', height: '500px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
