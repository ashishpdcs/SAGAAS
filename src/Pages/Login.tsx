import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate  } from 'react-router-dom';
import WrongPage from './WrongPage';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [redirectToErrorPage, setRedirectToErrorPage] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      refreshAccessToken(refreshToken);
    }
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      try {
        localStorage.removeItem('jwtToken');
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:5000/api/employees/login', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({  
            Email: email,
            Password: password,
          }),
        });
        console.log("Response" , response.status);
    
        if (response.status === 200) {
          const responseData = await response.json();
          localStorage.setItem('jwtToken', responseData.token);
          localStorage.setItem('refreshToken', responseData.refreshToken);
          console.log('Login successful');
          await refreshAccessToken(responseData.refreshToken);
          navigate('/employee');
        } else if (response.status === 401) {
          console.error('Invalid credentials');
        } else if (response.status === 500) {
          setRedirectToErrorPage(true);
        } else {
          console.error('Error during login:', await response.json());
        }
      } catch (error) {
        console.error('Error during login:', error);
        setRedirectToErrorPage(true);
      }
    }
  };

  const refreshAccessToken = async (refreshToken:string) => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const refreshResponse = await fetch('http://localhost:5000/api/employees/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      });
      if (refreshResponse.ok) {
        const refreshedData = await refreshResponse.json();
        localStorage.setItem('jwtToken', refreshedData.token);  
        console.log('Access token refreshed successfully');
      } else {
        const errorResponse = await refreshResponse.json();
        console.error('Error refreshing access token:', errorResponse);
      }
    } catch (error) {
      console.error('Error refreshing access token:', error);
    }
  };
  
  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  if (redirectToErrorPage) {
    return <WrongPage />;
  }

  return (
    <Container component="main" maxWidth="lg">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '79.9vh' }}>
        <form onSubmit={handleSubmit} style={{ padding: '100px 0' }}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            error={!!passwordError}
            helperText={passwordError}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
