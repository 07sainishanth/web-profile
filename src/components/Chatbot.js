import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const FAQ = [
  { q: /name|who.*you|your name/i, a: 'My name is Sai Nishanth Vaka.' },
  { q: /location|where.*based|city/i, a: 'I am based in San Diego, CA.' },
  { q: /email|contact/i, a: 'You can reach me at sainishanthvaka373@gmail.com.' },
  { q: /linkedin/i, a: 'My LinkedIn: https://linkedin.com/in/sainishanthvaka/' },
  { q: /github/i, a: 'My GitHub: https://github.com/sainishanthvaka' },
  { q: /experience|work|job/i, a: 'I have worked at Intuit, AWS, Privoro, and Helium Consulting.' },
  { q: /education|degree|college|university/i, a: 'I have an MS from Arizona State University and a BTech from IIT Palakkad.' },
  { q: /skills|tech|stack|languages/i, a: 'I am skilled in Java, Python, C++, React, AWS, and more.' },
  { q: /project/i, a: 'Check out my Projects section for details on my work!' },
  { q: /resume|cv/i, a: 'You can download my resume from the Download Resume button at the top.' },
  { q: /.*/, a: 'Sorry, I can answer questions about my profile, skills, experience, and contact info. Try asking about my experience, education, or projects!' }
];

function getBotReply(input) {
  const found = FAQ.find(f => f.q.test(input));
  return found ? found.a : FAQ[FAQ.length - 1].a;
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Sai Nishanth Vaka’s assistant. Ask me anything about my profile.' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: getBotReply(input) }]);
    }, 500);
    setInput('');
  };

  return (
    <>
      <button className="chatbot-fab" onClick={() => setOpen(o => !o)} aria-label="Open chatbot">
        {open ? <FaTimes /> : <FaComments />}
      </button>
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">Ask Me Anything <FaTimes className="chatbot-close" onClick={() => setOpen(false)} /></div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>{msg.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chatbot-input-row">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type your question..."
              className="chatbot-input"
            />
            <button className="chatbot-send" onClick={sendMessage} aria-label="Send"><FaPaperPlane /></button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot; 