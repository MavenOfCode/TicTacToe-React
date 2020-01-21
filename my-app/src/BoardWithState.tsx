import React, { useState } from "react";
import { calculateWinner } from "./utils/calculateWinner";

export default function BoardWithState() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [status, setStatus] = useState();
  const [nextPlayer, setNextPlayer] = useState(true);
  const [player, setPlayer] = useState("X");

  function Square(index: number) {
    return (
      <button
        title="square"
        className="square"
        value={squares[index]}
        onClick={() => {
          const newSquares = [...squares];
          console.log("NEW SQUARES", newSquares);
          const winner = calculateWinner(newSquares);
          console.log("WINNER", winner);
          const squareAlreadyFilled = newSquares[index];
          console.log("square already filled", squareAlreadyFilled);
          if (winner || squareAlreadyFilled) {
            setStatus(`Winner is ${winner}`);
            console.log("newStatus", status);
          } else {
            newSquares[index] = nextPlayer ? "X" : "O";
            setSquares(newSquares);
            setNextPlayer(!nextPlayer);
            console.log("NEXT PLAYER VALUE", nextPlayer);
            if (nextPlayer) {
              setPlayer("X");
              setStatus(`Next player is ${player}`);
              console.log("newStatus", status);
            } else {
              setPlayer("O");
              setStatus(`Next player is ${player}`);
              console.log("other new status", status);
            }
          }
        }}
      >
        {squares[index]}{" "}
      </button>
    );
  }

  return (
    <>
      <div title="stateBoard">
        <div title="stateStatus" className="status">
          {status}
        </div>
        <div className="board-row">
          {Square(0)}
          {Square(1)}
          {Square(2)}
        </div>
        <div className="board-row">
          {Square(3)}
          {Square(4)}
          {Square(5)}
        </div>
        <div className="board-row">
          {Square(6)}
          {Square(7)}
          {Square(8)}
        </div>
        <p>
          <i>with useState</i>
        </p>
      </div>
    </>
  );
}
