import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import CommentList from "../comments/CommentList"

function CardDetail() {
    return (
        <>
            <DetailBox>
                <h3>닉네임</h3>
                <h3>title</h3>
                <h3>desc</h3>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </DetailBox>             
            <CommentList/>
        </>
    )
}

export default CardDetail;

const DetailBox = styled.div`
            border:1px solid gray;
            border-radius: 15px;
            height: 500px;
            margin-top:30px;
            padding: 30px;
            `
