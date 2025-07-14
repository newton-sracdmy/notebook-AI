import { useState } from 'react';
import { 
  Box, 
  AppBar as MuiAppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Avatar,
  Dialog,
  DialogContent,
  Select,
  MenuItem,
  TextField,
  FormControl,
  Alert,
  Menu,
  Divider,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Share, 
  Settings, 
  Close, 
  Lock, 
  Public, 
  ContentCopy,
  HelpOutline,
  Feedback,
  Language,
  DeviceHub,
  Upgrade,
  Apps
} from '@mui/icons-material';

// Mock data
const mockData = {
  notebook: {
    title: "My Research Notebook"
  }
};

const ShareDialog = ({ open, onClose }) => {
  const [shareType, setShareType] = useState('private');
  const [shareUrl] = useState('https://notebookLm.ai/share/de0fcdb6-3fb9-48f2-a1e5-a5...');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    // Handle share logic here
    console.log('Sharing with type:', shareType);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 1
        }
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, color: '#333' }}>
            {shareType === 'private' ? 'Share chat' : 'Chat shared'}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: '#666' }}>
            <Close />
          </IconButton>
        </Box>

        {shareType === 'private' ? (
          // Initial share state
          <>
            <Typography sx={{ color: '#6f6f6f', mb: 3, fontSize: '0.9rem' }}>
              Only messages up until now will be shared
            </Typography>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                p: 2, 
                border: '1px solid #e0e0e0', 
                borderRadius: 2,
                backgroundColor: '#f9f9f9'
              }}>
                <Lock sx={{ mr: 2, color: '#666', fontSize: 20 }} />
                <Typography sx={{ color: '#6f6f6f', fontWeight: 500 }}>
                  Private (only you have access)
                </Typography>
              </Box>
            </FormControl>

            <Alert 
              severity="info" 
              sx={{ 
                mb: 3, 
                backgroundColor: '#f3f4f6', 
                border: 'none',
                '& .MuiAlert-icon': { color: '#6b7280' }
              }}
            >
              <Typography sx={{ fontSize: '0.85rem', color: '#6F6F6F' }}>
                Don't share personal information or third-party content without permission, 
                and see our <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Usage Policy</span>.
              </Typography>
            </Alert>

            <Button
              variant="contained"
              onClick={() => setShareType('public')}
              sx={{
                backgroundColor: '#c0c0c0',
                color: 'white',
                textTransform: 'none',
                py: 1.5,
                px: 4,
                borderRadius: 2,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#555'
                }
              }}
            >
              Share
            </Button>
          </>
        ) : (
          // Shared state
          <>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <Select
                value="public"
                sx={{ 
                  borderRadius: 2,
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    py: 2
                  }
                }}
              >
                <MenuItem value="public">
                  <Box sx={{ display: 'flex', alignItems: 'center' ,color:'#6f6f6f'}}>
                    <Public sx={{ mr: 2, fontSize: 20,  }} />
                    Public (anyone on the web can view)
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              value={shareUrl}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <IconButton edge="end" sx={{ mr: 1 }}>
                    <Box sx={{ fontSize: 14, color: '#f9f9f9' }}>↗</Box>
                  </IconButton>
                ),
                sx: {
                  borderRadius: 2,
                  backgroundColor: '#f9f9f9'
                }
              }}
              sx={{ mb: 3 }}
            />

            <Alert 
              severity="info" 
              sx={{ 
                mb: 3, 
                backgroundColor: '#f3f4f6', 
                border: 'none',
                '& .MuiAlert-icon': { color: '#6b7280' }
              }}
            >
              <Typography sx={{ fontSize: '0.85rem', color: '#374151' }}>
                Don't share personal information or third-party content without permission, 
                and see our <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Usage Policy</span>.
              </Typography>
            </Alert>

            <Button
              variant="contained"
              startIcon={<ContentCopy />}
              onClick={handleCopyLink}
              sx={{
                backgroundColor: '#333',
                color: 'white',
                textTransform: 'none',
                py: 1.5,
                px: 4,
                borderRadius: 2,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#555'
                }
              }}
            >
              {copied ? 'Copied!' : 'Copy link'}
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const SettingsMenu = ({ anchorEl, open, onClose }) => {
  const handleMenuItemClick = (action) => {
    console.log('Settings action:', action);
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 220,
          borderRadius: 2,
          mt: 1,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e0e0e0'
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={() => handleMenuItemClick('help')} sx={{ py: 1.5 }}>
        <ListItemIcon sx={{ minWidth: 36 }}>
          <HelpOutline sx={{ fontSize: 20, color: '#666' }} />
        </ListItemIcon>
        <ListItemText 
          primary="NotebookLM Help" 
          primaryTypographyProps={{ fontSize: '0.9rem', color: '#333' }}
        />
      </MenuItem>
      
      <MenuItem onClick={() => handleMenuItemClick('feedback')} sx={{ py: 1.5 }}>
        <ListItemIcon sx={{ minWidth: 36 }}>
          <Feedback sx={{ fontSize: 20, color: '#666' }} />
        </ListItemIcon>
        <ListItemText 
          primary="Send feedback" 
          primaryTypographyProps={{ fontSize: '0.9rem', color: '#333' }}
        />
      </MenuItem>
      
      <Divider sx={{ my: 0.5 }} />
      
      <MenuItem onClick={() => handleMenuItemClick('language')} sx={{ py: 1.5 }}>
        <ListItemIcon sx={{ minWidth: 36 }}>
          <Language sx={{ fontSize: 20, color: '#666' }} />
        </ListItemIcon>
        <ListItemText 
          primary="Output Language" 
          primaryTypographyProps={{ fontSize: '0.9rem', color: '#333' }}
        />
      </MenuItem>
      
      <MenuItem onClick={() => handleMenuItemClick('device')} sx={{ py: 1.5 }}>
        <ListItemIcon sx={{ minWidth: 36 }}>
          <DeviceHub sx={{ fontSize: 20, color: '#666' }} />
        </ListItemIcon>
        <ListItemText 
          primary="Device" 
          primaryTypographyProps={{ fontSize: '0.9rem', color: '#333' }}
        />
        <Typography sx={{ fontSize: '0.8rem', color: '#999', ml: 'auto' }}>
          ▶
        </Typography>
      </MenuItem>
      
      <Divider sx={{ my: 0.5 }} />
      
      <MenuItem onClick={() => handleMenuItemClick('upgrade')} sx={{ py: 1.5 }}>
        <ListItemIcon sx={{ minWidth: 36 }}>
          <Upgrade sx={{ fontSize: 20, color: '#666' }} />
        </ListItemIcon>
        <ListItemText 
          primary="Upgrade" 
          primaryTypographyProps={{ fontSize: '0.9rem', color: '#333' }}
        />
      </MenuItem>
    </Menu>
  );
};

