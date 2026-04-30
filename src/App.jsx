import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Grid, 
  Card, 
  CardContent,
  IconButton,
  Stack
} from '@mui/material';
import { 
  DarkMode, 
  LightMode, 
  RocketLaunch, 
  AutoAwesome, 
  Shield 
} from '@mui/icons-material';
import { useApp } from './context/AppContext';

function App() {
  const { theme, toggleTheme } = useApp();

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box 
              sx={{ 
                p: 1, 
                borderRadius: 2, 
                bgcolor: 'primary.main', 
                display: 'flex',
                boxShadow: (t) => `0 8px 16px ${t.palette.primary.main}40`
              }}
            >
              <RocketLaunch sx={{ color: 'white' }} />
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>AgencyHub</Typography>
          </Stack>
          
          <IconButton onClick={toggleTheme} color="inherit" sx={{ border: '1px solid', borderColor: 'divider' }}>
            {theme === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>

        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h1" gutterBottom sx={{ maxWidth: '800px', mx: 'auto' }}>
            Welcome to the New <span style={{ color: '#6366f1' }}>MUI-Powered</span> Portal
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', mb: 4, fontSize: '1.2rem' }}>
            Experience the next level of performance and premium design. We've migrated to a pure Material UI architecture for speed and scalability.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" size="large" sx={{ py: 1.5, px: 4, borderRadius: 3 }}>
              Explore Dashboard
            </Button>
            <Button variant="outlined" size="large" sx={{ py: 1.5, px: 4, borderRadius: 3 }}>
              View Documentation
            </Button>
          </Stack>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {[
            { title: 'Premium Design', icon: <AutoAwesome color="primary" />, desc: 'Fully customized MUI theme with pixel-perfect typography.' },
            { title: 'Blazing Fast', icon: <RocketLaunch color="primary" />, desc: 'Optimized bundle size and lightning-fast state management.' },
            { title: 'Secure Access', icon: <Shield color="primary" />, desc: 'Enterprise-grade security and role-based access control.' }
          ].map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card 
                elevation={0} 
                sx={{ 
                  p: 2, 
                  height: '100%', 
                  border: '1px solid', 
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  transition: '0.3s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h3" gutterBottom sx={{ fontSize: '1.25rem' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
