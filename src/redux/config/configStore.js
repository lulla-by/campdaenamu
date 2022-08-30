import { configureStore } from "@reduxjs/toolkit";
import commentcard from "../modules/commentCardSlice"
import commentlist from "../modules/commentListSlice"

const store = configureStore({
    reducer:{
        commentcard,
        commentlist,
    }
})

export default store;