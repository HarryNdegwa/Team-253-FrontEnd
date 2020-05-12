import React from 'react';


import Hero from "../Hero/Hero";
import ReportOne from "../ReportOne/ReportOne";
import ReportTwo from "../ReportTwo/ReportTwo";


function Main(){
    return (
        <main className="main col-md-9 col-lg-7 mx-auto my-5">
            <div>
                <Hero/>
                <ReportOne/>
                <ReportTwo/>
            </div>
        </main>
    )
}


export default Main