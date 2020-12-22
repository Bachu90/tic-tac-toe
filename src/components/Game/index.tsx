import React from "react";
import Board from "../Board";
import "./style.scss";

const Game: React.FC = () => {
  return (
    <div className="game">
      <Board />
      {/* <div>history</div> */}
    </div>
  );
};

export default Game;
