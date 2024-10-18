// frontend/src/components/ChartComponent.jsx
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const [duration, setDuration] = useState('day');

  // Fake data for demonstration purposes
  const fakeData = {
    day: [5, 10, 15, 20, 25, 30, 35],
    month: [120, 150, 100, 180, 200, 170, 190],
    year: [1500, 1600, 1700, 1800, 1900, 2000, 2100],
  };

  const labels = {
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    year: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  };

  // Chart data configuration based on selected duration
  const data = {
    labels: labels[duration],
    datasets: [
      {
        label: `Quotes per ${duration}`,
        data: fakeData[duration],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Number of Quotes by ${duration}`,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-cyan-800 ">Quotes Over Time</h2>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="p-2 border rounded bg-blue-700 "
        >
          <option className='' value="day">Per Day</option>
          <option value="month">Per Month</option>
          <option value="year">Per Year</option>
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
