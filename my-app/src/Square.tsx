import React, { useState } from "react";
import usePlayerStatus from "./hooks/usePlayerStatus";

function selectSquare(Square: number[]) {
  dispatchEvent({ type: "SELECT_SQUARE", Square });
}

export default function Square(index: number) {
  return (
    <button className="square" onClick={() => selectSquare(index)}>
      {Squares[index]}
    </button>
  );
}
const status = usePlayerStatus(Squares, XIsNext);
