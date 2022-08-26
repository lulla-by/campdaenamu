import React from "react";
import styled from "styled-components";
import Card from "./Card"
import Button from "../elem/Button"

function CardList () {
    
    return (
        <>
        <Button>글쓰기</Button>
        <CdListContainer>
        <Card/>
        </CdListContainer>
        </>
    )
}

export default CardList;

const CdListContainer = styled.div`
    display: block;
    flex-direction: column;
    border: 1px solid greenyellow;
    min-width: 600px;
    max-width: 1200px;
    height: 90vh;
    justify-content: center;
    background-color: #ffffff;
    margin: 1em;
`;

