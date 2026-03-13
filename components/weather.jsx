import React, { useState, useEffect } from 'react';

const WeatherStatus = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Pedimos la ubicación al navegador
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        // 2. Hacemos el fetch a Open-Meteo
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m`)
          .then((response) => {
            if (!response.ok) throw new Error("Error en la respuesta de la API");
            return response.json();
          })
          .then((data) => {
            // Guardamos la temperatura actual
            setWeather(data.current_weather.temperature);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Hubo un error:", err);
            setError("No se pudo obtener el clima.");
            setLoading(false);
          });
      },
      (err) => {
        console.error("Error de geolocalización:", err);
        setError("Permiso de ubicación denegado.");
        setLoading(false);
      }
    );
  }, []); // El array vacío asegura que esto corra solo una vez al montar

  if (loading) return <p>Cargando ubicación y clima...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Tu Clima Actual</h2>
      <p>La temperatura es: <strong>{weather}°C</strong></p>
    </div>
  );
};

export default WeatherStatus;