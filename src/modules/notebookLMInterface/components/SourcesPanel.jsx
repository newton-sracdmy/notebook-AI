import { useState } from 'react';
import { Paper, Box, IconButton, Typography, Button, Divider } from '@mui/material';
import { Menu, Add, Search, Description } from '@mui/icons-material';
import UploadSourceModal from './UploadSourceModal';

const SourcesPanel = ({ isCollapsed, onToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Paper
      elevation={0}
      sx={{
        width: isCollapsed ? 50 : 350,
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        backgroundColor:"#f9f9f9"
      }}
    >
      <Box
        sx={{
          p: 1,
          backgroundColor: '#f9f9f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          borderBottom: '1px solid #d0d0d0',
        }}
      >
        {!isCollapsed && (
          <Typography variant="subtitle1" fontWeight={600} sx={{ ml: 2 }}>
            Sources
          </Typography>
        )}
        <IconButton size="small" onClick={onToggle} sx={{ p: 0.5 }}>
          <Menu sx={{ fontSize: 20, color: '#757575' }} />
        </IconButton>
      </Box>
       <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '1px' }} />
      {!isCollapsed && (
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
            textAlign: 'center',
          }}
        >
          <Description sx={{ fontSize: 48, color: '#6F6F6F', mb: 2 }} />
          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
            Saved sources will appear here
          </Typography>
          <Typography variant="body2" color="#6F6F6F" sx={{ mb: 3 }}>
            Click Add source above to add PDFs, websites, text, videos, or audio files. Or import a file directly from Google Drive.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
            <Button
              startIcon={<Add />}
              variant="outlined"
              size="small"
              sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', backgroundColor:"#f9f9f9", color:'#aaa9aa'}}
              onClick={handleOpenModal}
            >
              Add
            </Button>
            <Button
              startIcon={<Search />}
              variant="outlined"
              size="small"
              color = "#aaa9aa"
              sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', backgroundColor:"#f9f9f9", color:'#aaa9aa' }}
            >
              Discover
            </Button>
          </Box>
        </Box>
      )}
      <UploadSourceModal open={isModalOpen} onClose={handleCloseModal} />
    </Paper>
  );
};

export default SourcesPanel;