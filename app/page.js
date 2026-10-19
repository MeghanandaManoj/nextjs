"use client";

import { useState, useEffect } from "react";

const Home = () => {
  const [city, setCity] = useState("Kochi");
  const [weather, setWeather] = useState(null);

  const getWeather = async (cityName) => {
    const geo = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`
    );

    const location = await geo.json();

    if (!location.results) {
      alert("City not found");
      return;
    }

    const lat = location.results[0].latitude;
    const lon = location.results[0].longitude;

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const data = await res.json();

    setWeather(data.current);
  };

  useEffect(() => {
    getWeather("Kochi");
  }, []);

  console.log(weather);
  return (
    <div>
      <h2 className="text-3xl font-bold">Weather Dashboard</h2>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border p-2"
      />

      <button
        onClick={() => getWeather(city)}
        className="bg-blue-500 text-white p-2"
      >
        Search
      </button>

      {weather && (
        <div>
          <h3 className="text-2xl font-bold">Weather Details</h3>

          <p>Temperature: {weather.temperature_2m} °C</p>

          <p>Humidity: {weather.relative_humidity_2m}%</p>

          <p>Wind Speed: {weather.wind_speed_10m} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Home;