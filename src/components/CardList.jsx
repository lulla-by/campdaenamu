import React from "react";
import styled from "styled-components";
import Card from "./Card"
import Button from "../elem/Button"

function CardList () {
    
    return (
        <>
        <Button
        
        >대나무 숲에서 외쳐봐요</Button>
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
    border: 2.5px dotted #e8f5e9;
    min-width: 600px;
    max-width: 1200px;
    height: 90vh;
    justify-content: center;
    background-color: #ffffff;
    margin: 1em;
`;

