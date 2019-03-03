/* eslint-disable */
import axios from 'axios';

export default class WeatherService {

    constructor() {
        this.axios = axios;
        this.appId = '59681a1111eada6e97804823182254ae';
        this.navigator = window.navigator;

        this.cloudiness = 0;
        this.windSpeed = 0;
        this.humidity = 0;
        this.currentTemperature = 0;
        this.maxTemperature = 0;
        this.minTemperature = 0;
        this.location = ' ';
        this.description = 'Please connect to internet to see weather forecast';
        this.weatherId = 0;

        this.initialData = {
            clouds: { all: 0 },
            wind: { speed: 0 },
            main: {
                humidity: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0,
            },
            weather: [
                {
                    id: 0,
                    description: `There's a problem at the weather forecast server`
                }
            ],
            name: null,
            sys: {
                country: null
            }
        };

        this.getData();

    }

    getData() {
        this.getWeather();
    }

    getWeather() {
        this
            .getPosition()
            .then(position => position.coords)
            .then(coordinates => this.axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this.appId}&units=metric`))
            .then( response => this.updateData(response.data))
            .catch( () => this.updateData(this.initialData))
    }

    getPosition() {
        return new Promise((resolve,reject) => {
            this.navigator.onLine ?
                navigator.geolocation.getCurrentPosition(resolve,reject) :
                reject(this.description);
        });
    }

    updateData(data) {
        this.cloudiness = data.clouds.all;
        this.windSpeed = data.wind.speed;
        this.humidity = data.main.humidity;
        this.currentTemperature = Math.round(data.main.temp);
        this.maxTemperature = Math.round(data.main.temp_max);
        this.minTemperature = Math.round(data.main.temp_min);
        this.location = WeatherService.formatLocation(data.name, data.sys.country);
        this.description = data.weather[0].description;
        this.weatherId = data.weather[0].id;
    }

    static formatLocation(city, country) {
        return (city === null && country === null) ? '' : `${city} ${country}`;
    }

}