import React from 'react';
import { Grid } from '@mui/material';
import ProjectColumn from './ProjectColumn';

const ProjectList = ({ columns }) => (
  <Grid container spacing={3}>
    {columns.map((column) => (
      <ProjectColumn key={column.id} column={column} />
    ))}
  </Grid>
);

export default ProjectList;