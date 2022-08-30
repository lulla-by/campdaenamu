import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getComment } from "../redux/modules/commentCardSlice";
import AddComments from "./AddComments";
import CommentCard from "./CommentCard"

const CommentList = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector((state) => state.commentcard.comments);
    
    useEffect(()=>{
        dispatch(__getComment());
    },[dispatch])
    
    return (
        <>   
            <StContainer>
                <AddComments />
                <CommentCard />          
            </StContainer>
        </>
    );
};

export default CommentList;


const StContainer = styled.div`
    border:1px solid gray;
    border-radius: 15px;
    height: 400px;
    margin-top:30px;
    padding: 30px;;
    background-color: white;
`;


/* const StCommentList = styled.div`
  height: 370px;
  overflow: scroll;
`; */
