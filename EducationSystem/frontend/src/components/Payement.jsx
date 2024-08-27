import React, { useState } from 'react';
import QR from '../assets/QR.png'
import { useNavigate } from 'react-router-dom';


const Payement = () => {
    const navigate = useNavigate();
    const [screenshot, setScreenshot] = useState(null);


    const handleScreenShot = (e) => {
        const file = e.target.files[0];
        if (file) {
          setScreenshot(URL.createObjectURL(file));
          alert("Screenshot added successfully.");
        }
      };
    
      const conformPay = () => {
        // Retrieve the mentor data
        const selectedMentor = JSON.parse(localStorage.getItem('selectedMentor'));
        if (selectedMentor) {
          navigate('/conform', { state: { mentor: selectedMentor } });
        } else {
          alert('No mentor data found.');
        }
      };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-2">Payment Page</h2>
        <h3 className='text-xl font-bold text-gray-600 text-center mb-2'>Please Scan To do Payment</h3>
        
        <div className="flex items-center justify-center mb-6">
          <div className="border border-gray-300 rounded-md p-4">
            <img
              src={QR}
              alt="QR Code"
              className="w-40 h-40"
            />
            <p className="text-center text-gray-600 mt-2">Scan to Pay</p>
          </div>
        </div>

      
        <form >
        <div className="flex flex-col items-center justify-center">
  <label className="text-gray-600 mb-2 text-center">Please Add Your Payment Screenshot</label>
  <div className="flex items-center justify-center">
    <input 
      type="file" 
      placeholder="Please add Screenshot"
      onChange={handleScreenShot}
      className="text-center ml-[70px] mb-2"
    />
  </div>
</div>

          <button
            onClick={conformPay}
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payement;
