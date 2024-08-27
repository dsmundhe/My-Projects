import React from 'react';
import { useNavigate } from 'react-router-dom';

const EngineeringCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Architecture Engineering',
      text: 'Architecture Engineering focuses on the design, planning, and construction of buildings and structures.',
      route: '/architecture-engineering'
    },
    {
      title: 'Computer Science Engineering',
      text: 'Computer Science Engineering involves the study of computer systems, software development, algorithms.',
      route: '/computer-science-engineering'
    },
    {
      title: 'Civil Engineering',
      text: 'Civil Engineering deals with the design, construction, and maintenance of infrastructure projects such as roads.',
      route: '/civil-engineering'
    },
    {
      title: 'Mechanical Engineering',
      text: 'Mechanical Engineering encompasses the design, analysis, and manufacturing of mechanical systems and machinery.',
      route: '/mechanical-engineering'
    },
    {
      title: 'Electrical Engineering',
      text: 'Electrical Engineering involves the study and application of electrical systems, circuits, and devices, focusing on the generation, transmission.',
      route: '/electrical-engineering'
    },
    {
      title: 'Chemical Engineering',
      text: 'Chemical Engineering combines chemistry and engineering principles to design and operate processes that convert raw materials into valuable products.',
      route: '/chemical-engineering'
    },
    {
      title: 'Electronics and Telecommunication Engineering',
      text: 'Electronics and Telecommunication Engineering covers the design and development of electronic devices, communication systems, and networks.',
      route: '/electronics-and-telecommunication-engineering'
    },
    {
      title: 'Ayurvedic Quiz',
      text: 'Test your knowledge on Ayurvedic principles, treatments, and practices with this comprehensive quiz. See how well you understand the ancient science of healing and wellness.',
      route: '/ayurvedic-quiz'
    },
    {
      title: 'Health Quiz',
      text: 'Evaluate your understanding of general health concepts, nutrition, fitness, and wellness with this quiz. Challenge yourself and learn more about maintaining a healthy lifestyle.',
      route: '/health-quiz'
    },
    {
      title: 'Homeopathy Quiz',
      text: 'Explore the fundamentals of homeopathy with this quiz. Assess your knowledge about homeopathic remedies, principles, and treatments.',
      route: '/homeopathy-quiz'
    },
    {
      title: 'BDS Quiz',
      text: 'Test your knowledge on Bachelor of Dental Surgery (BDS) subjects, including dental anatomy, oral pathology, and clinical practices. Perfect for dental students and professionals.',
      route: '/bds-quiz'
    },
    {
      title: 'MBBS Quiz',
      text: 'Challenge your understanding of medical subjects covered in the MBBS curriculum. This quiz covers various topics essential for medical students and professionals.',
      route: '/mbbs-quiz'
    },
    {
      title: 'Finance Quiz',
      text: 'Assess your knowledge of financial concepts, investment strategies, and economic principles with this finance quiz. Ideal for finance enthusiasts and professionals.',
      route: '/finance-quiz'
    },
    {
      title: 'HR Quiz',
      text: 'Evaluate your understanding of Human Resources practices, management strategies, and employment laws with this HR quiz. Perfect for HR professionals and students.',
      route: '/hr-quiz'
    },
    {
      title: 'Marketing Quiz',
      text: 'Test your knowledge of marketing strategies, concepts, and practices with this engaging quiz. Ideal for marketing professionals and anyone interested in the field.',
      route: '/marketing-quiz'
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:border-blue-400 hover:scale-105 cursor-pointer"
          onClick={() => navigate(card.route)} // Navigate to the route on click
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
            <p className="text-gray-700 mb-4">{card.text}</p>
            <button 
              className='p-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-300'
              onClick={() => navigate(card.route)}
            >
              Take Quiz
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EngineeringCards;
