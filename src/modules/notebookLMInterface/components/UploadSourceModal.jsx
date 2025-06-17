import { Modal, Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const UploadSourceModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="upload-sources-modal"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Card sx={{ width: 500, p: 3, borderRadius: 2, backgroundColor: 'white' }}>
        <CardContent>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
            Upload sources
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Sources let NotebookLM base its responses on the information that matters most to you. (Examples: marketing plans, course reading, research notes, meeting transcripts, sales documents, etc.)
          </Typography>
          <Box sx={{ border: '2px dashed #e0e0e0', borderRadius: 2, p: 4, textAlign: 'center', mb: 3 }}>
            <CloudUpload sx={{ fontSize: 40, color: '#1976d2', mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 1 }}>
              Drag & drop or choose file to upload
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Supported file types: PDF, .txt, Markdown, Audio (e.g. .mp3)
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={4}>
              <Button variant="outlined" fullWidth sx={{ textTransform: 'none' }}>
                Google Drive
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="outlined" fullWidth sx={{ textTransform: 'none' }}>
                Link
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="outlined" fullWidth sx={{ textTransform: 'none' }}>
                Paste text
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Button variant="contained" size="small" sx={{ textTransform: 'none', backgroundColor: '#e3f2fd', color: '#1976d2' }}>
                Google Docs
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" size="small" sx={{ textTransform: 'none', backgroundColor: '#e3f2fd', color: '#1976d2' }}>
                Google Slides
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" size="small" sx={{ textTransform: 'none', backgroundColor: '#e3f2fd', color: '#1976d2' }}>
                Website
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" size="small" sx={{ textTransform: 'none', backgroundColor: '#e3f2fd', color: '#1976d2' }}>
                YouTube
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" size="small" sx={{ textTransform: 'none', backgroundColor: '#e3f2fd', color: '#1976d2' }}>
                Copied text
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="caption" color="text.secondary">
              Source limit
            </Typography>
            <Typography variant="caption" color="text.secondary">
              0/50
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default UploadSourceModal;