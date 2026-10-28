"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, InputBase, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BlogHeader from "@/components/blog/BlogHeader";
import { blogPosts } from "@/constants/blogData";

const PURPLE = "#6C10BC";
const ORANGE = "#FB7F05";
const INK = "#1E1E1E";
const SLATE = "#475467";
const MUTED = "#8A8A99";
const LINE = "#E8E4F0";

function CategoryTag({ category }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        px: 1.25,
        py: 0.6,
        borderRadius: "6px",
        color: PURPLE,
        bgcolor: "rgba(108,16,188,0.1)",
        fontFamily: "Inter",
      }}
    >
      {category}
    </Box>
  );
}

function FeaturedCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <Box
        sx={{
          display: { xs: "block", md: "grid" },
          gridTemplateColumns: { md: "1.05fr 1fr" },
          bgcolor: "#fff",
          border: `1px solid ${LINE}`,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(20,12,40,0.08)",
          transition: "transform .18s ease, box-shadow .18s ease",
          cursor: "pointer",
          "&:hover": { transform: "translateY(-4px)", boxShadow: "0 18px 40px rgba(108,16,188,0.16)" },
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: { xs: 200, md: "100%" }, minHeight: { md: 240 }, bgcolor: "#06031a" }}>
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: "cover" }} />
        </Box>
        <Box sx={{ p: { xs: 2.5, md: 3.5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Box sx={{ mb: 1.25 }}>
            <CategoryTag category={post.category} />
          </Box>
          <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: { xs: 20, md: 24 }, lineHeight: 1.3, letterSpacing: "-0.3px", color: INK, mb: 1.25 }}>
            {post.title}
          </Typography>
          <Typography sx={{ fontFamily: "Inter", color: SLATE, fontSize: 15, lineHeight: 1.6, mb: 2 }}>
            {post.summary}
          </Typography>
          <Typography sx={{ fontFamily: "Inter", color: MUTED, fontSize: 13, fontWeight: 500 }}>
            By {post.author} · {post.date} · {post.readTime}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default function Blogs() {
  const publishedPosts = useMemo(() => blogPosts.filter((p) => p.published), []);
  const availableCats = useMemo(
    () => Array.from(new Set(publishedPosts.map((p) => p.category))),
    [publishedPosts]
  );
  const showFilter = availableCats.length > 1;

  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return publishedPosts.filter((p) => {
      const catOk = activeCat === "All" || p.category === activeCat;
      const q = query.trim().toLowerCase();
      const qOk = !q || p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [publishedPosts, activeCat, query]);

  return (
    <Box sx={{ bgcolor: "#fff", fontFamily: "Inter" }}>
      <BlogHeader />
      {/* Gradient hero */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          px: { xs: 2.25, md: 6 },
          pt: { xs: 4, md: 8 },
          pb: { xs: 5, md: 8 },
          background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
        }}
      >
        <Box sx={{ position: "absolute", right: -80, top: -40, width: 320, height: 320, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.12)", pointerEvents: "none" }} />
        <Typography component="h1" sx={{ fontSize: { xs: 30, md: 44 }, fontWeight: 800, letterSpacing: "-1px", mb: 1.5, maxWidth: 720, lineHeight: 1.12 }}>
          Guides, answers and student stories from inside Vedam.
        </Typography>
        <Typography sx={{ fontSize: { xs: 15, md: 17 }, opacity: 0.95, maxWidth: 580, mb: 3, lineHeight: 1.55 }}>
          Clear, no-fluff writing on admissions, VSAT, the CS &amp; AI curriculum and campus life — straight from the people who run Vedam.
        </Typography>
        <Box sx={{ display: "flex", bgcolor: "#fff", borderRadius: "12px", maxWidth: 460, p: 0.75, boxShadow: "0 10px 30px rgba(20,12,40,0.18)" }}>
          <InputBase
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            startAdornment={<SearchIcon sx={{ color: MUTED, mx: 1 }} />}
            sx={{ flex: 1, fontFamily: "Inter", fontSize: 14, color: INK }}
          />
        </Box>
      </Box>

      {/* Category pills — only shown when there's more than one category of content */}
      {showFilter && (
        <Box sx={{ display: "flex", gap: 1.25, flexWrap: "wrap", px: { xs: 2.25, md: 6 }, pt: 3, pb: 0.5 }}>
          {["All", ...availableCats].map((cat) => {
            const on = cat === activeCat;
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCat(cat)}
                sx={{
                  fontFamily: "Inter", fontWeight: 600, fontSize: 13, height: 38, px: 0.5, borderRadius: "999px", cursor: "pointer",
                  border: `1.5px solid ${on ? ORANGE : LINE}`, bgcolor: on ? ORANGE : "#fff", color: on ? "#fff" : "#262626",
                  "&:hover": { bgcolor: on ? ORANGE : "rgba(251,127,5,0.06)" },
                }}
              />
            );
          })}
        </Box>
      )}

      {/* Articles */}
      <Box sx={{ px: { xs: 2.25, md: 6 }, pt: showFilter ? 3 : 5, pb: 8, maxWidth: 1040, mx: "auto", width: "100%" }}>
        {filtered.length === 0 ? (
          <Typography sx={{ color: MUTED, py: 6, textAlign: "center" }}>No articles found.</Typography>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {filtered.map((post) => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
