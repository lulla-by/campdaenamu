import React from "react";
import Layout from "../components/Layout";
import Input from "../elem/Input";

function Add () {
    return (
       <>
        <Layout>
            <Input type={"text"} placeholder="안녕하세요"></Input>
            <Input type={"text"} placeholder="안녕하세요"></Input>
            <Input type={"text"} placeholder="안녕하세요"></Input>            
        </Layout>
            <div>
            <button>이전으로</button><button>등록</button>
            </div>
        </>
    )
}

export default Add;