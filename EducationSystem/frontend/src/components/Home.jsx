import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


 

  console.log(setEmail, setPassword)

  const createZoom = () => {
    navigate('/zoom');
  };
  const handleQuiz = () => {
    navigate('/Art');
  }

  return (
    <div className="bg-gray-100 min-h-screen">


      <section className="bg-cover bg-center bg-no-repeat text-white text-center py-20 mt-5 opacity-80 saturate-150 rounded-md m-3" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className="max-w-3xl mx-auto bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 shadow-md rounded-md">Shape Your Future with Professional Career Counseling</h1>
          <p className="text-lg mb-8 shadow-md rounded-md">We help you find the right career path and achieve your professional goals with personalized guidance.</p>
          <button
            className="py-3 px-6 bg-white  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:bg-gray-100 border-white mr-2"
            onClick={createZoom}
          >
            Get Started
          </button>
          <button
            className="py-3 px-6 bg-white  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:bg-gray-100 border-white"
            onClick={handleQuiz}
          >
            Quiz
          </button>

        </div>
      </section>





      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:border-blue-400 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-[50px]">Career Coaching</h3>
              <p className="text-gray-600">One-on-one coaching to help you identify your strengths and choose the right career path.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:border-blue-400 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-[50px]">Resume Writing</h3>
              <p className="text-gray-600">Professional resume writing services to help you stand out in the job market.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg  hover:bg-gray-100 transition duration-300 ease-in-out transform hover:border-blue-400 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-[50px]">Interview Preparation</h3>
              <p className="text-gray-600">Prepare for interviews with expert advice and mock interview sessions.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg  hover:bg-gray-100 transition duration-300 ease-in-out transform hover:border-blue-400 hover:scale-105">
              <p className="text-gray-600 mb-4">"The career coaching sessions were a game-changer for me. I now have a clear direction for my future!"</p>
              <p className="font-semibold">- Sarah L.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg  hover:bg-gray-100 transition duration-300 ease-in-out transform hover:border-blue-400 hover:scale-105">
              <p className="text-gray-600 mb-4">"The resume writing service helped me land my dream job. Highly recommend CareerCounsel!"</p>
              <p className="font-semibold">- John D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg  hover:bg-gray-100 transition duration-300 ease-in-out transform hover:border-blue-400 hover:scale-105">
              <p className="text-gray-600 mb-4">"The interview preparation sessions gave me the confidence I needed. Thank you!"</p>
              <p className="font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">Ready to take the next step in your career? Contact us today!</p>
          <a href="mailto:info@careercounsel.com" className="py-3 px-6 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
      </section>



    </div>
  );
};

export default Home;
