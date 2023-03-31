import React, { useState } from "react";
import { TextField, Box, Typography, Button, Paper, ThemeProvider } from "@mui/material";
import "./App.css";
import darkTheme from './theme/darkTheme';
import AnimatedText from "./components/AnimatedText/AnimatedText";

const App = () => {
  const [result, setResult] = useState(null);

  const endpoints = [
    {
      title: "Get All Patients",
      description: "This endpoint returns all plans in the database.",
      url: "http://localhost:3001/patients",
    },
    {
      title: "Get All Surgeries",
      description: "Returns all surgeons",
      url: "http://localhost:3001/patients/surgeries",
    },
        {
      title: "Get Surgeries By Doctor Name",
      description: "Returns all surgeries by doctor",
      url: "http://localhost:3001/surgeries",
      input: true,
    },
    {
      title: "Get Patients and Plans by Plan Id",
      description: "Returns patients and their plans by plan id.",
      url: "http://localhost:3001/patients/plans/1",
    },
    {
      title: "Get Patient and their Surgeries",
      description: "Returns a patient and their surgeries.",
      url: "http://localhost:3001/patients/surgeries",
    },

  ];

  const handleButtonClick = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <ThemeProvider theme={ darkTheme }>
      <Box className="App-header">
        
        <Typography variant="h3" component="h1" gutterBottom>
          <AnimatedText text="Hi" delay={ 300 }/>
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          <AnimatedText text="My name is Alan Martini" delay={ 200 }/>
        </Typography>
        <Typography variant="h5" gutterBottom>
          This frontend template is made to display a backend project's functioning.
        </Typography>
        <Typography variant="h5" gutterBottom className="repo">
          Click here to see the backend working
        </Typography>
      </Box>
      <Box className="App">
        <Box className="App-container">
          <Box className="endpoints-buttons">

            {endpoints.map((endpoint) => (
              <Box key={endpoint.title} sx={{ marginBottom: 3 }}>
                <Typography 
                  className='format'
                  variant="h4">{endpoint.title}</Typography>
                <Typography 
                  className='format'
                  variant="h6">{endpoint.description}</Typography>
                {endpoint.input && (
                  <TextField
                    className="text"
                    label={endpoint.input.placeholder}
                    variant="outlined"
                    sx={{
                      '& .MuiInputBase-root': {
                        height: '30px',
                        width: '150px',
                        marginRight: '10px'
                      },
                      '& .MuiInputLabel-root': {
                      },
                    }}
                
                  />
                )}
                <Button
                  className='format'
                  variant="contained"
                  color="primary"
                  sx={{ backgroundColor: 'white', width: '150px', height: '25px' }}
                  onClick={() => handleButtonClick(endpoint.url)}
                />
              </Box>
            ))}
          </Box>
          <Box  className="results">
            <Paper className="results-paper">
              <Typography variant="h6">Result:</Typography>
              <pre>{result}</pre>
            </Paper>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
