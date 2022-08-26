import React from "react";
import Layout from "../components/Layout";
import CardDetail from "../components/CardDetail"
import AddComments from "../comments/AddComments"
import Commentlist from "../comments/Commentlist"

function Detail () {
    return (
        <Layout>
            <CardDetail/>
            <AddComments/>
            <Commentlist/>
        </Layout>
    )
}

export default Detail;