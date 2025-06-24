import { Box, Typography, Paper, Button, Divider } from '@mui/material';
import { Settings, PersonAdd, MoreHoriz } from '@mui/icons-material'; // Changed to MoreHoriz
import ShareIcon from '@mui/icons-material/Share';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BorderAllIcon from '@mui/icons-material/BorderAll';

const boardData = {
  Ideas: [
    { text: 'Design Moodboard', bold: true },
    { text: 'Product Ideas' },
    { text: 'Feature Ideas' },
    { text: 'Research Findings' }
  ],
  'Features / Work in Progress': [
    { text: 'API Design', bold: true },
    { text: 'Hi-Fi Prototypes' },
    { text: 'Edge Case Designs' }
  ],
  Done: [
    { text: 'Information Architecture' },
    { text: 'Code Convention' },
    { text: 'Competitor Analysis', bold: true },
    { text: 'Wireframes' }
  ],
  Goals: [
    { text: 'MVP' },
    { text: 'Launch Plans', bold: true }
  ]
};

const getDotColor = (title) => {
  switch (title) {
    case 'Ideas': return '#42a5f5';
    case 'Features / Work in Progress': return '#ffb74d';
    case 'Done': return '#66bb6a';
    case 'Goals': return '#212121';
    default: return '#bdbdbd';
  }
};

const WindowControls = () => (
  <Box sx={{ display: 'flex', gap: 1.2, px: 2, pt: 1.5 }}>
    <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#A9A9A9' }} />
    <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#A9A9A9' }} />
    <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#A9A9A9' }} />
  </Box>
);

const Column = ({ title, items }) => (
  <Paper
    elevation={0}
    sx={{
      background: '#fff',
      border: '1px solidrgb(255, 255, 255)',
      borderRadius: '20px',
      p: 2,
      width: 225,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-1px 2px 44px -15px rgba(0, 0, 0, 0.3)',
      alignSelf: 'flex-start',
    }}
  >
    <Box display="flex" alignItems="center" gap={1} mb={1}>
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: getDotColor(title),
        }}
      />
      <Typography fontWeight={600} fontSize="16px" color="#2f3437">
        {title}
      </Typography>
    </Box>

    {items.map((item, idx) => (
      <Paper
        key={idx}
        elevation={0}
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          py: 0.8,
          px: 1.5,
          fontSize: '13px',
          lineHeight: 1.4,
          color: '#2f3437',
          mb: 1,
          backgroundColor: '#fff',
          boxShadow: '-1px 2px 44px -15px rgba(0, 0, 0, 0.3)',
          transition: 'box-shadow 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            borderColor: '#bdbdbd'
          }
        }}
      >
        <Typography fontWeight={item? 600 : 600} color='#6F6F6F' fontSize="13px">
          {item.text}
        </Typography>
      </Paper>
    ))}

    <Paper
      elevation={0}
      sx={{
        mt: 1,
        py: 1,
        textAlign: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        backgroundColor:'#f9f9f9',
        fontSize: '13px',
        color: '#9e9e9e',
        cursor: 'pointer',
        boxShadow: '-1px 2px 27px -15px rgba(0,0,0,0.75)',
        transition: 'all 0.2s',
        '&:hover': { backgroundColor: '#f4f4f4', textDecoration: 'underline' },
      }}
    >
      Add Page
    </Paper>
  </Paper>
);

export default function NotebookLMUI() {
  return (
   <Box sx={{ display: 'flex', height: '100vh', pt: 4 }}>
      {/* Sidebar */}
    <Box
        sx={{
          width: 200,
          background: '#ffffff',
          borderRight: '1px solid #e0e0e0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          py: 7,
          px: 2,
        }}
      >
        {/* Top section */}
        <Box
        >
          {/* Projects Header */}
          <Box display="flex" 
          alignItems="center" 
          gap={1} 
          mb={1}
          sx={{ 
                px: 1.5,
                py: 0.8,
                mb: 1,
                backgroundColor: '#f9f9f9',
                borderRadius: '6px',
                boxShadow: 'inset 0 0 0 1px #e0e0e0',
                }}
          
          >
            <BorderAllIcon sx={{ fontSize: 16, color: '#757575' }} />
            <Typography fontWeight={600} fontSize="14px" color="#757575" >
              Projects
            </Typography>
          </Box>

          {/* Drafts - Selected */}
          <Box
            sx={{
              borderRadius: '6px',
              px: 1.5,
              py: 0.8,
              mb: 1,
              fontWeight: 600,
              fontSize: '16px',
              color: '#757575',
              cursor: 'pointer',
              ml: 1 // nested look
            }}
          >
            Drafts
          </Box>

          {/* Shared With Me - Nested under Projects */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={1}
            sx={{ cursor: 'pointer', ml: 2 }} 
          >
            <Typography fontSize="13px" color="#757575"  sx={{ 
              fontWeight: 600,
              fontSize: '14px',}}>
              Shared With Me
            </Typography>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box mt={5}>
          {/* Settings */}
          <Box display="flex" alignItems="center" gap={2} mb={2} sx={{ cursor: 'pointer' }}>
            <Settings sx={{ fontSize: 16, color: '#616161' }} />
            <Typography fontSize="13px" color="#616161">
              Settings
            </Typography>
          </Box>

          {/* Invite Members */}
          <Box display="flex" alignItems="center" gap={2} mb={2} sx={{ cursor: 'pointer' }}>
            <PersonAdd sx={{ fontSize: 16, color: '#616161' }} />
            <Typography fontSize="13px" color="#616161">
              Invite Members
            </Typography>
          </Box>

          {/* Buttons */}
          <Button
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              mb: 1,
              textTransform: 'none',
              fontSize: '13px',
              borderColor: '#d0d0d0',
              color: '#444',
              backgroundColor: '#f9f9f9',
              '&:hover': {
                backgroundColor: '#f4f4f4'
              }
            }}
          >
            New Draft
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              textTransform: 'none',
              fontSize: '13px',
              borderColor: '#d0d0d0',
              color: '#444',
              backgroundColor: '#f9f9f9',
              '&:hover': {
                backgroundColor: '#f4f4f4'
              }
            }}
          >
            New Project
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column' }}>
        {/* Top Navbar Strip with Window Controls */}
        <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 48,
          backgroundColor: '#ECECEC',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          zIndex: 1000,
        }}
      >
        <WindowControls />
      </Box>
        {/* Header */}
        <Box sx={{ px: 4, py: 3.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontWeight={800} fontSize="28px" color="#2f3437">
              Side Hustle
            </Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: 35, fontWeight: 900, color:"#2f3437" }} />
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <ShareIcon sx={{ fontSize: 16, color: '#757575' }} />
            <Typography
              fontSize="13px"
              color="#757575"
              sx={{
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Share
            </Typography>
            <MoreHoriz sx={{ fontSize: 16, color: '#757575' }} /> {/* Horizontal 3-dot icon */}
          </Box>
        </Box>

        {/* Columns */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            px: 4,
            pb: 4,
            overflow: 'visible',
            alignItems: 'flex-start'
          }}
        >
          {Object.entries(boardData).map(([key, value]) => (
            <Column key={key} title={key} items={value} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}