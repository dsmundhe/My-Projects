import React, { useState } from 'react';

const ElectronicsAndTelecommunicationEngineering = () => {
  const questions = [
    {
      question: "What does a transistor do in an electronic circuit?",
      options: [
        "A) Stores electrical energy",
        "B) Amplifies or switches electronic signals",
        "C) Measures electrical resistance",
        "D) Converts AC to DC"
      ],
      answer: "B) Amplifies or switches electronic signals"
    },
    {
      question: "What is the purpose of a capacitor in a circuit?",
      options: [
        "A) To resist current flow",
        "B) To filter signals and smooth voltage",
        "C) To amplify signals",
        "D) To convert electrical energy into mechanical energy"
      ],
      answer: "B) To filter signals and smooth voltage"
    },
    {
      question: "Which device is commonly used to rectify alternating current (AC) to direct current (DC)?",
      options: [
        "A) Capacitor",
        "B) Inductor",
        "C) Diode",
        "D) Transformer"
      ],
      answer: "C) Diode"
    },
    {
      question: 'In digital electronics, what does "logic gate" refer to?',
      options: [
        "A) A device that stores data",
        "B) A device that performs logical operations on binary inputs",
        "C) A device that amplifies signals",
        "D) A device that measures signal strength"
      ],
      answer: "B) A device that performs logical operations on binary inputs"
    },
    {
      question: "What is the unit of frequency in telecommunication systems?",
      options: [
        "A) Volt (V)",
        "B) Ohm (Ω)",
        "C) Hertz (Hz)",
        "D) Ampere (A)"
      ],
      answer: "C) Hertz (Hz)"
    },
    {
      question: 'What does "modulation" refer to in telecommunications?',
      options: [
        "A) The process of encoding data onto a carrier signal",
        "B) The process of amplifying signals",
        "C) The process of filtering signals",
        "D) The process of converting analog signals to digital"
      ],
      answer: "A) The process of encoding data onto a carrier signal"
    },
    {
      question: "In communication systems, what is the function of an amplifier?",
      options: [
        "A) To decrease the strength of a signal",
        "B) To filter out unwanted frequencies",
        "C) To increase the strength of a signal",
        "D) To convert signals from one form to another"
      ],
      answer: "C) To increase the strength of a signal"
    },
    {
      question: 'What is the primary purpose of a "modem" in a telecommunications system?',
      options: [
        "A) To amplify signals",
        "B) To modulate and demodulate signals for data transmission",
        "C) To filter noise from signals",
        "D) To measure signal strength"
      ],
      answer: "B) To modulate and demodulate signals for data transmission"
    },
    {
      question: 'What does "bandwidth" refer to in communication systems?',
      options: [
        "A) The range of frequencies a signal can occupy",
        "B) The strength of a signal",
        "C) The distance a signal travels",
        "D) The amount of data stored in a system"
      ],
      answer: "A) The range of frequencies a signal can occupy"
    },
    {
      question: 'In a digital communication system, what does "bit rate" refer to?',
      options: [
        "A) The number of bits transmitted per second",
        "B) The total number of bits stored",
        "C) The number of bits in a byte",
        "D) The time taken for a bit to travel from source to destination"
      ],
      answer: "A) The number of bits transmitted per second"
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
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Electronics and Telecommunication Engineering Quiz</h1>
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

export default ElectronicsAndTelecommunicationEngineering;
