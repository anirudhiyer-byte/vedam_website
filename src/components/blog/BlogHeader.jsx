"use client";

import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

const SIGN_UP_URL =
  "https://one.vedam.org/apply?utm_source=vedam_website&utm_medium=blog_header&utm_campaign=vsat_early_registration";

// Minimal, glassy, translucent sticky header for the blog section.
export default function BlogHeader() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2.25, md: 6 },
        py: { xs: 1.25, md: 1.5 },
        bgcolor: "rgba(243, 243, 245, 0.72)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Link href="/" aria-label="Go to Vedam School of Technology home">
        <Image
          src="/img/vedam_logo.webp"
          alt="Vedam School of Technology logo"
          width={88}
          height={34}
          style={{ objectFit: "contain", width: "auto", height: "40px", cursor: "pointer" }}
          priority
        />
      </Link>
      <Box
        component="a"
        href={SIGN_UP_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          bgcolor: "#6C10BC",
          color: "#f9f9f9",
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: { xs: 13, md: 14 },
          px: { xs: 2, md: 2.5 },
          py: { xs: 1, md: 1.25 },
          borderRadius: "8px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          transition: "background-color 0.2s ease",
          "&:hover": { bgcolor: "#5a0ea0" },
        }}
      >
        Sign Up
      </Box>
    </Box>
  );
}
