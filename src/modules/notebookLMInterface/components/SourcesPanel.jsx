import { Box, Button, IconButton, Typography, Divider, Checkbox, Menu, MenuItem } from '@mui/material';
import { Add, Search, Description, Menu as MenuIcon, PictureAsPdf, InsertDriveFile, Link, VideoFile, AudioFile, MoreVert, Edit, Delete } from '@mui/icons-material';
import UploadSourceModal from './UploadSourceModal';
import { useState, useEffect, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSource, getSourceList } from '../actions';

// Memoized SourceItem component to prevent unnecessary re-renders
const SourceItem = memo(({ source, isSelected, onSourceClick, getFileIcon, getFileTypeLabel }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRename = () => {
    console.log('Rename source:', source._id);
    // TODO: Implement rename functionality
    handleMenuClose();
  };

  const handleRemove = () => {
    console.log('Remove source:', source._id);
    // TODO: Implement remove functionality
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 2,
        px: 2,
        backgroundColor: isSelected ? '#e3f2fd' : '#fff',
        borderRadius: 2,
        border: isSelected ? '2px solid #1976d2' : '1px solid #e0e0e0',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative',
        '&:hover': { 
          backgroundColor: isSelected ? '#e3f2fd' : '#f5f5f5',
          transform: 'translateY(-1px)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      }}
      onClick={() => onSourceClick(source._id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {getFileIcon(source.fileName)}
      </Box>
      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#333',
            fontWeight: isSelected ? 600 : 400,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: '14px',
          }}
        >
          {source.fileName}
        </Typography>
        <Typography 
          variant="caption" 
          color="text.secondary"
          sx={{ fontSize: '12px' }}
        >
          {getFileTypeLabel(source.fileName)}
        </Typography>
      </Box>
      
      {/* Three dot menu - shows on hover */}
      {isHovered && (
        <IconButton
          size="small"
          onClick={handleMenuClick}
          sx={{ 
            p: 0.5, 
            ml: 1,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          <MoreVert sx={{ fontSize: 16 }} />
        </IconButton>
      )}
      
      <Checkbox 
        size="small" 
        checked={isSelected} 
        sx={{ p: 0.5, ml: 1 }}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        onClick={(e) => e.stopPropagation()}
        PaperProps={{
          sx: {
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            border: '1px solid #e0e0e0',
          }
        }}
      >
        <MenuItem onClick={handleRename} sx={{ fontSize: '14px', py: 1 }}>
          <Edit sx={{ fontSize: 16, mr: 1 }} />
          Rename source
        </MenuItem>
        <MenuItem onClick={handleRemove} sx={{ fontSize: '14px', py: 1, color: '#d32f2f' }}>
          <Delete sx={{ fontSize: 16, mr: 1 }} />
          Remove source
        </MenuItem>
      </Menu>
    </Box>
  );
});

const SourcesPanel = ({ isCollapsed, onToggle, isMobile, notebookId, onUploadStart, onUploadComplete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSourceId, setSelectedSourceId] = useState(null);
  const dispatch = useDispatch();
  const { sourceList, loading, error } = useSelector((state) => state.notebookReducer);

  useEffect(() => {
    if (notebookId) {
      dispatch(getSourceList(notebookId));
    }
  }, [dispatch, notebookId]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Memoized source click handler to prevent unnecessary re-renders
  const handleSourceClick = useCallback((sourceId) => {
    setSelectedSourceId(sourceId);
    dispatch(getSource(sourceId));
  }, [dispatch]);

  const handleUploadStart = (fileName) => {
    // Close modal and pass to parent
    setIsModalOpen(false);
    if (onUploadStart) {
      onUploadStart(fileName);
    }
  };

  const handleUploadComplete = (sourceData, error) => {
    // Only refresh source list when upload completes successfully
    if (sourceData && notebookId) {
      dispatch(getSourceList(notebookId));
    }
    
    // Pass to parent
    if (onUploadComplete) {
      onUploadComplete(sourceData, error);
    }
  };

  // Memoized function to get appropriate icon based on file type
  const getFileIcon = useCallback((fileName) => {
    const extension = fileName?.toLowerCase().split('.').pop();
    switch (extension) {
      case 'pdf':
        return <PictureAsPdf sx={{ fontSize: 20, color: '#d32f2f' }} />;
      case 'mp4':
      case 'avi':
      case 'mov':
      case 'mkv':
        return <VideoFile sx={{ fontSize: 20, color: '#1976d2' }} />;
      case 'mp3':
      case 'wav':
      case 'flac':
        return <AudioFile sx={{ fontSize: 20, color: '#388e3c' }} />;
      case 'doc':
      case 'docx':
      case 'txt':
        return <InsertDriveFile sx={{ fontSize: 20, color: '#1976d2' }} />;
      default:
        return <InsertDriveFile sx={{ fontSize: 20, color: '#616161' }} />;
    }
  }, []);

  // Memoized function to get file type label
  const getFileTypeLabel = useCallback((fileName) => {
    const extension = fileName?.toLowerCase().split('.').pop();
    return extension?.toUpperCase() || 'FILE';
  }, []);

  if (isMobile) {
    return (
      <Box sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: '#f9f9f9',
        height: '100%', // Fixed height
        overflow: 'hidden', // Prevent container scrolling
        position: 'relative', // For absolute positioning
      }}>
        {/* Action Buttons - Fixed */}
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex', 
          gap: 1, 
          p: 2,
          backgroundColor: '#fff',
          borderBottom: '1px solid #e0e0e0',
          zIndex: 10,
        }}>
          <Button
            startIcon={<Add />}
            variant="outlined"
            size="small"
            sx={{ 
              textTransform: 'none', 
              flex: 1, 
              borderColor: '#d0d0d0', 
              backgroundColor: '#f9f9f9', 
              color: '#1976d2',
              '&:hover': { backgroundColor: '#e3f2fd', borderColor: '#1976d2' }
            }}
            onClick={handleOpenModal}
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
              backgroundColor: '#f9f9f9', 
              color: '#aaa9aa' 
            }}
          >
            Discover
          </Button>
        </Box>

        {/* Sources List - Scrollable */}
        <Box
          sx={{
            position: 'absolute',
            top: '73px', // Height of action buttons
            bottom: '60px', // Height of footer
            left: 0,
            right: 0,
            overflowY: 'auto', // Only this section scrolls
            overflowX: 'hidden',
            // Custom scrollbar styling
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#c1c1c1',
              borderRadius: '10px',
              '&:hover': {
                background: '#a1a1a1',
              },
            },
          }}
        >
          {loading && (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography>Loading sources...</Typography>
            </Box>
          )}
          
          {error && (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
          
          {!loading && !error && sourceList.length === 0 && (
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              p: 3, 
              textAlign: 'center',
              height: '100%',
            }}>
              <Description sx={{ fontSize: 64, color: '#e0e0e0', mb: 2 }} />
              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1, color: '#9e9e9e' }}>
                No sources yet
              </Typography>
              <Typography variant="body2" color="#bdbdbd" sx={{ mb: 3, maxWidth: 250 }}>
                Add PDFs, websites, text, videos, or audio files to get started with NotebookLM
              </Typography>
            </Box>
          )}
          
          {!loading && !error && sourceList.length > 0 && (
            <Box sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#666' }}>
                  {sourceList.length} {sourceList.length === 1 ? 'Source' : 'Sources'}
                </Typography>
                <Checkbox size="small" sx={{ p: 0.5 }} />
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {sourceList.map((source) => (
                  <SourceItem
                    key={source._id}
                    source={source}
                    isSelected={selectedSourceId === source._id}
                    onSourceClick={handleSourceClick}
                    getFileIcon={getFileIcon}
                    getFileTypeLabel={getFileTypeLabel}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {/* Footer - Fixed */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            backgroundColor: 'white',
            borderTop: '1px solid #e0e0e0',
            zIndex: 10,
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
        
        <UploadSourceModal 
          open={isModalOpen} 
          onClose={handleCloseModal} 
          notebookId={notebookId}
          onUploadStart={handleUploadStart}
          onUploadComplete={handleUploadComplete}
        />
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
        backgroundColor: '#f9f9f9',
        height: '100%', // Fixed height
        overflow: 'hidden', // Prevent container scrolling
        position: 'relative', // For absolute positioning
      }}
    >
      {/* Header - Fixed */}
      <Box
        sx={{
          p: 1,
          backgroundColor: '#f9f9f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          borderBottom: '1px solid #d0d0d0',
          flexShrink: 0, // Don't shrink
        }}
      >
        {!isCollapsed && (
          <Typography variant="subtitle1" fontWeight={600} sx={{ ml: 2 }}>
            Sources
          </Typography>
        )}
        <IconButton size="small" onClick={onToggle} sx={{ p: 0.5 }}>
          <MenuIcon sx={{ fontSize: 20, color: '#757575' }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: '#e0e0e0', borderWidth: '1px' }} />
      
      {!isCollapsed && (
        <>
          <Box sx={{ 
            position: 'absolute',
            top: '49px',
            left: 0,
            right: 0,
            display: 'flex', 
            gap: 1, 
            p: 2,
            backgroundColor: '#fff',
            borderBottom: '1px solid #e0e0e0',
            zIndex: 10,
          }}>
            <Button
              startIcon={<Add />}
              variant="outlined"
              size="small"
              sx={{ 
                textTransform: 'none', 
                flex: 1, 
                borderColor: '#d0d0d0', 
                backgroundColor: '#f9f9f9', 
                color: '#1976d2',
                '&:hover': { backgroundColor: '#e3f2fd', borderColor: '#1976d2' }
              }}
              onClick={handleOpenModal}
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
                backgroundColor: '#f9f9f9', 
                color: '#aaa9aa' 
              }}
            >
              Discover
            </Button>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: '122px',
              bottom: 0,
              left: 0,
              right: 0,
              overflowY: 'auto',
              overflowX: 'hidden',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#c1c1c1',
                borderRadius: '10px',
                '&:hover': {
                  background: '#a1a1a1',
                },
              },
            }}
          >
            {loading && (
              <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography>Loading sources...</Typography>
              </Box>
            )}
            
            {error && (
              <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography color="error">{error}</Typography>
              </Box>
            )}
            
            {!loading && !error && sourceList.length === 0 && (
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                p: 3, 
                textAlign: 'center',
                height: '100%',
              }}>
                <Description sx={{ fontSize: 64, color: '#e0e0e0', mb: 2 }} />
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1, color: '#9e9e9e' }}>
                  No sources yet
                </Typography>
                <Typography variant="body2" color="#bdbdbd" sx={{ mb: 3 }}>
                  Add PDFs, websites, text, videos, or audio files to get started
                </Typography>
              </Box>
            )}
            
            {!loading && !error && sourceList.length > 0 && (
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#666' }}>
                    {sourceList.length} {sourceList.length === 1 ? 'Source' : 'Sources'}
                  </Typography>
                  <Checkbox size="small" sx={{ p: 0.5 }} />
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {sourceList.map((source) => (
                    <SourceItem
                      key={source._id}
                      source={source}
                      isSelected={selectedSourceId === source._id}
                      onSourceClick={handleSourceClick}
                      getFileIcon={getFileIcon}
                      getFileTypeLabel={getFileTypeLabel}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </>
      )}
      <UploadSourceModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
        notebookId={notebookId}
        onUploadStart={handleUploadStart}
        onUploadComplete={handleUploadComplete}
      />
    </Box>
  );
};

export default SourcesPanel;