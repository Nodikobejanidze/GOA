import React, { useState, useEffect } from 'react';

const [city, setCity] = useState('');
const handleInputChange = (e) => {
  setCity(e.target.value);
};


useEffect(() => {
  if (city) {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };
    fetchWeatherData();
  }
}, [city]);



const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const fetchWeatherData = async () => {
  setLoading(true);
  try {
    // API call logic here
    setLoading(false);
  } catch (error) {
    setError('Failed to fetch weather data');
    setLoading(false);
  }
};


{weather && (
  <div>
    <h2>{weather.name}</h2>
    <p>{weather.main.temp}°C</p>
    <p>{weather.weather[0].description}</p>
  </div>
)}



const [unit, setUnit] = useState('metric');
const toggleUnit = () => {
  setUnit(unit === 'metric' ? 'imperial' : 'metric');
};

useEffect(() => {
  if (city) {
    fetchWeatherData();
  }
}, [city, unit]);

const getBackground = () => {
  if (weather) {
    if (weather.weather[0].main === 'Clear') return 'sunny';
    if (weather.weather[0].main === 'Rain') return 'rainy';
    return 'cloudy';
  }
  return 'default';
};

import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetchWeatherData();
    }
  }, [city, unit]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=YOUR_API_KEY`
      );
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch weather data');
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  const getBackground = () => {
    if (weather) {
      if (weather.weather[0].main === 'Clear') return 'sunny';
      if (weather.weather[0].main === 'Rain') return 'rainy';
      return 'cloudy';
    }
    return 'default';
  };

  return (
    <div className={`weather-app ${getBackground()}`}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={toggleUnit}>
        {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && !loading && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

