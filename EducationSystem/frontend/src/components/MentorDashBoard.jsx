import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMentorData } from '../features/users/mentorSlice';
import axios from 'axios';

const MentorDashboard = () => {
  const [trainees, setTrainees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zoomLink: '',
  });
  const [data, setData] = useState([]);
  const [links, setLinks] = useState();

  const dispatch = useDispatch();

  const showData = async () => {
    try {
      const response = await axios.get('https://web-wizard-backend.onrender.com/data/getData');
      const { data } = response;
      setData(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const hideData = async () => {
    try {
      setData([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (index) => {
    const newTrainees = trainees.filter((_, i) => i !== index);
    setTrainees(newTrainees);
    localStorage.setItem('trainees', JSON.stringify(newTrainees));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleZoom = (e) => {
    e.preventDefault();
    dispatch(addMentorData(formData)); // Passing formData directly
    setFormData({ name: '', email: '', zoomLink: '' }); // Reset form
  };

  useEffect(() => {
    const storedTrainees = JSON.parse(localStorage.getItem('trainees')) || [];
    setTrainees(storedTrainees);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">Mentor Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Profile Overview</h2>
            <p className="text-gray-600 mt-2">View and edit your profile details.</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Edit Profile</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">My Sessions</h2>
            <p className="text-gray-600 mt-2">Manage your upcoming mentoring sessions.</p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">View Sessions</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Earnings</h2>
            <p className="text-gray-600 mt-2">Track your earnings and payments.</p>
            <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">View Earnings</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Messages</h2>
            <p className="text-gray-600 mt-2">Check your messages and notifications.</p>
            <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">View Messages</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Resources</h2>
            <p className="text-gray-600 mt-2">Access helpful resources and materials.</p>
            <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">View Resources</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Settings</h2>
            <p className="text-gray-600 mt-2">Manage your account settings.</p>
            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">Account Settings</button>
          </div>
        </div>
      </div>

      <div className="text-3xl ml-[60px] font-bold">
        Trainee Registered:
      </div>
      <div>
        <button onClick={showData}>Show Trainee</button><br />
        <button onClick={hideData}>Hide</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">{val.name}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">{val.email}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">{val.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 ml-[60px]">
        {trainees.length > 0 ? (
          <ul className="space-y-4">
            {trainees.map((trainee, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700">{trainee.name}</h3>
                <p className="text-gray-600">Email: {trainee.email}</p>
                <p className="text-gray-600">Phone: {trainee.phone}</p>
                <p className="text-gray-600">Skills: {trainee.skills}</p>
                <button className="bg-red-500 text-white p-2 mt-1 rounded-md" onClick={() => handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No trainees registered yet.</p>
        )}
      </div>

      <div className="flex flex-col items-center mt-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="bg-white shadow-lg rounded-md w-full max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-700 mt-6">Zoom</h1>
          <form className="flex flex-col items-center justify-center p-6" onSubmit={handleZoom}>
            <label className="text-lg sm:text-2xl mb-2 w-full">Mentor Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Please enter Your Name"
              className="p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
            />
            <label className="text-lg sm:text-2xl mt-4 mb-2 w-full">Mentor Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Please enter Your Email"
              className="p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="text-lg sm:text-2xl mt-4 mb-2 w-full">Zoom Link:</label>
            <input
              type="url"
              name="zoomLink"
              placeholder="Please Provide Zoom Link to Trainee"
              className="p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.zoomLink}
              onChange={handleChange}
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 mt-6 rounded-md w-full">
              Add Mentor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
