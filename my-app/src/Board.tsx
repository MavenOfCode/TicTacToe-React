import React from "react";
import usePlayerStatus, { calculateWinner } from "./hooks/usePlayerStatus";
import Square from "./Square";
export type Squares = number[];
export type XIsNext = string;

function gameReducer(
  state: { Squares: number[]; XIsNext: string },
  action: { type?: string; Square?: number }
) {
  const { Squares, XIsNext } = state;
  switch (action.type) {
    case "SELECT_SQUARE": {
      const { Square } = action;
      const winner = calculateWinner(Squares);
      if (Square && (winner || Squares[Square])) {
        return state;
      }
      const SquaresCopy = [...Squares];
      if (Square) {
        SquaresCopy[Square] = XIsNext ? "X" : "O";
      }
      return {
        Squares: SquaresCopy,
        XIsNext: !XIsNext
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
  const [state, dispatch] = React.useReducer(gameReducer, {
    squares: Array(9).fill(null),
    XIsNext: true
  });

  return (
    <div>
      <div className="status">{status}</div>
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
    </div>
  );
}
