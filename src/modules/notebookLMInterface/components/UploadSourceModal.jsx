import {
  Modal,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
  IconButton,
  Stack,
} from '@mui/material';
import { CloudUpload, Close } from '@mui/icons-material';

const UploadSourceModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="upload-sources-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          width: 800,
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
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2',
                      '&:hover': { backgroundColor: '#bbdefb' },
                    }}
                  >
                    Google Docs
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
                >
                  Copied text
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default UploadSourceModal;
