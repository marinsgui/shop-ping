import { createSlice } from "@reduxjs/toolkit";

const pingSlice = createSlice({
  name: "ping",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addProduct,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
} = pingSlice.actions;

export default pingSlice.reducer;
