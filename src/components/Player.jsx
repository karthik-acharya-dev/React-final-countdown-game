import { useState, useRef } from "react";
export default function Player() {
  const [userName, setUserName] = useState(true);
  const newPlayer = useRef();

  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown player"}</h2>
      <p>
        <input ref={newPlayer} type="text" />

        <button
          onClick={function () {
            setUserName(newPlayer.current.value);
          }}
        >
          Set Name
        </button>
      </p>{" "}
    </section>
  );
}
