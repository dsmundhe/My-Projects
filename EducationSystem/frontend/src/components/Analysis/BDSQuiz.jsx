import React from 'react';

const BDSQuiz = () => {
  const questions = [
    {
      question: "What is the primary function of enamel in teeth?",
      options: [
        "A) To aid in digestion",
        "B) To protect the tooth from decay",
        "C) To support tooth movement",
        "D) To enhance taste sensation"
      ],
      correctAnswer: "B) To protect the tooth from decay"
    },
    {
      question: "What is the most common cause of tooth decay?",
      options: [
        "A) Gum disease",
        "B) Plaque buildup and acid from bacteria",
        "C) Genetic factors",
        "D) Trauma"
      ],
      correctAnswer: "B) Plaque buildup and acid from bacteria"
    },
    {
      question: "Which part of the tooth is located below the gum line and anchors it to the jawbone?",
      options: [
        "A) Enamel",
        "B) Dentin",
        "C) Cementum",
        "D) Pulp"
      ],
      correctAnswer: "C) Cementum"
    },
    {
      question: "What is the medical term for gum inflammation?",
      options: [
        "A) Gingivitis",
        "B) Periodontitis",
        "C) Halitosis",
        "D) Caries"
      ],
      correctAnswer: "A) Gingivitis"
    },
    {
      question: "Which instrument is commonly used to examine teeth?",
      options: [
        "A) Otoscope",
        "B) Endoscope",
        "C) Dental mirror",
        "D) Thermometer"
      ],
      correctAnswer: "C) Dental mirror"
    },
    {
      question: "What is the common name for a dental filling material?",
      options: [
        "A) Resin",
        "B) Enamel",
        "C) Dentin",
        "D) Cementum"
      ],
      correctAnswer: "A) Resin"
    },
    {
      question: "What does an orthodontist specialize in?",
      options: [
        "A) Oral surgery",
        "B) Teeth whitening",
        "C) Correcting misaligned teeth and jaws",
        "D) Treating gum diseases"
      ],
      correctAnswer: "C) Correcting misaligned teeth and jaws"
    },
    {
      question: "What is the purpose of a dental prophylaxis?",
      options: [
        "A) To extract a tooth",
        "B) To prevent and treat gum disease and plaque buildup",
        "C) To replace a missing tooth",
        "D) To repair dental fractures"
      ],
      correctAnswer: "B) To prevent and treat gum disease and plaque buildup"
    },
    {
      question: "What is the medical term for tooth extraction?",
      options: [
        "A) Endodontics",
        "B) Periodontics",
        "C) Exodontia",
        "D) Orthodontics"
      ],
      correctAnswer: "C) Exodontia"
    },
    {
      question: "What is the most common type of dental X-ray used to examine the structure of teeth and bone?",
      options: [
        "A) Panoramic X-ray",
        "B) CT scan",
        "C) MRI",
        "D) Ultrasound"
      ],
      correctAnswer: "A) Panoramic X-ray"
    }
  ];

  const handleSubmit = () => {
    // Logic for handling the quiz submission, scoring, etc.
    alert("Quiz submitted!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">BDS Quiz</h1>
      {questions.map((q, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{q.question}</h2>
          <ul className="list-disc pl-5 space-y-2">
            {q.options.map((option, i) => (
              <li key={i} className="text-gray-700">{option}</li>
            ))}
          </ul>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </div>
  );
};

export default BDSQuiz;
