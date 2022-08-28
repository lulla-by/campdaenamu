import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cards: [],
    isLoading: false,
    error: null,
   };

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      axios.post("http://localhost:3001/cards", action.payload );
    },

    
  },
});

export const { addCard } = postSlice.actions;
export default postSlice.reducer;