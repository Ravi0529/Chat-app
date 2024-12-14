import { useState } from "react"

const ChatContent = () => {
    const [messages] = useState([
        {
          id: 1,
          text: "Hey!",
          sender: "other",
          timestamp: "09:41 AM"
        },
        {
          id: 2,
          text: "Hi there! How are you doing today?",
          sender: "me",
          timestamp: "09:42 AM"
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sender: "other",
          timestamp: "09:43 AM"
        },
        {
          id: 4,
          text: "This is a medium length message that I'm sending to test the chat bubble width and wrapping.",
          sender: "me",
          timestamp: "09:44 AM"
        },
        {
          id: 5,
          text: "Ok",
          sender: "other",
          timestamp: "09:45 AM"
        },
        {
          id: 6,
          text: "I'm good, thanks. How about you?",
          sender: "me",
          timestamp: "09:46 AM"
        },
        {
          id: 7,
          text: "I'm doing great, thanks for asking.",
          sender: "other",
          timestamp: "09:47 AM"
        },
        {
          id: 8,
          text: "That's awesome! I'm glad to hear that.",
          sender: "me",
          timestamp: "09:48 AM"
        },
        {
          id: 9,
          text: "Yeah, I just got a promotion at work. I'm really excited about it.",
          sender: "other",
          timestamp: "09:49 AM"
        },
        {
          id: 10,
          text: "Congratulations! You deserve it. Let's catch up soon.",
          sender: "me",
          timestamp: "09:50 AM"
        },
        {
          id: 11,
          text: "Sounds good to me. Have a great day!",
          sender: "other",
          timestamp: "09:51 AM"
        },
        {
          id: 12,
          text: "You too",
          sender: "me",
          timestamp: "09:52 AM"
        }
      ])
    
      return (
        <div className="flex flex-col p-4 bg-gray-100 dark:bg-gray-900 max-h-[78%] overflow-y-auto">
          {/* Messages container */}
          <div className="flex flex-col space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] sm:max-w-md p-3 rounded-lg ${message.sender === 'me' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'} shadow-md`}>
                  <p className="break-words">{message.text}</p>
                  <span className={`text-xs ${message.sender === 'me' ? 'text-gray-300' : 'text-gray-500'} dark:text-gray-400`}>{message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}

export default ChatContent
