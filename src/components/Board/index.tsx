import React from "react";
import { useStore } from "../../store";
import Field from "../Field";
import "./style.scss";

const Board: React.FC = () => {
  const { state } = useStore();

  return (
    <div className="board">
      {state.fields.map((f) => (
        <Field key={`field-id-${f.id}`} id={f.id} value={f.value} />
      ))}
    </div>
  );
};

export default Board;
