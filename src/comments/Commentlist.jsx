import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getComment } from "../redux/modules/commentCardSlice";
import AddComments from "./AddComments";
import CommentCard from "./CommentCard"

const CommentList = () => {
    const dispatch = useDispatch();
    const { isLoading, error, comments} = useSelector((state) => state.commentcard);
    
    useEffect(()=>{
        dispatch(__getComment());
    },[dispatch]);
    if (isLoading) {
        return <>로딩중..</>
    } 
    if (error) {
        return <>{error.message}</>
    }
    
    console.log(comments);
    return (
        <>   
            <StContainer>
                <AddComments />
                {comments.map((comment) => {
                    console.log(comment)
                    return(
                    <CommentCard comment={comment} key={comment.id}/>
                    )
                }
                )}  
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
