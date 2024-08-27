import React, { useState } from 'react';

const ComputerScienceEngineering = () => {
  const questions = [
    {
      question: "What is the primary function of the CPU (Central Processing Unit) in a computer?",
      options: [
        "A) To store data permanently",
        "B) To perform arithmetic and logic operations",
        "C) To display graphics on the screen",
        "D) To manage network connections"
      ],
      answer: "B) To perform arithmetic and logic operations"
    },
    {
      question: "Which programming language is known as a high-level language and is commonly used for web development?",
      options: [
        "A) Assembly",
        "B) JavaScript",
        "C) C++",
        "D) Python"
      ],
      answer: "B) JavaScript"
    },
    {
      question: "What does the acronym 'HTML' stand for?",
      options: [
        "A) Hypertext Markup Language",
        "B) Hyperlink Text Markup Language",
        "C) High-Level Text Markup Language",
        "D) Hypertext Transfer Protocol"
      ],
      answer: "A) Hypertext Markup Language"
    },
    {
      question: "In networking, what does the term 'IP address' stand for?",
      options: [
        "A) Internet Protocol address",
        "B) Internet Private address",
        "C) Internal Protocol address",
        "D) Interconnected Public address"
      ],
      answer: "A) Internet Protocol address"
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out) order?",
      options: [
        "A) Queue",
        "B) Stack",
        "C) Array",
        "D) Linked List"
      ],
      answer: "B) Stack"
    },
    {
      question: "What is the primary purpose of an operating system?",
      options: [
        "A) To manage hardware and software resources",
        "B) To perform mathematical calculations",
        "C) To develop applications",
        "D) To provide internet connectivity"
      ],
      answer: "A) To manage hardware and software resources"
    },
    {
      question: "What does the acronym 'SQL' stand for in database management?",
      options: [
        "A) Structured Query Language",
        "B) Standard Query Language",
        "C) Simple Query Language",
        "D) System Query Language"
      ],
      answer: "A) Structured Query Language"
    },
    {
      question: "Which algorithm is commonly used for searching an item in a sorted array?",
      options: [
        "A) Linear Search",
        "B) Binary Search",
        "C) Bubble Sort",
        "D) Quick Sort"
      ],
      answer: "B) Binary Search"
    },
    {
      question: "What is a 'bug' in software development?",
      options: [
        "A) A feature request",
        "B) A defect or error in the software",
        "C) A type of database",
        "D) A programming language"
      ],
      answer: "B) A defect or error in the software"
    },
    {
      question: "Which type of memory is non-volatile and is used to store the firmware of a computer?",
      options: [
        "A) RAM",
        "B) ROM",
        "C) Cache",
        "D) Virtual Memory"
      ],
      answer: "B) ROM"
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
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Computer Science and Engineering Quiz</h1>
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

export default ComputerScienceEngineering;
