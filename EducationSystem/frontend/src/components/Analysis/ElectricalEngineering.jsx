import React, { useState } from 'react';

const ElectricalEngineering = () => {
  const questions = [
    {
      question: "What is Ohm's Law?",
      options: [
        "A) V = I * R",
        "B) P = I * R",
        "C) V = I / R",
        "D) R = V * I"
      ],
      answer: "A) V = I * R"
    },
    {
      question: "What does a capacitor do in an electrical circuit?",
      options: [
        "A) Stores electrical energy",
        "B) Provides resistance",
        "C) Converts AC to DC",
        "D) Measures voltage"
      ],
      answer: "A) Stores electrical energy"
    },
    {
      question: "What is the unit of electrical resistance?",
      options: [
        "A) Ampere",
        "B) Volt",
        "C) Ohm",
        "D) Watt"
      ],
      answer: "C) Ohm"
    },
    {
      question: "In a series circuit, how does the total resistance change as more resistors are added?",
      options: [
        "A) It decreases",
        "B) It stays the same",
        "C) It increases",
        "D) It fluctuates"
      ],
      answer: "C) It increases"
    },
    {
      question: "What is the purpose of a transformer in an electrical system?",
      options: [
        "A) To increase or decrease voltage",
        "B) To store energy",
        "C) To measure current",
        "D) To generate electricity"
      ],
      answer: "A) To increase or decrease voltage"
    },
    {
      question: "Which type of current flows in one direction only?",
      options: [
        "A) Alternating Current (AC)",
        "B) Direct Current (DC)",
        "C) Pulsating Current",
        "D) Static Current"
      ],
      answer: "B) Direct Current (DC)"
    },
    {
      question: "What is the power factor in an AC circuit?",
      options: [
        "A) The ratio of real power to apparent power",
        "B) The ratio of voltage to current",
        "C) The total power consumed",
        "D) The efficiency of the circuit"
      ],
      answer: "A) The ratio of real power to apparent power"
    },
    {
      question: "What does the term 'short circuit' refer to?",
      options: [
        "A) A circuit with a very high resistance",
        "B) A circuit with a very low resistance",
        "C) A circuit that is open",
        "D) A circuit with a normal resistance"
      ],
      answer: "B) A circuit with a very low resistance"
    },
    {
      question: "What device is used to measure current in a circuit?",
      options: [
        "A) Voltmeter",
        "B) Ammeter",
        "C) Ohmmeter",
        "D) Wattmeter"
      ],
      answer: "B) Ammeter"
    },
    {
      question: "What is the formula for calculating electrical power?",
      options: [
        "A) P = V * I",
        "B) P = V / I",
        "C) P = I / V",
        "D) P = V + I"
      ],
      answer: "A) P = V * I"
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
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Electrical Engineering Quiz</h1>
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

export default ElectricalEngineering;
