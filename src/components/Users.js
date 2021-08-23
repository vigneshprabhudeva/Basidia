import React from 'react'
import './Users.css'
import usericon from '../images/user-icon.png'
import { useEffect } from 'react';

export default function Users() {

    let userData=JSON.parse(localStorage.getItem("user data"))
    console.log(userData)
    
    var data=[{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"}];
    console.log(data)
    return (
        <div className="users-container">
            <div className="search">
                <label class="search-label">search</label>
                <div className="searchbar-wrapper"><input type="text" id="search" className="search" placeholder="Enter keyword to search"/>
                <button className="search-button">search</button></div>
                
            </div>
            <label className="cardview-label">Card view</label>
            <div className="card-view">
                
                <div class="row">
                
                
            {data.map(function(val){
                return(
                <div class="column">
                <div class="card">
                    <img src={usericon} alt="user icon" />
                    <div className="card-info">
                        {val.username}<br/>
                        {val.age}<br/>
                        {val.state}</div>
               
                
            </div>
            </div>
            )
            })}
            
           </div>
    </div>
    <label class="cardview-label">List view</label>
            <div className="list-view">
                {data.map(function(val){
                    return(<div className="list-view-row">
                    <img src={usericon} className="list-icon" />{val.username}-{val.age}-{val.state}
                </div>)
                })}
                

            </div>
        </div>
    )
}
