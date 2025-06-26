import React, { useState } from 'react';
import { Box, Typography, Button, Paper, ToggleButtonGroup, ToggleButton, Divider, Stack } from '@mui/material';

const PricingNotebookLm = () => {
  const [billing, setBilling] = useState('monthly');

  const handleBillingChange = (_, newBilling) => {
    if (newBilling) setBilling(newBilling);
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to top right, #fafafa, #f2f2f2)', py: 6 }}>
      <Typography variant="h3" align="center" fontWeight={600} gutterBottom>
        SuperNotebookLm
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
        Unlock advanced Capabilities
      </Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="center" spacing={4} mt={4}>
        {/* Free Plan */}
        <Paper elevation={3} sx={{ px: 4, py: 5, width: 400, backgroundColor: '#f9f9f9',  borderRadius: '26px' }}>
          <Typography variant="h6" gutterBottom>Basic</Typography>
          <Typography variant="h4" fontWeight={600}>Free</Typography>
          <Divider sx={{ my: 2 }} />
          <Stack spacing={1.5}>
            <Typography> NotebookLM 3 Model</Typography>
            <Typography> Aurora Image Model</Typography>
            <Typography> Context Memory</Typography>
            <Typography> Limited access to Thinking</Typography>
            <Typography> Limited access to DeepSearch</Typography>
            <Typography> Limited access to DeeperSearch</Typography>
          </Stack>
          <Button variant="contained" fullWidth disabled sx={{ mt: 4 , borderRadius: '26px',color:'#aaa9aa'}}>
            Current
          </Button>
        </Paper>

        {/* Paid Plan */}
        <Paper elevation={6} sx={{ px: 4, py: 5, width: 400, backgroundColor: '#f9f9f9',  borderRadius: '26px' }}>
          <Typography variant="h6" gutterBottom>SuperNotebookLm</Typography>
          <Typography variant="h4" fontWeight={600}>$30.00 <Typography variant="body1" component="span">/ {billing}</Typography></Typography>
          {billing === 'yearly' && (
            <Typography variant="body2" color="orange" mt={1}>Get 20% off with yearly</Typography>
          )}
          <ToggleButtonGroup
            value={billing}
            exclusive
            onChange={handleBillingChange}
            size="small"
            sx={{ mt: 2 }}
          >
            <ToggleButton value="monthly">Monthly</ToggleButton>
            <ToggleButton value="yearly">Yearly</ToggleButton>
          </ToggleButtonGroup>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={1.5}>
            <Typography> More Grok 3 — 100 Queries / 2h</Typography>
            <Typography>More Aurora Images — 100 Images / 2h</Typography>
            <Typography> Even Better Memory — 128K Context Window</Typography>
            <Typography> Extended access to Thinking — 30 Queries / 2h</Typography>
            <Typography>Extended access to DeepSearch — 30 Queries / 2h</Typography>
            <Typography> Extended access to DeeperSearch — 10 Queries / 2h</Typography>
          </Stack>

          <Button variant="contained" fullWidth sx={{ mt: 4 , backgroundColor: '#ECECEC',  borderRadius: '26px',color:'#aaa9aa'}}>
            Subscribe Now
          </Button>
        </Paper>
      </Stack>
    </Box>
  );
};

export default PricingNotebookLm;
