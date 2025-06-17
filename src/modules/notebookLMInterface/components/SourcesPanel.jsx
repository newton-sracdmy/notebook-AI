import { Paper, Box, Typography, Button } from '@mui/material';
import { Add, Search, Description } from '@mui/icons-material';

const SourcesPanel = () => (
  <Paper
    elevation={0}
    sx={{
      width: 350,
      borderRight: '1px solid #e0e0e0',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0' }}>
      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
        Sources
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          startIcon={<Add />}
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'none',
            flex: 1,
            borderColor: '#d0d0d0',
          }}
        >
          Add
        </Button>
        <Button
          startIcon={<Search />}
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'none',
            flex: 1,
            borderColor: '#d0d0d0',
          }}
        >
          Discover
        </Button>
      </Box>
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
      <Description sx={{ fontSize: 48, color: '#bdbdbd', mb: 2 }} />
      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
        Saved sources will appear here
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Click Add source above to add PDFs, websites, text, videos, or audio files. Or import a file directly from Google Drive.
      </Typography>
    </Box>
  </Paper>
);

export default SourcesPanel;