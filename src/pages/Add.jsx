import React from "react";
import Layout from "../components/Layout";


function Add () {
    return (
       <>
        <Layout>
            <input type={"text"} placeholder="안녕하세요"></input>
            <input type={"text"} placeholder="안녕하세요"></input>
            <input type={"text"} placeholder="안녕하세요"></input>
        </Layout>
            <div>
            <button>이전으로</button><button>등록</button>
            </div>
        </>
    )
}

export default Add;