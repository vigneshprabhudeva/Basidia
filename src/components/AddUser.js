import React from 'react'
import './AddUser.css'
import { Formik, Form, Field } from 'formik';
import {useState} from 'react'

export default function AddUser() {
  let [user,setUser]=useState([""])
  let userArr=[]
  let state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
  
    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
      function validatePhone(value) {
        let error;
        if (value.length<10) {
          error = 'Required 10 digits';
        } 
        return error;
      }
      function validateUsername(value) {
        let error;
        if (!value) {
          error = 'enter something';
        }
        return error;
      }
      function validatestate(value) {
        let error;
        if (!value) {
          error = 'enter something';
        }
        return error;
      }
    return (
        <div className="container">
     
     <Formik
       initialValues={{
         username: '',
         email: '',
         phone:'',
         state:''
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
         userArr.push(values)
         

         

         localStorage.setItem("user data",JSON.stringify(userArr));

       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form className="form" >
             <div class="row">
    <div class="col-25">
      <label for="Username">Username</label>
    </div>
    <div class="col-75">
    <Field name="username" validate={validateUsername} className="Field" placeholder="username" />
           {errors.username && touched.username && <div>{errors.username}</div>}
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="email">Email</label>
    </div>
    
    <div class="col-75">
    <Field name="email" validate={validateEmail} className="Field"/>
           {errors.email && touched.email && <div>{errors.email}</div>}
           
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="phone">Phone</label>
    </div>
    <div class="col-75">
    <Field name="phone" validate={validatePhone} className="Field"/>
           {errors.phone && touched.phone && <div>{errors.phone}</div>}
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="dob">DOB</label>
    </div>
    <div class="col-75">
    <input type="date" id="dob" name="dob" placeholder="phone"/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="State">State</label>
    </div>
    <div class="col-75">
    <select id="State" name="State" validate={validateUsername}>
      {state.map(function(val){
        return(<option value={val}>{val}</option>)
      })}
          
        </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      
    </div>
    <div class="col-75">
    <button type="submit" className="submit-button">Submit</button>
    </div>
  </div>
 


  
 
          
          
           
 
           
         </Form>






       )}
     </Formik>
   </div>
    )
}
