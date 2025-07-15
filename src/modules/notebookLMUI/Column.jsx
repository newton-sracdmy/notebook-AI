import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { MoreVert, Edit, Delete } from '@mui/icons-material';

const getDotColor = (title) => {
  switch (title) {
    case 'Ideas': return '#42a5f5';
    case 'Features / Work in Progress': return '#ffb74d';
    case 'Done': return '#66bb6a';
    case 'Goals': return '#212121';
    default: return '#bdbdbd';
  }
};

const Column = ({ title, sourceCount, createdAt, id, onDelete, onEdit }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  
  const handleEdit = () => {
  handleMenuClose();
  onEdit && onEdit({ id, title, sourceCount, createdAt });
};

  const handleDelete = () => {
    setOpenDeleteDialog(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = () => {
    onDelete(id);
    setOpenDeleteDialog(false);
  };


  return (
    <Paper
      elevation={0}
      sx={{
        background: '#fff',
        border: '1px solid rgb(255, 255, 255)',
        borderRadius: '20px',
        p: 2,
        width: { xs: '100%', md: 225 },
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-1px 2px 44px -15px rgba(0, 0, 0, 0.3)',
        position: 'relative',
      }}
    >
      {/* 3-dot menu */}
      <IconButton
        onClick={handleMenuOpen}
        size="small"
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <MoreVert fontSize="small" />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
       <MenuItem onClick={handleEdit}>
          <Edit fontSize="small" sx={{ mr: 1 }} /> Edit Title
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <Delete fontSize="small" sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>

      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: getDotColor(title),
          }}
        />
          <Typography fontWeight={600} fontSize="16px" color="#6F6F6F">
            {title}
          </Typography>
       
      </Box>

      <Paper
        elevation={0}
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          py: 1.2,
          px: 1.5,
          fontSize: '13px',
          lineHeight: 1.4,
          color: '#2f3437',
          mb: 1,
          backgroundColor: '#fff',
          boxShadow: '-1px 2px 44px -15px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            borderColor: '#bdbdbd',
          },
        }}
      >
        <Typography fontWeight={600} fontSize="14px" color="#2f3437">
          Source Count: {sourceCount}
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          py: 1.2,
          px: 1.5,
          fontSize: '13px',
          lineHeight: 1.4,
          color: '#2f3437',
          mb: 1,
          backgroundColor: '#fff',
          boxShadow: '-1px 2px 44px -15px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            borderColor: '#bdbdbd',
          },
        }}
      >
        <Typography fontSize="12px" color="#757575">
          Created: {new Date(createdAt).toLocaleDateString()}
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          mt: 1,
          py: 1,
          textAlign: 'center',
          border: '1px solid #e0e0e0',
          borderRadius: '6px',
          backgroundColor: '#f9f9f9',
          fontSize: '13px',
          color: '#9e9e9e',
          cursor: 'pointer',
          boxShadow: '-1px 2px 27px -15px rgba(0,0,0,0.75)',
          '&:hover': {
            backgroundColor: '#f4f4f4',
            textDecoration: 'none',
          },
        }}
      >
        Add Page
      </Paper>

      {/* Delete Dialog */}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this notebook?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Column;
