import React from "react" ;
import { Useweather } from "../context/Weather";

const Buttom = (props)=>{
    const weather = Useweather();
    return(
        <button className="button-34" onClick={weather.fetchdata}>{props.value}</button>
    )
}

export default Buttom;