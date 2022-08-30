import React from "react";
import Home from "./pages/Home"
import { Route } from "react-router-dom"
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit"


function App() {

    return (
        <>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/add" exact>
            <Add/>
        </Route>
        <Route path="/detail" exact>
            <Detail/>
        </Route>
        <Route path="/Edit" exact>
            <Edit/>
        </Route>
        </>

    )


}

export default App;