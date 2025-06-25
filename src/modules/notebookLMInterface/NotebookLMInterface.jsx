import  { useState } from 'react';
import { Box, Tabs, Tab, Divider, CssBaseline, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '../../components/layout/AppBar';
import SourcesPanel from './components/SourcesPanel';
import ChatPanel from './components/ChatPanel';
import StudioPanel from './components/StudioPanel';
import theme from '../../styles/theme';

const NotebookLMInterface = () => {
  const [chatInput, setChatInput] = useState('');
  const [isSourcesCollapsed, setIsSourcesCollapsed] = useState(false);
  const [isStudioCollapsed, setIsStudioCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(1); 
  
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      console.log('Send message:', chatInput);
      setChatInput('');
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderMobileContent = () => {
    switch (activeTab) {
      case 0:
        return <SourcesPanel isMobile={true} />;
      case 1:
        return <ChatPanel chatInput={chatInput} setChatInput={setChatInput} handleSendMessage={handleSendMessage} isMobile={true} />;
      case 2:
        return <StudioPanel isMobile={true} />;
      default:
        return <ChatPanel chatInput={chatInput} setChatInput={setChatInput} handleSendMessage={handleSendMessage} isMobile={true} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
     <CssBaseline />
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar isMobile={isMobile} />
      {isMobile ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              borderBottom: '1px solid #e0e0e0',
              backgroundColor: '#f9f9f9',
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
              },
              '& .Mui-selected': {
                color: '#1976d2',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            <Tab label="Sources" />
            <Tab label="Chat" />
            <Tab label="Studio" />
          </Tabs>
          {renderMobileContent()}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <SourcesPanel
            isCollapsed={isSourcesCollapsed}
            onToggle={() => setIsSourcesCollapsed(!isSourcesCollapsed)}
            isMobile={false}
          />
          <Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0' }} />
          <ChatPanel
            chatInput={chatInput}
            setChatInput={setChatInput}
            handleSendMessage={handleSendMessage}
            isMobile={false}
          />
          <Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0' }} />
          <StudioPanel
            isCollapsed={isStudioCollapsed}
            onToggle={() => setIsStudioCollapsed(!isStudioCollapsed)}
            isMobile={false}
          />
        </Box>
      )}
    </Box>
    </ThemeProvider>
  );
};

export default NotebookLMInterface;