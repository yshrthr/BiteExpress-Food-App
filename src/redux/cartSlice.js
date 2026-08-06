import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
    },

    deleteFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addToCart, deleteFromCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
