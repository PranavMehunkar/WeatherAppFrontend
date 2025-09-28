import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelsLike:37.31,
        temp:31.47,
        tempMin: 31.47,
        tempMax: 31.47,
        humidity: 65,
        weather: "overcast clouds",
    });

    let updateInfo=(newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Pranav</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}