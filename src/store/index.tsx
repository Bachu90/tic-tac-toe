import React, {
  createContext,
  ReactChild,
  ReactChildren,
  useContext,
  useReducer,
} from "react";

interface Props {
  children: ReactChild | ReactChildren;
}

interface Store {
  fields: Array<string | null>;
  activePlayer: "X" | "O";
}

interface Context {
  state: Store;
  dispatch: React.Dispatch<ActionType>;
}

type ActionType =
  | {
      type: "UPDATE_FIELD";
      field: number;
    }
  | {
      type: "CHANGE_PLAYER";
    };

const initialState: Store = {
  fields: new Array(9).fill(null),
  activePlayer: "X",
};

const reducer = (state: Store, action: ActionType): Store => {
  switch (action.type) {
    case "UPDATE_FIELD":
      const newState: Store = { ...state };
      newState.fields[action.field] = state.activePlayer;
      return newState;
    case "CHANGE_PLAYER":
      return { ...state, activePlayer: state.activePlayer === "X" ? "O" : "X" };
    default:
      return state;
  }
};

export let StoreContext: React.Context<Context>;

const StoreProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  StoreContext = createContext({ state, dispatch });
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider;
