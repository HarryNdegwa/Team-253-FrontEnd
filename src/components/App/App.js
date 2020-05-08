import React from "react";

import "./App.css";


import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";


function App(){
    retrun (
        <div className="site-container">
            <SideBar/>
            <Main/>
        </div>
    )
}


export default App