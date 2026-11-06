import React from "react";
import { Box, Typography } from "@mui/material";

const TERMS = [
  ["Merit Scholarship", "decided on your overall application: VSAT score, Class 12 / JEE performance and your personal interview."],
  ["Women in Tech Scholarship", "awarded to eligible women applicants on the strength of their overall profile."],
  ["Need-Based Scholarship", "up to 30%, granted against the required proof-of-need documents."],
];

export const ScholarshipTerms = () => (
  <Box
    sx={{
      mt: { xs: 2.5, md: 3 },
      border: "1px solid #E8E4F0",
      borderLeft: "4px solid #6C10BC",
      borderRadius: "12px",
      bgcolor: "#FAF7FF",
      p: { xs: 2.25, md: 2.75 },
    }}
  >
    <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: { xs: 14, md: 15 }, color: "#1E1E1E", mb: 1.5 }}>
      How our scholarships are awarded
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {TERMS.map(([title, detail]) => (
        <Box key={title} sx={{ display: "flex", gap: 1.25 }}>
          <Box sx={{ mt: "7px", width: 8, height: 8, borderRadius: "2px", flexShrink: 0, background: "linear-gradient(135deg,#6C10BC,#FB7F05)" }} />
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontSize: { xs: 13, md: 13.5 }, lineHeight: 1.55, color: "#1E1E1E" }}>
            <Box component="span" sx={{ fontWeight: 700 }}>{title}</Box> — {detail}
          </Typography>
        </Box>
      ))}
    </Box>
    <Typography sx={{ fontFamily: "Inter, sans-serif", fontSize: { xs: 12.5, md: 13 }, lineHeight: 1.5, color: "#475467", mt: 1.5 }}>
      All scholarships apply to tuition fees only (hostel and mess excluded). To retain a scholarship, you must maintain at least 75% attendance and 75% marks each year.
    </Typography>
  </Box>
);

export default ScholarshipTerms;
