import React, { useState } from 'react';

const CivilEngineering = () => {
  const questions = [
    {
      question: "What is the primary purpose of a foundation in civil engineering?",
      options: [
        "A) To support the structure above it and transfer loads to the ground",
        "B) To decorate the building's exterior",
        "C) To insulate the building",
        "D) To provide ventilation"
      ],
      answer: "A) To support the structure above it and transfer loads to the ground"
    },
    {
      question: "What does the term 'load-bearing wall' refer to in building construction?",
      options: [
        "A) A wall that only supports its own weight",
        "B) A wall that supports the weight of the structure above it",
        "C) A wall used for insulation",
        "D) A wall that separates different rooms"
      ],
      answer: "B) A wall that supports the weight of the structure above it"
    },
    {
      question: "In concrete mix design, what does the term 'aggregate' refer to?",
      options: [
        "A) The binder that holds the concrete together",
        "B) The component that provides strength and durability",
        "C) The mixture of sand and gravel or crushed stone",
        "D) The chemical additive that speeds up curing"
      ],
      answer: "C) The mixture of sand and gravel or crushed stone"
    },
    {
      question: "What is the primary function of a beam in a structural framework?",
      options: [
        "A) To resist vertical loads and transfer them to the supports",
        "B) To serve as a decorative element",
        "C) To provide insulation against temperature changes",
        "D) To facilitate ventilation in the building"
      ],
      answer: "A) To resist vertical loads and transfer them to the supports"
    },
    {
      question: "Which test is commonly used to determine the strength of concrete?",
      options: [
        "A) Slump Test",
        "B) Compression Test",
        "C) Tensile Test",
        "D) Shear Test"
      ],
      answer: "B) Compression Test"
    },
    {
      question: "What does the term 'civil engineering' encompass?",
      options: [
        "A) The design, construction, and maintenance of infrastructure and buildings",
        "B) The study of chemical processes",
        "C) The development of software systems",
        "D) The exploration of outer space"
      ],
      answer: "A) The design, construction, and maintenance of infrastructure and buildings"
    },
    {
      question: "What is the purpose of 'reinforcement' in reinforced concrete?",
      options: [
        "A) To increase the tensile strength of concrete",
        "B) To reduce the density of concrete",
        "C) To make concrete more resistant to weathering",
        "D) To decrease the curing time"
      ],
      answer: "A) To increase the tensile strength of concrete"
    },
    {
      question: "In the context of soil mechanics, what is 'compaction'?",
      options: [
        "A) The process of increasing the density of soil to improve its strength and stability",
        "B) The process of mixing soil with water to make it suitable for construction",
        "C) The process of adding chemicals to soil to enhance its properties",
        "D) The process of layering soil for aesthetic purposes"
      ],
      answer: "A) The process of increasing the density of soil to improve its strength and stability"
    },
    {
      question: "What is the purpose of a 'retaining wall'?",
      options: [
        "A) To hold back soil and prevent erosion",
        "B) To provide an aesthetic design element",
        "C) To support the roof structure",
        "D) To divide different functional areas within a building"
      ],
      answer: "A) To hold back soil and prevent erosion"
    },
    {
      question: "Which type of bridge is characterized by a horizontal beam supported at each end by vertical supports?",
      options: [
        "A) Arch Bridge",
        "B) Suspension Bridge",
        "C) Cantilever Bridge",
        "D) Beam Bridge"
      ],
      answer: "D) Beam Bridge"
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
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Civil Engineering Quiz</h1>
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

export default CivilEngineering;
