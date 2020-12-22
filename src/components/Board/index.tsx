import React from "react";
import { useStore } from "../../store";
import Field from "../Field";
import "./style.scss";

const Board: React.FC = () => {
  const { state } = useStore();

  return (
    <div className="board">
      {state.fields.map((f, index) => (
        <Field key={`field-id-${index}`} id={index} value={f} />
      ))}
    </div>
  );
};

export default Board;
