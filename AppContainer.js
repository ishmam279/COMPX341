
import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import CityNameResponse from '../components/CityNameResponse';
import CityName from '../components/CityName';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');

    const handleCityNameChange = async (cityName) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        //const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=imperial&zip=${zipValue},us`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?city=${cityName}&appid=pk.eyJ1IjoiZXN0aGVybmdhbWF0YSIsImEiOiJja2F6Ym15Nm0waHVvMnptaTJhaDd2MDI0In0.4-XnqLJAgixPINBBkMcY3g&units=metric,nz`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <CityName onCityNameChange={handleCityNameChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <CityNameResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
        </div>
    );
}
  
export default AppContainer
