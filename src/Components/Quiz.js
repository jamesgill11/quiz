import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/context";

function Quiz(props) {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestions, setCurrQuestions] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestions].answer === optionChoosen) {
      setScore(score + 1);
    }

    setCurrQuestions(currQuestions + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestions].answer === optionChoosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestions].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChoosen("A")}>
          {Questions[currQuestions].optionA}
        </button>
        <button onClick={() => setOptionChoosen("B")}>
          {Questions[currQuestions].optionB}
        </button>
        <button onClick={() => setOptionChoosen("C")}>
          {Questions[currQuestions].optionC}
        </button>
        <button onClick={() => setOptionChoosen("D")}>
          {Questions[currQuestions].optionD}
        </button>
      </div>

      {currQuestions === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
