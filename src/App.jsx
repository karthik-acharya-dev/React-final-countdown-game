import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import React from "react";

function App() {
  const form = React.useRef();

  function handleRestart() {
    form.current.clear();
  }
  return (
    <>
      <Player />

      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Not Easy"} targetTime={5} />
        <TimerChallenge title={"Getting tough"} targetTime={10} />
        <TimerChallenge title={"Pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
