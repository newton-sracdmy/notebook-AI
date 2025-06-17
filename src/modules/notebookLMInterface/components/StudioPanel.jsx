import { 
    Paper, 
    Box, 
    Typography, 
    Button, 
    Card, 
    IconButton 
} from '@mui/material';
import { VolumeUp, Description, Info } from '@mui/icons-material';
import mockData from '../data/mockData';

const StudioPanel = () => (
  <Paper
    elevation={0}
    sx={{
      width: 350,
      borderLeft: '1px solid #e0e0e0',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0' }}>
      <Typography variant="h6" fontWeight={600}>
        Studio
      </Typography>
    </Box>
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Audio Overview
          </Typography>
          <IconButton size="small">
            <Info sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
        <Card sx={{ p: 2, backgroundColor: '#e3f2fd', border: '1px solid #bbdefb' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <VolumeUp sx={{ fontSize: 16, color: '#1976d2', mr: 1 }} />
            <Typography variant="body2" color="#1976d2">
              Create an Audio Overview in more languages!
            </Typography>
          </Box>
          <Button
            variant="text"
            size="small"
            sx={{ textTransform: 'none', p: 0, fontSize: '0.875rem' }}
          >
            Learn more
          </Button>
        </Card>
        <Card sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Description sx={{ fontSize: 20, color: '#757575', mr: 2 }} />
            <Box>
              <Typography variant="subtitle2" fontWeight={600}>
                {mockData.notebook.deepDive.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {mockData.notebook.deepDive.subtitle}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <Button variant="outlined" size="small" sx={{ textTransform: 'none', flex: 1 }}>
              Customize
            </Button>
            <Button variant="contained" size="small" sx={{ textTransform: 'none', flex: 1 }}>
              Generate
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  </Paper>
);

export default StudioPanel;