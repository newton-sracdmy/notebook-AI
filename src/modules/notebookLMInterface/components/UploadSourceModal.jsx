
import { useRef, useState } from 'react';
import { Modal, Card, CardContent, Typography, Button, Box, Grid, IconButton, Stack, TextField, useTheme, useMediaQuery } from '@mui/material';
import { Close } from '@mui/icons-material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const UploadSourceModal = ({ open, onClose }) => {
  const [subModal, setSubModal] = useState(null);
  const fileInputRefDocs = useRef(null);
  const fileInputRefSlides = useRef(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(`Uploaded ${type} file content:`, e.target.result);
        alert(`Uploaded ${type} file: ${file.name}`);
      };
      reader.readAsText(file); 
    }
  };

  const handleGoogleDocsClick = () => {
    fileInputRefDocs.current.click();
  };

  const handleGoogleSlidesClick = () => {
    fileInputRefSlides.current.click();
  };

  const handleWebsiteClick = () => setSubModal('website');
  const handleYouTubeClick = () => setSubModal('youtube');
  const handleCopiedTextClick = () => setSubModal('copiedText');

  const handleSubModalClose = () => setSubModal(null);

  const handleInsert = (type, value) => {
    console.log(`Inserted ${type}:`, value);
    alert(`Inserted ${type}: ${value}`);
    handleSubModalClose();
  };

  return (
    <Modal
      open={open || !!subModal}
      onClose={onClose}
      aria-labelledby="upload-sources-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: isMobile ? 1 : 2,
      }}
    >
      {!subModal ? (
        <Card
          sx={{
            width: isMobile ? '100%' : isTablet ? '90%' : 850,
            maxWidth: '100vw',
            maxHeight: '90vh',
            overflow: 'auto',
            p: isMobile ? 2 : 4,
            borderRadius: 2,
            backgroundColor: '#ffffff',
            position: 'relative',
            mx: isMobile ? 1 : 0,
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
          >
            <Close sx={{ fontSize: 20, color: '#757575' }} />
          </IconButton>

          <CardContent sx={{ p: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pr: 4 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#6f6f6f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 1,
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  N
                </Typography>
              </Box>
              <Typography
                variant={isMobile ? 'body1' : 'h6'}
                fontWeight={600}
                sx={{ color: '#040404' }}
              >
                NotebookLM
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 4, pr: isMobile ? 0 : 4 }}
            >
              Sources let NotebookLM base its responses on the information
              that matters most to you. (Examples: marketing plans, course
              reading, research notes, meeting transcripts, sales documents,
              etc.)
            </Typography>

            <Box
              sx={{
                border: '2px dashed #e0e0e0',
                borderRadius: 2,
                p: isMobile ? 3 : 5,
                textAlign: 'center',
                mb: 4,
              }}
            >
              <FileUploadIcon sx={{ fontSize: 40, color: '#6F6F6F', mb: 3 }} />
              <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ mb: 1 }}>
                Upload sources
              </Typography>
              <Typography variant={isMobile ? 'caption' : 'body2'} sx={{ mb: 1 }}>
                Drag & drop or choose file to upload
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Supported file types: PDF, .txt, Markdown, Audio (e.g. .mp3)
              </Typography>
            </Box>

            <Grid container spacing={isMobile ? 2 : 3} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    p: isMobile ? 1.5 : 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center',
                    backgroundColor: '#ececec',
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2, fontSize: isMobile ? '12px' : '14px' }}>
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: isMobile ? 20 : 24,
                        height: isMobile ? 20 : 24,
                        borderRadius: '50%',
                        backgroundColor: '#f9f9f9',
                        mr: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ fontSize: isMobile ? '12px' : '14px', color: '#6F6F6F' }}
                      >
                        Δ
                      </Box>
                    </Box>
                    Google Drive
                  </Typography>
                  <Stack 
                    direction={isMobile ? 'column' : 'row'} 
                    spacing={1} 
                    justifyContent="center"
                    alignItems="center"
                  >
                    <input
                      type="file"
                      ref={fileInputRefDocs}
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileUpload(e, 'Google Docs')}
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <Button
                      variant="contained"
                      size={isMobile ? 'small' : 'small'}
                      sx={{
                        textTransform: 'none',
                        backgroundColor: '#f9f9f9',
                        color: '#aaa9aa',
                        '&:hover': { backgroundColor: '#f9f9f9' },
                        fontSize: isMobile ? '11px' : '13px',
                        minWidth: isMobile ? '100px' : 'auto',
                        width: isMobile ? '100%' : 'auto',
                      }}
                      onClick={handleGoogleDocsClick}
                    >
                      Google Docs
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRefSlides}
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileUpload(e, 'Google Slides')}
                      accept=".ppt,.pptx,.pdf"
                    />
                    <Button
                      variant="contained"
                      size={isMobile ? 'small' : 'small'}
                      sx={{
                        textTransform: 'none',
                        backgroundColor: '#f9f9f9',
                        color: '#aaa9aa',
                        '&:hover': { backgroundColor: '#f9f9f9' },
                        fontSize: isMobile ? '11px' : '13px',
                        minWidth: isMobile ? '100px' : 'auto',
                        width: isMobile ? '100%' : 'auto',
                      }}
                      onClick={handleGoogleSlidesClick}
                    >
                      Google Slides
                    </Button>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    p: isMobile ? 1.5 : 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center',
                    backgroundColor: '#ececec',
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2, fontSize: isMobile ? '12px' : '14px' }}>
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: isMobile ? 20 : 24,
                        height: isMobile ? 20 : 24,
                        borderRadius: '50%',
                        backgroundColor: '#f9f9f9',
                        mr: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ fontSize: isMobile ? '12px' : '14px', color: '#aaa9aa' }}
                      >
                        ↪
                      </Box>
                    </Box>
                    Link
                  </Typography>
                  <Stack 
                    direction={isMobile ? 'column' : 'row'} 
                    spacing={1} 
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      variant="contained"
                      size={isMobile ? 'small' : 'small'}
                      sx={{
                        textTransform: 'none',
                        backgroundColor: '#f9f9f9',
                        color: '#aaa9aa',
                        '&:hover': { backgroundColor: '#f9f9f9' },
                        fontSize: isMobile ? '11px' : '13px',
                        minWidth: isMobile ? '100px' : 'auto',
                        width: isMobile ? '100%' : 'auto',
                      }}
                      onClick={handleWebsiteClick}
                    >
                      Website
                    </Button>
                    <Button
                      variant="contained"
                      size={isMobile ? 'small' : 'small'}
                      sx={{
                        textTransform: 'none',
                        backgroundColor: '#f9f9f9',
                        color: '#aaa9aa',
                        '&:hover': { backgroundColor: '#f9f9f9' },
                        fontSize: isMobile ? '11px' : '13px',
                        minWidth: isMobile ? '100px' : 'auto',
                        width: isMobile ? '100%' : 'auto',
                      }}
                      onClick={handleYouTubeClick}
                    >
                      YouTube
                    </Button>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    p: isMobile ? 1.5 : 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center',
                    backgroundColor: '#ececec',
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2, fontSize: isMobile ? '12px' : '14px' }}>
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: isMobile ? 20 : 24,
                        height: isMobile ? 20 : 24,
                        borderRadius: '50%',
                        backgroundColor: '#f9f9f9',
                        mr: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ fontSize: isMobile ? '12px' : '14px', color: '#aaa9aa' }}
                      >
                        ▤
                      </Box>
                    </Box>
                    Paste text
                  </Typography>
                  <Button
                    variant="contained"
                    size={isMobile ? 'small' : 'small'}
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#f9f9f9',
                      color: '#aaa9aa',
                      '&:hover': { backgroundColor: '#bbdefb' },
                      fontSize: isMobile ? '11px' : '13px',
                      minWidth: isMobile ? '100px' : 'auto',
                      width: isMobile ? '100%' : 'auto',
                    }}
                    onClick={handleCopiedTextClick}
                  >
                    Copied text
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{ 
            width: isMobile ? '95%' : isTablet ? '80%' : 600, 
            maxWidth: '100vw',
            maxHeight: '90vh',
            overflow: 'auto',
            p: isMobile ? 2 : 4, 
            borderRadius: 2, 
            backgroundColor: 'white', 
            position: 'relative',
            mx: isMobile ? 1 : 0,
          }}
        >
          <IconButton
            onClick={handleSubModalClose}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
          >
            <Close sx={{ fontSize: 20, color: '#757575' }} />
          </IconButton>
          <CardContent sx={{ p: 0 }}>
            {subModal === 'website' && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pr: 4 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#6f6f6f',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1,
                    }}
                  >
                    <Typography
                      sx={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}
                    >
                      N
                    </Typography>
                  </Box>
                  <Typography variant={isMobile ? 'body1' : 'h6'} fontWeight={600} sx={{ color: '#040404' }}>
                    NotebookLM
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Paste in Web URLs below to upload as sources in NotebookLM.
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Paste URLs*"
                  sx={{ mb: 2 }}
                  size={isMobile ? 'small' : 'medium'}
                />
                <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" sx={{ mb: 2 }}>
                  Notes:
                </Typography>
                <Box sx={{ mb: 2, pl: 2 }}>
                  <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" component="div">
                    • To add multiple URLs, separate with a space or new line.
                  </Typography>
                  <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" component="div">
                    • Only the visible text on the website will be imported.
                  </Typography>
                  <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" component="div">
                    • Paid articles are not supported.
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth={isMobile}
                  sx={{ 
                    textTransform: 'none', 
                    backgroundColor: '#e0e0e0', 
                    color: '#757575',
                    fontSize: isMobile ? '14px' : '16px',
                  }}
                  onClick={() => handleInsert('Website URLs', document.querySelector('input').value)}
                >
                  Insert
                </Button>
              </>
            )}
            {subModal === 'youtube' && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pr: 4 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#6f6f6f',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1,
                    }}
                  >
                    <Typography
                      sx={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}
                    >
                      N
                    </Typography>
                  </Box>
                  <Typography variant={isMobile ? 'body1' : 'h6'} fontWeight={600} sx={{ color: '#040404' }}>
                    NotebookLM
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Paste in a YouTube URL below to upload as a source in NotebookLM
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Paste YouTube URL*"
                  sx={{ mb: 2 }}
                  size={isMobile ? 'small' : 'medium'}
                />
                <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" sx={{ mb: 2 }}>
                  Notes:
                </Typography>
                <Box sx={{ mb: 2, pl: 2 }}>
                  <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" component="div">
                    • Only the text transcript will be imported at this moment.
                  </Typography>
                  <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" component="div">
                    • Only public YouTube videos are supported.
                  </Typography>
                  <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" component="div">
                    • Recently uploaded videos may not be available to import.
                  </Typography>
                  <Typography variant={isMobile ? 'caption' : 'body2'} color="text.secondary" component="div">
                    • If upload fails, learn more for common reasons.
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth={isMobile}
                  sx={{ 
                    textTransform: 'none', 
                    backgroundColor: '#e0e0e0', 
                    color: '#757575',
                    fontSize: isMobile ? '14px' : '16px',
                  }}
                  onClick={() => handleInsert('YouTube URL', document.querySelector('input').value)}
                >
                  Insert
                </Button>
              </>
            )}
            {subModal === 'copiedText' && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pr: 4 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#6f6f6f',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1,
                    }}
                  >
                    <Typography
                      sx={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}
                    >
                      N
                    </Typography>
                  </Box>
                  <Typography variant={isMobile ? 'body1' : 'h6'} fontWeight={600} sx={{ color: '#040404' }}>
                    NotebookLM
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Paste your copied text below to upload as a source in NotebookLM
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Paste text here*"
                  multiline
                  rows={isMobile ? 3 : 4}
                  sx={{ mb: 2 }}
                  size={isMobile ? 'small' : 'medium'}
                />
                <Button
                  variant="contained"
                  fullWidth={isMobile}
                  sx={{ 
                    textTransform: 'none', 
                    backgroundColor: '#e0e0e0', 
                    color: '#757575',
                    fontSize: isMobile ? '14px' : '16px',
                  }}
                  onClick={() => handleInsert('Copied Text', document.querySelector('textarea').value)}
                >
                  Insert
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </Modal>
  );
};

export default UploadSourceModal;