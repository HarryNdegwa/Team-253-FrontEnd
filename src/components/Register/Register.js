import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";


import "./Register.css";

function Register(){

    const validationSchema = Yup.object({
        orgName:Yup.string().required("Required"),
        email:Yup.string().required("Required"),
        phone:Yup.string().required("Required"),
        address:Yup.string().required("Required"),
        password:Yup.string().min(8).required("Required"),
        confirmPassword:Yup.string().required().oneOf([Yup.ref('password'),null],'Passwords must match')
    })

    const {handleChange,handleSubmit,values,errors} = useFormik({
        initialValues:{
            "orgName":"",
            "orgType":"",
            "email":"",
            "phone":"",
            "address":"",
            "password":"",
            "confirmPassword":""
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
            <h3>Register Today</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Organization Name:</label>
                    <input onChange={handleChange} value = {values.orgName} type="text" name="orgName" className="form-control" id="org-name"/>
                    <span className="error">{errors.orgName ? errors.orgName : null}</span>
                    {/* {errors.orgName ? errors.orgName : null} */}
                </div>
                <div className="form-group">
                    <label htmlFor="orgType">Organization Type:</label>
                    <select className="form-control" onChange={handleChange} values = {values.orgType} name="orgType" id="org-type">
                        <option>Health Unit</option>
                        <option>Traffic Police Unit</option>
                    </select>
                    <span className="error">{errors.orgType ? errors.orgType : null }</span>
                </div>
                <span className="error">{errors.orgName ? errors.orgName : null}</span>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} values = {values.email} type="email" name="email" className="form-control" id="email"/>
                    {/* <span className="error">{errors.email ? errors.email : null }</span> */}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input onChange={handleChange} values = {values.phone} type="text" name="phone" className="form-control" id="phone"/>
                    <span className="error">{errors.phone ? errors.phone : null }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input onChange={handleChange} values = {values.address} type="text" name="address" className="form-control" id="address"/>
                    <span className="error">{errors.address ? errors.address : null }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input onChange={handleChange} values = {values.password} type="password" name="password" className="form-control" id="password"/>
                    <span className="error">{errors.password ? errors.password : null }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input onChange={handleChange} values = {values.confirmPassword} type="password" name="confirmPassword" className="form-control" id="confirm-password"/>
                    <span className="error">{errors.confirmPassword ? errors.confirmPassword : null }</span>
                </div>
                <button type="submit" className="btn btn-md register-btn">Register</button>
            </form>

            <p className="login-wrapper">Already have an account?<Link to="/login">Sign in</Link></p>  {/* place login component here using a Link tag */}
        </div>
    )
}


export default Register