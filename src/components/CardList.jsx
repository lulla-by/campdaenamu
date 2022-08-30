import React from "react";
import styled from "styled-components";
import Card from "./Card"
import Button from "../elem/Button"
import { useHistory } from "react-router-dom";

// import Wrapper from "../elem/Wrapper";

function CardList() {
    const history = useHistory();
    return (
        <>
            <CdWrapper>
                <Button
                    size="medium"
                    onClick={() => { history.push("/add"); }}>
                    글쓰기
                </Button>
            </CdWrapper>
            <CdListContainer>
                <Card />
            </CdListContainer>
        </>
    )
}

export default CardList;

const CdWrapper = styled.div`
    display: flex;
    border: 0px;
    min-width: 600px;
    max-width: 1200px;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 2em;
`
// const CdButton = styled.button`
//     display: flex;
//     border: 1px solid #eee;
//     background-color: #afadad;
//     height: 46px;
//     border-radius: 8px;
//     margin-left: 80%;
// `

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



