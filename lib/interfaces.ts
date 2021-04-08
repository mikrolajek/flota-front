export interface IState {
  token: string;
  textFieldOne?: string;
  textFieldTwo?: string;
  textFieldThree?: string;
  textFieldFour?: string;
  textFieldFive?: string;
}

export interface IStateProvider {
  store: IState;
}

export interface IAction {
  payload: any;
  type: string;
}
