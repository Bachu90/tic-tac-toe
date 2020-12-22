import React from "react";
import { useDidMount } from "rooks";
import { useStore } from "../../store";
import Board from "../Board";
import "./style.scss";

const Game: React.FC = () => {
  const { state, dispatch } = useStore();

  useDidMount(() => {
    if (!!state.activePlayer) return;
    dispatch({ type: "CHANGE_PLAYER" });
  });

  return (
    <div className="game">
      <Board />
      {/* <div>history</div> */}
    </div>
  );
};

export default Game;
