import React, { useState } from 'react';

const ArchitectureEngineering = () => {
  const questions = [
    {
      id: 1,
      question: "What is the primary purpose of a building's foundation?",
      options: [
        { id: 'a', text: 'To support the structure\'s weight' },
        { id: 'b', text: 'To provide aesthetic appeal' },
        { id: 'c', text: 'To create additional space' },
        { id: 'd', text: 'To allow for natural lighting' }
      ],
      answer: 'a'
    },
    {
      id: 2,
      question: "Who is known as the 'father of modern architecture'?",
      options: [
        { id: 'a', text: 'Frank Lloyd Wright' },
        { id: 'b', text: 'Le Corbusier' },
        { id: 'c', text: 'Ludwig Mies van der Rohe' },
        { id: 'd', text: 'Frank Gehry' }
      ],
      answer: 'b'
    },
    {
      id: 3,
      question: "Which architectural style is characterized by the use of arches, vaults, and domes, and is often associated with medieval European churches?",
      options: [
        { id: 'a', text: 'Gothic' },
        { id: 'b', text: 'Baroque' },
        { id: 'c', text: 'Renaissance' },
        { id: 'd', text: 'Neoclassical' }
      ],
      answer: 'a'
    },
    {
      id: 4,
      question: "What is a 'façade' in architectural terms?",
      options: [
        { id: 'a', text: 'The interior layout of a building' },
        { id: 'b', text: 'The front or exterior face of a building' },
        { id: 'c', text: 'The roof structure' },
        { id: 'd', text: 'The building\'s foundation' }
      ],
      answer: 'b'
    },
    {
      id: 5,
      question: "What type of building material is known for its use in modern construction and is characterized by its strength and versatility?",
      options: [
        { id: 'a', text: 'Brick' },
        { id: 'b', text: 'Concrete' },
        { id: 'c', text: 'Wood' },
        { id: 'd', text: 'Stone' }
      ],
      answer: 'b'
    },
    {
      id: 6,
      question: "Which famous architect designed the Guggenheim Museum in New York City?",
      options: [
        { id: 'a', text: 'Frank Lloyd Wright' },
        { id: 'b', text: 'Zaha Hadid' },
        { id: 'c', text: 'I. M. Pei' },
        { id: 'd', text: 'Rem Koolhaas' }
      ],
      answer: 'a'
    },
    {
      id: 7,
      question: "What is the term for a tall, multi-story building designed for residential or commercial use?",
      options: [
        { id: 'a', text: 'Skyscraper' },
        { id: 'b', text: 'Pavilion' },
        { id: 'c', text: 'Bungalow' },
        { id: 'd', text: 'Cottage' }
      ],
      answer: 'a'
    },
    {
      id: 8,
      question: "What architectural style is known for its use of clean lines, geometric shapes, and minimal decoration, and emerged in the early 20th century?",
      options: [
        { id: 'a', text: 'Art Deco' },
        { id: 'b', text: 'Bauhaus' },
        { id: 'c', text: 'Tudor' },
        { id: 'd', text: 'Colonial Revival' }
      ],
      answer: 'b'
    },
    {
      id: 9,
      question: "Which famous structure in Paris, France, was originally built as a temporary exhibit for the 1889 Exposition Universelle?",
      options: [
        { id: 'a', text: 'Notre-Dame Cathedral' },
        { id: 'b', text: 'Louvre Museum' },
        { id: 'c', text: 'Eiffel Tower' },
        { id: 'd', text: 'Arc de Triomphe' }
      ],
      answer: 'c'
    },
    {
      id: 10,
      question: "In architecture, what is the term for a horizontal structure that spans an opening, such as a door or window?",
      options: [
        { id: 'a', text: 'Column' },
        { id: 'b', text: 'Beam' },
        { id: 'c', text: 'Truss' },
        { id: 'd', text: 'Pilaster' }
      ],
      answer: 'b'
    }
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionId, optionId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getScore = () => {
    return questions.reduce((score, question) => {
      return score + (answers[question.id] === question.answer ? 1 : 0);
    }, 0);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Architecture Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map(q => (
          <div key={q.id} className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{q.question}</h2>
            <div className="space-y-2">
              {q.options.map(option => (
                <label key={option.id} className="block">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option.id}
                    checked={answers[q.id] === option.id}
                    onChange={() => handleOptionChange(q.id, option.id)}
                    className="mr-2"
                    disabled={submitted}
                  />
                  {option.text}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-600 transition duration-300"
          disabled={submitted}
        >
          Submit Quiz
        </button>
      </form>
      {submitted && (
        <div className="mt-8 p-6 bg-green-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-green-800 text-center">Results</h2>
          <p className="text-lg mb-4 text-center text-green-700">Your Score: {getScore()} / {questions.length}</p>
          <div className="space-y-4">
            {questions.map(q => (
              <div key={q.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-gray-800">{q.question}</h3>
                <p className={`text-sm ${answers[q.id] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                  Your Answer: {q.options.find(opt => opt.id === answers[q.id])?.text || 'None'}
                </p>
                <p className="text-sm text-gray-600">Correct Answer: {q.options.find(opt => opt.id === q.answer)?.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchitectureEngineering;
