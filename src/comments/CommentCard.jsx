import React from "react";
import styled from "styled-components";
import { deleteComment } from "../redux/modules/commentListSlice";


function CommentCard({ comment }) {
  
  return (
    <CommentContainer>
      <Comment>
        <div>닉네임 :{comment.username} </div>
        <div>댓글 : {comment.content}</div>
      </Comment>
      <Btns>
        <button
          onClick={()=>deleteComment(comment)}
        >삭제하기</button>

        <button>수정하기</button>
      </Btns>
    </CommentContainer>
  )
}


export default CommentCard;

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    border: 1px solid grey;
    margin: 10px;
`

const Comment = styled.div`
    display: flex;
`

const Btns = styled.div`
    
`
