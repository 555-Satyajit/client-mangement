import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

function InsightsCard() {
  return (
    <Card variant="outlined" sx={{ height: '100%', borderRadius: '8px', bgcolor: 'hsl(220, 35%, 97%)', borderColor: '#f1f5f9' }}>
      <CardContent sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', '&:last-child': { pb: 2 } }}>
        <Box sx={{ mb: 1, color: '#0f172a' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2" fill="currentColor" />
            <path d="m15 9 .94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11 4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z" fill="currentColor" />
          </svg>
        </Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#0f172a', mb: 0.2 }}>
          Explore your data
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mb: 1.5, fontSize: '0.8rem', lineHeight: 1.3 }}>
          Uncover performance and visitor insights with our data wizardry.
        </Typography>
        <Button
          variant="contained"
          size="small"
          endIcon={<Typography sx={{ fontSize: '1rem', ml: -0.5 }}>›</Typography>}
          sx={{
            background: 'linear-gradient(180deg, #334155 0%, #0f172a 100%)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
            border: '1px solid #0f172a',
            borderRadius: '6px',
            textTransform: "none",
            mt: 'auto',
            fontWeight: 600,
            fontSize: '0.85rem',
            py: 0.6,
            px: 2,
            width: 'fit-content',
            '&:hover': { 
              background: 'linear-gradient(180deg, #475569 0%, #1e293b 100%)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
            }
          }}
        >
          Get insights
        </Button>
      </CardContent>
    </Card>
  );
}

export default InsightsCard;
