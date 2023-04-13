import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { Toaster } from 'react-hot-toast';
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers());
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Toaster />
        <Navbar />
        <AllRoutes />
        {isOpen ? (
          <Chatbot
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )
          : <button
              className="open-chatbot"
              onClick={() => setIsOpen((prev) => !prev)}
          >
            Have Doubts? Click here!
          </button>}
      </Router>
    </div>
  );
}

export default App;
