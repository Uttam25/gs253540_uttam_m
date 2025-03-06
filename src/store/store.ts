import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeSlice"; // Import slices

export const store = configureStore({
  reducer: {
    stores: storeReducer, // Add your slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
