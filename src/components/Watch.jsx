import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // Runs every 10ms when stopwatch is active
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prev) => prev + 10), 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => setIsRunning((prev) => !prev);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => setLaps((prev) => [...prev, time]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}.${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          Stopwatch
        </Typography>

        {/* Time Display */}
        <Typography variant="h3" sx={{ mb: 3, fontWeight: "bold" }}>
          {formatTime(time)}
        </Typography>

        {/* Control Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color={isRunning ? "error" : "primary"}
            onClick={handleStartStop}
          >
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLap}
            disabled={!isRunning}
          >
            Lap
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Stack>

        {/* Laps */}
        {laps.length > 0 && (
          <Paper elevation={2} sx={{ mt: 3, p: 2, maxHeight: 200, overflowY: "auto" }}>
            <Typography variant="h6" gutterBottom>
              Laps
            </Typography>
            <List>
              {laps.map((lap, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`Lap ${i + 1}`} secondary={formatTime(lap)} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}
