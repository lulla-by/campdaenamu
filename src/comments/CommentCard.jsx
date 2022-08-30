import React from "react";

function CommentCard({ comment }) {
  return (
    <>
      <div>닉네임 :{comment.username} </div>
      <div>{comment.content}</div>
    </>
  )
}

export default CommentCard;