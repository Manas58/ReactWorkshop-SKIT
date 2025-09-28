import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "d97cff860cb3b09fcc3c00597fe13b38"; 

  const fetchWeather = async () => {
    if (!city) return setError("Please enter a city name.");
    try {
      setError("");
      setWeather(null);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      setError("City not found. Try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: "center" }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          Weather App
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <TextField
            label="Enter city"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={fetchWeather}>
            Search
          </Button>
        </Stack>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {weather && (
          <Paper elevation={2} sx={{ mt: 3, p: 3 }}>
            <Typography variant="h5">
              {weather.name}, {weather.sys.country}
            </Typography>
            <Typography variant="h6">
              🌡 {weather.main.temp}°C | {weather.weather[0].description}
            </Typography>
            <Typography variant="body1">
              💧 Humidity: {weather.main.humidity}% <br />
              🌬 Wind: {weather.wind.speed} m/s
            </Typography>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}
