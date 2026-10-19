"use client";

import { useState, useEffect } from "react";

const Forecast = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=9.9312&longitude=76.2673&daily=temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto"
      );

      const data = await res.json();

      const forecast = data.daily.time.map((date, i) => ({
        date: date,
        max: data.daily.temperature_2m_max[i],
        min: data.daily.temperature_2m_min[i],
      }));

      setDays(forecast);
    };

    getForecast();
  }, []);

  console.log(days)

  return (
    <div>
      <h2 className="text-3xl font-bold">7-Day Forecast</h2>

      {days.map((day) => (
        <div key={day.date} className="border p-3 m-2">
          <p>Date: {day.date}</p>
          <p>Maximum: {day.max} °C</p>
          <p>Minimum: {day.min} °C</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default Forecast;