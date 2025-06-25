import { useState } from 'react';
import { Box, AppBar as MuiAppBar, Toolbar, Typography, Button, IconButton, Avatar, Divider } from '@mui/material';
import { Share, Settings } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../styles/theme';
import SourcesPanel from './components/SourcesPanel';
import ChatPanel from './components/ChatPanel';
import StudioPanel from './components/StudioPanel';
import mockData from './data/mockData';

const NotebookLMInterface = () => {
  const [chatInput, setChatInput] = useState('');
  const [sources, setSources] = useState(mockData.notebook.sources);
  const [isSourcesCollapsed, setIsSourcesCollapsed] = useState(false);
  const [isStudioCollapsed, setIsStudioCollapsed] = useState(false);

  const handleUploadSource = () => {
    console.log('Upload source clicked');
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      console.log('Send message:', chatInput);
      setChatInput('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <MuiAppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: '#ECECEC',
            borderBottom: '1px solid #e0e0e0',
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
          </Toolbar>
        </MuiAppBar>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <SourcesPanel
            isCollapsed={isSourcesCollapsed}
            onToggle={() => setIsSourcesCollapsed(!isSourcesCollapsed)}
          />
          <Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0' }} />
          <ChatPanel
            chatInput={chatInput}
            setChatInput={setChatInput}
            handleUploadSource={handleUploadSource}
            handleSendMessage={handleSendMessage}
            sx={{
              flexGrow: isSourcesCollapsed && isStudioCollapsed ? 1 : 0,
              width: isSourcesCollapsed && isStudioCollapsed ? '100%' : 'auto',
            }}
          />
          <Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0' }} />
          <StudioPanel
            isCollapsed={isStudioCollapsed}
            onToggle={() => setIsStudioCollapsed(!isStudioCollapsed)}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NotebookLMInterface;