import React from "react";
import styled from "styled-components";

const Button = (props) => {
    return (
        <StButton {...props} disabled={props.disabled}>
            {props.children}
        </StButton>
    );
};

export default Button;

const StButton = styled.button`
  border: 1px solid black;
  background-color: gray;
  height: 46px;
  border-radius: 8px;
  :hover{
    cursor: pointer;
    background-color: black;
  }
`
