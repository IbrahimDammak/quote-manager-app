// frontend/src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    matFisc: '',
    companyAddress: '',
    town: ''
  });

  const navigate = useNavigate();

  const towns = [
    'Tunis', 'Sfax', 'Ariana', 'Ben Arous', 'Bizerte', 'Béja', 'Gabès', 'Gafsa',
    'Jendouba', 'Kairouan', 'Kasserine', 'Kébili', 'Le Kef', 'Mahdia', 'Manouba',
    'Medenine', 'Monastir', 'Nabeul', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine',
    'Tozeur', 'Zaghouan'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission here
    console.log('Form data:', formData);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* Logo Placeholder */}
        <div className="text-center mb-4">
          <img src="path-to-your-logo.png" alt="Logo" className="w-24 mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-gray-700">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="matFisc" className="text-gray-700">Mat Fisc</label>
            <input
              type="text"
              id="matFisc"
              name="matFisc"
              value={formData.matFisc}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="companyAddress" className="text-gray-700">Company Address</label>
            <input
              type="text"
              id="companyAddress"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="town" className="text-gray-700">Town</label>
            <select
              id="town"
              name="town"
              value={formData.town}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            >
              <option value="">Select a town</option>
              {towns.map((town, index) => (
                <option key={index} value={town}>{town}</option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
