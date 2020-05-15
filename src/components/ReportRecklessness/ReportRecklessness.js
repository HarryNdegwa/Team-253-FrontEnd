import React from "react";

import "./ReportRecklessness.css";

function ReportReckless() {
        return (
            <div className="report-reckless  col-md-9 col-lg-7 mx-auto my-5">
              <form>
                  <h3>Report Reckless Driving</h3>

                  <div className="form-group">
                      <label>Location</label>
                      <input type="text" className="form-control" placeholder="Enter location name" />
                  </div>

                  <div className="form-group">
                      <label>Car Number Plate 
                      <span className="small">  (If visible)</span>
                      </label>
                      <input type="text" className="form-control" placeholder="Enter number plate" />
                  </div>

                  <div className="form-group">
                      <label>Road <span className="small">(optional)</span></label>
                      <input type="text" className="form-control" placeholder="Enter road name" />
                  </div>


                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
        );
}

export default ReportReckless;