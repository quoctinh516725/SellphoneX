import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (gdm) => gdm().concat(api.middleware),
});
