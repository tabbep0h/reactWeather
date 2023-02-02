import React from "react";

function Weather ({temp, city, country, sunrise, sunset,error}){
    return(
        <div className="weather">
            {temp &&
            <div>
                <p>Местонахождение: Город - {city}   страна  - {country}</p>
                <p>Температура {temp} </p>
                <p>Восход солнца {sunrise}</p>
                <p>Закат солнца {sunset}</p>
            </div>
            }   
            <p>{error}</p>
        </div>
    )
}
export default Weather