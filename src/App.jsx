// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotebookLMUI from './modules/notebookLMUI/NotebookLMUI';
import NotebookLMInterface from './modules/notebookLMInterface/NotebookLMInterface';
import AuthUI from './modules/login/AuthUI';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<NotebookLMUI />} />
      <Route path="/notebook" element={<NotebookLMInterface />} />
      <Route path="/login" element = {< AuthUI />} />
    </Routes>
  </Router>
);

export default App;