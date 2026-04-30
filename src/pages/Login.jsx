import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { LogIn, User, ShieldCheck, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('client');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(email, password, activeTab);
    navigate(`/${activeTab}/dashboard`);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ 
      background: 'radial-gradient(circle at top right, var(--primary-900), transparent), radial-gradient(circle at bottom left, var(--slate-950), transparent)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card" 
        style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ 
            width: '60px', height: '60px', 
            background: 'var(--primary-500)', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 1rem',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'
          }}>
            <LogIn size={32} color="white" />
          </div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Access your agency project dashboard
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: '12px', 
          padding: '4px',
          marginBottom: '2rem'
        }}>
          <button 
            onClick={() => setActiveTab('client')}
            style={{ 
              flex: 1, padding: '0.5rem', borderRadius: '8px', border: 'none',
              background: activeTab === 'client' ? 'var(--primary-500)' : 'transparent',
              color: 'white', cursor: 'pointer', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              fontWeight: 500
            }}
          >
            <User size={16} /> Client
          </button>
          <button 
            onClick={() => setActiveTab('admin')}
            style={{ 
              flex: 1, padding: '0.5rem', borderRadius: '8px', border: 'none',
              background: activeTab === 'admin' ? 'var(--primary-500)' : 'transparent',
              color: 'white', cursor: 'pointer', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              fontWeight: 500
            }}
          >
            <ShieldCheck size={16} /> Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ position: 'relative' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input 
                type="email" 
                required 
                placeholder="hello@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ 
                  width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', 
                  borderRadius: '10px', border: '1px solid var(--border-color)',
                  background: 'rgba(255,255,255,0.03)', color: 'white',
                  outline: 'none'
                }}
                className="input-focus"
              />
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input 
                type="password" 
                required 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ 
                  width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', 
                  borderRadius: '10px', border: '1px solid var(--border-color)',
                  background: 'rgba(255,255,255,0.03)', color: 'white',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', padding: '0.875rem' }}>
            Sign In to Dashboard
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Don't have an account? <span style={{ color: 'var(--primary-400)', cursor: 'pointer' }}>Sign up</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
