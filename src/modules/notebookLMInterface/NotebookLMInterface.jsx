import { useState } from 'react';
import { Box, Tabs, Tab, Divider, CssBaseline, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '../../components/layout/AppBar';
import SourcesPanel from './components/SourcesPanel';
import ChatPanel from './components/ChatPanel';
import StudioPanel from './components/StudioPanel';
import theme from '../../styles/theme';
import { useParams } from 'react-router-dom';

const NotebookLMInterface = () => {
  const [chatInput, setChatInput] = useState('');
  const [isSourcesCollapsed, setIsSourcesCollapsed] = useState(false);
  const [isStudioCollapsed, setIsStudioCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadingFileName, setUploadingFileName] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');
  
  const { id } = useParams();
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

  const handleUploadStart = (fileName) => {
    setUploadLoading(true);
    setUploadingFileName(fileName);
    setUploadError('');
    setUploadSuccess(false);
    
    if (isMobile) {
      setActiveTab(1);
    }
  };

  const handleUploadComplete = (sourceData, error) => {
    setUploadLoading(false);
    setUploadingFileName('');
    
    if (error) {
      setUploadError(error);
      setUploadSuccess(false);
    } else if (sourceData) {
      setUploadSuccess(true);
      setUploadError('');
      console.log('Upload successful:', sourceData);
    }
  };

  const renderMobileContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <SourcesPanel 
            isMobile={true} 
            notebookId={id}
            onUploadStart={handleUploadStart}
            onUploadComplete={handleUploadComplete}
          />
        );
      case 1:
        return (
          <ChatPanel 
            chatInput={chatInput} 
            setChatInput={setChatInput} 
            handleSendMessage={handleSendMessage} 
            isMobile={true} 
            notebookId={id}
            uploadLoading={uploadLoading}
            uploadingFileName={uploadingFileName}
            uploadSuccess={uploadSuccess}
            uploadError={uploadError}
            onUploadStart={handleUploadStart}
            onUploadComplete={handleUploadComplete}
          />
        );
      case 2:
        return <StudioPanel isMobile={true} />;
      default:
        return (
          <ChatPanel 
            chatInput={chatInput} 
            setChatInput={setChatInput} 
            handleSendMessage={handleSendMessage} 
            isMobile={true} 
            notebookId={id}
            uploadLoading={uploadLoading}
            uploadingFileName={uploadingFileName}
            uploadSuccess={uploadSuccess}
            uploadError={uploadError}
            onUploadStart={handleUploadStart}
            onUploadComplete={handleUploadComplete}
          />
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden', 
        position: 'fixed', 
        width: '100%',
        top: 0,
        left: 0,
      }}>
        <Box sx={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 1100,
          flexShrink: 0, 
        }}>
          <AppBar isMobile={isMobile} />
        </Box>
        {isMobile ? (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            flexGrow: 1,
            overflow: 'hidden', 
          }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{
                borderBottom: '1px solid #e0e0e0',
                backgroundColor: '#f9f9f9',
                flexShrink: 0,
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
            <Box sx={{ 
              flexGrow: 1, 
              overflow: 'hidden',
              minHeight: 0,
            }}>
              {renderMobileContent()}
            </Box>
          </Box>
        ) : (
          <Box sx={{ 
            display: 'flex', 
            flexGrow: 1,
            overflow: 'hidden',
            minHeight: 0,
          }}>
            <SourcesPanel
              isCollapsed={isSourcesCollapsed}
              onToggle={() => setIsSourcesCollapsed(!isSourcesCollapsed)}
              isMobile={false}
              notebookId={id}
              onUploadStart={handleUploadStart}
              onUploadComplete={handleUploadComplete}
            />
            <Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0' }} />
            <ChatPanel
              chatInput={chatInput}
              setChatInput={setChatInput}
              handleSendMessage={handleSendMessage}
              isMobile={false}
              notebookId={id}
              uploadLoading={uploadLoading}
              uploadingFileName={uploadingFileName}
              uploadSuccess={uploadSuccess}
              uploadError={uploadError}
              onUploadStart={handleUploadStart}
              onUploadComplete={handleUploadComplete}
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