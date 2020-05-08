import React from "react";

import Router from "../Router/Router";
import Social from "../Social/Social";

function Header(){
    return (
        <div className="header">
            <Router/>
            <Social/>
        </div>
    )
}

export default Header