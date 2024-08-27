import React from 'react';

const FinanceQuiz = () => {
  const questions = [
    {
      question: "What is the primary goal of financial management?",
      options: [
        "A) Maximizing profits",
        "B) Minimizing costs",
        "C) Maximizing shareholder wealth",
        "D) Reducing debts"
      ],
      correctAnswer: "C) Maximizing shareholder wealth"
    },
    {
      question: "What is a balance sheet used for?",
      options: [
        "A) To track cash flows",
        "B) To show the financial position of a company at a specific point in time",
        "C) To measure profitability",
        "D) To estimate future revenues"
      ],
      correctAnswer: "B) To show the financial position of a company at a specific point in time"
    },
    {
      question: "What does the term 'liquidity' refer to in finance?",
      options: [
        "A) The ability to meet short-term obligations",
        "B) The return on investments",
        "C) The ratio of debt to equity",
        "D) The market value of a company’s stock"
      ],
      correctAnswer: "A) The ability to meet short-term obligations"
    },
    {
      question: "What is the 'time value of money' concept?",
      options: [
        "A) Money loses value over time due to inflation",
        "B) Money today is worth more than the same amount in the future",
        "C) The future value of money is not affected by interest rates",
        "D) Money is worth the same regardless of time"
      ],
      correctAnswer: "B) Money today is worth more than the same amount in the future"
    },
    {
      question: "What does ROI stand for?",
      options: [
        "A) Rate of Investment",
        "B) Return on Investment",
        "C) Return on Income",
        "D) Risk of Investment"
      ],
      correctAnswer: "B) Return on Investment"
    },
    {
      question: "Which financial statement provides information about a company’s profitability over a period of time?",
      options: [
        "A) Balance Sheet",
        "B) Income Statement",
        "C) Cash Flow Statement",
        "D) Statement of Shareholders' Equity"
      ],
      correctAnswer: "B) Income Statement"
    },
    {
      question: "What is a 'bond' in finance?",
      options: [
        "A) A type of stock",
        "B) A debt security issued by a corporation or government",
        "C) A form of equity investment",
        "D) A short-term loan"
      ],
      correctAnswer: "B) A debt security issued by a corporation or government"
    },
    {
      question: "What does 'diversification' mean in investing?",
      options: [
        "A) Investing in a single asset class",
        "B) Spreading investments across various assets to reduce risk",
        "C) Increasing investment in high-risk assets",
        "D) Selling off all investments to avoid losses"
      ],
      correctAnswer: "B) Spreading investments across various assets to reduce risk"
    },
    {
      question: "What is the purpose of financial forecasting?",
      options: [
        "A) To estimate future financial outcomes and plan accordingly",
        "B) To track historical financial performance",
        "C) To measure current profitability",
        "D) To calculate the cost of goods sold"
      ],
      correctAnswer: "A) To estimate future financial outcomes and plan accordingly"
    },
    {
      question: "What is 'capital budgeting'?",
      options: [
        "A) The process of managing a company’s daily financial activities",
        "B) The process of evaluating and selecting long-term investments",
        "C) The process of creating a budget for operational expenses",
        "D) The process of calculating the cost of capital"
      ],
      correctAnswer: "B) The process of evaluating and selecting long-term investments"
    }
  ];

  const handleSubmit = () => {
    // Logic for handling the quiz submission, scoring, etc.
    alert("Quiz submitted!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Finance Quiz</h1>
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

export default FinanceQuiz;
