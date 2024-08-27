import React from "react";
import "./Home.css";
import Sponsors from "./Sponsors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Home() {
  const colleges = useSelector((college) => college.colleges);
  const signupdata = useSelector((data) => data.signup);
  const viewdata = useSelector((data) => data.view);
  return (
    <div>
      <div className="head">
        <ul>
          <li>Colleges</li>
          <li>Hostels</li>
          <li>PGs</li>
          <li>Canteen</li>
          <li>Homes</li>
        </ul>
      </div>
      <div className="homebox">
        <div className="leftbox">
          <div className="infobox">
            <div className="heading">
              <h1>
                Welcome to <span>HostelDekho</span>
              </h1>
            </div>
            <div className="about">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              quaerat voluptatibus odio, sapiente laboriosam, consequuntur
              debitis quis nihil eos blanditiis repellat quibusdam totam itaque
              corporis, atque eaque necessitatibus dolores! Nemo.
            </div>
            <div className="btns">
              {signupdata.length > 0 ? (
                <>
                  {signupdata.map((val) => {
                    return <h2 key={val.name}>{val.name}</h2>;
                  })}
                </>
              ) : (
                <>
                  {" "}
                  <button>
                    <Link to="/signup">Sign up</Link>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="bookseebox">
            <button>
              <Link to="/booksee">Your bookings</Link>
            </button>
          </div>
        </div>
        <div className="rightbox">
          <div className="heading">
            <h2>Best Colleges!</h2>
          </div>
          <ul>
            {colleges.map((college) => {
              return (
                <li key={college.ranking} className="college-item">
                  <div className="college-details">
                    <img
                      src={college.logo}
                      alt={`${college.name} logo`}
                      className="college-logo"
                    />
                    <div>
                      <h3 className="college-name">{college.name}</h3>
                      <p className="college-location">
                        Location: {college.location}
                      </p>
                      <p className="college-ranking">
                        Ranking: {college.ranking}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <Sponsors />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          {/* Contact Information */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>123 Hostel Street, Nagpur, Maharashtra</p>
            <p>Email: info@hostelbooking.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Rooms & Rates</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Hostel Booking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
