import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


function Card () {
    const history = useHistory();
    return (
        <CdContainer onClick={() => { history.push("/detail");}}>
            <CdDialog>
            <div>title</div>
            <div>description</div>
            </CdDialog>
            <CdInfo>
            <div>작성자: pisi</div><div>2022-01-01 00:00</div>
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
    justify-content: flex-end;
    padding: 0 2em;
    font-size: small;
    gap: 20px;
    color: #33691E;
`
