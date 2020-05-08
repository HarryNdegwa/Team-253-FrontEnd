import React from "react";


class ReportOne extends React.Component{
    render(){
        return (
            <div className="report my-5 py-3 px-4">
                <div className="icon-text">
                    <i className="flaticon-transport icon"></i>
                    <section className="text d-flex flex-column">
                        <h3>Report An Accident</h3>
                        <p>Report a witnessed accident.</p>
                    </section>
                </div>
                <div className="d-flex justify-content-end px-4">
                    <a href="#" className="report-button btn">Go</a>
                </div>
            </div>
        )
    }
}


export default ReportOne