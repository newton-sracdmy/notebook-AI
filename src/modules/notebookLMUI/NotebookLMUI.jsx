import { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import Sidebar from '../../components/layout/Sidebar';
import AppBar from '../../components/layout/AppBar';
import MainContent from '../../components/layout/MainContent';
import ProjectList from './components/ProjectList';
import mockData from './data/mockData';

const NotebookLMUI = () => {
  const [selectedProject] = useState(mockData.projects[0]);
  const navigate = useNavigate();

  const handleNewProjectClick = () => {
    navigate('/notebook');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar onNewProjectClick={handleNewProjectClick} />
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <AppBar title={selectedProject.name} />
          <MainContent>
            <ProjectList columns={mockData.columns} />
          </MainContent>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NotebookLMUI;