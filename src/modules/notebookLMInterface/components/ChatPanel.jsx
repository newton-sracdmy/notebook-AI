import { Box, Typography, TextField, IconButton, Button, Divider } from '@mui/material';
import { CloudUpload, Send } from '@mui/icons-material';
import { useState } from 'react';
import UploadSourceModal from './UploadSourceModal';

const ChatPanel = ({
  chatInput,
  setChatInput,
  handleUploadSource,
  handleSendMessage
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
    >
      <Box sx={{ p: 0.75, borderBottom: '1px solid #e0e0e0', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h6" fontWeight={600} sx={{ ml: 2 }}>
          Chat
        </Typography>
      </Box>
      <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '1px' }} />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <CloudUpload sx={{ fontSize: 60, color:'#6F6F6F', mb: 3 }} />
        <Typography variant="h5" color='#6F6F6F'  fontWeight={600} sx={{ mb: 2 }}>
          Add a source to get started
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          sx={{
            textTransform: 'none',
            px: 3,
            py: 1.5,
            borderRadius: 2,
            backgroundColor: '#f9f9f9',
            color: "#aaa9aa",
          }}
        >
          Upload a source
        </Button>
      </Box>
      <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '1px' }} />
      <Box
        sx={{
          p: 3,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Upload a source to get started"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            variant="outlined"
            size="small"
            disabled
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                backgroundColor: '#f5f5f5',
              },
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
              0 sources
            </Typography>
            <IconButton
              onClick={handleSendMessage}
              disabled={!chatInput.trim()}
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                '&:hover': { backgroundColor: '#1565c0' },
                '&:disabled': { backgroundColor: '#e0e0e0', color: '#bdbdbd' },
              }}
            >
              <Send sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1, display: 'block', textAlign: 'center' }}
        >
          NotebookLM can be inaccurate; please double check its responses.
        </Typography>
      </Box>
      <UploadSourceModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default ChatPanel;