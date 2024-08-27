import React, { useState } from 'react';

const ChemicalEngineering = () => {
  const questions = [
    {
      question: "What is the primary function of a chemical reactor in chemical engineering?",
      options: [
        "A) To mix chemicals",
        "B) To control temperature",
        "C) To carry out chemical reactions",
        "D) To filter substances"
      ],
      answer: "C) To carry out chemical reactions"
    },
    {
      question: 'What does the term "stoichiometry" refer to in chemical engineering?',
      options: [
        "A) The study of reaction rates",
        "B) The calculation of reactants and products in a chemical reaction",
        "C) The design of chemical reactors",
        "D) The measurement of chemical properties"
      ],
      answer: "B) The calculation of reactants and products in a chemical reaction"
    },
    {
      question: "What is a common unit of measure for pressure in chemical engineering?",
      options: [
        "A) Pascal (Pa)",
        "B) Watt (W)",
        "C) Kelvin (K)",
        "D) Mole (mol)"
      ],
      answer: "A) Pascal (Pa)"
    },
    {
      question: "What is the principle behind distillation?",
      options: [
        "A) Separation based on boiling points",
        "B) Separation based on solubility",
        "C) Separation based on density",
        "D) Separation based on particle size"
      ],
      answer: "A) Separation based on boiling points"
    },
    {
      question: "What is the main purpose of a heat exchanger in a chemical plant?",
      options: [
        "A) To remove impurities",
        "B) To transfer heat between fluids",
        "C) To mix chemicals",
        "D) To control pressure"
      ],
      answer: "B) To transfer heat between fluids"
    },
    {
      question: 'In the context of chemical reactions, what does "activation energy" refer to?',
      options: [
        "A) The energy required to initiate a reaction",
        "B) The energy released during a reaction",
        "C) The energy required to maintain a reaction",
        "D) The energy needed to cool a reaction"
      ],
      answer: "A) The energy required to initiate a reaction"
    },
    {
      question: "What is the difference between an exothermic and an endothermic reaction?",
      options: [
        "A) Exothermic reactions release heat; endothermic reactions absorb heat",
        "B) Exothermic reactions absorb heat; endothermic reactions release heat",
        "C) Exothermic reactions involve gases; endothermic reactions involve liquids",
        "D) Exothermic reactions occur in solutions; endothermic reactions occur in solids"
      ],
      answer: "A) Exothermic reactions release heat; endothermic reactions absorb heat"
    },
    {
      question: "What is the role of a catalyst in a chemical reaction?",
      options: [
        "A) To increase the reaction rate without being consumed",
        "B) To provide energy for the reaction",
        "C) To change the reaction equilibrium",
        "D) To alter the reaction products"
      ],
      answer: "A) To increase the reaction rate without being consumed"
    },
    {
      question: 'What does the term "fluid dynamics" refer to in chemical engineering?',
      options: [
        "A) The study of fluid properties and behaviors",
        "B) The study of chemical reactions",
        "C) The study of solid materials",
        "D) The study of thermal processes"
      ],
      answer: "A) The study of fluid properties and behaviors"
    },
    {
      question: "What is the purpose of using a centrifuge in chemical engineering?",
      options: [
        "A) To separate substances based on density",
        "B) To measure temperature",
        "C) To control pressure",
        "D) To mix chemicals thoroughly"
      ],
      answer: "A) To separate substances based on density"
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
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Chemical Engineering Quiz</h1>
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

export default ChemicalEngineering;
