import React, { useState } from "react";
import Board from "./Board";

export default function Refresh() {
  const [gameKey, setGameKey] = useState(1);

  return (
    <>
      <button
        title="refresh"
        className="refresh"
        onClick={() => setGameKey(gameKey + 1)}
      >
        Restart Game
      </button>
      <Board key={gameKey} />
    </>
  );
}
