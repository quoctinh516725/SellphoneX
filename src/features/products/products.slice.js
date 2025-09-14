import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    selectedProduct: "",
    brandProduct: "",
    priceRange: [0, 100000000],
    useProduct: "",
    searchKey: "",
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setUseProduct: (state, action) => {
      state.useProduct = action.payload;
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
    setBrandProduct: (state, action) => {
      state.brandProduct = action.payload;
    },
    resetFilters: (state) => {
      state.selectedProduct = "";
      state.priceRange = [0, 100000000];
      state.useProduct = "";
      state.searchKey = "";
    },
  },
});

export const {
  setSelectedProduct,
  setPriceRange,
  setUseProduct,
  setSearchKey,
  setBrandProduct,
  resetFilters,
} = productSlice.actions;
export default productSlice.reducer;
