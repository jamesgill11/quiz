import React, { useState, useContext } from "react";
import MainScreen from "./MainScreen";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import { QuizContext } from "../Helpers/context";
function GameState(props) {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div>
      {gameState === "menu" && <MainScreen />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
    </div>
  );
}

export default GameState;
