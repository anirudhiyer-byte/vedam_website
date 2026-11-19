"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { detailsData } from "@/constants/data";

// Desktop placement for the four small cards (2×2 block on the left).
// The featured card sits in column 3 and spans both rows; the mentor
// banner sits in row 3 spanning the two small-card columns.
const smallPos = [
  { gridColumn: "1", gridRow: "1" },
  { gridColumn: "2", gridRow: "1" },
  { gridColumn: "1", gridRow: "2" },
  { gridColumn: "2", gridRow: "2" },
];

const WhyVedam = ({ data }) => {
  const dataArr = data ? data : detailsData;

  const gridItems = dataArr.slice(0, 4);
  const featuredItem = dataArr[4];

  return (
    <Box
      sx={{
        // 80% width (20% smaller), left-aligned under the heading.
        width: { xs: "100%", md: "80%" },
        mr: { md: "auto" },
        alignSelf: "flex-start",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1.4fr" },
        gap: "16px",
      }}
    >
      {gridItems.map((item, index) => (
        <Box
          key={`why-${index}`}
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "1160 / 1005",
            borderRadius: "16px",
            overflow: "hidden",
            gridColumn: { md: smallPos[index].gridColumn },
            gridRow: { md: smallPos[index].gridRow },
          }}
        >
          <Image
            src={item.img}
            alt={`${item.title} — ${item.description}`}
            fill
            sizes="(max-width: 900px) 100vw, 260px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      ))}

      {featuredItem && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: { xs: "1660 / 2065", md: "auto" },
            borderRadius: "16px",
            overflow: "hidden",
            gridColumn: { md: "3" },
            gridRow: { md: "1 / span 2" },
          }}
        >
          <Image
            src={featuredItem.img}
            alt={`${featuredItem.title} — ${featuredItem.description}`}
            fill
            sizes="(max-width: 900px) 100vw, 400px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      )}

      {/* Mentor / instructor banner — full-width, short strip below the cards.
          Cropped from the top so the logos + faces stay in view. */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: { xs: "2 / 1", md: "3 / 1" },
          borderRadius: "16px",
          overflow: "hidden",
          gridColumn: { xs: "1", md: "1 / -1" },
          gridRow: { md: "3" },
        }}
      >
        <Image
          src="/img/whyvedam/img1.webp"
          alt="Vedam mentors from Apple, Google, ByteDance and other top tech companies"
          fill
          sizes="(max-width: 900px) 100vw, 940px"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </Box>
    </Box>
  );
};

export default WhyVedam;
