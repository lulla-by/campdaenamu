import React from "react";
import AddComments from "../comments/AddComments";
import Commentlist from "../comments/Commentlist";
import styled from "styled-components";
import Button from "../elem/Button";
import Layout from "./Layout";
import "./CardDetail.css";
import { useSelector } from "react-redux/es/exports";
import { useParams } from 'react-router-dom';


function CardDetail( {card}) {  //카드로 프롭스 받음


    let state = useSelector((state)=>state)

    let {id} = useParams();

let cardIdx = state.card.find(function(x){ return x.id == id }); 

// let card = {card}

// let cardIdx = card.find(function(x){ return x.id == id }); 


    return (
        <Layout>
        <DetailBox>
            <h3 className="name">닉네임: {cardIdx .name}</h3>
            <h3 className="title"> title:{cardIdx .title}  </h3>
            <h3 className="desc">desc:<p>{cardIdx .desc}</p>  </h3>
            <div className="btnBox">
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </div>
        </DetailBox>
        <DetailBox><Commentlist /></DetailBox>
        <DetailBox><AddComments /></DetailBox>
    </Layout>
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