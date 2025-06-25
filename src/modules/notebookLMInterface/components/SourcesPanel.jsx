import { Box, Button, IconButton, Typography, Divider } from '@mui/material';
import { Add, Search, Description, Menu } from '@mui/icons-material';

const SourcesPanel = ({ isCollapsed, onToggle, isMobile }) => {
  if (isMobile) {
    return (
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
        <Box sx={{ display: 'flex', gap: 1, p: 2 }}>
          <Button
            startIcon={<Add />}
            variant="outlined"
            size="small"
            sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', backgroundColor: '#f9f9f9', color: '#aaa9aa' }}
          >
            Add
          </Button>
          <Button
            startIcon={<Search />}
            variant="outlined"
            size="small"
            sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', backgroundColor: '#f9f9f9', color: '#aaa9aa' }}
          >
            Discover
          </Button>
        </Box>
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
        </Box>
        <Box
          sx={{
            p: 2,
            backgroundColor: 'white',
            borderTop: '1px solid #e0e0e0'
          }}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', textAlign: 'center' }}
          >
            NotebookLM can be inaccurate; please double check its responses.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: isCollapsed ? 50 : 350,
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        backgroundColor: '#f9f9f9'
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
              sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', backgroundColor: '#f9f9f9', color: '#aaa9aa' }}
            >
              Add
            </Button>
            <Button
              startIcon={<Search />}
              variant="outlined"
              size="small"
              sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', backgroundColor: '#f9f9f9', color: '#aaa9aa' }}
            >
              Discover
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SourcesPanel;