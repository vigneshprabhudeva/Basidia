import React from 'react'
import './Sidebar.css'
import {Button} from '../Button'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import users from '../images/users.png'
import weather from '../images/weather.png'
import logo from '../images/Logo.png'
import $ from 'jquery';



export default function Sidebar() {
    let [adduser,setadduser]=useState(false)
    let [user,setuser]=useState(false)
   

    // $(document).ready(function () {
    //     $('button').on('click', function() {
    //     $('button').removeClass('active');
    //     $(this).addClass('active');
    //   });
    // });
    return (
        <div className="Sidebar-container">
            <div className="logo-div">
            <img src={logo}  alt="users" className="logo" />
            </div>
           
            
           
            
            <Link to="/addusers"><button className="sidebar-button"><img className="logo-sub" src={users}  alt="users"/>Add users</button></Link>
           <Link to="/users"><button className="sidebar-button"><img className="logo-sub" src={users}  alt="users"/>Users</button></Link>
           <Link to="/weather"><button className="sidebar-button"><img className="logo-sub" src={weather}  alt="users"/>Weather</button></Link>
          
          
            
        </div>
    )
}
