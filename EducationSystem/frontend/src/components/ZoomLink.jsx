import React from 'react';
import { useNavigate } from 'react-router-dom';

const ZoomLink = () => {
  const navigate = useNavigate();

  const handleLoginMentor = () => {
    navigate('/login');
  }

  const handleLoginUser = () => {
    navigate('/Ulogin');
  }

  return (
    <div className='h-screen flex flex-col lg:flex-row lg:items-center lg:justify-center p-4 lg:p-8'>
      {/* Mentor and Trainee info section */}
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 mb-5 lg:mb-0'>
        {/* Optional information section - uncomment if needed */}
        {/* <div className='text-center lg:text-left'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>For Mentor login</h1>
          <p className='text-sm md:text-base lg:text-lg'>Username: Mentor</p>
          <p className='text-sm md:text-base lg:text-lg'>Password: PASS@123</p>
        </div>
        <div className='text-center lg:text-left'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>For Trainee login</h1>
          <p className='text-sm md:text-base lg:text-lg'>Username: User</p>
          <p className='text-sm md:text-base lg:text-lg'>Password: PASS@123</p>
        </div> */}
      </div>

      {/* Login as Mentor */}
      <div className='flex flex-col items-center justify-center w-full lg:w-[350px] h-auto lg:h-[400px] bg-gray-100 rounded-md shadow-md p-6 lg:p-8 mx-4 lg:mx-6'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent'>
          Login as Mentor
        </h1>
        <div className='flex flex-col font-semibold text-gray-700 mt-6 text-center'>
          {/* <p>1. "Mentor guidance turns dreams into reality."</p>
          <p>2. "A mentor makes success achievable."</p>
          <p>3. "Mentor inspires greatness with every word."</p>
          <p>4. "Mentor wisdom is a gift that keeps on giving."</p> */}
          <p>
          "Empower others to achieve their dreams."
          "Guidance transforms potential into success."
          "Inspire and lead with wisdom and experience."
          "Your insights shape the future of those you mentor."
          </p>
        </div>
        <button className='p-3 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600' onClick={handleLoginMentor}>
          Login
        </button>
      </div>

      {/* Login as Trainee */}
      <div className='flex flex-col items-center justify-center w-full lg:w-[350px] h-auto lg:h-[400px] bg-gray-100 rounded-md shadow-md p-6 lg:p-8 mx-4 lg:mx-6 mt-5 lg:mt-0'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent'>
          Login as Trainee
        </h1>
        <div className='flex flex-col font-semibold text-gray-700 mt-6 text-center'>
          {/* <p>1. "Eager to learn and grow every day."</p>
          <p>2. "Continuous improvement."</p>
          <p>3. "Dedicated to mastering new skills."</p>
          <p>4. "Adaptable and ready for challenges."</p> */}
          <p>
          "Embrace the journey of growth and learning."
          "Commit to turning challenges into achievements."
          "Strive for excellence with dedication and perseverance."
          "Your eagerness to learn paves the way to success."
          </p>
        </div>
        <button className='p-3 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600' onClick={handleLoginUser}>
          Login
        </button>
      </div>
    </div>
  );
}

export default ZoomLink;
