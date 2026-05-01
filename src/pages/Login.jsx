import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Divider, 
  FormLabel, 
  FormControl, 
  Link, 
  TextField, 
  Typography, 
  Stack, 
  Paper,
  styled,
  CssBaseline,
  Container
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Settings, 
  Wrench, 
  ThumbsUp, 
  Sparkles 
} from 'lucide-react';

// We explicitly use hex codes here to ensure the Login page matches the Light Template
// regardless of the global theme state.
const SignInCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  maxWidth: '450px', // Adjusted to match image proportions
  padding: theme.spacing(4, 5),
  gap: theme.spacing(2),
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  border: '1px solid hsla(220, 20%, 80%, 0.2)',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.05), 0px 15px 35px -5px rgba(0, 0, 0, 0.05)',
}));

const FeatureItem = ({ icon, title, desc }) => (
  <Stack direction="row" spacing={2.5} sx={{ mb: 4 }}>
    <Box sx={{ color: '#6366f1', mt: 0.5, display: 'flex' }}>
      {React.cloneElement(icon, { size: 20, strokeWidth: 2.5 })}
    </Box>
    <Box>
      <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5, color: '#1e293b', fontSize: '0.9rem' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#64748b', maxWidth: '380px', lineHeight: 1.6, fontSize: '0.85rem' }}>
        {desc}
      </Typography>
    </Box>
  </Stack>
);

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    transition: 'all 0.2s ease-in-out',
    '& fieldset': {
      borderColor: '#e2e8f0',
    },
    '&:hover fieldset': {
      borderColor: '#cbd5e1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#60a5fa',
      borderWidth: '2px',
    },
  },
  '& .MuiInputBase-input': {
    fontSize: '0.9rem',
    padding: '12px 14px',
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#94a3b8',
    opacity: 1,
  },
}));

const SitemarkLogo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
    <Box sx={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="4" width="4" height="16" rx="2" fill="#3b82f6" />
        <rect x="4" y="10" width="16" height="4" rx="2" fill="#3b82f6" />
        <path d="M7 7L17 17" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        <path d="M17 7L7 17" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      </svg>
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
      Sitemark
    </Typography>
  </Box>
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password, 'client');
    navigate('/client/dashboard');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', bgcolor: '#f8fafc', color: '#1e293b' }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: { md: 15 }, alignItems: 'center', py: 10, flexDirection: { xs: 'column', md: 'row' } }}>
          
          {/* Left Side: Features */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ mb: 8 }}>
              <SitemarkLogo />
            </Box>

            <FeatureItem icon={<Settings />} title="Adaptable performance" desc="Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks." />
            <FeatureItem icon={<Wrench />} title="Built to last" desc="Experience unmatched durability that goes above and beyond with lasting investment." />
            <FeatureItem icon={<ThumbsUp />} title="Great user experience" desc="Integrate our product into your routine with an intuitive and easy-to-use interface." />
            <FeatureItem icon={<Sparkles />} title="Innovative functionality" desc="Stay ahead with features that set new standards, addressing your evolving needs better than the rest." />
          </Box>

          {/* Right Side: Sign-in Card */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <SignInCard elevation={0}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, letterSpacing: -1, color: '#1e293b' }}>
                Sign in
              </Typography>
              
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Stack spacing={3}>
                  <FormControl>
                    <FormLabel sx={{ mb: 1, fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Email</FormLabel>
                    <StyledTextField
                      required
                      fullWidth
                      id="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <FormLabel sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Password</FormLabel>
                      <Link href="#" variant="body2" sx={{ fontWeight: 600, textDecoration: 'none', color: '#3b82f6' }}>Forgot your password?</Link>
                    </Box>
                    <StyledTextField
                      required
                      fullWidth
                      type="password"
                      id="password"
                      placeholder="••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <FormControlLabel
                    control={<Checkbox value="remember" sx={{ color: '#cbd5e1', '&.Mui-checked': { color: '#3b82f6' } }} />}
                    label={<Typography variant="body2" sx={{ fontWeight: 500, color: '#64748b' }}>Remember me</Typography>}
                    sx={{ mt: -0.5 }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ 
                      py: 1.5, 
                      borderRadius: '8px', 
                      fontWeight: 700,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      backgroundColor: '#1e293b',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      '&:hover': {
                        backgroundColor: '#0f172a',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      }
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>

                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', color: '#64748b' }}>
                  Don't have an account? <Link href="#" sx={{ fontWeight: 700, textDecoration: 'none', color: '#3b82f6' }}>Sign up</Link>
                </Typography>
              </Box>
            </SignInCard>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
