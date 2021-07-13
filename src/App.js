import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import MainScreen from "./Components/MainScreen";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import Login from "./Components/Login";
import Register from "./Components/Register";
import GameState from "./Components/GameState";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainQuiz from "./Components/MainQuiz";
import axios from "axios";

import { QuizContext } from "./Helpers/context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-quiz-server.herokuapp.com/api/newq")
      .then((res) => {
        const allQuestions = res.data;
        console.log(allQuestions);
        setResult([allQuestions]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setResult]);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          values,
          setValues,
          submitted,
          setSubmitted,
          valid,
          setValid,
          result,
          setResult,
        }}
      >
        <Router>
          <Route exact path="/" component={MainQuiz} />
          <Route path="/gamestate" component={GameState} />
        </Router>
        {/* <Register /> */}
        {/* <Login /> */}

        {/* {gameState === "menu" && <MainScreen />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />} */}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
