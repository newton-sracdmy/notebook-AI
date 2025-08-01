import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  Divider,
  CircularProgress,
  Fade,
  Alert,
  Snackbar,
  Paper,
} from '@mui/material';
import { CloudUpload, Send, CheckCircle } from '@mui/icons-material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadSourceModal from './UploadSourceModal';
import { sendMessageToChatbot } from '../actions';

const ChatMessage = memo(({ entry, index }) => (
  <Box key={index} sx={{ mb: 3 }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
      <Paper
        sx={{
          p: 2,
          maxWidth: '80%',
          backgroundColor: '#ECECEC',
          color: 'white',
          borderRadius: '18px 18px 4px 18px',
        }}
      >
        <Typography variant="body2">
          {entry.question}
        </Typography>
      </Paper>
    </Box>
    
    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Paper
        sx={{
          p: 2,
          maxWidth: '80%',
          backgroundColor: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: '18px 18px 18px 4px',
        }}
      >
        <Typography variant="body2" color="text.primary">
          {entry.answer}
        </Typography>
      </Paper>
    </Box>
  </Box>
));

const ChatPanel = ({
  chatInput,
  setChatInput,
  isMobile,
  notebookId,
  uploadLoading = false,
  uploadingFileName = '',
  uploadSuccess = false,
  uploadError = '',
  onUploadStart,
  onUploadComplete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [localSummary, setLocalSummary] = useState('');
  const [localCurrentSource, setLocalCurrentSource] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [isAsking, setIsAsking] = useState(false);
  const [askError, setAskError] = useState('');
  const chatContainerRef = useRef(null);

  const { summary, currentSource } = useSelector((state) => state.notebookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isAsking]);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  const handleUploadStart = useCallback((fileName) => {
    if (onUploadStart) {
      onUploadStart(fileName);
    }
  }, [onUploadStart]);

  const handleUploadComplete = useCallback((sourceData, error) => {
    if (!error && sourceData) {
      setShowSuccessMessage(true);
      setLocalCurrentSource(sourceData);
      setLocalSummary(sourceData.summary);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }

    if (onUploadComplete) {
      onUploadComplete(sourceData, error);
    }
  }, [onUploadComplete]);

  const handleCloseErrorSnackbar = useCallback(() => {
  
  }, []);

  const displaySource = localCurrentSource || currentSource;
  const displaySummary = localSummary || summary;

  const handleSendMessage = useCallback(async () => {
    if (!chatInput.trim() || !displaySource?._id) return;

    setIsAsking(true);
    setAskError('');

    try {
      const response = await dispatch(
        sendMessageToChatbot({
          question: chatInput,
          sourceId: displaySource._id,
        })
      ).unwrap();

      setChatHistory((prev) => [
        ...prev,
        { question: chatInput, answer: response?.answer || 'No answer received.' },
      ]);

      setChatInput('');
    } catch (err) {
      console.error(err);
      setAskError('Failed to get response from chatbot.');
    } finally {
      setIsAsking(false);
    }
  }, [chatInput, displaySource, dispatch, setChatInput]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  return (
    <Box
      sx={{
        flex: isMobile ? '1 0 100%' : '1 0 33%',
        maxWidth: isMobile ? '100%' : '1000px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '100%', 
        overflow: 'hidden', 
        position: 'relative',
      }}
    >

      <Box
        sx={{
          p: isMobile ? 1 : 0.75,
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#f9f9f9',
          flexShrink: 0,
        }}
      >
        <Typography variant="h6" fontWeight={600} sx={{ ml: 2 }}>
          Chat
        </Typography>
      </Box>

      <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '1px' }} />

      <Box
        ref={chatContainerRef}
        sx={{
          position: 'absolute',
          top: '57px',
          bottom: '120px',
          left: 0,
          right: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          p: 2,
          backgroundColor: '#fafafa',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '10px',
            '&:hover': {
              background: '#a1a1a1',
            },
          },
        }}
      >
        {uploadLoading ? (
          <Fade in={uploadLoading}>
            <Box sx={{ textAlign: 'center', width: '100%', py: 4 }}>
              <CircularProgress size={60} sx={{ mb: 3, color: '#1976d2' }} />
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Processing {uploadingFileName}
              </Typography>
              <Typography variant="body2" color="#6F6F6F">
                Please wait while we analyze your content and generate a summary...
              </Typography>
            </Box>
          </Fade>
        ) : displaySource && displaySummary ? (
          <Box sx={{ width: '100%' }}>
            {uploadSuccess && showSuccessMessage && (
              <Box sx={{ mb: 3, textAlign: 'center' }}>
                <CheckCircle sx={{ fontSize: 40, color: '#4caf50', mb: 1 }} />
                <Typography variant="body2" color="#4caf50" fontWeight={600}>
                  Source uploaded successfully!
                </Typography>
              </Box>
            )}

            <Paper 
              elevation={1} 
              sx={{ 
                p: 3, 
                mb: 3, 
                backgroundColor: '#fff',
                borderRadius: 2,
                border: '1px solid #e3f2fd'
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: '#1976d2' }}>
                📄 {displaySource.fileName}
              </Typography>
              <Typography
                variant="body2"
                color="#6F6F6F"
                sx={{
                  lineHeight: 1.6,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                {displaySummary}
              </Typography>
            </Paper>
            <Box sx={{ mb: 2 }}>
              {chatHistory.map((entry, idx) => (
                <ChatMessage key={idx} entry={entry} index={idx} />
              ))}

              {isAsking && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: '#fff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '18px 18px 18px 4px',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CircularProgress size={16} />
                      <Typography variant="body2" color="text.secondary">
                        NotebookLM is thinking...
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              )}
            </Box>
          </Box>
        ) : (
          <Box sx={{ 
            textAlign: 'center', 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            py: 4
          }}>
            <FileUploadIcon sx={{ fontSize: 80, color: '#e0e0e0', mb: 3 }} />
            <Typography variant="h5" color="#9e9e9e" fontWeight={600} sx={{ mb: 2 }}>
              Add a source to get started
            </Typography>
            <Typography variant="body2" color="#bdbdbd" sx={{ mb: 3, maxWidth: 300 }}>
              Upload documents, paste text, or add web links to start chatting with your content
            </Typography>
            <Button
              variant="contained"
              onClick={handleOpenModal}
              sx={{
                textTransform: 'none',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                backgroundColor: '#1976d2',
                color: 'white',
                fontSize: '16px',
                fontWeight: 600,
                '&:hover': { backgroundColor: '#1565c0' },
              }}
            >
              Upload a source
            </Button>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          zIndex: 10,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2, mb: 1 }}>
          <TextField
            fullWidth
            placeholder={
              displaySource && displaySummary
                ? 'Ask a question about your source...'
                : 'Upload a source to get started'
            }
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={handleKeyPress}
            variant="outlined"
            multiline
            maxRows={4}
            disabled={!displaySource || !displaySummary || uploadLoading}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                backgroundColor: '#f8f9fa',
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&:hover fieldset': {
                  borderColor: '#1976d2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                },
              },
            }}
          />
          <IconButton
            onClick={handleSendMessage}
            disabled={!chatInput.trim() || !displaySource || !displaySummary || uploadLoading || isAsking}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              width: 48,
              height: 48,
              '&:hover': { 
                backgroundColor: '#1565c0',
                transform: 'scale(1.05)',
              },
              '&:disabled': { 
                backgroundColor: '#e0e0e0', 
                color: '#bdbdbd',
                transform: 'none',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <Send sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            {displaySource ? '1 source' : '0 sources'}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            NotebookLM can be inaccurate; please double check its responses.
          </Typography>
        </Box>

        {askError && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {askError}
          </Alert>
        )}
      </Box>

      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={3000}
        onClose={() => setShowSuccessMessage(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowSuccessMessage(false)} severity="success" sx={{ width: '100%' }}>
          Source uploaded and processed successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!uploadError}
        autoHideDuration={5000}
        onClose={handleCloseErrorSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseErrorSnackbar} severity="error" sx={{ width: '100%' }}>
          {uploadError}
        </Alert>
      </Snackbar>

      <UploadSourceModal
        open={isModalOpen}
        onClose={handleCloseModal}
        notebookId={notebookId}
        onUploadStart={handleUploadStart}
        onUploadComplete={handleUploadComplete}
      />
    </Box>
  );
};

export default ChatPanel;