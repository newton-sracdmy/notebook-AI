import { Paper, Box, Typography, Grid, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import ProjectCard from '../../../components/common/ProjectCard';

const ProjectColumn = ({ column }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        minHeight: 450,
        p: 2.5,
        backgroundColor: '#f8f9fa',
        border: '1px solid #e0e0e0',
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: column.color,
            mr: 1.5,
          }}
        />
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{ color: '#37474f', fontSize: '0.95rem' }}
        >
          {column.title}
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        {column.items.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </Box>
      <Button
        startIcon={<Add sx={{ fontSize: 16 }} />}
        sx={{
          mt: 'auto',
          color: '#757575',
          textTransform: 'none',
          fontSize: '0.875rem',
          fontWeight: 400,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.04)',
          },
        }}
        fullWidth
      >
        Add Page
      </Button>
    </Paper>
  </Grid>
);

export default ProjectColumn;