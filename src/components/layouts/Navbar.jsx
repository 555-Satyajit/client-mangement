import React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  TextField,
  InputAdornment,
  IconButton,
  Badge,
  SvgIcon
} from '@mui/material';
import {
  BellRing,
  ChevronRight,
  Calendar
} from 'lucide-react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45-1-1-1"
      fill="#0f172a"
    />
  </svg>
);

const CustomSearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
      fill="#64748b"
    />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 3,
      bgcolor: 'transparent',
      mb: 1,
      '& input': {
        color: '#0f172a !important',
        WebkitTextFillColor: '#0f172a !important',
        opacity: '1 !important'
      }
    }}>
      {/* Breadcrumbs */}
      <Breadcrumbs
        separator={<ChevronRight size={14} color="#94a3b8" />}
        sx={{ '& .MuiBreadcrumbs-li': { fontSize: '0.875rem' } }}
      >
        <Link underline="none" color="#64748b" href="#" sx={{ fontWeight: 500, fontSize: '0.9rem', '&:hover': { color: '#1e293b' } }}>
          Dashboard
        </Link>
        <Typography sx={{ color: '#000000', fontWeight: 600, fontSize: '0.95rem' }}>
          Home
        </Typography>
      </Breadcrumbs>

      {/* Tools */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="search"
          size="small"
          placeholder="Search..."
          variant="outlined"
          sx={{
            width: 200,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              bgcolor: '#ffffff',
              height: 38,
              '& fieldset': { borderColor: '#cbd5e1' },
              '&:hover fieldset': { borderColor: '#94a3b8' },
              '&.Mui-focused': {
                outline: '2px solid hsla(210, 98%, 42%, 0.3)',
                '& fieldset': { borderColor: '#2563eb !important' }
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#64748b',
              opacity: 1
            }
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <CustomSearchIcon />
                </InputAdornment>
              ),
            }
          }}
        />

        <DatePicker
          defaultValue={dayjs('2023-04-17')}
          format="MMM DD, YYYY"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          slots={{
            openPickerButton: () => null
          }}
          slotProps={{
            textField: {
              size: 'small',
              onClick: () => setOpen(true),
              sx: {
                width: 175,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  bgcolor: '#ffffff',
                  height: 38,
                  cursor: 'pointer !important',
                  '& fieldset': { borderColor: '#cbd5e1' },
                  '&:hover fieldset': { borderColor: '#94a3b8' },
                  '&.Mui-focused': {
                    outline: '2px solid hsla(210, 98%, 42%, 0.3)',
                    '& fieldset': { borderColor: '#2563eb !important' }
                  }
                },
                '& .MuiInputBase-input': {
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }
              },
              slotProps: {
                input: {
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start" sx={{ pl: 1 }}>
                      <Calendar size={18} color="#0f172a" />
                    </InputAdornment>
                  )
                }
              }
            }
          }}
        />

        <Badge
          variant="dot"
          overlap="circular"
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#ef4444',
              minWidth: 10,
              height: 10,
              top: 2,
              right: 2,
              border: '2px solid #ffffff'
            }
          }}
        >
          <IconButton
            size="small"
            aria-label="Open notifications"
            sx={{
              bgcolor: '#fcfcfc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              p: 0.6,
              color: '#0f172a',
              '&:hover': { bgcolor: '#f8fafc', borderColor: '#cbd5e1' }
            }}
          >
            <SvgIcon fontSize="small">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z" />
            </SvgIcon>
          </IconButton>
        </Badge>
      </Box>
    </Box>
  );
};

export default Navbar;
