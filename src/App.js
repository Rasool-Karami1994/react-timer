import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="container">
      <div className="watchContainer">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="buttonsContainer">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>pause</button>}
        {!timerOn && time !== 0 && (
          <button onClick={() => setTimerOn(true)}>resume</button>
        )}
        {!timerOn &&
          time > 0 && ( //
            <button onClick={() => setTime(0)}>reset</button>
          )}
      </div>
    </div>
  );
};

export default App;
