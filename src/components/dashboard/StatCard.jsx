import React from "react";
import { Box, Card, Typography, Chip, Stack } from "@mui/material";

function Sparkline({ data, color, id }) {
  const [hoverInfo, setHoverInfo] = React.useState(null);
  const w = 300, h = 50; 
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 10) - 5;
    return { x, y, val: v };
  });

  const ptsStr = points.map(p => `${p.x},${p.y}`).join(" ");
  const fillPts = `${ptsStr} ${w},${h} 0,${h}`;
  const gradId = `grad-${id.replace(/\s+/g, '-')}`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const index = Math.max(0, Math.min(data.length - 1, Math.round((mouseX / rect.width) * (data.length - 1))));
    setHoverInfo({
      ...points[index],
      mouseX: e.clientX - rect.left,
      mouseY: e.clientY - rect.top
    });
  };

  return (
    <Box 
      onMouseMove={handleMouseMove} 
      onMouseLeave={() => setHoverInfo(null)}
      sx={{ position: 'relative', width: '100%', height: 50, cursor: 'crosshair' }}
    >
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: 50, display: "block" }}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={fillPts} fill={`url(#${gradId})`} />
        <polyline points={ptsStr} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        {hoverInfo && (
          <circle 
            cx={hoverInfo.x} 
            cy={hoverInfo.y} 
            r="4" 
            fill={color} 
            stroke="#fff" 
            strokeWidth="2" 
          />
        )}
      </svg>
      
      {hoverInfo && (
        <Box sx={{
          position: 'absolute',
          left: `${(hoverInfo.x / w) * 100}%`,
          top: -75,
          transform: 'translateX(-50%)',
          bgcolor: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          boxShadow: '0 12px 20px -5px rgba(0,0,0,0.15)',
          zIndex: 10,
          pointerEvents: 'none',
          minWidth: '120px',
          overflow: 'hidden'
        }}>
          <Box sx={{ bgcolor: '#f8fafc', px: 1.5, py: 0.8, borderBottom: '1px solid #e2e8f0' }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textAlign: 'center' }}>
              Apr {20 + Math.floor(hoverInfo.x / (w / 10))}
            </Typography>
          </Box>
          <Box sx={{ px: 1.5, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: 10, height: 2, bgcolor: color, borderRadius: 1, mr: 1.5 }} />
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
              {hoverInfo.val.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

function StatCard({ title, badge, value, sparkData, sparkColor }) {
  const isPositive = badge?.startsWith('+');
  const isNegative = badge?.startsWith('-');
  const isNeutral = sparkColor === '#94a3b8';
  
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        height: '100%', 
        borderRadius: '8px', 
        p: 1.5, 
        display: 'flex', 
        flexDirection: 'column', 
        minWidth: 0,
        bgcolor: '#ffffff',
        borderColor: '#f1f5f9',
        overflow: 'visible'
      }}
    >
      <Typography variant="subtitle2" sx={{ color: '#000000', fontWeight: 600, mb: 0.5, fontFamily: 'Inter, sans-serif' }}>
        {title}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 0.5 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em', flexGrow: 1, fontFamily: 'Inter, sans-serif' }}>
            {value}
          </Typography>
          <Chip 
            label={badge} 
            size="small" 
            sx={{ 
              bgcolor: isNeutral ? '#f1f5f9' : (isPositive ? '#f0fdf4' : isNegative ? '#fef2f2' : '#f8fafc'), 
              color: isNeutral ? '#475569' : (isPositive ? 'hsla(120, 59%, 30%, 1)' : isNegative ? 'hsla(1, 67%, 36%, 1)' : '#64748b'), 
              fontWeight: 700, 
              borderRadius: "12px", 
              height: 22, 
              fontSize: '0.75rem',
              px: 0.5,
              border: `1px solid ${isNeutral ? '#e2e8f0' : (isPositive ? '#dcfce7' : isNegative ? '#fee2e2' : '#f1f5f9')}`,
              fontFamily: 'Inter, sans-serif'
            }} 
          />
        </Box>
        <Typography variant="caption" sx={{ color: 'hsla(220, 20%, 35%, 1)', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
          Last 30 days
        </Typography>
      </Box>
      <Box sx={{ mt: 1, overflow: 'visible' }}>
        <Sparkline data={sparkData} color={sparkColor} id={title} />
      </Box>
    </Card>
  );
}

export default StatCard;
