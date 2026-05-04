import React from 'react';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  Paper,
  Button,
  Divider,
  IconButton,
  Avatar,
  Badge,
  Menu,
  MenuItem
} from '@mui/material';
import { 
  Home, 
  BarChart, 
  People, 
  Assignment, 
  Settings, 
  Info, 
  Help,
  AutoAwesome,
  UnfoldMore, 
  MoreVert,
  Laptop,
  Notifications,
  Logout,
  Smartphone,
  Build,
  Add
} from '@mui/icons-material';



const NavItem = ({ icon: Icon, label, active = false, onClick }) => (
  <ListItem disablePadding dense sx={{ mb: 0 }}>
    <ListItemButton 
      selected={active}
      dense
      onClick={onClick}
      sx={{ 
        borderRadius: '8px',
        opacity: 1,
        py: 0.5, // slightly more padding for touch
        px: 1.0,
        '&.Mui-selected': {
          backgroundColor: 'hsla(218, 27%, 94%, 1)',
          '&:hover': {
            backgroundColor: 'hsla(218, 27%, 92%, 1)',
          },
        },
        '&:hover': {
          backgroundColor: 'hsla(218, 27%, 94%, 1)',
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 24, color: active ? '#09090b' : 'hsla(222, 11%, 54%, 1)' }}>
        <Icon sx={{ fontSize: 18 }} />
      </ListItemIcon>
      <ListItemText 
        primary={
          <Typography sx={{ 
            fontSize: '14px', 
            fontWeight: active ? 600 : 500, 
            color: active ? '#09090b' : 'hsla(225, 5%, 33%, 1)',
            letterSpacing: active ? '-0.01em' : 'normal',
            fontFamily: 'Inter, sans-serif'
          }}>
            {label}
          </Typography>
        }
      />
    </ListItemButton>
  </ListItem>
);

const Sidebar = ({ onLinkClick, isMobile }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedProduct, setSelectedProduct] = React.useState({
    name: 'Sitemark-web',
    type: 'Web app',
    icon: Laptop
  });

  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (product) => {
    setAnchorEl(null);
    if (product && product.name) {
      setSelectedProduct(product);
    }
  };

  const productMenu = (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={() => handleClose()}
      onClick={() => handleClose()}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      slotProps={{
        paper: {
          elevation: 4,
          sx: {
            width: 240,
            mt: 1,
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            bgcolor: '#fff',
            overflow: 'visible',
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 24,
              width: 10,
              height: 10,
              bgcolor: '#fff',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
              borderLeft: '1px solid #e2e8f0',
              borderTop: '1px solid #e2e8f0',
            },
          },
        },
      }}
    >
      <Typography variant="caption" sx={{ px: 2, py: 1, display: 'block', color: '#64748b', fontWeight: 600 }}>
        Production
      </Typography>
      <MenuItem onClick={() => handleClose({ name: 'Sitemark-web', type: 'Web app', icon: Laptop })} sx={{ py: 1, gap: 1.5 }}>
        <Avatar sx={{ width: 28, height: 28, bgcolor: '#f1f5f9', color: '#1e293b', border: '1px solid #e2e8f0' }}>
          <Laptop sx={{ fontSize: 16 }} />
        </Avatar>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#0f172a' }}>Sitemark-web</Typography>
          <Typography variant="caption" sx={{ color: '#64748b' }}>Web app</Typography>
        </Box>
      </MenuItem>
      <MenuItem onClick={() => handleClose({ name: 'Sitemark-app', type: 'Mobile application', icon: Smartphone })} sx={{ py: 1, gap: 1.5 }}>
        <Avatar sx={{ width: 28, height: 28, bgcolor: '#f1f5f9', color: '#1e293b', border: '1px solid #e2e8f0' }}>
          <Smartphone sx={{ fontSize: 16 }} />
        </Avatar>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#0f172a' }}>Sitemark-app</Typography>
          <Typography variant="caption" sx={{ color: '#64748b' }}>Mobile application</Typography>
        </Box>
      </MenuItem>
      <MenuItem onClick={() => handleClose({ name: 'Sitemark-Store', type: 'Web app', icon: Laptop })} sx={{ py: 1, gap: 1.5 }}>
        <Avatar sx={{ width: 28, height: 28, bgcolor: '#f1f5f9', color: '#1e293b', border: '1px solid #e2e8f0' }}>
          <Laptop sx={{ fontSize: 16 }} />
        </Avatar>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#0f172a' }}>Sitemark-Store</Typography>
          <Typography variant="caption" sx={{ color: '#64748b' }}>Web app</Typography>
        </Box>
      </MenuItem>

      <Typography variant="caption" sx={{ px: 2, py: 1, mt: 1, display: 'block', color: '#64748b', fontWeight: 600 }}>
        Development
      </Typography>
      <MenuItem onClick={() => handleClose({ name: 'Sitemark-Admin', type: 'Web app', icon: Build })} sx={{ py: 1, gap: 1.5 }}>
        <Avatar sx={{ width: 28, height: 28, bgcolor: '#f1f5f9', color: '#1e293b', border: '1px solid #e2e8f0' }}>
          <Build sx={{ fontSize: 16 }} />
        </Avatar>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#0f172a' }}>Sitemark-Admin</Typography>
          <Typography variant="caption" sx={{ color: '#64748b' }}>Web app</Typography>
        </Box>
      </MenuItem>

      <Divider sx={{ my: 1 }} />
      <MenuItem sx={{ py: 1, gap: 1.5 }}>
        <Avatar sx={{ width: 28, height: 28, bgcolor: 'transparent', color: '#64748b', border: '1px dashed #e2e8f0' }}>
          <Add sx={{ fontSize: 16 }} />
        </Avatar>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#0f172a' }}>Add product</Typography>
          <Typography variant="caption" sx={{ color: '#64748b' }}>Web app</Typography>
        </Box>
      </MenuItem>
    </Menu>
  );

  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const userMenuOpen = Boolean(userAnchorEl);
  
  const handleUserClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };
  
  const handleUserClose = () => {
    setUserAnchorEl(null);
  };

  return (
    <Box sx={{ 
      width: isMobile ? '100%' : 240, 
      height: '100vh', 
      bgcolor: 'hsla(228, 33%, 97%, 1)', 
      borderRight: isMobile ? 'none' : '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      p: 2,
      position: isMobile ? 'relative' : 'fixed',
      left: 0,
      top: 0
    }}>
      {/* Mobile Profile Header */}
      {isMobile ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="body1" sx={{ fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
              Riley Carter
            </Typography>
          </Box>
          <Badge
            variant="dot"
            color="error"
            overlap="circular"
            sx={{ 
              '& .MuiBadge-badge': { 
                backgroundColor: '#ef4444', 
                minWidth: 8, 
                height: 8, 
                top: 2, 
                right: 2,
                border: '2px solid hsla(228, 33%, 97%, 1)'
              } 
            }}
          >
            <IconButton sx={{ bgcolor: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', p: 1 }}>
              <Notifications sx={{ fontSize: 20, color: '#0f172a' }} />
            </IconButton>
          </Badge>
        </Box>
      ) : (
        <>
          {/* Desktop Header */}
          <Paper 
            elevation={0}
            onClick={handleClick}
            sx={{ 
              p: '8px 12px',
              borderRadius: '8px', 
              border: '1px solid',
              borderColor: open ? 'rgb(192, 199, 214)' : 'rgb(218, 222, 231)',
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              bgcolor: 'hsla(228, 33%, 97%, 1)',
              boxShadow: open 
                ? '0 0 0 4px rgba(37, 99, 235, 0.1)' 
                : 'rgba(255, 255, 255, 0.6) 0px 1px 0px 1px inset, rgba(221, 227, 238, 0.5) 0px -1px 0px 1px inset',
              width: '100%',
              maxHeight: '56px',
              cursor: 'pointer',
              '&:hover': { borderColor: 'rgb(192, 199, 214)' },
              transition: 'all 120ms ease-in',
              boxSizing: 'border-box'
            }}
          >
            <Avatar 
              sx={{ 
                bgcolor: '#f1f5f9', 
                color: '#1e293b', 
                width: 32, 
                height: 32,
                border: '1px solid #e2e8f0'
              }}
            >
              <selectedProduct.icon sx={{ fontSize: 18 }} />
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography 
                variant="body1" 
                noWrap
                sx={{ 
                  fontWeight: 700, 
                  color: '#0B0E14', 
                  lineHeight: 1.2, 
                  fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  textOverflow: 'ellipsis'
                }}
              >
                {selectedProduct.name}
              </Typography>
              <Typography 
                variant="body2" 
                noWrap
                sx={{ 
                  color: '#64748b', 
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  textOverflow: 'ellipsis'
                }}
              >
                {selectedProduct.type}
              </Typography>
            </Box>
            <UnfoldMore sx={{ fontSize: 18, color: '#64748b', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </Paper>
          {productMenu}
          <Divider sx={{ mx: -2, mb: 2, borderColor: '#e2e8f0' }} />
        </>
      )}

      {/* Main Nav */}
      <List disablePadding sx={{ mb: 2 }}>
        <NavItem icon={Home} label="Home" active onClick={onLinkClick} />
        <NavItem icon={BarChart} label="Analytics" onClick={onLinkClick} />
        <NavItem icon={People} label="Clients" onClick={onLinkClick} />
        <NavItem icon={Assignment} label="Tasks" onClick={onLinkClick} />
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <List disablePadding sx={{ mb: 2 }}>
        <NavItem icon={Settings} label="Settings" onClick={onLinkClick} />
        <NavItem icon={Info} label="About" onClick={onLinkClick} />
        <NavItem icon={Help} label="Feedback" onClick={onLinkClick} />
      </List>

      {isMobile && <Divider sx={{ mx: -2, mb: 2, borderColor: '#e2e8f0' }} />}

      {/* Upgrade Card */}
      <Paper 
        elevation={0}
        variant="outlined"
        sx={{ 
          p: 2, 
          borderRadius: '12px', 
          border: '1px solid #e2e8f0',
          mb: 2,
          bgcolor: '#ffffff'
        }}
      >
        <Box sx={{ color: '#1e293b', mb: 1 }}>
          <AutoAwesome sx={{ fontSize: 20 }} />
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5, fontSize: '14px', color: '#1e293b', fontFamily: 'Inter, sans-serif' }}>
          Plan about to expire
        </Typography>
        <Typography variant="body2" sx={{ color: '#475569', display: 'block', mb: 2, fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
          Enjoy 10% off when renewing your plan today.
        </Typography>
        <Button 
          fullWidth 
          variant="contained" 
          size="small"
          sx={{ 
            borderRadius: '10px',
            textTransform: 'none',
            py: 0.8,
            fontWeight: 600,
            background: 'linear-gradient(180deg, #2A3347 0%, #161C2D 100%)',
            border: '1px solid #0B0E14',
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
            '&:hover': {
              background: 'linear-gradient(180deg, #334155 0%, #0F172A 100%)',
            },
            transition: 'all 0.2s ease-in-out',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Get the discount
        </Button>
      </Paper>
      {/* Footer Profile/Logout */}
      {!isMobile && (
        <>
          <Divider sx={{ mx: -2, mb: 2, borderColor: '#e2e8f0' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
              sx={{ width: 36, height: 36 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#1e293b', lineHeight: 1.2, fontSize: '0.8rem', fontFamily: 'Inter, sans-serif' }}>
                Riley Carter
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.7rem', fontFamily: 'Inter, sans-serif' }}>
                riley@email.com
              </Typography>
            </Box>
            <IconButton size="small" onClick={handleUserClick}>
              <MoreVert sx={{ fontSize: 18, color: '#64748b' }} />
            </IconButton>
          </Box>
          <Menu
            anchorEl={userAnchorEl}
            open={userMenuOpen}
            onClose={handleUserClose}
            onClick={handleUserClose}
            transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            slotProps={{
              paper: {
                elevation: 4,
                sx: {
                  width: 200,
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  bgcolor: '#fff',
                  mb: 1,
                },
              },
            }}
          >
            <MenuItem sx={{ py: 1, fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>Profile</MenuItem>
            <MenuItem sx={{ py: 1, fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>My account</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem sx={{ py: 1, fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>Add another account</MenuItem>
            <MenuItem sx={{ py: 1, fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>Settings</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem sx={{ 
              py: 1, 
              fontSize: '14px', 
              fontWeight: 500, 
              fontFamily: 'Inter, sans-serif',
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              Logout
              <Logout sx={{ fontSize: 18, color: '#64748b' }} />
            </MenuItem>
          </Menu>
        </>
      )}

      {isMobile && (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Logout sx={{ fontSize: 18 }} />}
          sx={{
            mt: 'auto',
            borderRadius: '10px',
            textTransform: 'none',
            borderColor: '#e2e8f0',
            color: '#1e293b',
            fontWeight: 600,
            py: 1,
            bgcolor: '#f4f6fa',
            '&:hover': { borderColor: '#cbd5e1', bgcolor: '#e2e8f0' },
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Logout
        </Button>
      )}
    </Box>
  );
};

export default Sidebar;