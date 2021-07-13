import React, { useContext } from "react";
import { QuizContext } from "../Helpers/context";
import "../App.css";

function MainScreen(props) {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainScreen;
