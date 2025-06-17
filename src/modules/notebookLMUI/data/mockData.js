// src/features/notebookLMUI/data/mockData.js
const mockData = {
  projects: [
    {
      id: 1,
      name: 'Side Hustle',
      active: true,
    },
  ],
  columns: [
    {
      id: 'ideas',
      title: 'Ideas',
      color: '#2196F3',
      icon: 'Lightbulb',
      items: ['Design Moodboard', 'Product Ideas', 'Feature Ideas', 'Research Findings'],
    },
    {
      id: 'features',
      title: 'Features / Work in Progress',
      color: '#FF9800',
      icon: 'Build',
      items: ['API Design', 'Hi-Fi Prototypes', 'Edge Case Designs'],
    },
    {
      id: 'done',
      title: 'Done',
      color: '#4CAF50',
      icon: 'CheckCircle',
      items: ['Information Architecture', 'Code Convention', 'Competitor Analysis', 'Wireframes'],
    },
    {
      id: 'goals',
      title: 'Goals',
      color: '#424242',
      icon: 'Flag',
      items: ['MVP', 'Launch Plans'],
    },
  ],
};

export default mockData;