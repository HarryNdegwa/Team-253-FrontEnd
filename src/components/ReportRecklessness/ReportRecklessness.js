import React from 'react';
import *as Yup from 'yup';
import {useFormik} from 'formik';

import './ReportRecklessness.css';

function ReportReckless() {

    const validationSchema = Yup.object({
        location:Yup.string().required("Required")
    });


    const {handleChange,handleSubmit,values,errors} = useFormik({
        initialValues:{
            "location":"",
            "numberPlate":"",
            "road":""
        },
        validationSchema,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit(values){

            function success(position){
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                values.latitude = latitude;
                values.longitude = longitude;
            }

            function error(){
                // var confirmation = confirm("Your location could not be fetched.Enable GPS and check your internet connection!");
                // if (confirmation){
                //     window.location.reload(true);
                // }else{
                //     window.location.reload(true);
                // }
            }

            function enableGPSForCoordinates(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(success,error,{enableHighAccuracy:true});
                }else{
                    alert("Enable GPS so that we can get your current location.Ensure your internet connection is stable.");
                    enableGPSForCoordinates();
                }
            }

            enableGPSForCoordinates();

        }
    })

        return (
            <div className="report-reckless  col-md-9 col-lg-5 mx-auto my-5">
              <h3>Report Reckless Driving</h3>
              <form onSubmit={handleSubmit}>                  
                  <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input type="text" id="location"
                      name="location"
                       className="form-control" placeholder="Enter location name" onChange={handleChange} values = {values.location}/>
                       <span className="error">{errors.location ? errors.location : null}</span>
                  </div>

                  <div className="form-group">
                      <label htmlFor="numberPlate">Car Number Plate 
                      <span className="small">  (If visible)</span>
                      </label>
                      <input type="text" id="numberPlate"
                      name="numberPlate" className="form-control" placeholder="Enter number plate" onChange={handleChange} values = {values.numberPlate}/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="road">Road <span className="small">(optional)</span></label>
                      <input type="text" id="road" 
                      name="road" className="form-control" placeholder="Enter road name" 
                      onChange={handleChange} values = {values.road}/>
                  </div>


                  <button type="submit" className="btn btn-primary btn-block">Report</button>
              </form>
            </div>
        );
}

export default ReportReckless;