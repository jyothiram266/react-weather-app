const baseurl = "https://api.weatherapi.com/v1/current.json?key=69c59e25aad544ce88593929231112"

export const  getweatherdata = async(city)=>{
    const response = await fetch(`${baseurl}&q=${city}&aqi=yes`);
    return await response.json();
}
export const  getweatherdatalocation = async(lat,lon)=>{
    const response = await fetch(`${baseurl}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}