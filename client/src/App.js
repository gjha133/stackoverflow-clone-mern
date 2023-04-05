import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { Toaster } from 'react-hot-toast';

function App() {
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
      </Router>
    </div>
  );
}

export default App;
