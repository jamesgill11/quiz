import React, { useState, useContext, useEffect } from "react";

import { QuizContext } from "../Helpers/context";

const MainQuiz = () => {
  const { score, setScore, result } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = (correctAnswer) => {
    console.log(optionChosen, "<<< chosen");
    console.log(correctAnswer, "<<<< correct");
    if (optionChosen === correctAnswer) {
      setScore((score) => score + 1);
    }
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  useEffect(() => {
    console.log("score updated", score);
  }, [score]);
  return (
    <div className="quiz">
      {result.map((question, index) => {
        if (currentQuestion < question.allQuiz.length) {
          return (
            <h3 key={index}>{question.allQuiz[currentQuestion].q_prompt}</h3>
          );
        } else {
          return null;
        }
      })}
      <div className="answer__container">
        {result.map((answers, index) => {
          if (currentQuestion < answers.allQuiz.length) {
            return (
              <div className="answer__options">
                {" "}
                <button
                  className="question__choices"
                  onClick={() => {
                    setOptionChosen("a");
                    nextQuestion(
                      result[0].allQuiz[currentQuestion].q_correctAnswer
                    );
                  }}
                >
                  {answers.allQuiz[currentQuestion].a}
                </button>
                <button
                  className="question__choices"
                  onClick={() => {
                    setOptionChosen("b");
                    nextQuestion(
                      result[0].allQuiz[currentQuestion].q_correctAnswer
                    );
                  }}
                >
                  {answers.allQuiz[currentQuestion].b}
                </button>
                <button
                  className="question__choices"
                  onClick={() => {
                    setOptionChosen("c");
                    nextQuestion(
                      result[0].allQuiz[currentQuestion].q_correctAnswer
                    );
                  }}
                >
                  {answers.allQuiz[currentQuestion].c}
                </button>
                <button
                  className="question__choices"
                  onClick={() => {
                    setOptionChosen("d");
                    nextQuestion(
                      result[0].allQuiz[currentQuestion].q_correctAnswer
                    );
                  }}
                >
                  {answers.allQuiz[currentQuestion].d}
                </button>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <span>{score}</span>
    </div>
  );
};

export default MainQuiz;
