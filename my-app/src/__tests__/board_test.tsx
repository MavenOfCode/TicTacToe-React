import React from "react";
import { render } from "@testing-library/react";
import Board from "../Board";

test("renders board", () => {
  const { getAllByTitle } = render(<Board />);
  const square = getAllByTitle("square");
  expect(square).toHaveLength(9);
});
