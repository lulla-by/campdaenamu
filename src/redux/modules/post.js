import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getPosts = createAsyncThunk(
  "GET_POSTS",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/cards`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  cards: [],
  error: null,
  isLoading: false,
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      axios.post("http://localhost:3001/cards", action.payload );
    },

    updataCard: (state, action) => {

      axios.patch(`http://localhost:3001/cards/${action.payload.id}`, action.payload)
      },

      deleteCard: (state, action) => {
        axios.delete(`http://localhost:3001/cards/${action.payload}`);
      }

   
  },
  extraReducers: {
    [__getPosts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.cards= action.payload;
      },
    [__getPosts.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    [__getPosts.pending]: (state) => {
        state.isLoading = true;
},
  }
})


export const { addCard , updataCard , deleteCard} = postSlice.actions;
export default postSlice.reducer;