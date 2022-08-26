import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


function Card () {
    const history = useHistory();
    return (
        <CdContainer onClick={() => { history.push("/detail");}}>
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
    border: 1px solid #DCEDC8;
    width: 95%;
    min-width: 600px;
    height: 100px;
    margin: 1em auto;
    border-radius: 8px;
    background-color: white;
    :hover {
        background-color: #F1F8E9;
        cursor: pointer;
        box-shadow: 2px 2px 1px #AED581;
    }
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