// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotebookLMUI from './modules/notebookLMUI/NotebookLMUI';
import NotebookLMInterface from './modules/notebookLMInterface/NotebookLMInterface';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<NotebookLMUI />} />
      <Route path="/notebook" element={<NotebookLMInterface />} />
    </Routes>
  </Router>
);

export default App;