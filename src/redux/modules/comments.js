import { createSlice } from '@reduxjs/toolkit'

const comments = createSlice({
    name:"comments",
    initialState:[
        {
            id:0,
            post:0,
            body:"aaa"
        }
    ],
    reuducer:{
        createComment(state,action){
            state.push(action.payload);
        }
    }
})

export let { createComment } = comments.actions;

export default comments;