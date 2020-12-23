import React from "react";
import { useDidMount, useDidUpdate } from "rooks";
import { useStore } from "../../store";
import Board from "../Board";
import "./style.scss";

const Game: React.FC = () => {
  const { state, dispatch } = useStore();

  useDidMount(() => {
    if (!!state.activePlayer) return;
    dispatch({ type: "CHANGE_PLAYER" });
  });

  useDidUpdate(() => {
    console.info("Store: ", state);
  }, [state]);

  return (
    <div className="game">
      <Board />
      {/* <div>history</div> */}
      {state.winner && <p>Wygrywa {state.activePlayer?.name}!!!</p>}
    </div>
  );
};

export default Game;
