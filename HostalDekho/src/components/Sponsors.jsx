import React from "react";
import "./Sponsors.css";

const sponsors = [
  {
    name: "The premimum choice",
    logo: "https://i.pinimg.com/564x/0f/58/f2/0f58f2f2832b260cb7463685af630b75.jpg",
    website: "https://sponsor1.com",
  },
  {
    name: "Crezy.com",
    logo: "https://i.pinimg.com/564x/e8/77/0c/e8770c2b1d6793aeef43ee1a5c7cadb8.jpg",
    website: "https://sponsor2.com",
  },
  {
    name: "Wreont",
    logo: "  https://i.pinimg.com/564x/8e/78/8e/8e788e2183bb756008fc3b686e255023.jpg",
    website: "https://sponsor3.com",
  },
  {
    name: "Go-in.in",
    logo: " https://i.pinimg.com/564x/37/c0/11/37c011fd9832bbf3359fef092a992dda.jpg",
    website: "https://sponsor4.com",
  },
  {
    name: "Collegein",
    logo: " https://i.pinimg.com/736x/97/e3/86/97e38683e56cd3c299b38cd280f97877.jpg",
    website: "https://sponsor5.com",
  },
];

function Sponsors() {
  return (
    <div className="sponsors-container">
      <h2>Our Sponsors</h2>
      <ul className="sponsors-list">
        {sponsors.map((sponsor, index) => (
          <li key={index} className="sponsor-item">
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="sponsor-logo"
              />
              <div className="sponsor-name">{sponsor.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sponsors;
