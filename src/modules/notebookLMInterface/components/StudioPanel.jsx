import { Box, Button, IconButton, Typography, Divider } from '@mui/material';
import { VolumeUp, Info, Description, Menu } from '@mui/icons-material';
import mockData from '../data/mockData';

const StudioPanel = ({ isCollapsed, onToggle, isMobile }) => {
  if (isMobile) {
    return (
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle1" color='#6F6F6F' fontWeight={600}>
                Audio Overview
              </Typography>
              <IconButton size="small">
                <Info sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
            <Box sx={{ p: 2, backgroundColor: '#ECECEC', borderRadius: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <VolumeUp sx={{ fontSize: 16, color: '#6F6F6F', mr: 1 }} />
                <Typography variant="body2" color="#6F6F6F">
                  Create an Audio Overview in more languages!
                </Typography>
              </Box>
              <Button variant="text" size="small" sx={{ textTransform: 'none', p: 0, fontSize: '0.875rem', color: "#6F6F6F" }}>
                Learn more
              </Button>
            </Box>
            <Box sx={{ p: 2, backgroundColor: '#ECECEC', borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Description sx={{ fontSize: 20, color: '#6F6F6F', mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2" color='#6F6F6F' fontWeight={600}>
                    {mockData.notebook.deepDive.title}
                  </Typography>
                  <Typography variant="caption" color='#6F6F6F'>
                    {mockData.notebook.deepDive.subtitle}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Button variant="outlined" size="small" sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', backgroundColor: '#ECECEC', color: '#6F6F6F' }}>
                  Customize
                </Button>
                <Button variant="contained" size="small" sx={{ textTransform: 'none', flex: 1, backgroundColor: '#ECECEC', color: '#6F6F6F' }}>
                  Generate
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            backgroundColor: 'white',
            borderTop: '1px solid #e0e0e0',
            mt: 'auto'
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
        borderLeft: '1px solid #e0e0e0',
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
            Studio
          </Typography>
        )}
        <IconButton size="small" onClick={onToggle} sx={{ p: 0.5 }}>
          <Menu sx={{ fontSize: 20, color: '#757575' }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '1px' }} />
      {!isCollapsed && (
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle1" color='#6F6F6F' fontWeight={600}>
                Audio Overview
              </Typography>
              <IconButton size="small">
                <Info sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
            <Box sx={{ p: 2, backgroundColor: '#ECECEC', borderRadius: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <VolumeUp sx={{ fontSize: 16, color: '#6F6F6F', mr: 1 }} />
                <Typography variant="body2" color="#6F6F6F">
                  Create an Audio Overview in more languages!
                </Typography>
              </Box>
              <Button variant="text" size="small" sx={{ textTransform: 'none', p: 0, fontSize: '0.875rem', color: "#6F6F6F" }}>
                Learn more
              </Button>
            </Box>
            <Box sx={{ p: 2, backgroundColor: '#ECECEC', borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Description sx={{ fontSize: 20, color: '#6F6F6F', mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2" color='#6F6F6F' fontWeight={600}>
                    {mockData.notebook.deepDive.title}
                  </Typography>
                  <Typography variant="caption" color='#6F6F6F'>
                    {mockData.notebook.deepDive.subtitle}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Button variant="outlined" size="small" sx={{ textTransform: 'none', flex: 1, borderColor: '#d0d0d0', backgroundColor: '#ECECEC', color: '#6F6F6F' }}>
                  Customize
                </Button>
                <Button variant="contained" size="small" sx={{ textTransform: 'none', flex: 1, backgroundColor: '#ECECEC', color: '#6F6F6F' }}>
                  Generate
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default StudioPanel;