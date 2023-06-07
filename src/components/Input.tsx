import React from "react";

const Input = ({type = "text", placeholder="", inputStyle="", maxLength=20 }) => {
    return(
        <input type={type} maxLength={maxLength} placeholder={placeholder} className={`input ${inputStyle}`} required/>
    )
}

export default Input;