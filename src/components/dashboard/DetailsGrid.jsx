import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip, Box } from '@mui/material';

const columns = [
  { field: 'pageTitle', headerName: 'Page Title', flex: 1.5, minWidth: 200 },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 100,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Chip 
          label={params.value} 
          size="small" 
          color={params.value === 'Online' ? 'success' : 'default'} 
          sx={{ height: 20, fontSize: '0.65rem', fontWeight: 700, borderRadius: '6px' }}
        />
      </Box>
    )
  },
  { field: 'users', headerName: 'Users', type: 'number', width: 100 },
  { field: 'eventCount', headerName: 'Event Count', type: 'number', width: 120 },
  { field: 'viewsPerUser', headerName: 'Views per User', type: 'number', width: 120 },
  { field: 'averageTime', headerName: 'Average Time', width: 120 },
];

const rows = [
  { id: 1, pageTitle: 'Homepage Overview', status: 'Online', users: 212423, eventCount: 8345, viewsPerUser: 18.5, averageTime: '2m 15s' },
  { id: 2, pageTitle: 'Product Details - Gadgets', status: 'Online', users: 172240, eventCount: 5653, viewsPerUser: 9.7, averageTime: '2m 30s' },
  { id: 3, pageTitle: 'Checkout Process - Step 1', status: 'Offline', users: 58240, eventCount: 3455, viewsPerUser: 15.2, averageTime: '2m 10s' },
  { id: 4, pageTitle: 'User Profile Dashboard', status: 'Online', users: 96240, eventCount: 112543, viewsPerUser: 4.5, averageTime: '2m 40s' },
  { id: 5, pageTitle: 'Article Listing - Tech News', status: 'Offline', users: 142240, eventCount: 3653, viewsPerUser: 3.1, averageTime: '2m 55s' },
  { id: 6, pageTitle: 'FAQs - Customer Support', status: 'Online', users: 15240, eventCount: 106543, viewsPerUser: 7.2, averageTime: '2m 20s' },
];

function DetailsGrid() {
  return (
    <Box sx={{ height: 400, width: '100%', bgcolor: '#ffffff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        density="compact"
        sx={{
          border: 'none',
          '& .MuiDataGrid-columnHeader': {
            bgcolor: '#f8fafc',
            color: '#64748b',
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.025em',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #f1f5f9',
            fontSize: '0.875rem',
            color: '#334155',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: '1px solid #e2e8f0',
            bgcolor: '#f8fafc',
          },
        }}
      />
    </Box>
  );
}

export default DetailsGrid;
