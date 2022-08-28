import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
   };

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      
    },

    
  },
});

export const { addCard } = postSlice.actions;
export default postSlice.reducer;