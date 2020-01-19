import React, { useReducer } from "react";
import { calculateWinner } from "./utils/calculateWinner";

export type XIsNext = boolean;

function getStatus(squares: string[], xIsNext: XIsNext) {
  const winner = calculateWinner(squares);
  if (winner) {
    return `Winner is ${winner}`;
  } else if (squares.every(Boolean)) {
    return `It is a tie!`;
  } else {
    return `Next Player is ${xIsNext ? "X" : "O"}`;
  }
}
function gameReducer(
  state: { squares: string[]; xIsNext: XIsNext },
  action: { type: string; square: number }
) {
  const { squares, xIsNext } = state;
  switch (action.type) {
    case "SELECT_SQUARE": {
      const { square } = action;
      const winner = calculateWinner(squares);
      if (square && (winner || squares[square])) {
        return state;
      }
      const squaresCopy = [...squares];
      if (square) {
        squaresCopy[square] = xIsNext ? "X" : "O";
      }
      console.log("SQUARES", squares);
      console.log("Play values", xIsNext);

      return {
        squares: squaresCopy,
        xIsNext: !xIsNext
      };
    }
    default: {
      throw new Error(
        `Unhandled action type: ${action.type}. Please ask developer to fix it.`
      );
    }
  }
}

export default function Board() {
  const [state, dispatch] = useReducer(gameReducer, {
    squares: Array(9).fill(null),
    xIsNext: true
  });

  const { squares, xIsNext } = state;

  function renderSquare(index: number) {
    return (
      <button
        title="square"
        className="square"
        onClick={() => selectSquare(index)}
      >
        {squares[index]}
      </button>
    );
  }
  function selectSquare(square: any) {
    dispatch({ type: "SELECT_SQUARE", square });
  }

  const status = getStatus(squares, xIsNext);

  return (
    <div>
      <div title="status" className="status">
        {status}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
