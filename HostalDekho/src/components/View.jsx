import React from "react";
import { useSelector } from "react-redux";
import "./View.css";
import { Link } from "react-router-dom";

function View() {
  const viewdata = useSelector((data) => data.view);

  return (
    <div className="view-container">
      {viewdata.map((val) => (
        <div key={val.id} className="view-item">
          <div className="image">
            <img src={val.photo} alt="photo" />
          </div>
          <div className="name">
            <h1>{val.name}</h1>
          </div>
          <div className="city">
            <h2>{val.city}</h2>
          </div>
          <div className="book">
            <button>
              <Link to='/bookform'> 
              Book Now
              </Link>
              </button>
          </div>
          <div className="info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              consequuntur necessitatibus ratione nemo totam ut. Ipsam aut dicta
              necessitatibus! Illum beatae esse, provident distinctio quis
              quibusdam cupiditate ipsam itaque modi, dignissimos a vitae autem
              placeat laboriosam et nulla maxime quia.
            </p>
          </div>
          <div className="images">
            <img
              src="https://images.unsplash.com/photo-1600488999129-e49662f4020c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="roomphoto"
            />
            <img
              src="https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="roomphoto"
            />
            <img
              src="https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="roomphoto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default View;
