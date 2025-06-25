import React from 'react';
import { Box, AppBar as MuiAppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material';
import { Share, Settings } from '@mui/icons-material';
import mockData from '../../modules/notebookLMInterface/data/mockData';


const AppBar = ({ isMobile }) => {
  return (
    <MuiAppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#ECECEC',
      }}
    >
      <Toolbar sx={{ px: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#6f6f6f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            <Typography sx={{ color: '#ffffff', fontSize: '14px', fontWeight: 'bold' }}>
              N
            </Typography>
          </Box>
          <Typography
            variant="h6"
            color="text.primary"
            fontWeight={500}
            sx={{ fontSize: '1.1rem' }}
          >
            {mockData.notebook.title}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              startIcon={<Share sx={{ fontSize: 18 }} />}
              variant="outlined"
              size="small"
              sx={{
                textTransform: 'none',
                fontSize: '0.875rem',
                borderColor: '#d0d0d0',
                color: '#37474f',
              }}
            >
              Share
            </Button>
            <IconButton sx={{ color: '#757575' }}>
              <Settings sx={{ fontSize: 20 }} />
            </IconButton>
            <Avatar sx={{ width: 32, height: 32, ml: 1 }}>
              <Typography sx={{ fontSize: '12px' }}>U</Typography>
            </Avatar>
          </Box>
        )}
        {isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton sx={{ color: '#757575' }}>
              <Share sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton sx={{ color: '#757575' }}>
              <Settings sx={{ fontSize: 20 }} />
            </IconButton>
            <Avatar sx={{ width: 28, height: 28 }}>
              <Typography sx={{ fontSize: '10px' }}>U</Typography>
            </Avatar>
          </Box>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;