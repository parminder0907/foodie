import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  quantity: [],
  likes: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.quantity.push(1);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
      state.quantity.splice(action.payload, 1);
    },
    incrItemQty: (state, action) => {
      state.quantity[action.payload] += 1;
    },
    decrItemQty: (state, action) => {
      if (state.quantity[action.payload] > 1) {
        state.quantity[action.payload] -= 1;
      } else {
        state.items.splice(action.payload, 1);
        state.quantity.splice(action.payload, 1);
      }
    },
    addToLikes: (state, action) => {
      if (
        state.likes.map((el) => el.recipe_id).includes(action.payload.recipe_id)
      ) {
        state.likes = state.likes.filter(
          (el) => el.recipe_id !== action.payload.recipe_id
        );
      } else {
        state.likes.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, incrItemQty, decrItemQty, addToLikes } =
  cartSlice.actions;

export default cartSlice.reducer;
