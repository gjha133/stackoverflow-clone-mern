import './Chatbot.css'

const Form = ({ type, value, setter }) => {
  return (
    <div>
      {type === 'Email' && <p>Verify email to use chatbot</p>}
      {type === 'OTP' && <p>Enter OTP to verify. (1 try left)</p>}
      <p>{type}</p>
      <input
        type={type === 'Email' ? 'email': 'text'}
        value={value}
        onChange={(e) => setter(e.target.value)} 
        placeholder={type === 'Email' ? 'Enter email...': 'Enter OTP...'}
      />
    </div>
  )
}

export default Form