import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotebookLMUI from './modules/notebookLMUI/NotebookLMUI';
import NotebookLMInterface from './modules/notebookLMInterface/NotebookLMInterface';
import AuthUI from './modules/login/SignUpLoginPage';
import theme from './styles/theme';
import { ThemeProvider } from '@emotion/react';
import PricingNotebookLm from './modules/Pricing/PricingNotebookLm';

const App = () => (
<ThemeProvider theme={theme}>
  <Router>
    <Routes>
      <Route path="/" element={<NotebookLMUI />} />
      <Route path="/notebook" element={<NotebookLMInterface />} />
      <Route path="/login" element = {< AuthUI />} />
       <Route path="/pricing" element = {< PricingNotebookLm />} />
    </Routes>
  </Router>
</ThemeProvider>
);

export default App;