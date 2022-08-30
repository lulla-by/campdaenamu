import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/comments", arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);



const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  getCardById: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const commentListSlice = createSlice({
  name: "commentlist",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.comments = null;
    },
    deleteComment: (state, action) => {
      axios.delete("http://localhost:3001/comments/")
    }
  },
  extraReducers: {
    // 댓글 추가
    [__addComment.fulfilled]: (state, action) => {
      state.getCardById.isLoading = false;
      state.getCardById.data.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.getCardById.isLoading = false;
      state.getCardById.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.getCardById.isLoading = true;
    },
  },
});

export const { deleteComment } = commentListSlice.actions;
export default commentListSlice.reducer;
