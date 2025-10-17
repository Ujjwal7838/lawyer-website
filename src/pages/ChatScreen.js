import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ChatScreen.css';

const lawyersData = {
  '1': { name: 'Advocate Verma' },
  '2': { name: 'Advocate Sharma' },
  '3': { name: 'Advocate Gupta' },
  '11': { name: 'Ujjwal (Lawyer)'},
  '15': { name: 'Ujjwal (Lawyer)'},
  '16': { name: 'Ujjwal (Lawyer)'},
};

function ChatScreen() {
  let { lawyerId } = useParams();
  const lawyer = lawyersData[lawyerId] || { name: 'the selected lawyer' };

  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, I have a question about a property dispute.', sender: 'me' },
    { id: 2, text: 'Hello, I can help with that. Please provide some details.', sender: 'lawyer' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: Date.now(), text: newMessage, sender: 'me' }]);
    setNewMessage('');
  };

  return (
    <div className="chat-page-container">
      <header className="chat-header">
        <h3>Chat with</h3>
        <h2>{lawyer.name}</h2>
      </header>
      <div className="message-list">
        {messages.map(msg => (
          <div key={msg.id} className={`message-bubble ${msg.sender === 'me' ? 'my-message' : 'their-message'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <footer className="chat-footer">
        <input 
          type="text" 
          placeholder="Type your message..." 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </footer>
    </div>
  );
}

export default ChatScreen;