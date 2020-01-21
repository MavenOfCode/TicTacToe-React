import React, { useState } from "react";
import Board from "./Board";
import BoardWithState from "./BoardWithState";

export default function Refresh() {
  const [gameKey, setGameKey] = useState(1);

  return (
    <>
      {/* <button
        title="refresh"
        className="refresh"
        onClick={() => setGameKey(gameKey + 1)}
      >
        Restart Game
      </button>
      <Board key={gameKey} /> */}

      <button
        title="refresh"
        className="refresh"
        id="state"
        onClick={() => setGameKey(gameKey + 1)}
      >
        Restart State Game
      </button>
      <BoardWithState key={gameKey} />
    </>
  );
}
