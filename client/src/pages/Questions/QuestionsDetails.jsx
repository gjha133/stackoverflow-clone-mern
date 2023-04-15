import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";
import toast from 'react-hot-toast'
import HTMLReactParser from 'html-react-parser'


import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import {
  postAnswer,
  deleteQuestion,
  voteQuestion
} from "../../actions/question";
import Editor from "../../components/Editor/Editor";
import Loader from "../../components/Loader/Loader";


const QuestionsDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  const User = useSelector((state) => state.currentUserReducer);

  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "https://stack-overflow-clone-gautam.vercel.app/";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (!User) {
      toast.error("Please Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      if (answer === "") {
        toast.error("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
            userId: User.result._id
          })
        );
        setAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    toast.success('URL copied to clipboard');
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
    toast.success('Question deleted')
  };

  const handleUpVote = () => {
    if (!User) {
      return toast.error("Please Login or Signup to upvote");
    }
    dispatch(voteQuestion(id, 'upVote', User.result._id))
    toast.success('Upvoted')
  };

  const handleDownVote = () => {
    if (!User) {
      return toast.error("Please Login or Signup to downvote");
    }
    dispatch(voteQuestion(id, 'downVote', User.result._id))
    toast.success('Downvoted')
  };

  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <Loader />
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{HTMLReactParser(question.questionBody)}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <div key={tag}>{tag}</div>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {User?.result._id === question.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <div>
                      <Editor
                        value={answer}
                        onChange={setAnswer}
                      />
                    </div>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
