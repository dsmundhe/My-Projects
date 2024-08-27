import React from "react";
import "./Booknow.css";
import { useSelector, useDispatch } from "react-redux";
import View from "./View";
import { Link } from "react-router-dom";
import { setViewData } from "../features/Hostaldekho/hostaldekhoSlice"; // Assuming setViewData action creator
function Booknow() {
  const hostels = useSelector((state) => state.hostels); // Assuming hostels is from Redux state
  const dispatch = useDispatch();

  const handleViewClick = (val) => {
    dispatch(setViewData(val)); // Dispatching the action with hostel data
  };

  return (
    <div className="mainbox1">
      <div className="resultbox">
        <ul>
          {hostels.map((val) => (
            <li key={val.id}>
              <div className="logo">
                <img src={val.photo} alt="logo" />
              </div>
              <div className="details">
                <h2>{val.name}</h2>
                <h3 className="city">{val.city}</h3>
              </div>
              <div className="viewbtn">
                <Link to="/view">
                  <button onClick={() => handleViewClick(val)}>View</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Booknow;
