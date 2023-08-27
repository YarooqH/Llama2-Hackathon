import React from 'react';

const ChatLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        {/* Sidebar content goes here */}
        <p className="text-lg font-semibold mb-4">Channels</p>
        <ul>
          <li className="mb-2">Channel 1</li>
          <li className="mb-2">Channel 2</li>
          {/* Add more channels */}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow p-4 h-full">
          {/* Chat header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Chat Channel Name</h2>
            <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
              Leave
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex flex-col space-y-2">
            <div className="bg-gray-200 rounded-md p-2 text-sm self-start">
              <p>Chat message 1</p>
            </div>
            <div className="bg-gray-300 rounded-md p-2 text-sm self-end">
              <p>Chat message 2</p>
            </div>
            {/* Add more chat messages */}
          </div>
          
          {/* Chat input */}
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg py-2 px-4"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
