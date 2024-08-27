import React, { useState } from "react";
import "./Bookform.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Bookform() {
  const viewdata = useSelector((data) => data.view);
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: ""
  });
  const [showGreeting, setShowGreeting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like dispatching an action to Redux
    console.log("Booking Info:", bookingInfo);
    // Reset the form fields after submission
    setBookingInfo({
      name: "",
      email: "",
      checkInDate: "",
      checkOutDate: ""
    });
    // Show greeting message after submission
    setShowGreeting(true);
  };

  return (
    <div className="bookform-container">
      {!showGreeting ? (
        viewdata.map((val, index) => (
          <div key={index} className="hostel-card">
            <div className="logo">
              <img src={val.photo} alt="logo" />
            </div>
            <div className="name">
              <h2>{val.name}</h2>
            </div>
            <div className="city">
              <h2>{val.city}</h2>
            </div>
            <form className="booking-form" onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={bookingInfo.name}
                onChange={handleInputChange}
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={bookingInfo.email}
                onChange={handleInputChange}
                required
              />
              <label>Check in date</label>
              <input
                type="date"
                name="checkInDate"
                value={bookingInfo.checkInDate}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Book Now</button>
            </form>
          </div>
        ))
      ) : (
        <>
        {
          viewdata.map((val=>{
            return <>
             <div className="container">
            <div className="messege">
              <h1>Thank You for selecting us!</h1>
            </div>
            <div className="logo1">
              <img src={val.photo} alt="" />
            </div>
            <div className="name">
              <h2>{val.name}</h2>
            </div>
            <div className="heading">
              <h1>Your slot Booked!</h1>
            </div>
            <div className="bookingid">
              <h2>   <h3>Booking ID</h3> 857956HOSTELDEKHO</h2>
            </div>
            <div className="info">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam tempore illum voluptate sapiente? Repellat tempora non alias, recusandae, iste vero magni rerum ut laudantium totam officia ab incidunt ratione veritatis!</p>
            </div>
            <div className="btn">
              <button> <Link to='/'>Go to Home page</Link></button>
            </div>
            </div>
            </>
          }))
        }
        </>
      )}
    </div>
  );
}

export default Bookform;
