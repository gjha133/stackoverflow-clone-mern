import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import QuestionsDetails from "./QuestionsDetails";

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



const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar  />
      <div className="home-container-2">
        <QuestionsDetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
