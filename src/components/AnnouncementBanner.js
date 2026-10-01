"use client";
import { Box, Typography, Stack, Button } from "@mui/material";

const REGISTER_INTEREST_URL =
  "https://one.vedam.org/apply?utm_source=vedam_website&utm_medium=sticky_header&utm_campaign=vsat_early_registration";

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
        sx={{ px: 2, flexWrap: "wrap" }}
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
        <Button
          component="a"
          href={REGISTER_INTEREST_URL}
          target="_blank"
          rel="noopener noreferrer"
          disableElevation
          sx={{
            flexShrink: 0,
            backgroundColor: "#FFFFFF",
            color: "#6C10BC",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: { xs: 11, sm: 14 },
            lineHeight: 1,
            textTransform: "none",
            whiteSpace: "nowrap",
            borderRadius: "999px",
            px: { xs: 1.5, sm: 2.25 },
            py: { xs: 0.5, sm: 0.75 },
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.18)",
            transition: "transform 180ms ease, box-shadow 180ms ease",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              transform: "translateY(-1px)",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.28)",
            },
          }}
        >
          Register Now
        </Button>
      </Stack>
    </Box>
  );
}
