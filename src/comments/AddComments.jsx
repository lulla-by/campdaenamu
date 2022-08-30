import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import Input from "../elem/Input"


function AddComments ()  {
    return (
        <>
            <Namebox>
                <input type={"text"} placeholder="닉네임"></input>
            </Namebox>
            
            <CommentBox>
                <Input type={"text"} placeholder="댓글을 입력해주세요" />
            </CommentBox>
            
            <Btnbox>
                <Button>등록하기</Button>
            </Btnbox>
        </>
    )
}

export default AddComments;

const Namebox = styled.div`
    text-align: left;
    margin-bottom: 20px;
`

const CommentBox = styled.div`
    display: flow-root;
`

const Btnbox = styled.div`
    float: right;
    margin-top: 30px;
`