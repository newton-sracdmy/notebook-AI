import React, { useState } from 'react';
import {
  Box, Button, IconButton, Typography, Divider, CircularProgress
} from '@mui/material';
import {
  VolumeUp, Info, Description, Menu, Mic,
  ThumbUp, ThumbDown, MoreVert, FileDownload,
  Pause, PlayArrow, PanTool, Refresh
} from '@mui/icons-material';

// Mock data
const mockData = {
  notebook: {
    deepDive: {
      title: "Deep Dive conversation",
      subtitle: "Two hosts"
    }
  }
};

const StudioPanel = ({ isCollapsed = false, onToggle = () => {}, isMobile = false }) => {
  const [currentView, setCurrentView] = useState('initial');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true); // Enable wave effect by default

  const handleGenerate = () => {
    setCurrentView('generating');
    setTimeout(() => {
      setCurrentView('generated');
    }, 3000);
  };

  const handleInteractiveMode = () => {
    setCurrentView('interactive');
  };

  const handlePlayPause = () => {
     setIsPlaying(!isPlaying);
     setIsSpeaking(isPlaying);
  };

  const renderGeneratingView = () => (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, border: '1px solid #e0e0e0' }}>
        <CircularProgress size={40} sx={{ mb: 2 }} />
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
          Generating conversation based on 1 source...
        </Typography>
        <Typography variant="body2" color="#6F6F6F">
          This may take a few minutes. No need to stick around!
        </Typography>
      </Box>
    </Box>
  );

  const renderGeneratedView = () => (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" fontWeight={600}>
          Untitled notebook
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small"><ThumbUp sx={{ fontSize: 18 }} /></IconButton>
          <IconButton size="small"><ThumbDown sx={{ fontSize: 18 }} /></IconButton>
          <IconButton size="small"><MoreVert sx={{ fontSize: 18 }} /></IconButton>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
        <IconButton
          onClick={handlePlayPause}
          sx={{
            backgroundColor: '#f9f9f9',
            color: '#808080',
            mr: 2,
            '&:hover': { backgroundColor: '#f9f9f9' }
          }}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" fontWeight={600}>
            00:00 / 12:22 • English
          </Typography>
        </Box>
      </Box>

      <Button
        variant="outlined"
        fullWidth
        onClick={handleInteractiveMode}
        sx={{
          textTransform: 'none',
          borderColor: '#d0d0d0',
          color: '#6F6F6F',
          mb: 2
        }}
      >
        Interactive mode
        <Box component="span" sx={{
          backgroundColor: '#ececec',
          color: '#040404',
          px: 1, py: 0.5,
          borderRadius: 1,
          fontSize: '0.75rem',
          ml: 1
        }}>BETA</Box>
      </Button>
    </Box>
  );

  const renderInteractiveView = () => (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Typography variant="h6" fontWeight={600}>System Design Discussion</Typography>
          <Typography variant="body2" color="#6F6F6F">2 hosts</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small"><Info sx={{ fontSize: 18 }} /></IconButton>
          <IconButton size="small"><FileDownload sx={{ fontSize: 18 }} /></IconButton>
        </Box>
      </Box>

      <Box sx={{
        height: 200,
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3,
        position: 'relative'
      }}>
        {isSpeaking && (
          <>
            <Box sx={{ position: 'absolute', width: '80px', height: '80px', border: '3px solid #E5E4E2', borderRadius: '50%', opacity: 0.8, animation: 'waveRipple 2s infinite ease-out' }} />
            <Box sx={{ position: 'absolute', width: '80px', height: '80px', border: '3px solid #E5E4E2', borderRadius: '50%', opacity: 0.6, animation: 'waveRipple 2s infinite ease-out 0.3s' }} />
            <Box sx={{ position: 'absolute', width: '80px', height: '80px', border: '3px solid #E5E4E2', borderRadius: '50%', opacity: 0.4, animation: 'waveRipple 2s infinite ease-out 0.6s' }} />
            <Box sx={{ position: 'absolute', width: '80px', height: '80px', border: '2px solid #E5E4E2', borderRadius: '50%', opacity: 0.3, animation: 'waveRipple 2s infinite ease-out 0.9s' }} />
            <Box sx={{ position: 'absolute', width: '120px', height: '120px', border: '2px solid #E5E4E2', borderRadius: '50%', opacity: 0.2, animation: 'waveRipple 3s infinite ease-out' }} />
            <Box sx={{ position: 'absolute', width: '160px', height: '160px', border: '1px solid #E5E4E2', borderRadius: '50%', opacity: 0.15, animation: 'waveRipple 3.5s infinite ease-out 0.5s' }} />
            <Box sx={{ 
              position: 'absolute',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(128, 128, 128, 0.1) 0%, rgba(128, 128, 128, 0.02) 70%, transparent 100%)',
              borderRadius: '50%',
              animation: 'backgroundWave 4s infinite ease-in-out'
            }} />
          </>
        )}
        <Box sx={{
          fontSize: '60px',
          color: '#C0C0C0',
          transition: 'all 0.3s ease',
          zIndex: 10,
          position: 'relative',
          transform: 'scale(1.1)',
          animation: 'micPulse 1.5s infinite ease-in-out',
        }}>
          <Mic sx={{ fontSize: 60 }} />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
       <IconButton 
          size="small" 
          onClick={handlePlayPause}
          sx={{ 
            backgroundColor: '#ececec',
            color: '#808080',
            '&:hover': {
              backgroundColor: '#C0C0C0'
            }
          }}
        >
          {isPlaying ?  <PlayArrow />: <Pause /> }
        </IconButton>

        <Button variant="contained" sx={{ borderRadius: 20, textTransform: 'none', px: 3, backgroundColor: '#808080', color: 'white' }}>
          <PanTool sx={{ fontSize: 18, mr: 1 }} /> Join
        </Button>
        <IconButton size="small"><Refresh sx={{ fontSize: 18 }} /></IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="text" startIcon={<ThumbUp />} sx={{ textTransform: 'none', color: '#6F6F6F' }}>Good discussion</Button>
        <Button variant="text" startIcon={<ThumbDown />} sx={{ textTransform: 'none', color: '#6F6F6F' }}>Bad discussion</Button>
      </Box>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes waveRipple {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(2); opacity: 0.3; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes micPulse {
          0%, 100% { transform: scale(1.1); }
          50% { transform: scale(1.2); }
        }
        @keyframes backgroundWave {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.3); opacity: 0.05; }
        }
      `}</style>
    </Box>
  );

  const renderInitialView = () => (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="subtitle1" color="#6F6F6F" fontWeight={600}>Audio Overview</Typography>
          <IconButton size="small"><Info sx={{ fontSize: 18 }} /></IconButton>
        </Box>
        <Box sx={{ p: 2, backgroundColor: '#ECECEC', borderRadius: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <VolumeUp sx={{ fontSize: 16, color: '#6F6F6F', mr: 1 }} />
            <Typography variant="body2" color="#6F6F6F">Create an Audio Overview in more languages!</Typography>
          </Box>
          <Button variant="text" size="small" sx={{ textTransform: 'none', p: 0, fontSize: '0.875rem', color: "#6F6F6F" }}>Learn more</Button>
        </Box>
        <Box sx={{ p: 2, backgroundColor: '#ECECEC', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Description sx={{ fontSize: 20, color: '#6F6F6F', mr: 2 }} />
            <Box>
              <Typography variant="subtitle2" color="#6F6F6F" fontWeight={600}>{mockData.notebook.deepDive.title}</Typography>
              <Typography variant="caption" color="#6F6F6F">{mockData.notebook.deepDive.subtitle}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <Button variant="outlined" size="small" sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', borderRadius:"26px", backgroundColor: '#f9f9f9', color: '#6F6F6F' }}>Customize</Button>
            <Button variant="contained" size="small" onClick={handleGenerate} sx={{ textTransform: 'none', flex: 1, borderRadius:"26px", backgroundColor: '#C0C0C0', color: '#6F6F6F', '&:hover': { backgroundColor: '#ececec' } }}>Generate</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
        {currentView === 'initial' && renderInitialView()}
        {currentView === 'generating' && renderGeneratingView()}
        {currentView === 'generated' && renderGeneratedView()}
        {currentView === 'interactive' && renderInteractiveView()}
        <Box sx={{ p: 2, backgroundColor: 'white', borderTop: '1px solid #e0e0e0', mt: 'auto' }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
            NotebookLM can be inaccurate; please double check its responses.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ width: isCollapsed ? 50 : 350, borderLeft: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', transition: 'width 0.3s ease', backgroundColor: '#f9f9f9' }}>
      <Box sx={{ p: 1, backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between', borderBottom: '1px solid #d0d0d0' }}>
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
        <>
          {currentView === 'initial' && renderInitialView()}
          {currentView === 'generating' && renderGeneratingView()}
          {currentView === 'generated' && renderGeneratedView()}
          {currentView === 'interactive' && renderInteractiveView()}
        </>
      )}
    </Box>
  );
};

export default StudioPanel;
