import React from "react";

import Router from "../Router/Router";
import Social from "../Social/Social";

function SideBar(){
    return (
        <div className="header">
            <Router/>
            <Social/>
        </div>
    )
}

export default SideBar