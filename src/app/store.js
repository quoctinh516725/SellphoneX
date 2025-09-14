import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import productSlice from "../features/products/products.slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productSlice,
  },
  middleware: (gdm) => gdm().concat(api.middleware),
});
