import { Box, Typography, Paper, Button, Drawer, IconButton } from '@mui/material';
import { Settings, PersonAdd, Menu, Close, MoreHoriz } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import GridViewIcon from '@mui/icons-material/GridView';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNotebook, getNotebook } from './action';


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

const Column = ({ title, sourceCount, createdAt }) => (
  <Paper
    elevation={0}
    sx={{
      background: '#fff',
      border: '1px solid rgb(255, 255, 255)',
      borderRadius: '20px',
      p: 2,
      width: { xs: '100%', md: 225 },
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
      <Typography fontWeight={600} fontSize="16px" color="#6F6F6F">
        {title}
      </Typography>
    </Box>

    <Paper
      elevation={0}
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        py: 1.2,
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
      <Typography fontWeight={600} fontSize="14px" color="#2f3437">
        Source Count: {sourceCount}
      </Typography>
    </Paper>

    <Paper
      elevation={0}
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        py: 1.2,
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
      <Typography fontSize="12px" color="#757575">
        Created: {new Date(createdAt).toLocaleDateString()}
      </Typography>
    </Paper>

    <Paper
      elevation={0}
      sx={{
        mt: 1,
        py: 1,
        textAlign: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        backgroundColor: '#f9f9f9',
        fontSize: '13px',
        color: '#9e9e9e',
        cursor: 'pointer',
        boxShadow: '-1px 2px 27px -15px rgba(0,0,0,0.75)',
        transition: 'all 0.2s',
        '&:hover': { backgroundColor: '#f4f4f4', textDecoration: 'none' },
      }}
    >
      Add Page
    </Paper>
  </Paper>
);


export default function NotebookLMUI() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [notebooks, setNotebooks] = useState([]);
  const dispatch = useDispatch();

  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  const handleCreateNotebook = async () =>{
    await dispatch (createNotebook({
      title:'Untitled notebook' ,
      sourceCount:5
    }))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getNotebook()).unwrap(); 
         console.log("====response========", response)
        setNotebooks(response); 
      } catch (error) {
        console.error('Failed to fetch notebooks:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', height: '100vh', pt: 4 }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: 60, sm: 200 },
          background: '#ffffff',
          borderRight: { sm: '1px solid #e0e0e0', xs: 'none' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          py: 7,
          px: 2,
          transition: 'width 0.3s ease',
        }}
      >
        {/* Top section */}
        <Box>
          {/* Projects Header */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: { xs: 0, sm: 1 },
              mb: 2,
              px: { xs: 0.5, sm: 1.5 },
              py: { xs: 0.5, sm: 0.8 },
              backgroundColor: { xs: 'transparent', sm: '#f9f9f9' },
              borderRadius: '6px',
              boxShadow: { sm: 'inset 0 0 0 1px #e0e0e0', xs: 'none' },
            }}
          >
            <BorderAllIcon sx={{ fontSize: { xs: 20, sm: 16 }, color: '#757575' }} />
            <Typography
              fontWeight={600}
              fontSize={{ xs: 0, sm: '14px' }}
              color="#757575"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Projects
            </Typography>
          </Box>

          {/* Drafts - Selected */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: { xs: 0, sm: 1 },
              mb: 2,
              px: { xs: 0.5, sm: 1.5 },
              py: { xs: 0.5, sm: 0.8 },
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: { xs: 0, sm: '16px' },
              color: '#757575',
              cursor: 'pointer',
              ml: { xs: 0, sm: 1 },
              backgroundColor: { xs: 'transparent', sm: 'transparent' },
            }}
          >
            <DescriptionIcon sx={{ fontSize: { xs: 20, sm: 16 }, color: '#757575' }} />
            <Typography
              sx={{ display: { xs: 'none', sm: 'block', color: '#757575' } }}
            >
              Drafts
            </Typography>
          </Box>

          {/* Shared With Me - Nested under Projects */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={2}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: { xs: 0, sm: 1 },
              px: { xs: 0.5, sm: 1.5 },
              py: { xs: 0.5, sm: 0.8 },
              cursor: 'pointer',
              ml: { xs: 0, sm: 2 },
              backgroundColor: { xs: 'transparent', sm: 'transparent' },
            }}
          >
            <PeopleIcon sx={{ fontSize: { xs: 20, sm: 16 }, color: '#757575' }} />
            <Typography
              fontSize={{ xs: 0, sm: '13px' }}
              color="#757575"
              sx={{ fontWeight: 400, fontSize: { xs: 0, sm: '14px' }, display: { xs: 'none', sm: 'block' } }}
            >
              Shared With Me
            </Typography>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box mt={2}>
          {/* Settings */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={2}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              px: { xs: 0.5, sm: 2 },
              py: { xs: 0.5, sm: 0 },
              cursor: 'pointer',
              backgroundColor: { xs: 'transparent', sm: 'transparent' },
            }}
          >
            <Settings sx={{ fontSize: { xs: 20, sm: 16 }, color: '#616161' }} />
            <Typography
              fontSize={{ xs: 0, sm: '13px' }}
             color="#757575"
               sx={{ fontWeight: 400, fontSize: { xs: 0, sm: '14px' }, display: { xs: 'none', sm: 'block' } }}
            >
              Settings
            </Typography>
          </Box>

          {/* Invite Members */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={2}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              px: { xs: 0.5, sm: 2 },
              py: { xs: 0.5, sm: 0 },
              cursor: 'pointer',
              backgroundColor: { xs: 'transparent', sm: 'transparent' },
            }}
          >
            <PersonAdd sx={{ fontSize: { xs: 20, sm: 16 }, color: '#616161' }} />
            <Typography
              fontSize={{ xs: 0, sm: '13px' }}
              color="#757575"
              sx={{ fontWeight: 400, fontSize: { xs: 0, sm: '14px' }, display: { xs: 'none', sm: 'block' } }}
            >
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
              fontSize: { xs: 0, sm: '13px' },
              borderColor: '#d0d0d0',
              color:'#aaa9aa',
              backgroundColor: '#f9f9f9',
              '&:hover': {
                backgroundColor: '#f4f4f4'
              },
              display: { xs: 'none', sm: 'block' },
            }}
          >
            New Draft
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="small"
            onClick={handleCreateNotebook}
            sx={{
              textTransform: 'none',
              fontSize: { xs: 0, sm: '13px' },
              borderColor: '#d0d0d0',
              color:'#aaa9aa',
              backgroundColor: '#f9f9f9',
              '&:hover': {
                backgroundColor: '#f4f4f4'
              },
              display: { xs: 'none', sm: 'block' },
            }}
          >
            New Project
          </Button>
         
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'center',
              mb: 1,
            }}
          >
            <GridViewIcon sx={{ fontSize: 20, color: '#616161' }} />
          </Box>
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
            height: { xs: 40, md: 48 },
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
        <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 3.5 }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
          <Box display="flex" alignItems="center" gap={1} mb={{ xs: 2, md: 0 }}>
            <Typography fontWeight={800} fontSize={{ xs: 20, md: 28 }} color="#2f3437">
              Side Hustle
            </Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: { xs: 25, md: 35 }, fontWeight: 900, color: "#2f3437" }} />
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
            <IconButton
              sx={{ display: { xs: 'none', sm: 'flex' } }} 
            >
              <MoreHoriz sx={{ fontSize: 16, color: '#757575' }} />
            </IconButton>
            <IconButton
              onClick={handleOpenDrawer}
              sx={{ display: { xs: 'flex', sm: 'none' } }} 
            >
              <Menu sx={{ fontSize: 24, color: '#616161' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Columns */}
       <Box
        sx={{
          display: 'flex',
          gap: { xs: 1, md: 3 },
          px: { xs: 2, md: 4 },
          pb: 4,
          overflowX: 'visible',
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }}
      >
        { notebooks.map((notebook) => (
          <Column
            key={notebook._id}
            title={notebook.title}
            sourceCount={notebook.sourceCount}
            createdAt={notebook.createdAt}
          />
        ))}
      </Box>
      </Box>

      {/* Drawer for Hamburger Menu on xs */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleCloseDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#ffffff',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            px:1
          }}
        >
          <IconButton
            onClick={handleCloseDrawer}
            sx={{ alignSelf: 'flex-end', mb: 2 }}
          >
            <Close sx={{ fontSize: 20, color: '#616161' }} />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={1}
            sx={{ cursor: 'pointer', px: 1 }}
          >
            <Settings sx={{ fontSize: 20, color: '#616161' }} />
            <Typography fontSize="13px" color="#616161">
              Settings
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={1}
            sx={{ cursor: 'pointer', px: 1 }}
          >
            <PersonAdd sx={{ fontSize: 20, color: '#616161' }} />
            <Typography fontSize="13px" color="#616161">
              Invite Members
            </Typography>
          </Box>
          <Button
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              width: '90%',
               mb: 1,
              textTransform: 'none',
              fontSize: '13px',
              borderColor: '#d0d0d0',
              color: '#444',
              backgroundColor: '#f9f9f9',
              '&:hover': { backgroundColor: '#f4f4f4' },
            }}
          >
            New Draft
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              width: '90%',
              textTransform: 'none',
              fontSize: '13px',
              borderColor: '#d0d0d0',
              color: '#444',
              backgroundColor: '#f9f9f9',
              '&:hover': { backgroundColor: '#f4f4f4' },
            }}
          >
            New Project
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}