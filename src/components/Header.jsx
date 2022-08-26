import React from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const history = useHistory();
    return <StContainer>
                <Stbutton onClick={() => { history.goBack("/");}}> 🏠 </Stbutton>
                <h2>캠프 대나무숲</h2>
           </StContainer>
}

export default Header;

const Stbutton = styled.button`

    padding: 0 20px;
    margin: 10px;

`

const StContainer = styled.div`
    
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: space-between;

    background-color: green;
    
    padding: 10px;
`