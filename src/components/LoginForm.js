import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login'; // Import the login icon

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          boxShadow: 2,
          borderRadius: 2,
          backgroundColor: 'white',
          marginTop: 10, // Added margin from top
          marginBottom: 3, // Added margin from bottom
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LoginIcon sx={{ marginRight: 1 }} /> {/* Login icon inside the button */}
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default LoginForm;
