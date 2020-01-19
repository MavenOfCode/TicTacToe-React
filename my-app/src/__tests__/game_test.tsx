import React from "react";
import Game from "../Game";
import { render } from "@testing-library/react";

test("renders game", () => {
  const { getByTitle } = render(<Game />);
  const status = getByTitle("status");
  expect(status).toHaveTextContent("is");
});
