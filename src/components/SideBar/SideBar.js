import React from "react";

import "./SideBar.css";

import Router from "../Router/Router";
import Social from "../Social/Social";

function SideBar(){
    return (
        <div className="sidebar col-md-3">
            <Router/>
            <Social/>
        </div>
    )
}

export default SideBar