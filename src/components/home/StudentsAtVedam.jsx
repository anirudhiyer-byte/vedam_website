"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const posterBackground = "#0C092F";

// Unified carousel: plain-image slides plus one clickable video slide.
// A slide with a `video` field opens the YouTube embed in place when tapped.
const slides = [
    {
        src: "/img/studentSuccess/outcome_home_internships.webp",
        alt: "Vedam first-year students secured 8+ paid internships",
        width: 5190,
        height: 2320,
    },
    {
        src: "/img/studentSuccess/outcome_home_global.webp",
        alt: "Vedam students cracked global opportunities on LFX and HackerOne",
        width: 5190,
        height: 2310,
    },
    {
        src: "/img/studentSuccess/outcome_home_jee.webp",
        alt: "Students with 96+ JEE percentile have chosen Vedam School of Technology",
        width: 5190,
        height: 2305,
        video: "https://www.youtube.com/embed/XvTqUQL1JIY?autoplay=1&start=1",
    },
    {
        src: "/img/studentSuccess/outcome_home_hackathon.webp",
        alt: "Vedam students secured 2nd place at Hack with Hyderabad 3.0, Microsoft Campus",
        width: 5190,
        height: 2305,
    },
];

export const StudentsAtVedam = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const videoSlideIndex = slides.findIndex((slide) => slide.video);
    const totalSlides = slides.length;

    useEffect(() => {
        if (playVideo) {
            return undefined;
        }

        const interval = window.setInterval(() => {
            setActiveSlide((currentSlide) => (currentSlide + 1) % totalSlides);
        }, 4000);

        return () => window.clearInterval(interval);
    }, [playVideo, totalSlides]);

    const handleSlideChange = (nextSlide) => {
        setActiveSlide(nextSlide);

        if (nextSlide !== videoSlideIndex) {
            setPlayVideo(false);
        }
    };

    return (
        <Box
            sx={{
                width: "100vw",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: posterBackground,
                py: { xs: "20px", md: "44px" },
            }}
        >
            <Box
                sx={{
                    maxWidth: "1280px",
                    width: { xs: "100%", md: "1024px", xl: "1280px" },
                    mx: "auto",
                    px: "10px",
                    boxSizing: "border-box",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        position: "relative",
                        borderRadius: { xs: "0px", md: "16px" },
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            transform: `translateX(-${activeSlide * 100}%)`,
                            transition: "transform 0.45s ease",
                        }}
                    >
                        {slides.map((slide, slideIndex) => {
                            const isVideoSlide = Boolean(slide.video);
                            const isPlaying =
                                isVideoSlide && playVideo && activeSlide === slideIndex;

                            return (
                                <Box
                                    key={slide.src}
                                    onClick={isVideoSlide ? () => setPlayVideo(true) : undefined}
                                    onKeyDown={
                                        isVideoSlide
                                            ? (e) => {
                                                  if (e.key === "Enter" || e.key === " ") {
                                                      setPlayVideo(true);
                                                  }
                                              }
                                            : undefined
                                    }
                                    role={isVideoSlide ? "button" : undefined}
                                    tabIndex={isVideoSlide ? 0 : undefined}
                                    aria-label={
                                        isVideoSlide ? "Play Students at Vedam video" : undefined
                                    }
                                    sx={{
                                        flex: "0 0 100%",
                                        width: "100%",
                                        position: "relative",
                                        cursor:
                                            isVideoSlide && !isPlaying ? "pointer" : "default",
                                        outline: "none",
                                    }}
                                >
                                    {isPlaying ? (
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: { xs: "220px", md: "420px" },
                                                position: "relative",
                                            }}
                                        >
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={slide.video}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen
                                            />
                                        </Box>
                                    ) : (
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            width={slide.width}
                                            height={slide.height}
                                            style={{ width: "100%", height: "auto", display: "block" }}
                                        />
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                <Box
                    sx={{
                        mt: { xs: "10px", md: "16px" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: 1.5, md: 2 },
                    }}
                >
                    <IconButton
                        onClick={() =>
                            handleSlideChange((activeSlide - 1 + totalSlides) % totalSlides)
                        }
                        aria-label="Previous slide"
                        size="small"
                        sx={{
                            border: "1px solid #D9D9D9",
                            width: 34,
                            height: 34,
                            color: "#1C1C1C",
                        }}
                    >
                        <KeyboardArrowLeftRoundedIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <Box
                                key={slideIndex}
                                component="button"
                                type="button"
                                onClick={() => handleSlideChange(slideIndex)}
                                aria-label={`Go to slide ${slideIndex + 1}`}
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    border: "none",
                                    padding: 0,
                                    cursor: "pointer",
                                    backgroundColor:
                                        activeSlide === slideIndex ? "#FB7F05" : "#D0D0D0",
                                }}
                            />
                        ))}
                    </Box>

                    <IconButton
                        onClick={() => handleSlideChange((activeSlide + 1) % totalSlides)}
                        aria-label="Next slide"
                        size="small"
                        sx={{
                            border: "1px solid #D9D9D9",
                            width: 34,
                            height: 34,
                            color: "#1C1C1C",
                        }}
                    >
                        <KeyboardArrowRightRoundedIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};
