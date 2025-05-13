import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex(item => item.productId === productId);

      if (index >= 0) {
        state.items[index].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }

      localStorage.setItem('carts', JSON.stringify(state.items));
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex(item => item.productId === productId);

      if (index >= 0) {
        if (quantity > 0) {
          state.items[index].quantity = quantity;
        } else {
          state.items.splice(index, 1);
        }
      }

      localStorage.setItem('carts', JSON.stringify(state.items));
    },

    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
