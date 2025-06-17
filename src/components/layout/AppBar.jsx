import {
     AppBar as MuiAppBar, 
     Toolbar, 
     Typography, 
     IconButton, 
     Button, 
     Box 
    } from '@mui/material';
import { Share, 
    MoreHoriz, 
    KeyboardArrowDown 
} from '@mui/icons-material';

const AppBar = ({ title }) => (
  <MuiAppBar
    position="sticky"
    elevation={0}
    sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}
  >
    <Toolbar sx={{ px: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Typography
          variant="h5"
          color="text.primary"
          fontWeight={600}
          sx={{ fontSize: '1.25rem' }}
        >
          {title}
        </Typography>
        <IconButton size="small" sx={{ ml: 1 }}>
          <KeyboardArrowDown sx={{ fontSize: 20, color: '#757575' }} />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Button
          startIcon={<Share sx={{ fontSize: 16 }} />}
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'none',
            fontSize: '0.875rem',
            borderColor: '#d0d0d0',
            color: '#37474f',
            '&:hover': {
              borderColor: '#bdbdbd',
              backgroundColor: 'rgba(0,0,0,0.02)',
            },
          }}
        >
          Share
        </Button>
        <IconButton sx={{ color: '#757575' }}>
          <MoreHoriz sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;