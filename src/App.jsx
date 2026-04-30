import React from 'react';
import { Rocket, Palette, Terminal, Type } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg-main)',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card"
        style={{ padding: '3rem', maxWidth: '800px', width: '100%' }}
      >
        <div style={{ 
          width: '80px', height: '80px', 
          background: 'var(--primary-500)', 
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)'
        }}>
          <Type size={40} color="white" />
        </div>
        
        <h1 className="text-display" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Typography Scale
        </h1>
        
        <p className="text-heading" style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
          Inter Balanced • Platform Website
        </p>

        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <span className="badge badge-waiting" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Display</span>
            <div className="text-display">Ag — 67px</div>
          </div>
          <div>
            <span className="badge badge-progress" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Heading</span>
            <div className="text-heading">Ag — 38px</div>
          </div>
          <div>
            <span className="badge badge-review" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Body</span>
            <div className="text-body">Ag — 16px (26px LH)</div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
            <div>
              <span className="badge badge-completed" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Button</span>
              <div className="text-button btn btn-primary">Ag — 16px Button</div>
            </div>
            <div>
              <span className="badge badge-completed" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Caption</span>
              <div className="text-caption" style={{ color: 'var(--text-secondary)' }}>Ag — 12px Caption</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
          <div className="btn btn-secondary">
            <Palette size={18} /> Design System Active
          </div>
          <div className="btn btn-secondary">
            <Terminal size={18} /> Ready for Repository
          </div>
        </div>
      </motion.div>

      <footer className="text-caption" style={{ marginTop: '3rem', color: 'var(--text-secondary)' }}>
        Built with Vite + React + Palette Pal Design Tokens
      </footer>
    </div>
  );
}

export default App;
