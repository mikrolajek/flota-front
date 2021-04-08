import { IAction, IState } from "./interfaces";

export const reducerToken = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };

    default:
      return state;
  }
};
