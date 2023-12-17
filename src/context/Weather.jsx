import { createContext, useContext ,useState } from "react";
import { getweatherdata } from "../api";

const Weathercontext = createContext(null);

export const Useweather =()=>{
    return useContext(Weathercontext);
}



export const Weatherprovider = (props) =>{
    const [data,setdata] = useState(null);
    const [searchdata,setsearchcity] = useState(null);

    const fetchdata = async()=>{
        const response = await getweatherdata(searchdata);
        setdata(response);
    }


    return(
    <Weathercontext.Provider value ={{searchdata,setsearchcity,data,setdata ,fetchdata}}>
        {props.children}
    </Weathercontext.Provider>      
    )
}