import React from "react";
import styled from "styled-components";


function Commentlist () {
    return (
        <>
        <Btnbox>
        <button>✏</button>
        <button>❌</button>
        </Btnbox>
        </>
    )
}

export default Commentlist;

const Btnbox = styled.div`
    display: flex;
    float: right;
    
`