import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./slices/characterSlice";
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

 
