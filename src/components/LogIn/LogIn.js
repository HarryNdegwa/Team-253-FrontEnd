import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import './LogIn.css';

function LogIn() {

    const validationSchema = Yup.object({
        email:Yup.string().required("Required"),
        password:Yup.string().min(8).required("Required")
    })

    const {handleChange,handleSubmit,values,errors} = useFormik({
        initialValues:{
            "email":"",
            "password":"",
            "rememberMe":""
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
            <div className="login  col-md-9 col-lg-5 mx-auto my-5">
                <h3>Log In</h3>
              <form onSubmit={handleSubmit}>

                  <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" id="email" name="email" className="form-control" placeholder="Enter email" onChange={handleChange} value = {values.email} />
                      <span className="error">{errors.email ? errors.email : null}</span>
                  </div>

                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" name="password" className="form-control" placeholder="Enter password" 
                      onChange={handleChange} value = {values.password}/>
                      <span className="error">{errors.password ? errors.password : null}</span>
                  </div>

                  <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="rememberMe" name="rememberMe" onChange={handleChange} values = {values.rememberMe}/>
                          <label className="custom-control-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">Log In</button>
                  <p className="login-wrapper">Don't have an account?<Link to="/register">Sign up</Link></p>

                  {/* <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                  </p> */}
              </form>
            </div>
        );
}

export default LogIn;