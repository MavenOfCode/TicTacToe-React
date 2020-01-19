import React from "react";
import { render } from "@testing-library/react";
import Refresh from "../Refresh";

test("renders refresh button", () => {
  const { getByTitle } = render(<Refresh />);
  const refresh = getByTitle("refresh");
  expect(refresh).toContainHTML;
});
test("renders board inside refresh button", () => {
  const { getByTitle } = render(<Refresh />);
  const board = getByTitle("board");
  expect(board).toBeInTheDocument;
});
