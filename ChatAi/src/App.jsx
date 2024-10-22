import { useState } from 'react';
import axios from 'axios';
import './App.css';
import GeminiLoader from './Geminiloader';

function App() {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loader, setLoader] = useState(false);

  const genMessage = async () => {
    setLoader(true);
    if (question.trim() === '') return;
    const newChat = { question, answer: 'Loading...' };
    setChatHistory([...chatHistory, newChat]);

    try {
      const response = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCJw1HRSl3XEd5WiHD9C2vPuRGDYFhd6W4',
        method: 'post',
        data: { "contents": [{ "parts": [{ "text": question }] }] }
      });
      const answer = response['data']['candidates'][0]['content']['parts'][0]['text'];
      setChatHistory(prev => prev.map(chat => chat === newChat ? { ...chat, answer } : chat));
    } catch (error) {
      console.log(error);
      setChatHistory(prev => prev.map(chat => chat === newChat ? { ...chat, answer: 'An error occurred.' } : chat));
    }

    setQuestion('');
    setLoader(false)
  }

  return (
    <div>
      <div className='header'>
        <div> <h1>GeminiTalk</h1></div>
        <div> <div className='box'>
          <img src="https://i.pinimg.com/236x/70/e0/22/70e022435b35ce410265bf072ddfa163.jpg" alt="" />
          
          </div></div>
      </div>
      <div className="container">
        <div className="chat-box">
          {chatHistory.map((chat, index) => (
            <div key={index} className="chat-entry">
              <div className='profile'>
                <p className="chat-question"><strong>You:</strong> {chat.question}</p>
                <div className='box'><img src="https://i.pinimg.com/236x/70/e0/22/70e022435b35ce410265bf072ddfa163.jpg" alt="" /></div>
              </div>
              <p className="chat-answer"><strong>Result:</strong> {chat.answer}</p>
            </div>

          ))}
          <div>
            {
              loader ? <GeminiLoader /> : ''
            }
          </div>
        </div>
        <div className="inbox">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask me anything......"
          />
          <button onClick={genMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
