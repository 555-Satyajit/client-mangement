import React from "react";
import { Box, Card, CardContent, Typography, Stack, Chip } from "@mui/material";

const PageViewsChart = () => {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const [hoverPos, setHoverPos] = React.useState({ x: 0, y: 0 });

  // Mock data for 6 months
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = React.useMemo(() => months.map((m, i) => ({
    month: m,
    views: 4000 + Math.random() * 2000,
    downloads: 3000 + Math.random() * 1500,
    conversions: 2000 + Math.random() * 1000,
  })), []);

  const w = 500, h = 240;
  const margin = { top: 10, right: 10, bottom: 30, left: 45 };
  const chartW = w - margin.left - margin.right;
  const chartH = h - margin.top - margin.bottom;

  const maxVal = 15000;
  const barWidth = 37;

  return (
    <Card variant="outlined" sx={{ borderRadius: '8px', borderColor: '#e2e8f0', overflow: 'visible', height: '100%', bgcolor: '#ffffff' }}>
      <CardContent sx={{ p: 2, overflow: 'visible', '&:last-child': { pb: 2 } }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 500, color: '#000000ff', mb: 0.5, fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
          Page views and downloads
        </Typography>
        <Stack sx={{ mb: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ fontWeight: 600, color: '#0f172a', fontSize: '1.5rem', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              1.3M
            </Typography>
            <Chip
              label="-8%"
              size="small"
              sx={{
                bgcolor: '#fef2f2',
                color: '#dc2626',
                fontWeight: 700,
                height: 20,
                fontSize: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #fee2e2',
                transform: 'translateY(7px)'
               
              }}
            />
          </Stack>
          <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', fontSize: '0.75rem', fontFamily: 'Inter, sans-serif' }}>
            Page views and downloads for the last 6 months
          </Typography>
        </Stack>

        <Box 
          sx={{ position: 'relative', mt: 3, height: h }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const chartX = x - margin.left;
            const idx = Math.max(0, Math.min(data.length - 1, Math.floor((chartX / chartW) * data.length)));
            setHoverIdx(idx);
            setHoverPos({ x, y });
          }}
          onMouseLeave={() => setHoverIdx(null)}
        >
          <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            {/* Horizontal Grid Lines */}
            {[0, 5000, 10000, 15000].map(v => {
              const y = margin.top + chartH - (v / maxVal) * chartH;
              return (
                <g key={v}>
                  <line x1={0} y1={y} x2={w - margin.right} y2={y} stroke="#f1f5f9" strokeDasharray="4 4" />
                  <text x={0} y={y - 6} textAnchor="start" fontSize="11" fill="#64748b" fontWeight="500" fontFamily="Inter, sans-serif">
                    {v.toLocaleString()}
                  </text>
                </g>
              );
            })}

            {/* Y-Axis Line */}
            <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartH} stroke="#cbd5e1" strokeWidth="1" />

            {/* X-Axis Line */}
            <line x1={0} y1={margin.top + chartH} x2={w} y2={margin.top + chartH} stroke="#cbd5e1" strokeWidth="1" />

            <g transform={`translate(${margin.left}, ${margin.top})`}>
              {data.map((d, i) => {
                const x = (i / (data.length)) * chartW + (chartW / data.length / 2) - barWidth / 2;

                const h1 = (d.views / maxVal) * chartH;
                const h2 = (d.downloads / maxVal) * chartH;
                const h3 = (d.conversions / maxVal) * chartH;

                const isHovered = hoverIdx === i;

                return (
                  <g
                    key={i}
                    onMouseEnter={() => setHoverIdx(i)}
                    onMouseLeave={() => setHoverIdx(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Background grey bar on hover */}
                    {isHovered && (
                      <rect
                        x={x - 10}
                        y={0}
                        width={barWidth + 20}
                        height={chartH}
                        fill="#f1f5f9"
                        opacity={0.6}
                        rx={6}
                      />
                    )}

                    {/* Stacked Bars with Top-Only Rounding */}
                    {/* Top Segment */}
                    <rect
                      x={x}
                      y={chartH - h1 - h2 - h3}
                      width={barWidth}
                      height={h3 + 10}
                      fill="hsl(210, 100%, 80%)"
                      rx="8"
                      ry="8"
                      opacity={isHovered ? 1 : 0.9}
                    />
                    {/* Middle Segment */}
                    <rect
                      x={x}
                      y={chartH - h1 - h2}
                      width={barWidth}
                      height={h2 + 10}
                      fill="hsl(210, 98%, 48%)"
                      opacity={isHovered ? 1 : 0.9}
                    />
                    {/* Bottom Segment */}
                    <rect
                      x={x}
                      y={chartH - h1}
                      width={barWidth}
                      height={h1}
                      fill="hsl(210, 100%, 35%)"
                      opacity={isHovered ? 1 : 0.9}
                    />

                    {/* Month Label */}
                    <text x={x + barWidth / 2} y={chartH + 20} textAnchor="middle" fontSize="10" fill="#94a3b8" fontWeight="400" fontFamily="Inter, sans-serif">
                      {d.month}
                    </text>
                  </g>
                );
              })}
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
                  {data[hoverIdx].month}
                </Typography>
              </Box>
              <Box sx={{ p: '12px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { label: 'Page views', val: Math.round(data[hoverIdx].views), color: 'hsl(210, 100%, 35%)' },
                  { label: 'Downloads', val: Math.round(data[hoverIdx].downloads), color: 'hsl(210, 98%, 48%)' },
                  { label: 'Conversions', val: Math.round(data[hoverIdx].conversions), color: 'hsl(210, 100%, 80%)' },
                ].map(s => (
                  <Box key={s.label} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                      <Box sx={{ width: 12, height: 12, bgcolor: s.color, borderRadius: '3px' }} />
                      <Typography sx={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                        {s.label}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#1e293b', fontFamily: 'Inter, sans-serif' }}>
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

export default PageViewsChart;
