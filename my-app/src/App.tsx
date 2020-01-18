import React from "react";

import Game from "./Game";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Play Tic-Tac-Toe</header>
      <Game />
    </div>
  );
};

export default App;
