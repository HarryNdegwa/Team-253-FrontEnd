import React from "react";
import {Link} from "react-router-dom";



class ReportOne extends React.Component{
    render(){
        return (
            <div className="report my-5 py-3 px-4">
                <div className="icon-text">
                    <i className="flaticon-transport icon"></i>
                    <section className="text d-flex flex-column">
                        <h3>Report An Accident</h3>
                        <p>Report a witnessed accident and help save lives.</p>
                    </section>
                </div>
                <div className="d-flex justify-content-end px-4">
                    <Link to="/report-accident" className="report-button btn">Go</Link>
                </div>
            </div>
        )
    }
}


export default ReportOne