import React from "react";
import { useStore } from "../../store";
import "./style.scss";

interface Props {
  id: number;
  value: string | null;
}

type ClickHandlerType = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

const Field: React.FC<Props> = ({ id, value }) => {
  const { dispatch } = useStore();
  const handleClick: ClickHandlerType = () => {
    dispatch({ type: "UPDATE_FIELD", field: id });
    dispatch({ type: "CHANGE_PLAYER" });
  };

  return (
    <button
      className={`field${!!value ? " field--inactive" : ""}`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Field;
