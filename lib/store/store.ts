import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import filterReducer from "./slices/filterSlice";
import thunk from "redux-thunk";

export const persistConfig = {
  key: "root",
  storage,
};

export const combineReducersCombo = combineReducers({
  filter: filterReducer,
});

export const persistedReducer = persistReducer(
  persistConfig,
  combineReducersCombo
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // middleware: [thunk],
  // reducer: {
  // filter: filterReducer,
  // },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
