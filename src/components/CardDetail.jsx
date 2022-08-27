import React from "react";
import AddComments from "../comments/AddComments";
import Commentlist from "../comments/Commentlist";
import styled from "styled-components";
import Button from "../elem/Button";

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

            <DetailBox><AddComments /></DetailBox>
            <DetailBox><Commentlist /></DetailBox>
        </>
    )
}

export default CardDetail;

const DetailBox = styled.div`
border:1px solid gray;
border-radius: 15px;
height: 250px;
margin-top:30px;
padding: 30px;
`