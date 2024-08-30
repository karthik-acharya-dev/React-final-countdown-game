import { useState, useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  if (remainingTime <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }
  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }
  function handleStop() {
    clearTimeout(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModel
        ref={dialog}
        remainingTime={remainingTime}
        targetTime={targetTime}
        onReset={handleReset}
      />

      <div className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {!timerIsActive ? "Timer inactive" : "Timer is running..."}
        </p>
      </div>
    </>
  );
}
