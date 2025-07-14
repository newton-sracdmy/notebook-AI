import React, { useState } from 'react';
import { Box, Typography, Button, Paper, ToggleButtonGroup, ToggleButton, Divider, Stack } from '@mui/material';

const PricingNotebookLm = () => {
  const [billing, setBilling] = useState('monthly');

  const handleBillingChange = (_, newBilling) => {
    if (newBilling) setBilling(newBilling);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to top right, #fafafa, #f2f2f2)',
        py: { xs: 4, sm: 6 }, // Reduced padding on smaller screens
        px: { xs: 2, sm: 4 }, // Adjust horizontal padding
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight={600}
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', sm: '3rem' }, // Scale down font for mobile
          width: '100%',
          px: 2,
        }}
      >
        SuperNotebookLm
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        gutterBottom
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Responsive font size
          px: 2,
        }}
      >
        Unlock advanced Capabilities
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        spacing={{ xs: 2, sm: 4 }}
        mt={{ xs: 2, sm: 4 }}
        sx={{ width: '100%', maxWidth: '1200px' }} // Limit max width for larger screens
      >
        {/* Free Plan */}
        <Paper
          elevation={3}
          sx={{
            px: { xs: 2, sm: 4 },
            py: { xs: 3, sm: 5 },
            width: { xs: '100%', sm: 400 }, // Full width on mobile
            maxWidth: 400, // Cap width for larger screens
            backgroundColor: '#f9f9f9',
            borderRadius: '26px',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
          >
            Basic
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
          >
            Free
          </Typography>
          <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />
          <Stack spacing={{ xs: 1, sm: 1.5 }}>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              NotebookLM 3 Model
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Aurora Image Model
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Context Memory
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Limited access to Thinking
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Limited access to DeepSearch
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Limited access to DeeperSearch
            </Typography>
          </Stack>
          <Button
            variant="contained"
            fullWidth
            disabled
            sx={{
              mt: { xs: 3, sm: 4 },
              borderRadius: '26px',
              color: '#aaa9aa',
              fontSize: { xs: '0.85rem', sm: '1rem' },
              py: { xs: 1, sm: 1.5 },
            }}
          >
            Current
          </Button>
        </Paper>

        {/* Paid Plan */}
        <Paper
          elevation={6}
          sx={{
            px: { xs: 2, sm: 4 },
            py: { xs: 3, sm: 5 },
            width: { xs: '100%', sm: 400 }, // Full width on mobile
            maxWidth: 400,
            backgroundColor: '#f9f9f9',
            borderRadius: '26px',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
          >
            SuperNotebookLm
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
          >
            $30.00{' '}
            <Typography
              variant="body1"
              component="span"
              sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
            >
              / {billing}
            </Typography>
          </Typography>
          {billing === 'yearly' && (
            <Typography
              variant="body2"
              color="orange"
              mt={1}
              sx={{ fontSize: { xs: '0.85rem', sm: '0.875rem' } }}
            >
              Get 20% off with yearly
            </Typography>
          )}
          <ToggleButtonGroup
            value={billing}
            exclusive
            onChange={handleBillingChange}
            size="small"
            sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ToggleButton
              value="monthly"
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                px: { xs: 2, sm: 3 },
              }}
            >
              Monthly
            </ToggleButton>
            <ToggleButton
              value="yearly"
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                px: { xs: 2, sm: 3 },
              }}
            >
              Yearly
            </ToggleButton>
          </ToggleButtonGroup>

          <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />

          <Stack spacing={{ xs: 1, sm: 1.5 }}>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              More Grok 3 — 100 Queries / 2h
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              More Aurora Images — 100 Images / 2h
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Even Better Memory — 128K Context Window
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Extended access to Thinking — 30 Queries / 2h
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Extended access to DeepSearch — 30 Queries / 2h
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Extended access to DeeperSearch — 10 Queries / 2h
            </Typography>
          </Stack>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: { xs: 3, sm: 4 },
              backgroundColor: '#ECECEC',
              borderRadius: '26px',
              color: '#aaa9aa',
              fontSize: { xs: '0.85rem', sm: '1rem' },
              py: { xs: 1, sm: 1.5 },
            }}
          >
            Subscribe Now
          </Button>
        </Paper>
      </Stack>
    </Box>
  );
};

export default PricingNotebookLm;