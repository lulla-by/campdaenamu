import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getPosts = createAsyncThunk(
  "GET_POSTS",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(process.env.REACT_APP_CARDS_HOST);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

// createAsyncThunk 생성하기
export const __deletePosts = createAsyncThunk(
  // action 이름
  "DELETE_POSTS",
  // 처리할 비동기 함수
  async (payload) => {
    // 서버에서 데이터를 삭제
    const res = await axios.delete(process.env.REACT_APP_CARDS_HOST + `/${payload}`);
    // action의 payload 리턴
    return res.data;
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
      axios.post(process.env.REACT_APP_CARDS_HOST, action.payload);
    },

    updataCard: (state, action) => {

      axios.patch(process.env.REACT_APP_CARDS_HOST + `/${action.payload.id}`, action.payload)
    }

  },
  extraReducers: {
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cards = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },


    [__deletePosts.pending]: (state, action) => {
      state.isLoading = true
    },
    // fullflled 되었을 때, 서버에서 받아온 데이터를 state에 넣어줌!
    // 첫번째 파라미터는 redux의 state이고 두번째 파라미터는 action
    [__deletePosts.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [__deletePosts.rejected]: (state, action) => {
      
    },
  }
})


export const { addCard, updataCard} = postSlice.actions;
export default postSlice.reducer;