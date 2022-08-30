import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getComment = createAsyncThunk(
  "GET_COMMENT",
  async (arg,thunkAPI)=>{
    try {
      const { data } = await axios.get("http://localhost:3001/comments", arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
)
const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
}

export const commentCardSlice = createSlice({
  name: "commentcard",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.comments = null;
    },
  },
  extraReducers: {
    // 댓글 조회
    [__getComment.fulfilled]: (state, action) => {
      state.CardId.isLoading = false;
      state.CardId.data.push(action.payload);
    },
    [__getComment.rejected]: (state, action) => {
      state.CardId.isLoading = false;
      state.CardId.error = action.payload;
    },
    [__getComment.pending]: (state) => {
      state.CardId.isLoading = true;
    },
  },
});

export default commentCardSlice.reducer;