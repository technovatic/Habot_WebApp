// Chatbot.js
import React from 'react';

const Chatbot = () => {
  const handleButtonClick = () => {
    // Handle chatbot click action here
  };

  return (
    <div className="fixed z-50 bottom-4 right-4">
      <button
        onClick={handleButtonClick}
        className="flex items-center justify-center rounded-full"
        style={{
          background: 'none',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
        }}
      >
        <img 
          src="https://cdn3d.iconscout.com/3d/premium/thumb/chatbot-6899426-5627910.png" 
          alt="Chatbot Avatar" 
          className="w-12 h-12 rounded-full md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
      </button>
    </div>
  );
}

export default Chatbot;
