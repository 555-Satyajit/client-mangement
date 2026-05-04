import React from 'react';
import { Box, Drawer, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Sidebar from './sidebar';
import Navbar from './Navbar';

const MobileHeader = ({ onOpenDrawer }) => (
  <Box sx={{ 
    display: { xs: 'flex', md: 'none' }, 
    height: 64, 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    px: 2, 
    borderBottom: '1px solid #e2e8f0',
    bgcolor: '#fcfcfc',
    position: 'sticky',
    top: 0,
    zIndex: 1100
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box sx={{ 
        width: 32, 
        height: 32, 
        bgcolor: '#3b82f6', 
        borderRadius: '8px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#fff'
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', fontSize: '1.25rem' }}>
        Dashboard
      </Typography>
    </Box>
    <IconButton onClick={onOpenDrawer} sx={{ border: '1px solid #e2e8f0', borderRadius: '8px', p: 0.8 }}>
      <MenuIcon sx={{ fontSize: 20 }} />
    </IconButton>
  </Box>
);

const DashboardLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#fcfcfc', flexDirection: 'column' }}>
      <MobileHeader onOpenDrawer={() => setDrawerOpen(true)} />
      
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Desktop Sidebar */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Sidebar />
        </Box>

        {/* Mobile Sidebar (Drawer) */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': { 
              width: 280, 
              bgcolor: 'hsla(228, 33%, 97%, 1)',
              backgroundImage: 'none'
            }
          }}
        >
          <Sidebar onLinkClick={() => setDrawerOpen(false)} isMobile={true} />
        </Drawer>

        <Box sx={{ 
          flex: 1, 
          ml: { xs: 0, md: '240px' }, 
          display: 'flex', 
          flexDirection: 'column'
        }}>
          {/* Hide breadcrumb navbar on mobile as we have the MobileHeader */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Navbar />
          </Box>
          <Box component="main" sx={{ p: { xs: 2, md: 1.5 }, pt: { xs: 1, md: 0 } }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
