import React,{useEffect, useState} from "react";
import "./css/style.css";

const Weatherapp = ()=>{

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("palanpur");
    
    
    useEffect( ()=> {
        const fechAPi = async ()=>  {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bd3b24e80f939aac92c94a08639b1f98`;
            const response=await fetch(url);
            const resJson= await response.json();
            //console.log(resJson);
            setCity(resJson.main);
             
            
        };
        fechAPi();
    },[search] ) 
    return(
        <>
           <div className="Weather">
            <div className="Box">
                    <div className="input"> 
                        <input type="search" id="search" autoComplete="off" placeholder="Enter City Name" onChange={(event)=>{
                            setSearch(event.target.value);
                        }}/>
                    </div>
                </div>
                
                {!city ?(
                    <p className="error">No City Found</p>
                ):(
                        <div className="info">
                            <br/><h1><i class="fa fa-map-marker" aria-hidden="true"></i> {search}</h1>
                            <p className="date">Friday 22 Octomber 2021</p>
                            <h2>{city.temp} °c</h2>
                            <p className="clear">Clear sky</p>
                            <p className="min">Min: {city.temp_min} °cel | Max: {city.temp_max} °cel</p>

                        </div>
                )}

                
           </div>
        </>
    )
}

export default Weatherapp;