const AppBar = ({ isMobile }) => {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const settingsOpen = Boolean(settingsAnchorEl);

  const handleShareClick = () => {
    setShareDialogOpen(true);
  };

  const handleShareDialogClose = () => {
    setShareDialogOpen(false);
  };

  const handleSettingsClick = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  return (
    <>
      <MuiAppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: '#ECECEC',
        }}
      >
        <Toolbar sx={{ px: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: '#6f6f6f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <Typography sx={{ color: '#ffffff', fontSize: '14px', fontWeight: 'bold' }}>
                N
              </Typography>
            </Box>
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight={500}
              sx={{ fontSize: '1.1rem' }}
            >
              {mockData.notebook.title}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                startIcon={<Share sx={{ fontSize: 18 }} />}
                variant="outlined"
                size="small"
                onClick={handleShareClick}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  borderColor: '#d0d0d0',
                  color: '#37474f',
                }}
              >
                Share
              </Button>
              <IconButton 
                sx={{ color: '#757575' }}
                onClick={handleSettingsClick}
              >
                <Settings sx={{ fontSize: 20 }} />
              </IconButton>
              <Avatar sx={{ width: 32, height: 32, ml: 1 }}>
                <Typography sx={{ fontSize: '12px' }}>U</Typography>
              </Avatar>
            </Box>
          )}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton sx={{ color: '#757575' }} onClick={handleShareClick}>
                <Share sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton 
                sx={{ color: '#757575' }}
                onClick={handleSettingsClick}
              >
                <Settings sx={{ fontSize: 20 }} />
              </IconButton>
              <Avatar sx={{ width: 28, height: 28 }}>
                <Typography sx={{ fontSize: '10px' }}>U</Typography>
              </Avatar>
            </Box>
          )}
        </Toolbar>
      </MuiAppBar>

      <ShareDialog 
        open={shareDialogOpen} 
        onClose={handleShareDialogClose} 
      />

      <SettingsMenu
        anchorEl={settingsAnchorEl}
        open={settingsOpen}
        onClose={handleSettingsClose}
      />
    </>
  );
};

export default AppBar;