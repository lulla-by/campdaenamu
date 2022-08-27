import React from "react";
import Layout from "../components/Layout";
import Input from "../elem/Input";
import Button from "../elem/Button"
import styled from "styled-components";
import { useHistory } from "react-router-dom";


function Add () {
    const history = useHistory();
    
    return (
       <>
        <Layout>
            <h2>작성자</h2>
            <Input type={"text"} placeholder="작성자의 이름을 입력해주세요."></Input>
            <h2>제목</h2>
            <Input type={"text"} placeholder="제목을 입력해주세요."></Input>
            <h2>내용</h2>
            <Textarea 
                name="body"
                rows="10"
                placeholder="내용을 입력해주세요."
            />
            
            <Butbox>
            <Button onClick={() => { history.goBack("/");}}>등록</Button>
            </Butbox>
        </Layout>
        </>
    )
}

export default Add;

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid gray;
`;

const Butbox = styled.div`
    text-align: center;
    padding-top: 30px;
    
`


