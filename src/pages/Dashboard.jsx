// frontend/src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import ChartComponent from "../components/ChartComponent";
import BubbleMap from "../components/BubbleMap";

const Dashboard = ({ userName }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-r from-blue-400 to-blue-700 text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Hello, {userName}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Overview of Quotes */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
              <h2 className="text-xl font-bold mb-4">
                Number of Quotes Created
              </h2>
              <p className="text-2xl">15</p> {/* Placeholder value */}
            </div>

            {/* Most Quoted Articles */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
              <h2 className="text-xl font-bold mb-4">Most Quoted Articles</h2>
              <ul className="list-disc pl-5">
                <li>Article A (10 quotes)</li>
                <li>Article B (8 quotes)</li>
                <li>Article C (5 quotes)</li>
              </ul>
            </div>

            {/* Quote History */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
              <h2 className="text-xl font-bold mb-4">Quote History</h2>
              <ul className="list-disc pl-5">
                <li>Quote #1 - $300 - 2024-10-01</li>
                <li>Quote #2 - $150 - 2024-09-20</li>
                <li>Quote #3 - $450 - 2024-09-15</li>
              </ul>
            </div>
          </div>

          {/* Chart Component */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ChartComponent />
            <BubbleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
