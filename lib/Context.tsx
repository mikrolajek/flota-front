import { createContext, Dispatch, FC, useContext, useReducer } from "react";
import { IAction, IState, IStateProvider } from "./interfaces";
import { reducerToken } from "./reducers";

// TODO Pozbyc sie tego zlomu

const initialState: IState = {
  token: "",
};

type TContext = [state: IState, dispatch: Dispatch<IAction>];

// @ts-ignore
export const StateContext = createContext<TContext>();

export const useToken = () => useContext(StateContext);

export const StateProvider: FC<IStateProvider> = ({ children, store }) => {
  const [state, dispatch] = useReducer(
    reducerToken,
    store
      ? {
          ...initialState,
          ...store,
        }
      : { ...initialState }
  );
  // const [stateMemo, dispatchMemo] = useMemo(() => [state, dispatch], [state]);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
