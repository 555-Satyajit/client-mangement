import React from "react";
import { Box, Card, CardContent, Typography, Stack, Chip } from "@mui/material";

const SessionsChart = () => {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const [hoverPos, setHoverPos] = React.useState({ x: 0, y: 0 });

  // Mock data for 30 days
  const data = React.useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    organic: 2000 + i * 100 + Math.random() * 500,
    referral: 1500 + i * 80 + Math.random() * 400,
    direct: 1000 + i * 50 + Math.random() * 300,
  })), []);

  const w = 500, h = 240;
  const margin = { top: 10, right: 0, bottom: 20, left: 45 };
  const chartW = w - margin.left - margin.right;
  const chartH = h - margin.top - margin.bottom;

  const maxVal = 25000;

  const getPoints = (series) => {
    return data.map((d, i) => {
      const x = (i / (data.length - 1)) * chartW;
      let val = 0;
      if (series === 'organic') val = d.organic;
      if (series === 'referral') val = d.organic + d.referral;
      if (series === 'direct') val = d.organic + d.referral + d.direct;
      const y = chartH - (val / maxVal) * chartH;
      return { x, y };
    });
  };

  const organicPoints = getPoints('organic');
  const referralPoints = getPoints('referral');
  const directPoints = getPoints('direct');

  const ptsToStr = (pts) => pts.map(p => `${p.x},${p.y}`).join(" ");
  const fillPath = (pts) => `${ptsToStr(pts)} ${chartW},${chartH} 0,${chartH}`;

  return (
    <Card variant="outlined" sx={{ borderRadius: '8px', borderColor: '#e2e8f0', overflow: 'visible', height: '100%', bgcolor: '#ffffff', p: 0 }}>
      <CardContent sx={{ p: 2, overflow: 'visible', '&:last-child': { pb: 2 } }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#0f172a", mb: 0.5, fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
          Sessions
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#0f172a", fontSize: '1.5rem', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              13,277
            </Typography>
            <Chip
              label="+35%"
              size="small"
              sx={{
                bgcolor: 'hsla(120, 50%, 94%, 1)',
                color: 'hsla(120, 60%, 30%, 1)',
                fontWeight: 700,
                height: 20,
                fontSize: '0.75rem',
                borderRadius: '6px',
                border: '1px solid hsla(120, 50%, 85%, 1)',
                transform: 'translateY(7px)'
              }}
            />
          </Stack>
        </Stack>
        <Typography variant="caption" sx={{ color: "#64748b", mb: 2, display: 'block', fontSize: '0.75rem', fontFamily: 'Inter, sans-serif' }}>
          Sessions per day for the last 30 days
        </Typography>

        <Box
          sx={{ position: 'relative', mt: 3, height: h }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const chartX = x - margin.left;
            const idx = Math.max(0, Math.min(29, Math.round((chartX / chartW) * 29)));
            setHoverIdx(idx);
            setHoverPos({ x, y });
          }}
          onMouseLeave={() => setHoverIdx(null)}
        >
          <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <defs>
              <linearGradient id="grad-organic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210, 100%, 35%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(210, 100%, 35%)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="grad-referral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210, 98%, 48%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(210, 98%, 48%)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="grad-direct" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210, 100%, 80%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(210, 100%, 80%)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid Lines */}
            {[0, 5000, 10000, 15000, 20000, 25000].map(v => {
              const y = margin.top + chartH - (v / maxVal) * chartH;
              return (
                <g key={v}>
                  <line x1={0} y1={y} x2={w} y2={y} stroke="#f1f5f9" strokeDasharray="0" />
                  <text x={0} y={y - 6} textAnchor="start" fontSize="11" fill="#64748b" fontWeight="500" fontFamily="Inter, sans-serif">
                    {v === 0 ? '0' : v.toLocaleString()}
                  </text>
                </g>
              );
            })}

            {/* Y-Axis Line */}
            <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartH} stroke="#cbd5e1" strokeWidth="1" />

            {/* X-Axis Line */}
            <line x1={0} y1={margin.top + chartH} x2={w} y2={margin.top + chartH} stroke="#cbd5e1" strokeWidth="1" />

            {/* X-Axis Ticks */}
            {[0, 6, 12, 18, 24, 29].map(idx => {
              const x = margin.left + (idx / 29) * chartW;
              return <line key={idx} x1={x} y1={margin.top + chartH} x2={x} y2={margin.top + chartH + 6} stroke="#cbd5e1" strokeWidth="1" />;
            })}

            <g transform={`translate(${margin.left}, ${margin.top})`}>
              {/* Area Fills */}
              <polygon points={fillPath(directPoints)} fill="url(#grad-direct)" />
              <polygon points={fillPath(referralPoints)} fill="url(#grad-referral)" />
              <polygon points={fillPath(organicPoints)} fill="url(#grad-organic)" />

              {/* Stroke Lines */}
              <polyline points={ptsToStr(directPoints)} fill="none" stroke="hsl(210, 100%, 80%)" strokeWidth="2" strokeLinejoin="round" />
              <polyline points={ptsToStr(referralPoints)} fill="none" stroke="hsl(210, 98%, 48%)" strokeWidth="2" strokeLinejoin="round" />
              <polyline points={ptsToStr(organicPoints)} fill="none" stroke="hsl(210, 100%, 35%)" strokeWidth="2" strokeLinejoin="round" />

              {/* Hover Cursor and Markers */}
              {hoverIdx !== null && (
                <>
                  <line
                    x1={(hoverIdx / 29) * chartW} y1={0}
                    x2={(hoverIdx / 29) * chartW} y2={chartH}
                    stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"
                  />
                  {[directPoints, referralPoints, organicPoints].map((pts, i) => (
                    <circle
                      key={i}
                      cx={pts[hoverIdx].x}
                      cy={pts[hoverIdx].y}
                      r="3.5"
                      fill="white"
                      stroke={i === 0 ? "hsl(210, 100%, 80%)" : i === 1 ? "hsl(210, 98%, 48%)" : "hsl(210, 100%, 35%)"}
                      strokeWidth="2"
                    />
                  ))}
                </>
              )}
            </g>
          </svg>

          {/* Multi-series Tooltip */}
          {hoverIdx !== null && (
            <Box sx={{
              position: 'absolute',
              left: hoverPos.x + 15 > w - 230
                ? hoverPos.x - 235
                : hoverPos.x + 15,
              top: Math.max(0, Math.min(hoverPos.y - 40, h - 170)),
              bgcolor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              minWidth: '220px',
              zIndex: 100,
              pointerEvents: 'none',
              overflow: 'hidden'
            }}>
              <Box sx={{
                bgcolor: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                p: '10px 16px',
              }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: '#334155', fontFamily: 'Inter, sans-serif' }}>
                  Apr {hoverIdx + 1}
                </Typography>
              </Box>
              <Box sx={{ p: '12px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Direct', val: Math.round(data[hoverIdx].direct), color: 'hsl(210, 100%, 80%)' },
                  { label: 'Referral', val: Math.round(data[hoverIdx].referral), color: 'hsl(210, 98%, 48%)' },
                  { label: 'Organic', val: Math.round(data[hoverIdx].organic), color: 'hsl(210, 100%, 35%)' },
                ].map(s => (
                  <Box key={s.label} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                      <Box sx={{ width: 14, height: 4, bgcolor: s.color, borderRadius: 2 }} />
                      <Typography sx={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                        {s.label}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
                      {s.val.toLocaleString()}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SessionsChart;
