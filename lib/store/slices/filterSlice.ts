import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    textFieldOne: "",
    textFieldTwo: "",
    textFieldThree: "",
    textFieldFour: "",
    textFieldFive: "",
  },
  reducers: {
    setTextFieldOne: (state, action) => {
      state.textFieldOne = action.payload;
    },
    setTextFieldTwo: (state, action) => {
      state.textFieldTwo = action.payload;
    },

    setTextFieldThree: (state, action) => {
      state.textFieldThree = action.payload;
    },
    setTextFieldFour: (state, action) => {
      state.textFieldFour = action.payload;
    },
    setTextFieldFive: (state, action) => {
      state.textFieldFive = action.payload;
    },
    resetAllFields: (state) => {
      state.textFieldOne = "";
      state.textFieldTwo = "";
      state.textFieldThree = "";
      state.textFieldFour = "";
      state.textFieldFive = "";
    },
  },
});

export const selectTextFieldOne = (state: RootState) =>
  state.filter.textFieldOne;
export const selectTextFieldTwo = (state: RootState) =>
  state.filter.textFieldTwo;
export const selectTextFieldThree = (state: RootState) =>
  state.filter.textFieldThree;
export const selectTextFieldFour = (state: RootState) =>
  state.filter.textFieldFour;
export const selectTextFieldFive = (state: RootState) =>
  state.filter.textFieldFive;

export const {
  resetAllFields,
  setTextFieldFive,
  setTextFieldFour,
  setTextFieldOne,
  setTextFieldThree,
  setTextFieldTwo,
} = filterSlice.actions;

export const useFilterSlice = () => {
  return [
    {
      selectTextFieldOne,
      selectTextFieldTwo,
      selectTextFieldThree,
      selectTextFieldFour,
      selectTextFieldFive,
    },
    {
      resetAllFields,
      setTextFieldFive,
      setTextFieldFour,
      setTextFieldOne,
      setTextFieldThree,
      setTextFieldTwo,
    },
  ];
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export default filterSlice.reducer;
