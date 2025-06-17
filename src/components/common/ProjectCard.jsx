import { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        mb: 1.5,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        border: '1px solid #e0e0e0',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transform: 'translateY(-1px)',
          borderColor: '#bdbdbd',
        },
      }}
      elevation={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Typography
          variant="body2"
          sx={{
            color: '#37474f',
            fontSize: '0.875rem',
            lineHeight: 1.4,
          }}
        >
          {item}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;