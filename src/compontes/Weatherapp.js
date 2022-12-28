import React,{useEffect, useState} from "react";
import "./css/style.css";

const Weatherapp =()=>{

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Ahmedabad");
   
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1+1}/${current.getFullYear()}`;
    let day="";
    if(current.getDay()===1)
    {
        day='Monday'
    }else if(current.getDay()===2)
    {
        day='Tuesday'
    }else if(current.getDay()===3)
    {
        day='Wednesday'
    }else if(current.getDay()===4)
    {
        day='Thursday'
    }else if(current.getDay()===5)
    {
        day='Friday'
    }else if(current.getDay()===6)
    {
        day='Saturday'
    }else if(current.getDay()===7)
    {
        day='Sunday'
    }
    
    let month="";
    if(current.getMonth()+1+1===1)
        month='January'
    else if(current.getMonth()+1===2)
        month='February'
    else if(current.getMonth()+1===3)
        month='March'
    else if(current.getMonth()+1===4)
        month='April'
    else if(current.getMonth()+1===5)
        month='May'
    else if(current.getMonth()+1===6)
        month='June'
    else if(current.getMonth()+1===7)
        month='July'
    else if(current.getMonth()+1===8)
        month='August'
    else if(current.getMonth()+1===9)
        month='September'
    else if(current.getMonth()+1===10)
        month='October'
    else if(current.getMonth()+1===11)
        month='November'
    else if(current.getMonth()+1===12)
        month='December'
    else
        month=""



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
            {/* <h3 style={{textAlign:'center',fontSize:'30px',margin:'15px 0px'}}>Weather App</h3> */}
            <div className="Box" style={{margin:'50px 0px'}}>
                    <div className="input"> 
                        <input type="search" id="search" autoComplete="off"  placeholder="Enter City Name" onChange={(event)=>{
                            setSearch(event.target.value);
                        }}/>
                    </div>
                </div>
                
                {!city ?(
                    <p className="error">No City Found</p>
                ):(
                        <div className="info" >
                            <br/><h1><i class="fa fa-map-marker" aria-hidden="true"></i> {search}</h1>
                            <p className="date">{day +" "+ current.getDate() +" "+ month +" "+ current.getFullYear()}</p>
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