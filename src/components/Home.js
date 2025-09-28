// src/components/Home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

function Home() {
  useEffect(() => {
    document.title = "Portfolio Landing Page";
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          width: "100%",
          textAlign: "center",
          background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Manas Gupta
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          Explore my React projects below:
        </Typography>

        <nav>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/todo"
                sx={{
                  borderRadius: 2,
                  "&:hover": { bgcolor: "primary.light", color: "white" },
                }}
              >
                <ListItemText primary="Todo App" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/stopwatch"
                sx={{
                  borderRadius: 2,
                  "&:hover": { bgcolor: "secondary.light", color: "white" },
                }}
              >
                <ListItemText primary="Stopwatch" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/weather"
                sx={{
                  borderRadius: 2,
                  "&:hover": { bgcolor: "success.light", color: "white" },
                }}
              >
                <ListItemText primary="Weather App" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Paper>
    </Container>
  );
}

export default Home;
