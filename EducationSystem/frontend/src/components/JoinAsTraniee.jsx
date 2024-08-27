import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader'; // Import the Loader component

const JoinAsTrainee = () => {
  const [trainee, setTrainee] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
  const navigate = useNavigate();
  const [msg, setmsg] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainee({
      ...trainee,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader
    try {
      const response = await axios.post('https://web-wizard-backend.onrender.com/data/signup', trainee);
      const { data } = response;
      console.log(data);

      if (data.result) {
        localStorage.setItem('traineeName', trainee);
        setSuccessMessage('Signup successful! Redirecting to home page...');
        setTimeout(() => {
        }, 2000);
        navigate('/Udash');
        setmsg(data.msg)
      } else {
        console.log(data.message);
        setmsg(data.msg)
      }
    } catch (error) {
      console.error('Signup failed', error);
      setmsg(data.msg)
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      {loading ? (
        <Loader /> // Show loader if loading state is true
      ) : (
        <>
          {successMessage && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
              {successMessage}
            </div>
          )}
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Join as Trainee</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={trainee.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={trainee.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={trainee.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={trainee.skills}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={trainee.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
            <h3>{msg}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default JoinAsTrainee;
