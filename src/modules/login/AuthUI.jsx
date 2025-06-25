import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Divider,
  Container
} from '@mui/material';
import { Google, Microsoft, Apple, Phone } from '@mui/icons-material';

const AuthUI = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, mode: isLogin ? 'login' : 'signup' });
  };

  const socialButtons = [
    { icon: <Google />, text: 'Continue with Google', color: '#4285f4' },
    { icon: <Microsoft />, text: 'Continue with Microsoft Account', color: '#00a1f1' },
    { icon: <Apple />, text: 'Continue with Apple', color: '#000000' },
    { icon: <Phone />, text: 'Continue with phone', color: '#666666' }
  ];

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: '#040404',
          fontSize: '28px',
          px: 3,
          py: 3,
          position: 'fixed',
          top: 0, 
          left: 0, 
          width: '100%',
          height:'2%',
          backgroundColor: '#fff', 
          zIndex: 1000, 
        }}
      >
        NotebookLM
      </Typography>
      <Container
        maxWidth="sm"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          py: 4,
          pt: '80px', 
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
          {/* Main Content */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: '#000',
                fontSize: '32px',
                color:'#040404'
              }}
            >
              {isLogin ? 'Welcome back' : 'Create an account'}
            </Typography>

            {/* Email Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
              <TextField
                fullWidth
                placeholder="Email address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '26px',
                    backgroundColor: '#fff',
                    height: '52px',
                    fontSize: '16px',
                    '& fieldset': {
                      borderColor: '#d1d5db',
                      borderWidth: '1px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#040404',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#040404',
                      borderWidth: '2px',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '14px 16px',
                    fontSize: '16px',
                    '&::placeholder': {
                      color: '#6F6F6F',
                      opacity: 1,
                    },
                  },
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#f9f9f9',
                  color:'#aaa9aa',
                  height: '52px',
                  borderRadius: '26px',
                  fontSize: '16px',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#ececec',
                  },
                  mb: 2,
                }}
              >
                Continue
              </Button>
            </Box>

            {/* Toggle Link */}
            <Typography sx={{ mb: 3, fontSize: '14px', color: '#666' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMode();
                }}
                sx={{
                  color: '#040404',
                  textDecoration: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </Link>
            </Typography>

            {/* Divider */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Divider sx={{ flex: 1, bgcolor: '#e5e7eb' }} />
              <Typography sx={{ px: 2, color: '#666', fontSize: '14px', fontWeight: 500 }}>
                OR
              </Typography>
              <Divider sx={{ flex: 1, bgcolor: '#e5e7eb' }} />
            </Box>

            {/* Social Login Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
              {socialButtons.map((button, index) => (
                <Button
                  key={index}
                  fullWidth
                  variant="outlined"
                  startIcon={React.cloneElement(button.icon, { 
                    sx: { 
                      fontSize: '20px',
                      color: button.color,
                    } 
                  })}
                  sx={{
                    height: '52px',
                    borderColor: '#d1d5db',
                    color:'#aaa9aa',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '26px',
                    fontSize: '16px',
                    fontWeight: 500,
                    textTransform: 'none',
                    justifyContent: 'flex-start',
                    pl: 3,
                    '&:hover': {
                      backgroundColor: '#f9fafb',
                      borderColor: '#9ca3af',
                    },
                    '& .MuiButton-startIcon': {
                      marginRight: '12px',
                    },
                  }}
                >
                  {button.text}
                </Button>
              ))}
            </Box>

            {/* Footer Links */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
              <Link
                href="#"
                sx={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#666',
                  },
                }}
              >
                Terms of Use
              </Link>
              <Typography sx={{ color: '#d1d5db', fontSize: '14px' }}>|</Typography>
              <Link
                href="#"
                sx={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#666',
                  },
                }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AuthUI;