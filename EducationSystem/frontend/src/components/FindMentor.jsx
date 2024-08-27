import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindMentor = () => {
  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const savedMentors = JSON.parse(localStorage.getItem('mentorsData'));
    if (savedMentors) {
      setMentors(savedMentors);
    }
  }, []);

  const handleRemove = (index) => {
    const newMentors = mentors.filter((_, i) => i !== index);
    setMentors(newMentors);
    localStorage.setItem('mentorsData', JSON.stringify(newMentors));
  };

  const handleSelect = (mentor) => {
    localStorage.setItem('selectedMentor', JSON.stringify(mentor));
    navigate('/done');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-200 m-3 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Mentor Details</h2>
      {mentors.map((mentor, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-gray-700 font-medium">Name:</h3>
            <p className="text-gray-900 ml-6">{mentor.name}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Email:</h3>
            <p className="text-gray-900">{mentor.email}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium ">Phone:</h3>
            <p className="text-gray-900">{mentor.phone}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Highest Qualification:</h3>
            <p className="text-gray-900">{mentor.highestQualification}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Total Experience:</h3>
            <p className="text-gray-900">{mentor.totalExperience}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Current Profile:</h3>
            <p className="text-gray-900">{mentor.currentProfile}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Current Company:</h3>
            <p className="text-gray-900">{mentor.currentCompany}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Domain Expertise:</h3>
            <p className="text-gray-900">{mentor.domainExpertise}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Sector Expertise:</h3>
            <p className="text-gray-900">{mentor.sectorExpertise}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Mentor Type:</h3>
            <p className="text-gray-900">{mentor.mentorType}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Institute Type:</h3>
            <p className="text-gray-900">{mentor.instituteType}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Availability Day:</h3>
            <p className="text-gray-900">{mentor.availabilityDay}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Availability Time:</h3>
            <p className="text-gray-900">{mentor.availabilityTime}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Time Commitment:</h3>
            <p className="text-gray-900">{mentor.timeCommitment}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">LinkedIn:</h3>
            <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {mentor.linkedin}
            </a>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">GitHub:</h3>
            <a href={mentor.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {mentor.github}
            </a>
          </div>
          <div className="sm:col-span-2">
            <h3 className="text-gray-700 font-medium">Summary:</h3>
            <p className="text-gray-900">{mentor.summary}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Resume:</h3>
            {mentor.resume ? (
              <a href={mentor.resume} download className="text-blue-600 underline">
                Download Resume
              </a>
            ) : (
              <p className="text-gray-500">No resume uploaded.</p>
            )}
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Image:</h3>
            {mentor.image ? (
              <img
                src={mentor.image}
                alt="Mentor"
                className="h-32 w-32 object-cover rounded-lg"
              />
            ) : (
              <p className="text-gray-500">No image uploaded.</p>
            )}
          </div>
          <div className='gap-2'>
            <button
              className='bg-red-600 text-white p-2 rounded-md mr-1'
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
            <button
              className='bg-green-500 text-white p-2 rounded-md'
              onClick={() => handleSelect(mentor)}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FindMentor;
