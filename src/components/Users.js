import React from 'react'
import './Users.css'
import usericon from '../images/user-icon.png'
import { useState } from 'react';

export default function Users() {

    let [userData,setUserData]=useState(JSON.parse(localStorage.getItem("user data")))

    function search(){
        let newarr=userData.filter(function(val){
            
            if(val.username==document.getElementById("search").value){
                return 1
            }else{
                return 0
            }
            
        })
        console.log(newarr)
        setUserData(newarr)
    }

    
    
    var data=[{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"},{username:"username",age:"age",state:"state"}];
    console.log(data)
    return (
        <div className="users-container">
            <div className="search">
                <label class="search-label">search</label>
                <div className="searchbar-wrapper"><input type="text" id="search" className="search" placeholder="Enter keyword to search"/>
                <button className="search-button" onClick={()=>{search()}}>search</button></div>
                
            </div>
            <label className="cardview-label">Card view</label>
            <div className="card-view">
                
                <div class="row">
                
                
            {userData.map(function(val){
                return(
                <div class="column">
                <div class="card">
                    <img src={usericon} alt="user icon" />
                    <div className="card-info">
                        {val.username}<br/>
                        {val.email}<br/>
                        {val.phone}</div>
               
                
            </div>
            </div>
            )
            })}
            
           </div>
    </div>
    <label class="cardview-label">List view</label>
            <div className="list-view">
                {userData.map(function(val){
                    return(<div className="list-view-row">
                    <img src={usericon} className="list-icon" />{val.username}-{val.email}-{val.phone}
                </div>)
                })}
                

            </div>
        </div>
    )
}
