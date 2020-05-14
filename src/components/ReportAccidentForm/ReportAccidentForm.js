import React from "react";
import *as Yup from "yup";
import {useFormik} from "formik";


import "./ReportAccidentForm.css";


function ReportAccidentForm(){

    const validationSchema = Yup.object({
        deaths:Yup.string().required("Required"),
        injuries:Yup.string().required("Required"),
        time:Yup.string().required("Required"),
        cars:Yup.string().required("Required")
    })

    const {handleChange,handleSubmit,values,errors} = useFormik({
        initialValues:{
            "deaths":"",
            "injuries":"",
            "time":"",
            "cars":"",
            "location":"",
            "phone":""
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

            console.log(values);
        }
    })


    return (
        <div className="main col-md-8 col-lg-5 mx-auto my-5">
            <h3>Emmergency Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="deaths">Deaths:</label>
                    <select className="form-control" onChange={handleChange} values = {values.deaths} name="deaths" id="deaths">
                        <option>less than 5</option>
                        <option>less than 10</option>
                        <option>more than 10</option>
                    </select>
                    <span className="error">{errors.deaths ? errors.deaths : null }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="injuries">Injuries:</label>
                    <select className="form-control" onChange={handleChange} values = {values.injuries} name="injuries" id="injuries">
                        <option>less than 5</option>
                        <option>less than 10</option>
                        <option>more than 10</option>
                    </select>
                    <span className="error">{errors.injuries ? errors.injuries : null }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="cars">Cars Involved:</label>
                    <select className="form-control" onChange={handleChange} values = {values.cars} name="cars" id="cars">
                        <option>2</option>
                        <option>less than 5</option>
                        <option>more than 5</option>
                    </select>
                    <span className="error">{errors.cars ? errors.cars : null }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="time">When did the accident occur?</label>
                    <select className="form-control" onChange={handleChange} values = {values.time} name="time" id="time">
                        <option>less than 5 minutes ago</option>
                        <option>less than 30 minutes ago</option>
                        <option>less than 1hr ago</option>
                    </select>
                    <span className="error">{errors.time ? errors.time : null }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Describe Location:</label>
                    <textarea onChange={handleChange} value = {values.location} type="textarea" name="location" className="form-control" id="location"></textarea>
                    <span className="error">{errors.location ? errors.location : null}</span>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="location">Take Accident Photo:</label>
                    <input onChange={handleChange} value = {values.photo} type="file" accept="image/*" capture="camera" name="photo" className="form-control" id="photo"/>
                    <span className="error">{errors.photo ? errors.photo : null}</span>
                </div> */}
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input onChange={handleChange} value = {values.phone} type="text" name="phone" className="form-control" id="phone"/>
                    <span className="error">{errors.phone ? errors.phone : null}</span>
                </div>

                <button type="submit" className="btn btn-md register-btn">Report</button>
            </form>
        </div>
    )
}


export default ReportAccidentForm