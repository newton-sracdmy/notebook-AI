import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  TextField,
  Avatar,
  Box,
} from '@mui/material';
import BookIcon from '@mui/icons-material/MenuBook';

const EditNotebookDialog = ({ open, handleClose, notebook, onSave }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (notebook) {
      setTitle(notebook.title || '');
    }
  }, [notebook]);

 const handleSave = () => {

  if (title.trim() && notebook?.id) { 
    console.log('About to call onSave with:', notebook.id, { title: title.trim() });
    onSave(notebook.id, { title: title.trim() }); 
    handleClose();
  }
};

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" py={4}>
        <Avatar sx={{ width: 80, height: 80, bgcolor: '#4A4A9E' }}>
          <BookIcon fontSize="large" />
        </Avatar>
        <Box width="80%" mt={2}>
          <TextField
            fullWidth
            label="Notebook Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            required
            autoFocus
          />
        </Box>
      </Box>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button 
          variant="contained" 
          onClick={handleSave}
          disabled={!title.trim()}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditNotebookDialog;