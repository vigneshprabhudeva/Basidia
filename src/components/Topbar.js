import React from 'react'
import './Topbar.css'
import usericon from '../images/user-icon.png'
import { useEffect } from 'react'


export default function Topbar() {
    useEffect(() => {
       
          
       
      },[]);
      var date=new Date()
      var daylist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      var monthlist = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
      var month=date.getMonth()
      var day=date.getDay()
      var datee=date.getDate()
      var time=date.getTime()
      
      function formatAMPM(date) {
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12;
          minutes = minutes < 10 ? '0'+minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
        }   
      var finaldate=daylist[day]+" "+datee+" "+monthlist[month]+" "+formatAMPM(date)  
          console.log(finaldate)
    
  

    return (
        <div className='Topbar-container'>
            <div className='date'>{finaldate}</div>
            <div className='welcome'><p className="welcom-note">welcome John</p> <img src={usericon} alt="usericon" /> </div>
            
        </div>
    )
}
