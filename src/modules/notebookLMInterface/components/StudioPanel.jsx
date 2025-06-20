import { useState } from 'react';
import { Paper, Box, IconButton, Typography, Button, Card, Divider } from '@mui/material';
import { Menu, VolumeUp, Description, Info } from '@mui/icons-material';
import UploadSourceModal from './UploadSourceModal';
import mockData from '../data/mockData';

const StudioPanel = ({ isCollapsed, onToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Paper
      elevation={0}
      sx={{
        width: isCollapsed ? 50 : 350,
        borderLeft: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
      }}
    >
      <Box
        sx={{
          p: 1,
          backgroundColor: '#e3f2fd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          borderBottom: '1px solid #bbdefb',
        }}
      >
        {!isCollapsed && (
          <Typography variant="subtitle1" fontWeight={600} sx={{ ml: 2 }}>
            Studio
          </Typography>
        )}
        <IconButton size="small" onClick={onToggle} sx={{ p: 0.5 }}>
          <Menu sx={{ fontSize: 20, color: '#757575' }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '1px' }} />
      {!isCollapsed && (
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Audio Overview
              </Typography>
              <IconButton size="small">
                <Info sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
            <Card sx={{ p: 2, backgroundColor: '#e3f2fd', border: '1px solid #bbdefb' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <VolumeUp sx={{ fontSize: 16, color: '#1976d2', mr: 1 }} />
                <Typography variant="body2" color="#1976d2">
                  Create an Audio Overview in more languages!
                </Typography>
              </Box>
              <Button variant="text" size="small" sx={{ textTransform: 'none', p: 0, fontSize: '0.875rem' }}>
                Learn more
              </Button>
            </Card>
            <Card sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Description sx={{ fontSize: 20, color: '#757575', mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {mockData.notebook.deepDive.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {mockData.notebook.deepDive.subtitle}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Button variant="outlined" size="small" sx={{ textTransform: 'none', flex: 1 }}>
                  Customize
                </Button>
                <Button variant="contained" size="small" sx={{ textTransform: 'none', flex: 1 }}>
                  Generate
                </Button>
              </Box>
            </Card>
          </Box>
        </Box>
      )}
      <UploadSourceModal open={isModalOpen} onClose={handleCloseModal} />
    </Paper>
  );
};

export default StudioPanel;