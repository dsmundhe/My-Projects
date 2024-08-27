import React, { useState } from 'react';

const MBBSQuiz = () => {
  const questions = [
    {
      question: "What is the primary function of red blood cells?",
      options: [
        "A) To fight infection",
        "B) To carry oxygen",
        "C) To clot blood",
        "D) To digest nutrients"
      ],
      answer: "B) To carry oxygen"
    },
    {
      question: "Which organ is primarily responsible for filtering blood and producing urine?",
      options: [
        "A) Liver",
        "B) Heart",
        "C) Kidneys",
        "D) Lungs"
      ],
      answer: "C) Kidneys"
    },
    {
      question: "What is the normal range of blood pressure in an adult?",
      options: [
        "A) 90/60 mmHg",
        "B) 120/80 mmHg",
        "C) 140/90 mmHg",
        "D) 160/100 mmHg"
      ],
      answer: "B) 120/80 mmHg"
    },
    {
      question: "What type of infection is caused by the influenza virus?",
      options: [
        "A) Bacterial",
        "B) Fungal",
        "C) Viral",
        "D) Parasitic"
      ],
      answer: "C) Viral"
    },
    {
      question: "Which part of the brain is responsible for regulating heart rate and breathing?",
      options: [
        "A) Cerebrum",
        "B) Cerebellum",
        "C) Medulla oblongata",
        "D) Hypothalamus"
      ],
      answer: "C) Medulla oblongata"
    },
    {
      question: "What is the primary function of insulin in the body?",
      options: [
        "A) To digest food",
        "B) To regulate blood sugar levels",
        "C) To absorb nutrients",
        "D) To pump blood"
      ],
      answer: "B) To regulate blood sugar levels"
    },
    {
      question: "Which diagnostic tool is commonly used to visualize internal organs and structures?",
      options: [
        "A) X-ray",
        "B) ECG",
        "C) Stethoscope",
        "D) Thermometer"
      ],
      answer: "A) X-ray"
    },
    {
      question: "What is the medical term for high blood sugar levels?",
      options: [
        "A) Hyperglycemia",
        "B) Hypoglycemia",
        "C) Hypertension",
        "D) Hypotension"
      ],
      answer: "A) Hyperglycemia"
    },
    {
      question: "What type of drug is used to reduce inflammation?",
      options: [
        "A) Analgesics",
        "B) Antibiotics",
        "C) Antipyretics",
        "D) Anti-inflammatory drugs"
      ],
      answer: "D) Anti-inflammatory drugs"
    },
    {
      question: "What does the term 'anemia' refer to?",
      options: [
        "A) A condition with high blood pressure",
        "B) A condition with low red blood cells or hemoglobin",
        "C) A condition with high blood sugar",
        "D) A condition with low white blood cells"
      ],
      answer: "B) A condition with low red blood cells or hemoglobin"
    }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">MBBS Quiz</h1>
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
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-600 transition duration-300">
          Submit Quiz
        </button>
      </form>
      {score !== null && (
        <div className="mt-8 p-6 bg-green-100 rounded-lg shadow-md">
          <p className="text-lg text-center font-bold text-green-800">You scored {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default MBBSQuiz;
