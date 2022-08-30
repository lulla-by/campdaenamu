import React from "react";
import Home from "./pages/Home"
import { Route } from "react-router-dom"
import Add from "./pages/Add";
import Detail from "./pages/Detail";


function App() {

    return (
        <>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/add" exact>s
            <Add/>
        </Route>
        <Route path="/detail/:id" >
            <Detail/>
        </Route>
        </>

    )


}

export default App;