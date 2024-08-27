import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Loader from './Loader'; // Import the Loader component

const MentorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
const [msg,setmsg]=useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader
    try {
      const response = await axios.post('https://web-wizard-backend.onrender.com/data/mentorlogin', { email, password });
      const { data } = response;
      const { result } = data;

      if (result) {
        console.log(data.msg);
        setmsg(data.msg)
        navigate('/mdash'); // Replace with your desired route
      } else {
        console.log(data.msg);
        setmsg(data.msg)
      }
    } catch (error) {
      console.log('Login failed', error);
      setmsg(data.msg)
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <>
      {loading ? (
        <Loader /> // Show loader if loading state is true
      ) : (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Mentor Please Login Here
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:w-96 md:w-1/2 lg:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder='Please Enter Email'
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Please enter Password'
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>
            <h3>{msg}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default MentorLogin;
