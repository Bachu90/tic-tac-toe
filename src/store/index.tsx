import React, {
  createContext,
  ReactChild,
  ReactChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";

interface Props {
  children: ReactChild | ReactChildren;
}

interface Player {
  id: number;
  name: string;
  sign: "X" | "O";
}

interface Field {
  id: number;
  value: string | null;
}

interface Store {
  players: Array<Player>;
  fields: Array<Field>;
  activePlayer: Player | undefined;
}

interface Context {
  state: Store;
  dispatch: React.Dispatch<ActionType>;
}

type ActionType =
  | {
      type: "UPDATE_FIELD";
      id: number;
    }
  | {
      type: "CHANGE_PLAYER";
    };

const tempPlayers: Array<Player> = [
  {
    id: 0,
    name: "player 1",
    sign: "X",
  },
  {
    id: 1,
    name: "player 1",
    sign: "O",
  },
];

const initialState: Store = {
  players: tempPlayers,
  fields: new Array(9).fill(null).map((f, i) => ({ id: i, value: f })),
  activePlayer: undefined,
};

const reducer = (state: Store, action: ActionType): Store => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        fields: state.fields.map((f) =>
          !!state.activePlayer && f.id === action.id
            ? { ...f, value: state.activePlayer.sign }
            : f
        ),
      };
    case "CHANGE_PLAYER":
      return {
        ...state,
        activePlayer: state.players.find((p) =>
          !!state.activePlayer ? p.id !== state.activePlayer.id : true
        ),
      };
    default:
      return state;
  }
};

export let StoreContext: React.Context<Context>;

const StoreProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  StoreContext = createContext({ state, dispatch });
  useEffect(() => {
    console.info("Store: ", state);
  }, [state]);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider;
