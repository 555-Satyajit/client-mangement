import React from 'react';
import {
  Box, Card, CardContent, Typography, Grid, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, LinearProgress, Chip, Stack, Menu, MenuItem, IconButton,
  ListItemIcon, ListItemText, Tooltip, tooltipClasses, styled,
  Checkbox, Divider, TablePagination, Badge, Avatar, Button, InputBase,
  List, ListItem, ListItemButton
} from '@mui/material';
import {
  KeyboardArrowDown, KeyboardArrowRight, KeyboardArrowLeft,
  ChevronRight, Circle, ArrowUpward, ArrowDownward, FilterAlt,
  VisibilityOff, ViewColumn, MoreVert
} from '@mui/icons-material';
import { PieChart } from '@mui/x-charts/PieChart';

const CustomLightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    padding: 0,
    boxShadow: 'none',
    maxWidth: 'none',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#fff', // Match bottom section
    '&::before': {
      border: '1px solid #e2e8f0',
      backgroundColor: '#fff',
    },
  },
}));

const CountryFlag = ({ name }) => {
  if (name === 'India') {
    return (
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <g clipPath="url(#a-india)">
          <mask id="b-india" maskUnits="userSpaceOnUse" x="-4" y="0" width="32" height="24">
            <path d="M-4 0h32v24H-4V0Z" fill="#fff" />
          </mask>
          <g mask="url(#b-india)">
            <path fillRule="evenodd" clipRule="evenodd" d="M-4 0v24h32V0H-4Z" fill="#F7FCFF" />
            <mask id="c-india" maskUnits="userSpaceOnUse" x="-4" y="0" width="32" height="24">
              <path fillRule="evenodd" clipRule="evenodd" d="M-4 0v24h32V0H-4Z" fill="#fff" />
            </mask>
            <g mask="url(#c-india)" fillRule="evenodd" clipRule="evenodd">
              <path d="M-4 0v8h32V0H-4Z" fill="#FF8C1A" />
              <path d="M-4 16v8h32v-8H-4Z" fill="#5EAA22" />
              <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm7 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#3D58DB" />
              <path d="m12 12.9-.6 3 .4-3-1.5 2.8 1.2-3L9.4 15l2-2.4-2.8 1.6 2.6-1.8-3 .7 3-1H8l3.2-.2-3-1 3 .8-2.6-1.9 2.8 1.7-2-2.5 2.1 2.3-1.2-3 1.5 2.9-.4-3.2.6 3.2.6-3.2-.4 3.2 1.5-2.8-1.2 2.9L14.6 9l-2 2.5 2.8-1.7-2.6 1.9 3-.8-3 1 3.2.1-3.2.1 3 1-3-.7 2.6 1.8-2.8-1.6 2 2.4-2.1-2.3 1.2 3-1.5-2.9.4 3.2-.6-3.1Z" fill="#3D58DB" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="a-india">
            <rect width="24" height="24" rx="12" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (name === 'USA') {
    return (
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_983_1725)">
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 0H28V24H-4V0Z" fill="#F7FCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 14.6667V16.6667H28V14.6667H-4Z" fill="#E31D1C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 18.3333V20.3333H28V18.3333H-4Z" fill="#E31D1C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 7.33325V9.33325H28V7.33325H-4Z" fill="#E31D1C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 22V24H28V22H-4Z" fill="#E31D1C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 11V13H28V11H-4Z" fill="#E31D1C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 0V2H28V0H-4Z" fill="#E31D1C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 3.66675V5.66675H28V3.66675H-4Z" fill="#E31D1C" />
          <path d="M-4 0H16V13H-4V0Z" fill="#2E42A5" />
          <path fillRule="evenodd" clipRule="evenodd" d="M-2.27876 2.93871L-3.00465 3.44759L-2.75958 2.54198L-3.4043 1.96807H-2.56221L-2.27978 1.229L-1.94861 1.96807H-1.23075L-1.79479 2.54198L-1.57643 3.44759L-2.27876 2.93871ZM1.72124 2.93871L0.995357 3.44759L1.24042 2.54198L0.595707 1.96807H1.43779L1.72022 1.229L2.05139 1.96807H2.76925L2.20521 2.54198L2.42357 3.44759L1.72124 2.93871ZM4.99536 3.44759L5.72124 2.93871L6.42357 3.44759L6.20517 2.54198L6.76927 1.96807H6.05137L5.72022 1.229L5.43779 1.96807H4.59571L5.24042 2.54198L4.99536 3.44759ZM9.72127 2.93871L8.99537 3.44759L9.24047 2.54198L8.59567 1.96807H9.43777L9.72027 1.229L10.0514 1.96807H10.7693L10.2052 2.54198L10.4236 3.44759L9.72127 2.93871ZM-3.00465 7.44759L-2.27876 6.93871L-1.57643 7.44759L-1.79479 6.54198L-1.23075 5.96807H-1.94861L-2.27978 5.229L-2.56221 5.96807H-3.4043L-2.75958 6.54198L-3.00465 7.44759ZM1.72124 6.93871L0.995357 7.44759L1.24042 6.54198L0.595707 5.96807H1.43779L1.72022 5.229L2.05139 5.96807H2.76925L2.20521 6.54198L2.42357 7.44759L1.72124 6.93871ZM4.99536 7.44759L5.72124 6.93871L6.42357 7.44759L6.20517 6.54198L6.76927 5.96807H6.05137L5.72022 5.229L5.43779 5.96807H4.59571L5.24042 6.54198L4.99536 7.44759ZM9.72127 6.93871L8.99537 7.44759L9.24047 6.54198L8.59567 5.96807H9.43777L9.72027 5.229L10.0514 5.96807H10.7693L10.2052 6.54198L10.4236 7.44759L9.72127 6.93871ZM-3.00465 11.4476L-2.27876 10.9387L-1.57643 11.4476L-1.79479 10.542L-1.23075 9.96807H-1.94861L-2.27978 9.229L-2.56221 9.96807H-3.4043L-2.75958 10.542L-3.00465 11.4476ZM1.72124 10.9387L0.995357 11.4476L1.24042 10.542L0.595707 9.96807H1.43779L1.72022 9.229L2.05139 9.96807H2.76925L2.20521 10.542L2.42357 11.4476L1.72124 10.9387ZM4.99536 11.4476L5.72124 10.9387L6.42357 11.4476L6.20517 10.542L6.76927 9.96807H6.05137L5.72022 9.229L5.43779 9.96807H4.59571L5.24042 10.542L4.99536 11.4476ZM9.72127 10.9387L8.99537 11.4476L9.24047 10.542L8.59567 9.96807H9.43777L9.72027 9.229L10.0514 9.96807H10.7693L10.2052 10.542L10.4236 11.4476L9.72127 10.9387ZM12.9954 3.44759L13.7213 2.93871L14.4236 3.44759L14.2052 2.54198L14.7693 1.96807H14.0514L13.7203 1.229L13.4378 1.96807H12.5957L13.2405 2.54198L12.9954 3.44759ZM13.7213 6.93871L12.9954 7.44759L13.2405 6.54198L12.5957 5.96807H13.4378L13.7203 5.229L14.0514 5.96807H14.7693L14.2052 6.54198L14.4236 7.44759L13.7213 6.93871ZM12.9954 11.4476L13.7213 10.9387L14.4236 11.4476L14.2052 10.542L14.7693 9.96807H14.0514L13.7203 9.229L13.4378 9.96807H12.5957L13.2405 10.542L12.9954 11.4476ZM-0.278763 4.93871L-1.00464 5.44759L-0.759583 4.54198L-1.40429 3.96807H-0.562213L-0.279783 3.229L0.0513873 3.96807H0.769247L0.205207 4.54198L0.423567 5.44759L-0.278763 4.93871ZM2.99536 5.44759L3.72124 4.93871L4.42357 5.44759L4.20521 4.54198L4.76925 3.96807H4.05139L3.72022 3.229L3.43779 3.96807H2.59571L3.24042 4.54198L2.99536 5.44759ZM7.72127 4.93871L6.99537 5.44759L7.24047 4.54198L6.59567 3.96807H7.43777L7.72027 3.229L8.05137 3.96807H8.76927L8.20517 4.54198L8.42357 5.44759L7.72127 4.93871ZM-1.00464 9.44759L-0.278763 8.93871L0.423567 9.44759L0.205207 8.54198L0.769247 7.96807H0.0513873L-0.279783 7.229L-0.562213 7.96807H-1.40429L-0.759583 8.54198L-1.00464 9.44759ZM3.72124 8.93871L2.99536 9.44759L3.24042 8.54198L2.59571 7.96807H3.43779L3.72022 7.229L4.05139 7.96807H4.76925L4.20521 8.54198L4.42357 9.44759L3.72124 8.93871ZM6.99537 9.44759L7.72127 8.93871L8.42357 9.44759L8.20517 8.54198L8.76927 7.96807H8.05137L7.72027 7.229L7.43777 7.96807H6.59567L7.24047 8.54198L6.99537 9.44759ZM11.7213 4.93871L10.9954 5.44759L11.2405 4.54198L10.5957 3.96807H11.4378L11.7203 3.229L12.0514 3.96807H12.7693L12.2052 4.54198L12.4236 5.44759L11.7213 4.93871ZM10.9954 9.44759L11.7213 8.93871L12.4236 9.44759L12.2052 8.54198L12.7693 7.96807H12.0514L11.7203 7.229L11.4378 7.96807H10.5957L11.2405 8.54198L10.9954 9.44759Z" fill="#F7FCFF" />
        </g>
        <defs>
          <clipPath id="clip0_983_1725">
            <rect width="24" height="24" rx="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (name === 'Brazil') {
    return (
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 25" width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_983_1741)">
          <path fillRule="evenodd" clipRule="evenodd" d="M-4 0.5V24.5H28V0.5H-4Z" fill="#009933" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.9265 4.20404L24.1283 12.7075L11.7605 20.6713L-0.191406 12.5427L11.9265 4.20404Z" fill="#FFD221" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.9265 4.20404L24.1283 12.7075L11.7605 20.6713L-0.191406 12.5427L11.9265 4.20404Z" fill="url(#paint0_linear_983_1741)" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 17.7C14.7614 17.7 17 15.4614 17 12.7C17 9.93853 14.7614 7.69995 12 7.69995C9.2386 7.69995 7 9.93853 7 12.7C7 15.4614 9.2386 17.7 12 17.7Z" fill="#2E42A5" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10.379 15.07L10.1556 15.1874L10.1983 14.9387L10.0176 14.7626L10.2673 14.7263L10.379 14.5L10.4907 14.7263L10.7404 14.7626L10.5597 14.9387L10.6024 15.1874L10.379 15.07Z" fill="#F7FCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.379 15.07L12.1556 15.1874L12.1983 14.9387L12.0176 14.7626L12.2673 14.7263L12.379 14.5L12.4907 14.7263L12.7404 14.7626L12.5597 14.9387L12.6024 15.1874L12.379 15.07Z" fill="#F7FCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.379 16.27L12.1556 16.3874L12.1983 16.1387L12.0176 15.9625L12.2673 15.9262L12.379 15.7L12.4907 15.9262L12.7404 15.9625L12.5597 16.1387L12.6024 16.3874L12.379 16.27Z" fill="#F7FCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.379 12.07L11.1556 12.1874L11.1983 11.9387L11.0176 11.7626L11.2673 11.7263L11.379 11.5L11.4907 11.7263L11.7404 11.7626L11.5597 11.9387L11.6024 12.1874L11.379 12.07Z" fill="#F7FCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.379 14.07L11.1556 14.1874L11.1983 13.9387L11.0176 13.7626L11.2673 13.7263L11.379 13.5L11.4907 13.7263L11.7404 13.7626L11.5597 13.9387L11.6024 14.1874L11.379 14.07Z" fill="#F7FCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.97859 13.07L9.75519 13.1874L9.79789 12.9387L9.61719 12.7626L9.86689 12.7263L9.97859 12.5L10.0903 12.7263L10.34 12.7626L10.1593 12.9387L10.2019 13.1874L9.97859 13.07Z" fill="#F7FCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M8.5783 13.87L8.3549 13.9875L8.3976 13.7388L8.2168 13.5626L8.4666 13.5263L8.5783 13.3L8.6899 13.5263L8.9397 13.5626L8.759 13.7388L8.8016 13.9875L8.5783 13.87Z" fill="#F7FCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.1798 10.47L12.9565 10.5875L12.9991 10.3387L12.8184 10.1626L13.0682 10.1263L13.1798 9.90002L13.2915 10.1263L13.5413 10.1626L13.3605 10.3387L13.4032 10.5875L13.1798 10.47Z" fill="#F7FCFF" />
          <path d="M7 12L7.5 10C11.6854 10.2946 14.6201 11.2147 17 13.5L16.5 15C14.4373 13.0193 10.7839 12.2664 7 12Z" fill="#F7FCFF" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_983_1741" x1="27.9997" y1="24.5" x2="27.9997" y2="0.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC600" />
            <stop offset="1" stopColor="#FFDE42" />
          </linearGradient>
          <clipPath id="clip0_983_1741">
            <rect y="0.5" width="24" height="24" rx="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (name === 'Other') {
    return (
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 25" width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_986_1789)">
          <circle cx="12" cy="12.5" r="12" fill="#007FFF" />
          <path d="M12 0.5C5.376 0.5 0 5.876 0 12.5C0 19.124 5.376 24.5 12 24.5C18.624 24.5 24 19.124 24 12.5C24 5.876 18.624 0.5 12 0.5ZM10.8 22.016C6.06 21.428 2.4 17.396 2.4 12.5C2.4 11.756 2.496 11.048 2.652 10.352L8.4 16.1V17.3C8.4 18.62 9.48 19.7 10.8 19.7V22.016ZM19.08 18.968C18.768 17.996 17.88 17.3 16.8 17.3H15.6V13.7C15.6 13.04 15.06 12.5 14.4 12.5H7.2V10.1H9.6C10.26 10.1 10.8 9.56 10.8 8.9V6.5H13.2C14.52 6.5 15.6 5.42 15.6 4.1V3.608C19.116 5.036 21.6 8.48 21.6 12.5C21.6 14.996 20.64 17.264 19.08 18.968Z" fill="#3EE07F" />
        </g>
        <defs>
          <clipPath id="clip0_986_1789">
            <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return null;
};

const CustomCheckboxIcon = () => (
  <Box
    sx={{
      width: 18,
      height: 18,
      borderRadius: '6px',
      bgcolor: '#f1f5f9',
      border: '1px solid #cbd5e1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.15s ease',
      '&:hover': {
        borderColor: '#94a3b8',
        bgcolor: '#e2e8f0'
      }
    }}
  />
);

const CustomCheckedIcon = () => (
  <Box
    sx={{
      width: 18,
      height: 18,
      borderRadius: '6px',
      bgcolor: '#3b82f6',
      border: '1px solid #3b82f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Box>
);

const treeData = [
  {
    id: 'Website',
    label: 'Website',
    children: [
      { id: 'Home', label: 'Home', color: '#22c55e' },
      { id: 'Pricing', label: 'Pricing', color: '#22c55e' },
      { id: 'About us', label: 'About us', color: '#22c55e' },
      { id: 'Blog', label: 'Blog', color: '#22c55e', children: [] },
    ]
  },
  {
    id: 'Store',
    label: 'Store',
    children: [
      { id: 'All products', label: 'All products', color: '#22c55e' },
      { id: 'Categories', label: 'Categories', children: [] },
      { id: 'Bestsellers', label: 'Bestsellers', color: '#22c55e' },
      { id: 'Sales', label: 'Sales', color: '#22c55e' },
    ]
  },
  { id: 'Contact', label: 'Contact', color: '#3b82f6' },
  { id: 'Help', label: 'Help', color: '#3b82f6' },
];

const DetailsSection = () => {
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedColumn, setSelectedColumn] = React.useState(null);
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' });
  const [hiddenColumns, setHiddenColumns] = React.useState([]);
  const [filterOn, setFilterOn] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([1]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [expandedItems, setExpandedItems] = React.useState(['Website']);
  const [selectedNode, setSelectedNode] = React.useState('Home');
  const [hoveredSlice, setHoveredSlice] = React.useState(null);
  const [highlightedItem, setHighlightedItem] = React.useState(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [focusedCell, setFocusedCell] = React.useState({ rowId: 1, colKey: 'title' });

  const rows = [
    { id: 1, title: 'Homepage Overview', status: 'Online', users: 212423, events: 8345, views: 18.5, time: '2m 15s' },
    { id: 2, title: 'Product Details - Gadgets', status: 'Online', users: 172240, events: 5653, views: 9.7, time: '2m 30s' },
    { id: 3, title: 'Checkout Process - Step 1', status: 'Offline', users: 58240, events: 3455, views: 15.2, time: '2m 10s' },
    { id: 4, title: 'User Profile Dashboard', status: 'Online', users: 96240, events: 112543, views: 4.5, time: '2m 40s' },
    { id: 5, title: 'Article Listing - Tech News', status: 'Offline', users: 142240, events: 3653, views: 3.1, time: '2m 55s' },
    { id: 6, title: 'FAQs - Customer Support', status: 'Online', users: 15240, events: 106543, views: 7.2, time: '2m 20s' },
    { id: 7, title: 'Product Comparison - Laptops', status: 'Offline', users: 32240, events: 7853, views: 6.5, time: '2m 50s' },
    { id: 8, title: 'Shopping Cart - Electronics', status: 'Online', users: 48240, events: 8563, views: 4.3, time: '3m 10s' },
    { id: 9, title: 'Payment Confirmation - Bank Tran...', status: 'Offline', users: 18240, events: 4563, views: 2.7, time: '3m 25s' },
    { id: 10, title: 'Product Reviews - Smartphones', status: 'Online', users: 28240, events: 9863, views: 5.1, time: '3m 05s' },
    { id: 11, title: 'Subscription Management - Servi...', status: 'Offline', users: 15240, events: 6563, views: 4.8, time: '3m 15s' },
    { id: 12, title: 'Order Tracking - Shipments', status: 'Online', users: 38240, events: 12353, views: 3.5, time: '3m 20s' },
    { id: 13, title: 'Pricing & Plans - Enterprise', status: 'Online', users: 51240, events: 14552, views: 6.8, time: '3m 45s' },
    { id: 14, title: 'Settings - Company Profile', status: 'Online', users: 11240, events: 21543, views: 2.1, time: '1m 50s' },
    { id: 15, title: 'Analytics Dashboard - Reports', status: 'Offline', users: 44240, events: 19856, views: 5.4, time: '4m 10s' },
    { id: 16, title: 'Help Center - Knowledge Base', status: 'Online', users: 24240, events: 17654, views: 3.9, time: '2m 35s' },
    { id: 17, title: 'Campaigns - Referral Tracking', status: 'Online', users: 67240, events: 32654, views: 8.2, time: '2m 55s' },
    { id: 18, title: 'Integrations - API Setup', status: 'Offline', users: 8240, events: 1254, views: 1.5, time: '1m 20s' },
    { id: 19, title: 'Security - IAM & Access Tokens', status: 'Online', users: 12140, events: 4321, views: 2.4, time: '1m 40s' },
    { id: 20, title: 'Billing & Invoices - Details', status: 'Offline', users: 14210, events: 6789, views: 3.6, time: '3m 02s' },
    { id: 21, title: 'Support Tickets - Queue', status: 'Online', users: 8120, events: 3412, views: 1.9, time: '2m 12s' },
    { id: 22, title: 'Notifications - App Inbox', status: 'Online', users: 41240, events: 12345, views: 4.8, time: '1m 25s' },
    { id: 23, title: 'Audit Logs - Administrative', status: 'Offline', users: 5320, events: 987, views: 1.1, time: '1m 05s' },
    { id: 24, title: 'Webhooks - External Events', status: 'Online', users: 6120, events: 4521, views: 3.1, time: '2m 22s' },
    { id: 25, title: 'Localization - Translation Center', status: 'Offline', users: 1240, events: 312, views: 1.0, time: '55s' },
    { id: 26, title: 'Beta Features - Testing Area', status: 'Online', users: 31240, events: 14321, views: 5.2, time: '3m 50s' },
    { id: 27, title: 'Developer Portal - Docs', status: 'Online', users: 18240, events: 8213, views: 4.4, time: '2m 05s' },
    { id: 28, title: 'System Status - Live Ping', status: 'Offline', users: 41240, events: 1211, views: 1.2, time: '40s' },
    { id: 29, title: 'Media Assets - CDN Storage', status: 'Online', users: 22120, events: 15432, views: 6.1, time: '2m 45s' },
    { id: 30, title: 'Email Marketing - Newsletters', status: 'Online', users: 54120, events: 21453, views: 7.4, time: '3m 35s' },
  ];

  // Helper for cell-level border logic
  const getCellFocusedStyles = (rowId, colKey) => {
    if (focusedCell.rowId === rowId && focusedCell.colKey === colKey) {
      return {
        position: 'relative',
        zIndex: 2,
        outline: '1px solid #3b82f6',
        outlineOffset: '-1px',
        backgroundColor: '#f8fafc',
        boxSizing: 'border-box'
      };
    }
    return {};
  };

  const SparklineTooltip = ({ value, date }) => (
    <Box sx={{ 
      minWidth: 120, 
      bgcolor: '#fff', 
      borderRadius: '8px', 
      overflow: 'hidden',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    }}>
      <Box sx={{ 
        bgcolor: '#f8fafc', 
        px: 1.5, 
        py: 1, 
        borderBottom: '1px solid #e2e8f0' 
      }}>
        <Typography sx={{ 
          fontSize: '0.85rem', 
          fontWeight: 600, 
          color: '#334155',
          fontFamily: 'Inter, sans-serif'
        }}>
          {date}
        </Typography>
      </Box>
      <Box sx={{ 
        px: 1.5, 
        py: 1.2, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1.5,
        justifyContent: 'space-between'
      }}>
        <Box sx={{ 
          width: 10, 
          height: 10, 
          bgcolor: '#3b82f6', 
          borderRadius: '2px' 
        }} />
        <Typography sx={{ 
          fontSize: '0.9rem', 
          fontWeight: 700, 
          color: '#1e293b',
          fontFamily: 'Inter, sans-serif'
        }}>
          {value.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );

  const processedRows = React.useMemo(() => {
    let filtered = [...rows];
    if (filterOn) {
      filtered = filtered.filter(row => row.status === 'Online');
    }
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return filtered;
  }, [rows, sortConfig, filterOn]);


  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a', mb: 2, letterSpacing: '-0.02em' }}>
        Details
      </Typography>

      <Grid container spacing={2}>
        {/* Left Column: Data Grid Table */}
        <Grid size={{ xs: 12, md: 9 }} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card variant="outlined" sx={{
            borderRadius: '12px',
            borderColor: '#e2e8f0',
            bgcolor: '#ffffff',
            overflow: 'hidden',
            flex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <TableContainer sx={{ width: '100%', overflow: 'hidden', flex: 1 }}>
              <Table size="small" sx={{ width: '100%', tableLayout: 'fixed' }}>
                <TableHead sx={{ bgcolor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <TableRow>
                    <TableCell padding="checkbox" sx={{ borderBottom: '1px solid #e2e8f0', pl: 2, py: 1.5, width: '4%' }}>
                      <Checkbox
                        size="small"
                        icon={<CustomCheckboxIcon />}
                        checkedIcon={<CustomCheckedIcon />}
                        checked={processedRows.length > 0 && selectedRows.length === processedRows.length}
                        indeterminate={selectedRows.length > 0 && selectedRows.length < processedRows.length}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRows(processedRows.map(r => r.id));
                          } else {
                            setSelectedRows([]);
                          }
                        }}
                      />
                    </TableCell>
                    {[
                      { key: 'title', label: 'Page Title', width: '26%' },
                      { key: 'status', label: 'Status', width: '10%' },
                      { key: 'users', label: 'Users', width: '10%' },
                      { key: 'events', label: 'Event Count', width: '12%' },
                      { key: 'views', label: 'Views per User', width: '12%' },
                      { key: 'time', label: 'Average Time', width: '12%' },
                      { key: 'conversions', label: 'Daily Conversions', width: '14%' }
                    ].map((col) => {
                      if (hiddenColumns.includes(col.key)) return null;
                      return (
                        <TableCell
                          key={col.key}
                          sx={{
                            borderBottom: '1px solid #e2e8f0',
                            fontWeight: 600,
                            color: '#334155',
                            fontSize: '0.8rem',
                            fontFamily: 'Inter, sans-serif',
                            py: 1,
                            lineHeight: 1.3,
                            whiteSpace: 'nowrap',
                            width: col.width,
                            position: 'relative',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            '&:hover .header-actions': { display: 'inline-flex' }
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 0.5, overflow: 'hidden' }}>
                            <Box component="span" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{col.label}</Box>
                            <Box
                              className="header-actions"
                              sx={{
                                display: 'none',
                                alignItems: 'center',
                                gap: 0.25,
                                position: 'absolute',
                                right: 4,
                                bgcolor: '#f8fafc',
                                pl: 0.5
                              }}
                            >
                              <IconButton
                                size="small"
                                onClick={() => {
                                  setSortConfig({
                                    key: col.key,
                                    direction: sortConfig.key === col.key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
                                  });
                                }}
                                sx={{
                                  width: 24,
                                  height: 24,
                                  borderRadius: '6px',
                                  bgcolor: '#eef2f6',
                                  color: '#475569',
                                  '&:hover': { bgcolor: '#e2e8f0' }
                                }}
                              >
                                {sortConfig.key === col.key && sortConfig.direction === 'desc' ? <ArrowDownward sx={{ fontSize: 14 }} /> : <ArrowUpward sx={{ fontSize: 14 }} />}
                              </IconButton>

                              <IconButton
                                size="small"
                                onClick={(e) => {
                                  setAnchorEl(e.currentTarget);
                                  setSelectedColumn(col.key);
                                }}
                                sx={{
                                  width: 24,
                                  height: 24,
                                  borderRadius: '6px',
                                  bgcolor: '#eef2f6',
                                  color: '#475569',
                                  '&:hover': { bgcolor: '#e2e8f0' }
                                }}
                              >
                                <MoreVert sx={{ fontSize: 14 }} />
                              </IconButton>
                            </Box>
                          </Box>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {processedRows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
                    <TableRow
                      key={row.id}
                      hover
                      sx={{ transition: 'background-color 0.1s' }}
                    >
                      <TableCell padding="checkbox" sx={{ pl: 2, borderBottom: '1px solid #f1f5f9' }}>
                        <Checkbox
                          size="small"
                          icon={<CustomCheckboxIcon />}
                          checkedIcon={<CustomCheckedIcon />}
                          checked={selectedRows.includes(row.id)}
                          onChange={() => {
                            if (selectedRows.includes(row.id)) {
                              setSelectedRows(selectedRows.filter(id => id !== row.id));
                            } else {
                              setSelectedRows([...selectedRows, row.id]);
                            }
                          }}
                        />
                      </TableCell>
                      {!hiddenColumns.includes('title') && (
                        <TableCell 
                          onClick={() => setFocusedCell({ rowId: row.id, colKey: 'title' })}
                          sx={{ 
                            fontSize: '0.8rem', 
                            color: '#1e293b', 
                            fontWeight: 500, 
                            fontFamily: 'Inter, sans-serif', 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis',
                            borderBottom: '1px solid #f1f5f9',
                            cursor: 'pointer',
                            ...getCellFocusedStyles(row.id, 'title')
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', overflow: 'hidden' }}>
                            <Box component="span" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.title}</Box>
                          </Box>
                        </TableCell>
                      )}
                      <TableCell 
                        onClick={() => setFocusedCell({ rowId: row.id, colKey: 'status' })}
                        sx={{ 
                          whiteSpace: 'nowrap', 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          borderBottom: '1px solid #f1f5f9', 
                          cursor: 'pointer',
                          ...getCellFocusedStyles(row.id, 'status') 
                        }}
                      >
                        <Chip
                          label={row.status}
                          size="small"
                          sx={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            height: 18,
                            bgcolor: row.status === 'Online' ? '#f0fdf4' : '#f1f5f9',
                            color: row.status === 'Online' ? '#15803d' : '#475569',
                            borderRadius: '4px',
                            border: row.status === 'Online' ? '1px solid #dcfce7' : '1px solid #e2e8f0'
                          }}
                        />
                      </TableCell>
                      <TableCell 
                        onClick={() => setFocusedCell({ rowId: row.id, colKey: 'users' })}
                        sx={{ fontSize: '0.8rem', color: '#1e293b', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', ...getCellFocusedStyles(row.id, 'users') }}
                      >{row.users.toLocaleString()}</TableCell>
                      <TableCell 
                        onClick={() => setFocusedCell({ rowId: row.id, colKey: 'events' })}
                        sx={{ fontSize: '0.8rem', color: '#1e293b', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', ...getCellFocusedStyles(row.id, 'events') }}
                      >{row.events.toLocaleString()}</TableCell>
                      <TableCell 
                        onClick={() => setFocusedCell({ rowId: row.id, colKey: 'views' })}
                        sx={{ fontSize: '0.8rem', color: '#1e293b', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', ...getCellFocusedStyles(row.id, 'views') }}
                      >{row.views}</TableCell>
                      <TableCell 
                        onClick={() => setFocusedCell({ rowId: row.id, colKey: 'time' })}
                        sx={{ fontSize: '0.8rem', color: '#1e293b', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', ...getCellFocusedStyles(row.id, 'time') }}
                      >{row.time}</TableCell>
                      <TableCell 
                        onClick={() => setFocusedCell({ rowId: row.id, colKey: 'conversions' })}
                        sx={{ overflow: 'hidden', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', ...getCellFocusedStyles(row.id, 'conversions') }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', height: 14 }}>
                          <svg width="60" height="14" style={{ display: 'block' }}>
                            {[
                              { d: 'Apr 1', v: 469172, h: 12 },
                              { d: 'Apr 2', v: 312456, h: 8 },
                              { d: 'Apr 3', v: 524189, h: 13 },
                              { d: 'Apr 4', v: 212456, h: 6 },
                              { d: 'Apr 5', v: 382456, h: 10 },
                              { d: 'Apr 6', v: 412456, h: 11 },
                              { d: 'Apr 7', v: 192456, h: 5 },
                              { d: 'Apr 8', v: 442456, h: 12 },
                              { d: 'Apr 9', v: 282456, h: 7 },
                              { d: 'Apr 10', v: 352456, h: 9 },
                              { d: 'Apr 11', v: 492456, h: 13 },
                              { d: 'Apr 12', v: 312456, h: 8 },
                            ].map((item, i) => (
                              <CustomLightTooltip
                                key={i}
                                title={<SparklineTooltip date={item.d} value={item.v} />}
                                arrow
                                followCursor
                                placement="top"
                              >
                                <rect 
                                  x={i * 5} 
                                  y={14 - item.h} 
                                  width="3" 
                                  height={item.h} 
                                  fill="#1d4ed8" 
                                  rx="0.5" 
                                  style={{ cursor: 'pointer' }}
                                />
                              </CustomLightTooltip>
                            ))}
                          </svg>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* Extra blank row to make heights even */}
                  <TableRow sx={{ height: 45, bgcolor: '#ffffff' }}>
                    <TableCell colSpan={8} sx={{ borderBottom: 'none' }} />
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              elevation={0}
              sx={{
                '& .MuiPaper-root': {
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                  border: '1px solid #e2e8f0',
                  minWidth: 190,
                  py: 1,
                  bgcolor: '#ffffff'
                }
              }}
            >
              <MenuItem onClick={() => {
                if (selectedColumn) {
                  setSortConfig({ key: selectedColumn, direction: 'asc' });
                }
                setAnchorEl(null);
              }} sx={{ py: 1.2, px: 2, '&:hover': { bgcolor: '#f8fafc' } }}>
                <ListItemIcon sx={{ minWidth: '32px !important' }}>
                  <ArrowUpward sx={{ fontSize: 18, color: '#64748b' }} />
                </ListItemIcon>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#1e293b' }}>
                  Sort by ASC
                </Typography>
              </MenuItem>

              <MenuItem onClick={() => {
                setSortConfig({ key: null, direction: 'asc' });
                setAnchorEl(null);
              }} sx={{ py: 1.2, px: 2, '&:hover': { bgcolor: '#f8fafc' } }}>
                <ListItemIcon sx={{ minWidth: '32px !important' }} />
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#1e293b' }}>
                  Unsort
                </Typography>
              </MenuItem>

              <Box sx={{ my: 1, height: '1px', bgcolor: '#f1f5f9' }} />

              <MenuItem onClick={() => {
                setFilterOn(!filterOn);
                setAnchorEl(null);
              }} sx={{ py: 1.2, px: 2, '&:hover': { bgcolor: '#f8fafc' } }}>
                <ListItemIcon sx={{ minWidth: '32px !important' }}>
                  <FilterAlt sx={{ fontSize: 18, color: filterOn ? '#3b82f6' : '#64748b' }} />
                </ListItemIcon>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, color: filterOn ? '#3b82f6' : '#1e293b' }}>
                  {filterOn ? 'Show All' : 'Filter'}
                </Typography>
              </MenuItem>

              <Box sx={{ my: 1, height: '1px', bgcolor: '#f1f5f9' }} />

              <MenuItem onClick={() => {
                if (selectedColumn) {
                  setHiddenColumns([...hiddenColumns, selectedColumn]);
                }
                setAnchorEl(null);
              }} sx={{ py: 1.2, px: 2, '&:hover': { bgcolor: '#f8fafc' } }}>
                <ListItemIcon sx={{ minWidth: '32px !important' }}>
                  <VisibilityOff sx={{ fontSize: 18, color: '#64748b' }} />
                </ListItemIcon>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#1e293b' }}>
                  Hide column
                </Typography>
              </MenuItem>

              <MenuItem onClick={() => {
                setHiddenColumns([]);
                setAnchorEl(null);
              }} sx={{ py: 1.2, px: 2, '&:hover': { bgcolor: '#f8fafc' } }}>
                <ListItemIcon sx={{ minWidth: '32px !important' }}>
                  <ViewColumn sx={{ fontSize: 18, color: '#64748b' }} />
                </ListItemIcon>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#1e293b' }}>
                  Manage columns
                </Typography>
              </MenuItem>
            </Menu>
            {/* Custom Pagination Footer */}
            <Box sx={{
              p: 1.5,
              px: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid #e2e8f0',
              bgcolor: '#f8fafc',
              height: '48px',
              boxSizing: 'border-box'
            }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#1e293b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                {selectedRows.length} {selectedRows.length === 1 ? 'row' : 'rows'} selected
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.8rem', color: '#1e293b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                    Rows per page:
                  </Typography>
                  <Box 
                    onClick={() => {
                      const nextOption = rowsPerPage === 5 ? 10 : rowsPerPage === 10 ? 20 : 5;
                      setRowsPerPage(nextOption);
                      setPage(0);
                    }}
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', userSelect: 'none' }}
                  >
                    <Typography sx={{ fontSize: '0.8rem', color: '#1e293b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{rowsPerPage}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1, color: '#64748b' }}>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.5L4 1.5L7 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 2 }}>
                        <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Box>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: '0.8rem', color: '#1e293b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                  {Math.min(processedRows.length, page * rowsPerPage + 1)}-{Math.min(processedRows.length, (page + 1) * rowsPerPage)} of {processedRows.length}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box 
                    onClick={() => setPage(p => Math.max(0, p - 1))}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      bgcolor: '#ffffff',
                      '&:hover': { bgcolor: '#f1f5f9' },
                      opacity: page === 0 ? 0.5 : 1,
                      pointerEvents: page === 0 ? 'none' : 'auto'
                    }}
                  >
                    <KeyboardArrowLeft sx={{ fontSize: 18, color: page === 0 ? '#64748b' : '#1e293b' }} />
                  </Box>
                  <Box 
                    onClick={() => setPage(p => Math.min(Math.ceil(processedRows.length / rowsPerPage) - 1, p + 1))}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      bgcolor: '#ffffff',
                      '&:hover': { bgcolor: '#f1f5f9' },
                      opacity: (page + 1) * rowsPerPage >= processedRows.length ? 0.5 : 1,
                      pointerEvents: (page + 1) * rowsPerPage >= processedRows.length ? 'none' : 'auto'
                    }}
                  >
                    <KeyboardArrowRight sx={{ fontSize: 18, color: (page + 1) * rowsPerPage >= processedRows.length ? '#64748b' : '#1e293b' }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Right Column: Tree and Country Charts - Vertically Stacked */}
        <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Stack spacing={2} sx={{ flex: 1 }}>
            {/* Product Tree Card */}
            <Card variant="outlined" sx={{ borderRadius: '8px', borderColor: '#e2e8f0', bgcolor: '#ffffff' }}>
              <CardContent sx={{ p: '14px 16px', '&:last-child': { pb: '14px' } }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#0f172a', mb: 1, fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                  Product tree
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {treeData.map((node) => {
                    const hasChildren = node.children && node.children.length > 0;
                    const isNodeExpanded = expandedItems.includes(node.id);
                    const isSelected = selectedNode === node.id;

                    return (
                      <Box key={node.id} sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {/* Parent Node */}
                        <Box
                          onClick={() => {
                            if (hasChildren) {
                              if (isNodeExpanded) {
                                setExpandedItems(expandedItems.filter(item => item !== node.id));
                              } else {
                                setExpandedItems([...expandedItems, node.id]);
                              }
                            } else {
                              setSelectedNode(node.id);
                            }
                          }}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            py: '5px',
                            px: '8px',
                            borderRadius: '8px',
                            userSelect: 'none',
                            bgcolor: isSelected ? (node.id === 'Contact' || node.id === 'Help' ? '#e2e8f0' : '#eef2f6') : 'transparent',
                            '&:hover': {
                              bgcolor: isSelected ? (node.id === 'Contact' || node.id === 'Help' ? '#e2e8f0' : '#eef2f6') : '#f1f5f9'
                            }
                          }}
                        >
                          {hasChildren ? (
                            isNodeExpanded ? <KeyboardArrowDown sx={{ fontSize: 16, color: '#1e293b' }} /> : <KeyboardArrowRight sx={{ fontSize: 16, color: '#1e293b' }} />
                          ) : (
                            <Circle sx={{ fontSize: 6, color: node.color || '#3b82f6' }} />
                          )}
                          <Typography sx={{ fontSize: '0.825rem', color: '#1e293b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                            {node.label}
                          </Typography>
                        </Box>

                        {/* Children */}
                        {hasChildren && isNodeExpanded && (
                          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2, pl: 1.5, borderLeft: '1px solid #f1f5f9', gap: '2px' }}>
                            {node.children.map((child) => {
                              const isChildSelected = selectedNode === child.id;
                              const hasSubChildren = child.children && child.children.length > 0;
                              const isSubExpanded = expandedItems.includes(child.id);

                              return (
                                <Box key={child.id} sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                  <Box
                                    onClick={() => {
                                      if (hasSubChildren) {
                                        if (isSubExpanded) {
                                          setExpandedItems(expandedItems.filter(item => item !== child.id));
                                        } else {
                                          setExpandedItems([...expandedItems, child.id]);
                                        }
                                      } else {
                                        setSelectedNode(child.id);
                                      }
                                    }}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      gap: '8px',
                                      cursor: 'pointer',
                                      py: '5px',
                                      px: '8px',
                                      borderRadius: '8px',
                                      userSelect: 'none',
                                      bgcolor: isChildSelected ? (child.id === 'Pricing' ? '#dbeafe' : '#e2e8f0') : 'transparent',
                                      '&:hover': {
                                        bgcolor: isChildSelected ? (child.id === 'Pricing' ? '#dbeafe' : '#e2e8f0') : '#f1f5f9'
                                      }
                                    }}
                                  >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                      {hasSubChildren ? (
                                        isSubExpanded ? <KeyboardArrowDown sx={{ fontSize: 14, color: '#1e293b' }} /> : <KeyboardArrowRight sx={{ fontSize: 14, color: '#1e293b' }} />
                                      ) : (
                                        <Circle sx={{ fontSize: 6, color: child.color || '#22c55e' }} />
                                      )}
                                      <Typography sx={{ fontSize: '0.825rem', color: '#1e293b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                                        {child.label}
                                      </Typography>
                                    </Box>
                                    {hasSubChildren && (
                                      isSubExpanded ? <KeyboardArrowDown sx={{ fontSize: 14, color: '#64748b' }} /> : <KeyboardArrowRight sx={{ fontSize: 14, color: '#64748b' }} />
                                    )}
                                  </Box>
                                </Box>
                              );
                            })}
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>

            {/* Users by Country Card */}
            <Card variant="outlined" sx={{ borderRadius: '8px', borderColor: '#e2e8f0', bgcolor: '#ffffff', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: '14px 16px', '&:last-child': { pb: '14px' }, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#0f172a', mb: 2, fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                  Users by country
                </Typography>

                {/* Donut Total Graphic with real MUI PieChart */}
                <Box 
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}
                  onMouseMove={(e) => {
                    setMousePos({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
                >
                  <Box sx={{ position: 'relative', width: 180, height: 180 }}>
                    <PieChart
                      series={[
                        {
                          id: 'country-series',
                          data: [
                            { id: 0, value: 49250, label: 'India', color: (highlightedItem ? highlightedItem.dataIndex : hoveredSlice) === null || (highlightedItem ? highlightedItem.dataIndex : hoveredSlice) === 0 ? '#0f172a' : '#e2e8f0' },
                            { id: 1, value: 34475, label: 'USA', color: (highlightedItem ? highlightedItem.dataIndex : hoveredSlice) === null || (highlightedItem ? highlightedItem.dataIndex : hoveredSlice) === 1 ? '#334155' : '#e2e8f0' },
                            { id: 2, value: 9850, label: 'Brazil', color: (highlightedItem ? highlightedItem.dataIndex : hoveredSlice) === null || (highlightedItem ? highlightedItem.dataIndex : hoveredSlice) === 2 ? '#475569' : '#e2e8f0' },
                            { id: 3, value: 4925, label: 'Other', color: (highlightedItem ? highlightedItem.dataIndex : hoveredSlice) === null || (highlightedItem ? highlightedItem.dataIndex : hoveredSlice) === 3 ? '#64748b' : '#e2e8f0' },
                          ],
                          innerRadius: 65,
                          outerRadius: 85,
                          paddingAngle: 2,
                          cornerRadius: 4,
                          cx: 86,
                          cy: 86,
                          highlightScope: { faded: 'none', highlighted: 'item' },
                          valueFormatter: (v) => typeof v === 'object' ? `${v.value.toLocaleString()}` : `${v.toLocaleString()}`
                        },
                      ]}
                      highlightedItem={highlightedItem}
                      onHighlightChange={(item) => {
                        setHighlightedItem(item);
                        if (!item) {
                          setHoveredSlice(null);
                        } else {
                          setHoveredSlice(item.dataIndex);
                        }
                      }}
                      width={180}
                      height={180}
                      slots={{ 
                        legend: () => null,
                        tooltip: () => null 
                      }}
                      slotProps={{
                        legend: { hidden: true },
                        tooltip: { trigger: 'none' }
                      }}
                    />
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
                      <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif', lineHeight: 1.1 }}>
                        98.5K
                      </Typography>
                      <Typography sx={{ fontSize: '0.875rem', color: '#64748b', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                        Total
                      </Typography>
                    </Box>

                    {(highlightedItem ? highlightedItem.dataIndex : hoveredSlice) !== null && (
                      <Box
                        sx={{
                          position: 'fixed',
                          // If we have mouse position (hovering over chart), follow mouse using screen coords. 
                          // If not (hovering over list), show at fixed bottom position of the container.
                          ...(mousePos.x && mousePos.y ? {
                            left: mousePos.x + 15,
                            top: mousePos.y + 15,
                          } : {
                            position: 'absolute',
                            bottom: 25,
                            left: '50%',
                            transform: 'translateX(-50%)',
                          }),
                          bgcolor: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          py: '6px',
                          px: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          zIndex: 9999,
                        }}
                      >
                        <Box 
                          sx={{ 
                            width: 10, 
                            height: 10, 
                            borderRadius: '50%', 
                            bgcolor: ['#0f172a', '#334155', '#475569', '#64748b'][highlightedItem ? highlightedItem.dataIndex : hoveredSlice] 
                          }} 
                        />
                        <Typography sx={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                          {['India', 'USA', 'Brazil', 'Other'][highlightedItem ? highlightedItem.dataIndex : hoveredSlice]}
                        </Typography>
                        <Typography sx={{ fontSize: '0.875rem', color: '#0f172a', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                          {['49,250', '34,475', '9,850', '4,925'][highlightedItem ? highlightedItem.dataIndex : hoveredSlice]}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* Country progress bars */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { id: 0, flag: '🇮🇳', name: 'India', pct: 50 },
                    { id: 1, flag: '🇺🇸', name: 'USA', pct: 35 },
                    { id: 2, flag: '🇧🇷', name: 'Brazil', pct: 10 },
                    { id: 3, flag: '🌍', name: 'Other', pct: 5 },
                  ].map(c => {
                    const activeIndex = highlightedItem ? highlightedItem.dataIndex : hoveredSlice;
                    const isFaded = activeIndex !== null && activeIndex !== c.id;
                    return (
                      <Box
                        key={c.name}
                        onMouseEnter={() => {
                          setHighlightedItem({ seriesId: 'country-series', dataIndex: c.id });
                          setHoveredSlice(c.id);
                        }}
                        onMouseLeave={() => {
                          setHighlightedItem(null);
                          setHoveredSlice(null);
                        }}
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease-in-out'
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CountryFlag name={c.name} />
                            <Typography sx={{ fontSize: '0.825rem', color: '#1e293b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                              {c.name}
                            </Typography>
                          </Box>
                          <Typography sx={{ fontSize: '0.825rem', color: '#1e293b', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                            {c.pct}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={c.pct}
                          sx={{
                            height: 6,
                            borderRadius: '3px',
                            bgcolor: '#f1f5f9',
                            '& .MuiLinearProgress-bar': { bgcolor: isFaded ? '#cbd5e1' : '#475569', borderRadius: '3px' }
                          }}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsSection;
