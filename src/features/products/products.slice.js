import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    selectedProduct: localStorage.getItem("selectedProduct") || "",
    brandProduct: "",
    priceRange: [0, 100000000],
    useProduct: "",
    searchKey: "",
    sortProduct: "rate",
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
    setSortProduct: (state, action) => {
      state.sortProduct = action.payload;
    },
    resetFilters: (state) => {
      state.priceRange = [0, 100000000];
      state.useProduct = "";
      state.searchKey = "";
      state.brandProduct = "";
    },
  },
});

export const {
  setSelectedProduct,
  setPriceRange,
  setUseProduct,
  setSearchKey,
  setBrandProduct,
  setSortProduct,
  resetFilters,
} = productSlice.actions;
export default productSlice.reducer;
