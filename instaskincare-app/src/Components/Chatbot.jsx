import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! Upload a selfie or type your skin concerns. I’ll help you out!' }
  ]);
  const [input, setInput] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim() && !imageFile) return;

    const userMessage = {
      from: 'user',
      text: input || `📷 Uploaded: ${imageFile?.name || 'an image'}`
    };
    setMessages((prev) => [...prev, userMessage]);

    const formData = new FormData();
    formData.append('message', input);
    if (imageFile) formData.append('image_file', imageFile);

    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: result.response || '🤖 Sorry, I have no response.' }
      ]);

      setInput('');
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error(error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: '❌ Something went wrong. Please try again.' }
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">📸 GlowBot — Scan Your Skin, Discover Your Glow ✨</div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.from === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}

        {isTyping && (
          <div className="message bot typing">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
      </div>

      {imagePreview && (
        <div className="image-preview">
          <p>🖼 Preview:</p>
          <img src={imagePreview} alt="preview" />
        </div>
      )}

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
