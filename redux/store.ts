import { configureStore, Middleware } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

import sendOtpReducer from "./otpSlice";

/**
 * A logger middleware for Redux Toolkit with TypeScript.
 * Logs dispatched actions and the resulting state.
 */
const logger: Middleware = (storeAPI) => (next) => (action) => {
  console.info("Dispatching action:", action);
  // Call the next middleware in the chain or the reducer if it's the last middleware.
  const result = next(action);
  console.info("Next state:", storeAPI.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    counter: sendOtpReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
