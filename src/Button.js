import React from 'react';
import './Button.css'

const STYLES=['btn--primary','btn--outline']

const SIZE=['btn--medium','btn--large','btn--mobile']

const COLOR=['primary','blue','red','green']

export const Button=({children,
    type,
    onclick,
    buttonStyle,
    buttonSize,
    buttonColor})=>{
        const checkButtonStyle=STYLES.includes(buttonStyle)?
        buttonStyle:STYLES[0]

        const checkButtonSize=SIZE.includes(buttonSize)?
        buttonStyle:SIZE[0]

        const checkButtonColor=COLOR.includes(buttonStyle)?
        buttonStyle:COLOR[0]
        
        const onClick=()=>{
           console.log("signed up")
        }



    return(
        <button className={`btn 
        ${checkButtonStyle} 
        ${checkButtonSize} 
        ${checkButtonColor}`} onClick={onclick}
        type={type}>{children}</button>
    )
}