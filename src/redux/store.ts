import { configureStore } from '@reduxjs/toolkit'
import fetchDataSlice from "./fetchData/fetchDataSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
