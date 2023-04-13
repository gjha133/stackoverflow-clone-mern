import React, { useState } from 'react'
import { BsArrowBarDown } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import './Chatbot.css'
import ChatMessage from './ChatMessage'

const Chatbot = ({ isOpen, setIsOpen }) => {

  const [input, setInput] = useState('')
  const [chatLog, setChatLog] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const chatLogNew = [...chatLog, { user: 'me', message: `${input}` }]
    setInput('')
    setChatLog(chatLogNew)
    const messages = chatLogNew.map(message => message.message).join('\n')
    try {
      const response = await fetch('http://localhost:5000/chatbot/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: messages
        })
      })
      const data = await response.json()
      setChatLog([...chatLogNew, { user: 'gpt', message: `${data.message}` }])
    } catch (error) {
      setChatLog([...chatLogNew, { user: 'gpt', message: 'Some error occurred. Try another question' }])
    }
    
  }

  return (
    <div className='chatbot-container'>
      <div className="chatbot-header">
        {isOpen &&
          <BsArrowBarDown
            className='chatbot-arrow'
            onClick={() => setIsOpen((isOpen) => !isOpen)} />
        }
        <p>Ask your doubts!</p>
      </div>
      <div className="chatbot-chatwindow">
        {chatLog.length === 0 && <span className='chatbot-chatwindow-starter'>How can I help you today?</span>}
        {
          chatLog.map((message, index) => (
            <ChatMessage message={message} key={index} />
          ))
        }
      </div>
      <form className='chatbot-form'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(() => e.target.value)} className='chatbot-form' placeholder='Enter your doubt...' />
        <button
          className='chatbot-button'
          onClick={handleSubmit}
        >
          <AiOutlineSend size={15} />
        </button>
      </form>
    </div>
  )
}

export default Chatbot