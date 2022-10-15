import { wait } from "@testing-library/user-event/dist/utils";
import { React, useState, useEffect } from "react"
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [timerIsActive, setTimerIsActive] = useState(false);

  useEffect (() => {
    if (timerIsActive) {
      const interval = setInterval(() => {
        setTimer((timer) => timer+1)
      }, 1000)

      return () => { clearInterval(interval) }
    }
  }, [timerIsActive, timer])

  const handleStart = () => {
    setTimerIsActive(true);
  };

  const handleStop = () => {
    setTimerIsActive(false);
  };

  const formatTime2 = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')

    return `${minutes} : ${seconds}`
  }

  return (
    <div className="App">
      <header className="Top-header">
        <p className="HText">My Stopwatch</p>
        <p className="HText2">By @Qui3</p>
      </header>
      <div className="Body">
        <div className="Content">
          <div className="Timer">
            <p className="Timer-text">{formatTime2(timer)}</p>
          </div>
          <div className="Buttons">
            <button
              className="Start Button"
              onClick={handleStart}
            >
              <p className="Button-text">Start</p>
            </button>
            <button className="Stop Button"
            onClick={handleStop}
            >
              <p className="Button-text">Stop</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
