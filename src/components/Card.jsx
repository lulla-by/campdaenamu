import React from "react";
import styled from "styled-components";



function Card () {

    return (
        <CdContainer>
            <CdDialog>
            <div>title</div>
            <>description</>
            </CdDialog>
            <CdInfo>
            <div>작성자</div><div>작성일시</div>
            </CdInfo>
        </CdContainer>
    )
}

export default Card;

const CdContainer = styled.div`
    border: 1px solid grey;
    width: 95%;
    min-width: 600px;
    height: 100px;
    margin: 1em;
    border-radius: 8px;
    cursor: pointer
    `

const CdDialog = styled.div`
    display: block;
    padding: 1em;
`

const CdInfo = styled.div`
    display: flex;
    padding: 0 1em;
    font-size: small;
    gap: 10px;
`