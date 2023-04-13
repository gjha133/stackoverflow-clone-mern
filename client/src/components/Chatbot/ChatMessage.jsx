
const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
      <div className={`message ${message.user === 'gpt' && 'chatgpt'}`}>
        {
          message.user === 'gpt' ? `
              AI : ${message.message}              
            `: `
              User : ${message.message}
            `
        }
      </div>
    </div>
  )
}

export default ChatMessage