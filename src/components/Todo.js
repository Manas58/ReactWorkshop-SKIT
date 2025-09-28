import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add a todo
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  // Delete a todo by id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={3}
    >
      {/* Container Card */}
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 3,
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Todo List
        </Typography>

        {/* Input and Button */}
        <Box display="flex" gap={2} mb={3}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            size="small"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={addTask}>
            Add
          </Button>
        </Box>

        {/* Task List */}
        {tasks.length === 0 ? (
          <Typography align="center" color="text.secondary">
            No tasks yet. Add one!
          </Typography>
        ) : (
          <List>
            {tasks.map((task, index) => (
              <React.Fragment key={task.id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => deleteTask(task.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={task.text} />
                </ListItem>
                {index < tasks.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
}

export default Todo;
