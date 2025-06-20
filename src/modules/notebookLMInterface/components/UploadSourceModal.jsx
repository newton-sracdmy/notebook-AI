import React, { useRef, useState } from 'react';
import { Modal, Card, CardContent, Typography, Button, Box, Grid, IconButton, Stack, TextField } from '@mui/material';
import { CloudUpload, Close } from '@mui/icons-material';

const UploadSourceModal = ({ open, onClose }) => {
  const [subModal, setSubModal] = useState(null);
  const fileInputRefDocs = useRef(null);
  const fileInputRefSlides = useRef(null);

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(`Uploaded ${type} file content:`, e.target.result);
        alert(`Uploaded ${type} file: ${file.name}`);
      };
      reader.readAsText(file); // Adjust for other file types if needed
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
      }}
    >
      {!subModal ? (
        <Card
          sx={{
            width: 807,
            p: 4,
            borderRadius: 2,
            backgroundColor: 'white',
            position: 'relative',
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <Close sx={{ fontSize: 20, color: '#757575' }} />
          </IconButton>

          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#1976d2',
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
                variant="h6"
                fontWeight={600}
                sx={{ color: '#1976d2' }}
              >
                NotebookLM
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 4 }}
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
                p: 5,
                textAlign: 'center',
                mb: 4,
              }}
            >
              <CloudUpload sx={{ fontSize: 40, color: '#1976d2', mb: 2 }} />
              <Typography variant="body1" sx={{ mb: 1 }}>
                Upload sources
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Drag & drop or choose file to upload
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Supported file types: PDF, .txt, Markdown, Audio (e.g. .mp3)
              </Typography>
            </Box>

            <Grid container spacing={3} sx={{ mb: 2 }}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    p: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: '#e3f2fd',
                        mr: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ fontSize: '14px', color: '#1976d2' }}
                      >
                        Δ
                      </Box>
                    </Box>
                    Google Drive
                  </Typography>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <input
                      type="file"
                      ref={fileInputRefDocs}
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileUpload(e, 'Google Docs')}
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: 'none',
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        '&:hover': { backgroundColor: '#bbdefb' },
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
                      size="small"
                      sx={{
                        textTransform: 'none',
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        '&:hover': { backgroundColor: '#bbdefb' },
                      }}
                      onClick={handleGoogleSlidesClick}
                    >
                      Google Slides
                    </Button>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box
                  sx={{
                    p: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: '#e3f2fd',
                        mr: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ fontSize: '14px', color: '#1976d2' }}
                      >
                        ↪
                      </Box>
                    </Box>
                    Link
                  </Typography>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: 'none',
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        '&:hover': { backgroundColor: '#bbdefb' },
                      }}
                      onClick={handleWebsiteClick}
                    >
                      Website
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: 'none',
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        '&:hover': { backgroundColor: '#bbdefb' },
                      }}
                      onClick={handleYouTubeClick}
                    >
                      YouTube
                    </Button>
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box
                  sx={{
                    p: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center',
                    minWidth: 223,
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: '#e3f2fd',
                        mr: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ fontSize: '14px', color: '#1976d2' }}
                      >
                        ▤
                      </Box>
                    </Box>
                    Paste text
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2',
                      '&:hover': { backgroundColor: '#bbdefb' },
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
          sx={{ width: 600, p: 4, borderRadius: 2, backgroundColor: 'white', position: 'relative' }}
        >
          <IconButton
            onClick={handleSubModalClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <Close sx={{ fontSize: 20, color: '#757575' }} />
          </IconButton>
          <CardContent>
            {subModal === 'website' && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#1976d2',
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
                  <Typography variant="h6" fontWeight={600} sx={{ color: '#1976d2' }}>
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
                />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Notes:
                  <ul>
                    <li>To add multiple URLs, separate with a space or new line.</li>
                    <li>Only the visible text on the website will be imported.</li>
                    <li>Paid articles are not supported.</li>
                  </ul>
                </Typography>
                <Button
                  variant="contained"
                  sx={{ textTransform: 'none', backgroundColor: '#e0e0e0', color: '#757575' }}
                  onClick={() => handleInsert('Website URLs', document.querySelector('input').value)}
                >
                  Insert
                </Button>
              </>
            )}
            {subModal === 'youtube' && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#1976d2',
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
                  <Typography variant="h6" fontWeight={600} sx={{ color: '#1976d2' }}>
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
                />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Notes:
                  <ul>
                    <li>Only the text transcript will be imported at this moment.</li>
                    <li>Only public YouTube videos are supported.</li>
                    <li>Recently uploaded videos may not be available to import.</li>
                    <li>If upload fails, learn more for common reasons.</li>
                  </ul>
                </Typography>
                <Button
                  variant="contained"
                  sx={{ textTransform: 'none', backgroundColor: '#e0e0e0', color: '#757575' }}
                  onClick={() => handleInsert('YouTube URL', document.querySelector('input').value)}
                >
                  Insert
                </Button>
              </>
            )}
            {subModal === 'copiedText' && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#1976d2',
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
                  <Typography variant="h6" fontWeight={600} sx={{ color: '#1976d2' }}>
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
                  rows={4}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  sx={{ textTransform: 'none', backgroundColor: '#e0e0e0', color: '#757575' }}
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