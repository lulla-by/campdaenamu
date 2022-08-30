import { configureStore } from "@reduxjs/toolkit";
import commentcard from "../modules/commentCardSlice"
import commentlist from "../modules/commentListSlice"
import post from "../modules/post";

const store = configureStore({
    reducer:{
        commentcard,
        commentlist,
        post,
    }
})

export default store;