import React from "react";
import "./CollegeList.css";

const colleges = [
  {
    name: "College of Engineering",
    location: "Pune",
    ranking: 1,
    logo: "https://i.pinimg.com/564x/79/f5/db/79f5db918853c4e20ee5bfdc7b830ca8.jpg",
  },
  {
    name: "Indian Institute of Technology",
    location: "Mumbai",
    ranking: 2,
    logo: " https://i.pinimg.com/564x/d9/25/63/d92563980132485db206a553bd9a0f23.jpg",
  },
  {
    name: "National Institute of Technology",
    location: "Surathkal",
    ranking: 3,
    logo: "https://i.pinimg.com/564x/a5/8b/3a/a58b3ae3b73d18f21e73cb2fdffa9dfc.jpg",
  },
  {
    name: "Anna University",
    location: "Chennai",
    ranking: 4,
    logo: " https://i.pinimg.com/564x/bb/b2/69/bbb269fd28c363384e43c4b7d6b0b3f3.jpg",
  },
  {
    name: "Delhi Technological University",
    location: "Delhi",
    ranking: 5,
    logo: " https://i.pinimg.com/564x/4a/a2/45/4aa2454d46917090226a072b31b3f2a7.jpg",
  },
  {
    name: "College of Engineering",
    location: "Pune",
    ranking: 1,
    logo: " https://i.pinimg.com/564x/80/6e/33/806e338e2d1e249796179de5164bb1c8.jpg",
  },
  {
    name: "Indian Institute of Technology",
    location: "Mumbai",
    ranking: 2,
    logo: " https://i.pinimg.com/564x/9f/81/8d/9f818d4c9c9af1b672ab737b4e4ebd5f.jpg",
  },
  {
    name: "National Institute of Technology",
    location: "Surathkal",
    ranking: 3,
    logo: " https://i.pinimg.com/564x/ec/8b/ba/ec8bba63285020f82381dd25ba819ae6.jpg",
  },
  {
    name: "Anna University",
    location: "Chennai",
    ranking: 4,
    logo: " https://i.pinimg.com/564x/24/83/b0/2483b0adce8f18ec74d217c9bb2ce394.jpg",
  },
  {
    name: "Delhi Technological University",
    location: "Delhi",
    ranking: 5,
    logo: " https://i.pinimg.com/564x/df/03/07/df0307f47c7b936b4d905e1ec8dbb9a8.jpg",
  },
];

function CollegeList() {
  return (
    <div className="college-list-container">
      <h2>Top Colleges</h2>
      <ul className="college-list">
        {colleges.map((college, index) => (
          <li key={index} className="college-item">
            <div className="college-details">
              <img
                src={college.logo}
                alt={`${college.name} logo`}
                className="college-logo"
              />
              <div>
                <h3 className="college-name">{college.name}</h3>
                <p className="college-location">Location: {college.location}</p>
                <p className="college-ranking">Ranking: {college.ranking}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollegeList;
