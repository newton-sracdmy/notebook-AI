import { Button } from '@mui/material';

const SidebarButton = ({ startIcon, children, onClick, sx }) => (
  <Button
    startIcon={startIcon}
    variant="outlined"
    fullWidth
    onClick={onClick}
    sx={{
      mb: 1.5,
      textTransform: 'none',
      fontSize: '0.875rem',
      borderColor: '#d0d0d0',
      color: '#37474f',
      '&:hover': {
        borderColor: '#bdbdbd',
        backgroundColor: 'rgba(0,0,0,0.02)',
      },
      ...sx,
    }}
  >
    {children}
  </Button>
);

export default SidebarButton;