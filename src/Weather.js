import React, { Component } from 'react';
import $ from 'jquery';
import './assets/css/Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloudyico from './assets/images/cloudy.svg';
import clearico from './assets/images/clear.svg';
import thunderico from './assets/images/thunder.svg';
import atmosico from './assets/images/atmos.svg';
import drizzleico from './assets/images/drizzle.svg';
import rainico from './assets/images/rain.svg';
import snowico from './assets/images/snow.svg';
// import Button from 'react-bootstrap/Button';

var weathers = { 
    2:thunderico,
    3:drizzleico,
    5:rainico,
    6:snowico,
    7:atmosico,
    8:cloudyico,
    9:clearico
}

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = { time: "00:00" }
    }
    
    getWeather() {
        var lat = 0;
        var lon = 0;


        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            $.ajax({
                type: "GET", 
                url: "http://localhost:8080/getweather/", 
                data: { lat:lat, lon:lon }, 
                success: function(data){
                    document.getElementById("temp").innerHTML = data.temp;
                    document.getElementById("weather").innerHTML = data.description;

                    var iurl = 8;

                    if (data.id !== 800) {
                        iurl = weathers[Number(String(data.id).charAt(0))];
                    }

                    document.getElementById("weatherico").src = iurl;

                    document.getElementById("weather-off").style.display = "none" ;
                    document.getElementById("weather-on").style.display = "block" ;
                    $( '.weather-time' ).addClass('hoverit');
                },
                dataType: "json"
            });
        });
    }


    componentDidMount() {
        this.interval = setInterval( function () {
                var now = new Date();
                this.setState({ time: String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0') });
            }.bind(this), 
            1000);
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render () {
        return (
            <div className="weather-time" onClick={this.getWeather}>
                <div id="weatherh" style={{height:"100%", width:"100%"}}>
                    <div id="weather-off" className="full-height">
                        <button onClick={this.getWeather}>
                            <h2>Update weather</h2>
                            <div className="liquid"></div>
                        </button>
                    </div>
                    <div id = "weather-on" style={ {display:"none"} }>
                        <h3 id="time">{this.state.time}</h3>
                        <img id="weatherico" alt="[weather]"></img>
                        <p id="temp">temp</p>
                        <p id="weather">weather</p>
                    </div>
                </div>
                <div id="clickit">
                    <p>Click to update</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" id="spin">
                        <path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z" fill="white"/>
                        <path d="M0 0h48v48h-48z" fill="none"/>
                    </svg>

                </div>
            </div>
        );
    }
}

export default Weather;
