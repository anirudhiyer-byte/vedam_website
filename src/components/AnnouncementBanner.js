"use client";
import { Box, Typography, Stack } from "@mui/material";

export default function AnnouncementBanner() {
  return (
    <Box
      sx={{
        background: "linear-gradient(95.22deg, #FB7F05 2.91%, #6C10BC 99.18%)",
        color: "white",
        py: 1,
        position: "sticky",
        top: 0,
        zIndex: 11000,
        boxShadow: 1,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 1, sm: 2 }}
        sx={{ px: 2, flexWrap: "nowrap" }}
      >
        <Typography
          variant="body2"
          component="span"
          sx={{ fontSize: { xs: 11, sm: 16 }, textAlign: "center" }}
        >
          <strong>
            Admission for 2026 batch is closed. Register your interest for 2027
            batch now!
          </strong>
        </Typography>
      </Stack>
    </Box>
  );
}
