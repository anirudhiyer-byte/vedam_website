import React from "react";
import { Typography } from "@mui/material";

// AICTE/ASCI: a past-record disclaimer placed directly with each outcome block,
// no smaller than body text.
export const OutcomeDisclaimer = ({ sx = {} }) => (
  <Typography
    sx={{
      fontFamily: "Inter, sans-serif",
      fontSize: { xs: "12px", md: "14px" },
      lineHeight: 1.5,
      color: "#475467",
      ...sx,
    }}
  >
    Past record is no guarantee of future prospects. Individual results are shown;
    outcomes vary with each student&apos;s skills, effort, selection criteria and the
    opportunities available.
  </Typography>
);

export default OutcomeDisclaimer;
