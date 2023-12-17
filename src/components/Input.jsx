import React from "react";
import { Useweather } from "../context/Weather";
const Input = (props)=>{
    const weather = Useweather()
    console.log("weather",weather);
    return (
        <input id="lname" name="lname"
        placeholder="search here" 
        value={weather.searchCity} 
        onChange={(e)=> weather.setsearchcity(e.target.value)} 
        />
    )
}

export default Input ;





