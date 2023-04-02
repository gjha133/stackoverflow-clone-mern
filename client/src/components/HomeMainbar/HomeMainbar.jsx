import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";

let questionsList = [{
  _id: 1,
  upVotes:3,
  downVotes:2,
  noOfAnswers:2,
  questionTitle: "What is a function",
  questionBody: "It meant to be",
  questionTags: ["java", "node js", "react js"],
  userPosted: "gautam",
  userId: 1,
  askedOn: "jan 1",
  answer: [{
    answerBody: "Answer",
    userAnswered: 'kumar',
    answeredOn: 'jan 2',
    userId: 2,
  }]
},{
  _id: 2,
  upVotes:3,
  downVotes:1,
  noOfAnswers:2,
  questionTitle: "What is a function",
  questionBody: "It meant to be",
  questionTags: ["java", "node js", "react js"],
  userPosted: "gautam",
  userId: 1,
  askedOn: "jan 1",
  answer: [{
    answerBody: "Answer",
    userAnswered: 'kumar',
    answeredOn: 'jan 2',
    userId: 2,
  }]
},{
  _id: 3,
  upVotes:3,
  downVotes:0,
  noOfAnswers:2,
  questionTitle: "What is a function",
  questionBody: "It meant to be",
  questionTags: ["java", "node js", "react js"],
  userPosted: "gautam",
  userId: 1,
  askedOn: "jan 1",
  answer: [{
    answerBody: "Answer",
    userAnswered: 'kumar',
    answeredOn: 'jan 2',
    userId: 2,
  }]
}]

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
