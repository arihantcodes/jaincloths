// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const selectCart = (state) => state.cart;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
