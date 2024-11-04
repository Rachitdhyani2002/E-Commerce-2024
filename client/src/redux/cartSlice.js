import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(item => item._id === action.payload._id);
      if (index >= 0) {
        state.items[index].quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }

      state.totalQuantity += 1;
      state.totalAmount += Number(action.payload.price);
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item._id === action.payload);

      if (index >= 0) {
        const item = state.items[index];

        // If there’s more than 1 quantity, just decrease the quantity
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalAmount -= Number(item.price); // Subtract the price of one item
        } else {
          // If there's only 1 quantity, remove the item
          state.totalAmount -= Number(item.price) * item.quantity; // Remove the total price of the item
          state.items.splice(index, 1); // Remove the item from cart
        }

        state.totalQuantity -= 1; // Reduce the total quantity of items
      }}
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
