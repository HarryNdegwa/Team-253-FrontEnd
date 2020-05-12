import React from "react";
import {Link} from "react-router-dom";


class ReportTwo extends React.Component{
    render(){
        return (
            <div className="report my-5 py-3 px-4">
                <div className="icon-text">
                    <i className="flaticon-automobile icon"></i>
                    <section className="text d-flex flex-column">
                        <h3>Report Reckless Drivers</h3>
                        <p>Report any behaviour in the road that might lead to loss of life.</p>
                    </section>
                </div>
                <div className="d-flex justify-content-end px-4">
                    <Link to="/report-recklessness" className="report-button btn">Go</Link>
                </div>
            </div>
        )
    }
}


export default ReportTwo