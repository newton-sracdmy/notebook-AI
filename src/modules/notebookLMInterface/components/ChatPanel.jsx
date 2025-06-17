import { Box, Typography, TextField, IconButton, Button } from '@mui/material';
import { CloudUpload, Send } from '@mui/icons-material';

const ChatPanel = ({
     chatInput, 
     setChatInput, 
     handleUploadSource, 
     handleSendMessage 
    }) => (
  <Box
    sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fafafa',
    }}
  >
    <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0', backgroundColor: 'white' }}>
      <Typography variant="h6" fontWeight={600}>
        Chat
      </Typography>
    </Box>
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
      <CloudUpload sx={{ fontSize: 60, color: '#1976d2', mb: 3 }} />
      <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
        Add a source to get started
      </Typography>
      <Button
        variant="contained"
        onClick={handleUploadSource}
        sx={{
          textTransform: 'none',
          px: 3,
          py: 1.5,
          borderRadius: 2,
        }}
      >
        Upload a source
      </Button>
    </Box>
    <Box 
     sx={{ 
        p: 3, 
        backgroundColor: 'white', 
        borderTop: '1px solid #e0e0e0' 
     }}>
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
  </Box>
);

export default ChatPanel;