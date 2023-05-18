import React, { useState } from "react";
import "./EightBall.css";
import answers from "./answers";
const EightBall = () => {
  const randomAnswer = Math.floor(Math.random() * answers.length);
  const ball = answers[randomAnswer];
  const update = () => {
    setAnswer(ball.msg);
    setColor(ball.color);
    counter[ball.color]++;
  };
  const resetAll = () => {
    setAnswer("Think of a question");
    setColor("black");
    setCounter({ green: 0, goldenrod: 0, red: 0 });
  };
  const [answer, setAnswer] = useState("Think of a question");
  const [color, setColor] = useState("black");
  const [counter, setCounter] = useState({ green: 0, goldenrod: 0, red: 0 });
  return (
    <>
      <div
        className="EightBall"
        onClick={() => update()}
        style={{ backgroundColor: color }}
      >
        <p className="EightBall-answer">{answer}</p>
      </div>
      <p>Red: {counter["red"]}   Green: {counter["green"]}  Goldenrod:{counter["goldenrod"]}</p>
      <div className="buttons">
        <button onClick={() => resetAll()}>Reset</button>
      </div>
    </>
  );
};

export default EightBall;
