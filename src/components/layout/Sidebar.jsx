import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Description, Share, Settings, PersonAdd } from '@mui/icons-material';
import SidebarButton from '../common/SidebarButton';
import { NoteAdd, CreateNewFolder } from '@mui/icons-material';

const Sidebar = ({ onNewProjectClick }) => {
  const drawerWidth = 280;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid #e0e0e0',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} sx={{ color: '#37474f' }}>
          Projects
        </Typography>
      </Box>
      <List sx={{ px: 2 }}>
        {['Drafts', 'Shared With Me'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 1,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {index === 0 ? (
                  <Description sx={{ fontSize: 20, color: '#757575' }} />
                ) : (
                  <Share sx={{ fontSize: 20, color: '#757575' }} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  color: '#37474f',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List sx={{ px: 2 }}>
        {['Settings', 'Invite Members'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 1,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {index === 0 ? (
                  <Settings sx={{ fontSize: 20, color: '#757575' }} />
                ) : (
                  <PersonAdd sx={{ fontSize: 20, color: '#757575' }} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  color: '#37474f',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mx: 2, my: 2 }} />
      <Box sx={{ p: 2 }}>
        <SidebarButton startIcon={<NoteAdd sx={{ fontSize: 18 }} />}>
          New Draft
        </SidebarButton>
        <SidebarButton
          startIcon={<CreateNewFolder sx={{ fontSize: 18 }} />}
          onClick={onNewProjectClick}
        >
          New Project
        </SidebarButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;