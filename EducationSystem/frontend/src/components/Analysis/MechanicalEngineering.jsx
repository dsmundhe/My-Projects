import React, { useState } from 'react';

const MechanicalEngineering = () => {
  const questions = [
    {
      question: "What is the primary function of a gear in a mechanical system?",
      options: [
        "A) To transfer motion and torque between shafts",
        "B) To cool down the system",
        "C) To store energy",
        "D) To provide lubrication"
      ],
      answer: "A) To transfer motion and torque between shafts"
    },
    {
      question: "In thermodynamics, what is the first law of thermodynamics also known as?",
      options: [
        "A) The Law of Entropy",
        "B) The Law of Energy Conservation",
        "C) The Law of Energy Dissipation",
        "D) The Law of Heat Transfer"
      ],
      answer: "B) The Law of Energy Conservation"
    },
    {
      question: "What does the term 'stress' refer to in material science?",
      options: [
        "A) The internal force per unit area within materials",
        "B) The deformation of a material under load",
        "C) The energy stored in a material",
        "D) The temperature at which a material melts"
      ],
      answer: "A) The internal force per unit area within materials"
    },
    {
      question: "What is the purpose of a heat exchanger?",
      options: [
        "A) To transfer heat between two or more fluids",
        "B) To store thermal energy",
        "C) To cool down a fluid",
        "D) To convert thermal energy into electrical energy"
      ],
      answer: "A) To transfer heat between two or more fluids"
    },
    {
      question: "In fluid mechanics, what does Bernoulli's equation describe?",
      options: [
        "A) The relationship between fluid velocity and pressure",
        "B) The rate of fluid flow through a pipe",
        "C) The viscosity of a fluid",
        "D) The density of a fluid"
      ],
      answer: "A) The relationship between fluid velocity and pressure"
    },
    {
      question: "What is the purpose of a flywheel in mechanical systems?",
      options: [
        "A) To smooth out the delivery of power and store rotational energy",
        "B) To provide thrust in aircraft",
        "C) To absorb shock and vibrations",
        "D) To regulate temperature"
      ],
      answer: "A) To smooth out the delivery of power and store rotational energy"
    },
    {
      question: "What does 'kinematics' study in mechanical engineering?",
      options: [
        "A) The motion of bodies without considering the forces causing the motion",
        "B) The forces and their effects on motion",
        "C) The properties of materials under stress",
        "D) The energy transformations in systems"
      ],
      answer: "A) The motion of bodies without considering the forces causing the motion"
    },
    {
      question: "What is the primary function of a bearing in machinery?",
      options: [
        "A) To reduce friction between moving parts",
        "B) To support the load of a rotating shaft",
        "C) To transmit power between components",
        "D) To provide lubrication"
      ],
      answer: "A) To reduce friction between moving parts"
    },
    {
      question: "In the context of mechanical vibrations, what does the term 'damping' refer to?",
      options: [
        "A) The reduction of oscillations or vibrations over time",
        "B) The increase of vibration amplitude",
        "C) The conversion of vibrations into heat",
        "D) The insulation of vibrating parts"
      ],
      answer: "A) The reduction of oscillations or vibrations over time"
    },
    {
      question: "What is the function of a torque converter in an automobile?",
      options: [
        "A) To multiply torque and facilitate smooth power transmission between the engine and transmission",
        "B) To convert mechanical energy into electrical energy",
        "C) To increase the fuel efficiency of the engine",
        "D) To reduce engine noise"
      ],
      answer: "A) To multiply torque and facilitate smooth power transmission between the engine and transmission"
    }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    let correctAnswersCount = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        correctAnswersCount++;
      }
    });
    setScore(correctAnswersCount);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Mechanical Engineering Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
            <p className="font-semibold text-lg text-gray-800 mb-4">{index + 1}. {q.question}</p>
            {q.options.map((option, optionIndex) => (
              <label key={optionIndex} className="block mt-2 text-gray-700">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={(e) => handleAnswerChange(e, index)}
                  className="mr-2"
                  disabled={submitted}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-600 transition duration-300" disabled={submitted}>
          Submit Quiz
        </button>
      </form>
      {submitted && (
        <div className="mt-8 p-6 bg-green-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center text-green-800">Results</h2>
          <p className="text-lg text-center font-bold text-green-700">You scored {score} out of {questions.length}</p>
          <div className="space-y-4 mt-4">
            {questions.map((q, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-gray-800">{index + 1}. {q.question}</h3>
                <p className={`text-sm ${userAnswers[index] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                  Your Answer: {userAnswers[index] || 'None'}
                </p>
                <p className="text-sm text-gray-600">Correct Answer: {q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MechanicalEngineering;
