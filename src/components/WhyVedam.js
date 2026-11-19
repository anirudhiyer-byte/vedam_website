"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { detailsData } from "@/constants/data";

// Desktop placement for the four small cards (2×2 block on the left).
// The featured card sits in column 3 and spans both rows.
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
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1.4fr" },
        gap: "16px",
        width: "100%",
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
            sizes="(max-width: 900px) 100vw, 300px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      ))}

      {featuredItem && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            // On mobile the card keeps its own (portrait) aspect ratio; on
            // desktop it stretches to span both rows of the small-card block.
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
            sizes="(max-width: 900px) 100vw, 480px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default WhyVedam;
