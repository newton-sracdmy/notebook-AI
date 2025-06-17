import { Box, Container } from '@mui/material';

const MainContent = ({ children }) => (
  <Box
    component="main"
    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
  >
    <Box sx={{ p: 3, flexGrow: 1, backgroundColor: '#fafafa', overflow: 'auto' }}>
      <Container maxWidth="xl">{children}</Container>
    </Box>
  </Box>
);

export default MainContent;