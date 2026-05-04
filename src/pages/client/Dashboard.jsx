import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import StatCard from '../../components/dashboard/StatCard';
import InsightsCard from '../../components/dashboard/InsightsCard';
import SessionsChart from '../../components/dashboard/SessionsChart';
import PageViewsChart from '../../components/dashboard/PageViewsChart';
import DetailsSection from '../../components/dashboard/DetailsSection';


const usersData = [10,11,9,12,11,13,12,14,13,15,14,13,15,16,14,15,17,16,18,17,16,18,19,18,20,19,21,22,21,23];
const convData = [30,28,27,29,26,25,27,24,23,25,22,21,22,20,19,21,18,17,19,16,15,16,14,13,14,12,11,13,10,9];
const eventData = [195,200,198,202,199,201,200,203,198,200,201,199,200,202,198,201,199,200,203,200,199,201,200,202,199,201,200,203,200,201];

const Dashboard = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fcfcfc', minHeight: '100vh' }}>
      <Box sx={{ px: 1.5, py: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a', mb: 2, letterSpacing: '-0.02em' }}>
          Overview
        </Typography>
        
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard 
              title="Users" 
              value="14k" 
              badge="+25%" 
              sparkData={usersData} 
              sparkColor="#22c55e" 
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard 
              title="Conversions" 
              value="325" 
              badge="-25%" 
              sparkData={convData} 
              sparkColor="hsla(0, 90%, 40%, 1)" 
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatCard 
              title="Event count" 
              value="200k" 
              badge="+5%" 
              sparkData={eventData} 
              sparkColor="#94a3b8" 
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <InsightsCard />
          </Grid>
        </Grid>

        {/* New Charts Row - Equal Width Split */}
        <Grid container spacing={2} sx={{ mt: 3 }}>

          <Grid size={{ xs: 12, md: 6 }}>
            <SessionsChart />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PageViewsChart />
          </Grid>
        </Grid>

        <DetailsSection />
      </Box>
    </Box>
  );
};


export default Dashboard;
