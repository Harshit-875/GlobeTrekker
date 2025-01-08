import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({
        cityname: '',
        temperature: '',
        heatindex: '',
        humidity: '',
        temp_c: '',
        dewpoint_c: '',
        dewpoint_f: '',
        feelslike_c: '',
        heatindex_c: '',
        heatindex_f: '',
        precip_in: '',
        precip_mm: '',
        wind_mph: ''
    });

    const getWeather = async (city) => {
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '60ff0e6d71msh605dc762fa94c47p10799ejsne2315d85c2da',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();

            const weather = result.current;

            setWeatherData({
                cityname: city,
                temperature: `${weather.temp_c} °C`,
                heatindex: `${weather.heatindex_c} °C`,
                humidity: `${weather.humidity} %`,
                temp_c: `${weather.temp_c} °C`,
                dewpoint_c: `${weather.dewpoint_c} °C`,
                dewpoint_f: `${weather.dewpoint_f} °F`,
                feelslike_c: `${weather.feelslike_c} °C`,
                heatindex_c: `${weather.heatindex_c} °C`,
                heatindex_f: `${weather.heatindex_f} °F`,
                precip_in: `${weather.precip_in} in`,
                precip_mm: `${weather.precip_mm} mm`,
                wind_mph: `${weather.wind_mph} mph`
            });
        } catch (error) {
            console.error('Error fetching the weather data:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        getWeather(city);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3">
                <div className="container-fluid d-flex" style={{gap:'64%'}}>
                    <div>

                        <Link className="navbar-brand" href="/">Weather Forecast</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input
                                id="city"
                                className="form-control me-2"
                                type="search"
                                placeholder="Enter City/Places"
                                aria-label="Search"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="container">
                <h1 className="my-4 text-center">Weather for {weatherData.cityname}</h1>
                <main>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Temperature</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title" id="temperature">{weatherData.temperature}</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Temperature is {weatherData.temp_c}</li>
                                        <li>dewpoint_c is {weatherData.dewpoint_c}</li>
                                        <li>dewpoint_f is {weatherData.dewpoint_f}</li>
                                        <li>feelslike_c is {weatherData.feelslike_c}</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Heat Index</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title" id="heatindex">{weatherData.heatindex}</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Temperature is {weatherData.temp_c}</li>
                                        <li>dewpoint_c is {weatherData.dewpoint_c}</li>
                                        <li>heatindex_f is {weatherData.heatindex_f}</li>
                                        <li>heatindex_c is {weatherData.heatindex_c}</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-bg-primary border-primary">
                                    <h4 className="my-0 fw-normal">Humidity/Precpt</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title" id="humid">{weatherData.humidity}</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Humidity is {weatherData.humidity}</li>
                                        <li>precip_in is {weatherData.precip_in}</li>
                                        <li>precip_mm is {weatherData.precip_mm}</li>
                                        <li>wind_mph is {weatherData.wind_mph}</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    );
};

export default WeatherApp;
