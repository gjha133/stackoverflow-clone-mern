import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { askQuestion } from "../../actions/question";
import toast from 'react-hot-toast'

import "./AskQuestion.css";
import Editor from '../../components/Editor/Editor'

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const User = useSelector(state => state.currentUserReducer)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(askQuestion({
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User?.result._id,
        }, navigate))
        toast.success('Question posted successfully')
      } else toast.error('Please enter value in all the fields')
    } else toast.error('Please Login to ask question')
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <Editor
                value={questionBody}
                onChange={setQuestionBody}
              />
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Post Question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
