"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BlogHeader from "@/components/blog/BlogHeader";
import { REGISTER_VSAT_URL } from "@/constants/blogData";

const INK = "#262626";
const INK900 = "#101828";
const MUTED = "#929292";
const VIOLET = "#8A18FF";
const BTN_GRADIENT = "linear-gradient(90deg, #7629FC 3%, #AD5DFF 98%)";

const SECTIONS = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "each-year", label: "Each year" },
  { id: "how-different", label: "How it is different" },
  { id: "years-3-4", label: "Years 3 and 4" },
  { id: "key-takeaways", label: "Key takeaways" },
  { id: "faq", label: "FAQ" },
];

const SEMESTERS = [
  ["1", "Foundations of Programming (Java), Web Development I (HTML, CSS), System Basics (UNIX), Math for CS (Data Science), Learning How to Learn + Professional Communication"],
  ["2", "Data Structures and Algorithms I, Web Development II (JavaScript), Python, Probability & Statistics, Soft Skills 101"],
  ["3", "Analysis & Design of Algorithms, Web Development III (MERN stack), System Design (LLD + OOPs with Java), Introduction to Machine Learning, DBMS, First Principles Thinking"],
  ["4", "Theory of Computation, Advanced Java with Spring Boot, System Design (HLD), Advanced Machine Learning, Operating Systems, Product Management for Techies"],
  ["5", "Compiler Design, Elective I, Deep Learning, Computer Networks, Starting a Tech Business Venture"],
  ["6", "Software Engineering, Elective II, NLP, Computer Architecture, Capstone Project"],
  ["7", "Mandatory 6-month paid internship and placements"],
  ["8", "Optional internship or project work, and placements"],
];

const FAQS = [
  {
    q: "What is the course duration, and how many total semesters are there?",
    a: "4 years, or 8 semesters, full-time and on campus. Semester 7 is a mandatory 6-month paid internship, and in semester 8 you can choose another internship or project work.",
  },
  {
    q: "Do I need coding experience before joining?",
    a: "No. Admission is through VSAT, which tests maths, logical reasoning and learnability, not coding. If you want a head start, CodeSprint is Vedam's free 8-hour beginner course.",
  },
  {
    q: "What is Vedam's CS & AI programme about?",
    a: "It covers everything a computer science course should: programming, data structures and algorithms, full-stack development and system design. On top of that, it goes deep into AI, from machine learning to deep learning and NLP.",
  },
];

const h2Sx = {
  fontFamily: "Inter",
  fontWeight: 700,
  fontSize: { xs: 21, md: 25 },
  letterSpacing: "-0.4px",
  color: INK,
  mt: { xs: 4, md: 4.5 },
  mb: 1.5,
  lineHeight: 1.25,
};
const bodySx = {
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: { xs: 15, md: 16 },
  lineHeight: 1.85,
  color: INK,
  mb: 1.5,
};

function Para({ children }) {
  return <Typography sx={bodySx}>{children}</Typography>;
}

function CtaCard() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden", borderRadius: "16px", p: 3.5, background: "linear-gradient(116deg, #FA7C02 23%, #8A18FF 79%)", display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: 19, letterSpacing: "-0.4px", color: "#f9f9f9", lineHeight: 1.3 }}>
        Want to learn tech by building real projects?
      </Typography>
      <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 14, letterSpacing: "-0.28px", color: "#f9f9f9", lineHeight: 1.5 }}>
        Admission to Vedam&apos;s 2027 batch starts with VSAT, our online entrance test. Register today, or ask a current student anything first.
      </Typography>
      <Box component="a" href={REGISTER_VSAT_URL} target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff", borderRadius: "10px", p: "13px 18px", color: INK900, fontFamily: "Inter", fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
        Register for VSAT 2027
      </Box>
    </Box>
  );
}

export default function BlogCsAiCurriculum() {
  const [openFaq, setOpenFaq] = useState(0);
  const [active, setActive] = useState("quick-answer");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!("IntersectionObserver" in window) || els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: "smooth" });
  };

  const crumb = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blogs" },
      { label: "Admissions 2027" },
    ],
    []
  );

  return (
    <>
      <BlogHeader />
      <Box sx={{ display: "flex", alignItems: "stretch", width: "100%", bgcolor: "#fff", fontFamily: "Inter" }}>
      {/* LEFT 70% — white content column */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 70%" },
          maxWidth: { md: "70%" },
          minWidth: 0,
          bgcolor: "#fff",
          pt: { xs: 3, md: 5 },
          pb: { xs: 6, md: 10 },
          pl: { xs: 2.25, md: "5.5%" },
          pr: { xs: 2.25, md: "5.5%" },
        }}
      >
        {/* Breadcrumb */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
          {crumb.map((c, i) => (
            <Box key={c.label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {c.href ? (
                <Link href={c.href} style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 14, color: INK }}>{c.label}</Typography>
                </Link>
              ) : (
                <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 14, color: INK }}>{c.label}</Typography>
              )}
              {i < crumb.length - 1 && <Typography sx={{ color: "#9aa0ab", fontSize: 12 }}>›</Typography>}
            </Box>
          ))}
        </Box>

        {/* Title + summary + byline */}
        <Typography component="h1" sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: { xs: 24, md: 28 }, letterSpacing: "-0.56px", color: INK, mt: 2, mb: 1.25, lineHeight: 1.2 }}>
          Vedam CS &amp; AI Curriculum: What You Learn Each Year
        </Typography>
        <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: { xs: 15, md: 16 }, color: INK900, mb: 2, lineHeight: 1.5 }}>
          All 8 semesters of Vedam&apos;s CS &amp; AI program, the electives you can choose, and how projects and internships fit in.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, flexWrap: "wrap" }}>
          <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#7629FC", flexShrink: 0 }} />
          <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 13, color: MUTED }}>
            By{" "}
            <Box component="a" href="https://www.linkedin.com/in/ranita-sharma-a6b189173/" target="_blank" rel="noopener noreferrer" sx={{ color: MUTED, textDecoration: "underline" }}>
              Ranita Sharma
            </Box>{" "}
            · Last updated: 28 Oct 2026 · 6 min read
          </Typography>
        </Box>

        {/* Featured hero */}
        <Box sx={{ position: "relative", width: "100%", aspectRatio: "1145 / 561", borderRadius: "10px", overflow: "hidden", mt: 2.5, mb: { xs: 3.5, md: 4.5 }, bgcolor: "#06031a" }}>
          <Image src="/img/blog/cs-ai-hero.png" alt="Vedam students building projects" fill priority sizes="(max-width: 1200px) 100vw, 900px" style={{ objectFit: "cover" }} />
        </Box>

        {/* Quick Answer */}
        <Box id="quick-answer" sx={{ bgcolor: "rgba(138,24,255,0.05)", border: "2px solid rgba(138,24,255,0.56)", borderRadius: "10px", px: { xs: 2.25, md: 3.25 }, py: { xs: 2.5, md: 3.25 }, scrollMarginTop: "88px" }}>
          <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: 19, letterSpacing: "-0.4px", color: INK, mb: 1.25 }}>
            Quick Answer
          </Typography>
          <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: { xs: 15, md: 16 }, lineHeight: 1.85, color: INK }}>
            Vedam&apos;s CS &amp; AI program runs for 4 years (8 semesters), and the B.Tech degree is awarded by the partner university: Ajeenkya DY Patil University in Pune or Sushant University in Gurugram. Unlike a typical college, you build real products from your first semester, complete 50+ projects, go deep into AI and finish with a 6-month paid internship and placements.
          </Typography>
        </Box>

        {/* Introduction */}
        <Typography component="h2" sx={h2Sx}>Introduction</Typography>
        <Para>
          Choosing a college is easier when you know what you will learn there. Here is everything Vedam&apos;s CS &amp; AI program teaches over four years, from your first line of code to your final internship. Both campuses, Pune and Gurugram, follow the same plan.
        </Para>

        {/* What do you learn each year? + table */}
        <Typography component="h2" id="each-year" sx={{ ...h2Sx, scrollMarginTop: "88px" }}>
          What do you learn each year?
        </Typography>
        <Box sx={{ border: `1px solid ${VIOLET}`, borderRadius: "10px", overflow: "hidden", mt: 1 }}>
          <Box sx={{ overflowX: "auto" }}>
            <Box sx={{ display: "table", width: "100%", minWidth: 520, borderCollapse: "collapse" }}>
              <Box sx={{ display: "table-row" }}>
                <Box sx={{ display: "table-cell", bgcolor: "#f9f3ff", borderBottom: "1px solid rgba(38,38,38,0.2)", borderRight: "1px solid rgba(38,38,38,0.2)", px: 2.25, py: 1.1, width: 110, verticalAlign: "middle" }}>
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: 14, color: INK }}>Semester</Typography>
                </Box>
                <Box sx={{ display: "table-cell", bgcolor: "#f9f3ff", borderBottom: "1px solid rgba(38,38,38,0.2)", px: 2.25, py: 1.1, verticalAlign: "middle" }}>
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: 14, color: INK }}>What you study</Typography>
                </Box>
              </Box>
              {SEMESTERS.map(([sem, study], idx) => (
                <Box key={sem} sx={{ display: "table-row" }}>
                  <Box sx={{ display: "table-cell", borderBottom: idx === SEMESTERS.length - 1 ? "none" : "1px solid rgba(38,38,38,0.2)", borderRight: "1px solid rgba(38,38,38,0.2)", px: 2.25, py: 1.1, textAlign: "center", verticalAlign: "middle", width: 110 }}>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 15, color: INK }}>{sem}</Typography>
                  </Box>
                  <Box sx={{ display: "table-cell", borderBottom: idx === SEMESTERS.length - 1 ? "none" : "1px solid rgba(38,38,38,0.2)", px: 2.25, py: 1.1, verticalAlign: "middle" }}>
                    <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 15, color: INK, lineHeight: 1.4 }}>{study}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* How different */}
        <Typography component="h2" id="how-different" sx={{ ...h2Sx, scrollMarginTop: "88px" }}>
          How is Vedam&apos;s CS &amp; AI program different from a regular B.Tech CSE course?
        </Typography>
        <Para>
          Most B.Tech CSE AI courses teach theory first and projects later. Vedam flips that: you start building in the first semester and finish more than 50 projects over four years, such as a movie recommendation system like Netflix&apos;s, a voice assistant like Alexa, and cloud file storage like Dropbox.
        </Para>
        <Para>
          In their first semester, students showed the AI chatbots and live apps they built at a live project exhibition. Students also take part in competitions such as ICPC, Google Summer of Code, Smart India Hackathon and Major League Hacking events. Learning is supported with regular project reviews and one-to-one doubt-clearing sessions, and academics are led by{" "}
          <Box component="a" href="https://www.linkedin.com/in/subhu9/" target="_blank" rel="noopener noreferrer" sx={{ color: "#7629FC", textDecoration: "underline" }}>
            Subhesh Kumar
          </Box>
          , a former Google engineer.
        </Para>

        {/* Real story */}
        <Box sx={{ bgcolor: "rgba(84,26,184,0.05)", border: `1px solid ${VIOLET}`, borderRadius: "10px", p: { xs: 2.25, md: 3.5 }, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 2.5, md: 4 }, alignItems: { xs: "stretch", md: "center" }, mt: 3.5 }}>
          <Box sx={{ position: "relative", width: { xs: "100%", md: 230 }, height: { xs: 200, md: 216 }, borderRadius: "12px", overflow: "hidden", flexShrink: 0, bgcolor: "#1a1a4a" }}>
            <Image src="/img/blog/cs-ai-realstory.png" alt="Muhammad Sharief — HackerOne bug bounties" fill sizes="230px" style={{ objectFit: "cover" }} />
          </Box>
          <Box>
            <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: { xs: 15, md: 16 }, lineHeight: 1.6, color: INK, mb: 2 }}>
              In his first year at Vedam, Muhammad Sharief earned ₹7.95 lakh in bug bounties on HackerOne, a platform used by Google, PayPal and the US Department of Defense, by finding real security vulnerabilities. It shows where building from the first semester can take you.
            </Typography>
            <Box component="a" href="https://youtu.be/kbHPAsAfZUM?si=pdtjExjrephwmn2H" target="_blank" rel="noopener noreferrer" sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", p: "12px 18px", borderRadius: "10px", background: BTN_GRADIENT, color: "#f9f9f9", fontFamily: "Inter", fontWeight: 500, fontSize: 16, textDecoration: "none" }}>
              Watch his story
            </Box>
          </Box>
        </Box>

        {/* CodeSprint band */}
        <Box sx={{ position: "relative", bgcolor: "#f9f9f9", border: "1px solid rgba(38,38,38,0.2)", borderRadius: "16px", p: { xs: 2.25, md: 3.5 }, mt: 3.5, overflow: "hidden", display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ maxWidth: 560 }}>
            <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: { xs: 21, md: 26 }, letterSpacing: "-0.5px", color: INK, mb: 0.5 }}>
              New to coding? Start before college does.
            </Typography>
            <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: { xs: 15, md: 16 }, lineHeight: 1.7, color: INK }}>
              CodeSprint is Vedam&apos;s free 8-hour beginner coding course. Finish it and get a certificate.
            </Typography>
          </Box>
          <Box component="a" href="https://one.vedam.org/codesprint?utm_source=Blog&utm_medium=website&utm_campaign=vedam-cs-ai-curriculum" target="_blank" rel="noopener noreferrer" sx={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", justifyContent: "center", p: "12px 18px", borderRadius: "10px", background: BTN_GRADIENT, color: "#f9f9f9", fontFamily: "Inter", fontWeight: 500, fontSize: 16, textDecoration: "none", boxShadow: "0px 4px 2px rgba(0,0,0,0.12)" }}>
            Start CodeSprint for free
          </Box>
          <Box aria-hidden sx={{ position: "absolute", right: -6, bottom: -6, width: 250, height: 175, display: { xs: "none", md: "block" }, opacity: 0.95 }}>
            <Image src="/img/blog/codesprint-illo.svg" alt="" fill style={{ objectFit: "contain", objectPosition: "right bottom" }} />
          </Box>
        </Box>

        {/* Years 3 and 4 */}
        <Typography component="h2" id="years-3-4" sx={{ ...h2Sx, scrollMarginTop: "88px" }}>
          What happens in years 3 and 4?
        </Typography>
        <Para>
          Years 1 and 2 build your base. Years 3 and 4 move you from the classroom to industry. Semesters 5 and 6 bring the depth you would expect from a CS AI course: deep learning, NLP and your two elective courses. For your electives, you choose one track, Blockchain &amp; Cybersecurity, DevOps &amp; Cloud or Robotics, and study it across both semesters.
        </Para>
        <Para>
          Semester 7 is a mandatory 6-month paid internship, where you work on real projects in front-end, back-end, full-stack development or data science, and placements begin. Semester 8 is flexible: you can take another internship or do project work while placements continue. By graduation, you have a portfolio of real projects and industry experience on your CV.
        </Para>

        {/* Key takeaways */}
        <Typography component="h2" id="key-takeaways" sx={{ ...h2Sx, scrollMarginTop: "88px" }}>
          Key takeaways
        </Typography>
        <Box component="ul" sx={{ ...bodySx, pl: 3, mb: 1.5 }}>
          <li>Both campuses follow the same 8-semester plan, from Java and web development to deep learning and NLP.</li>
          <li>In semester 5, you choose one elective track: Blockchain &amp; Cybersecurity, DevOps &amp; Cloud, or Robotics.</li>
          <li>You complete a capstone, more than 50 projects and a mandatory 6-month paid internship with placements in semester 7.</li>
        </Box>
        <Para>
          4 years, or 8 semesters, full-time and on campus. Semester 7 is a mandatory 6-month paid internship, and in semester 8 you can choose another internship or project work.
        </Para>

        {/* FAQ */}
        <Typography component="h2" id="faq" sx={{ ...h2Sx, scrollMarginTop: "88px" }}>
          Frequently Asked Questions
        </Typography>
        <Box>
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <Box key={f.q} sx={{ borderBottom: "1px solid rgba(0,0,0,0.5)" }}>
                <Box
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenFaq(open ? -1 : i); } }}
                  sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, py: 2, cursor: "pointer" }}
                >
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: { xs: 16, md: 18 }, letterSpacing: "-0.3px", color: INK }}>
                    {f.q}
                  </Typography>
                  <AddIcon sx={{ fontSize: 26, color: INK, flexShrink: 0, transition: "transform .2s ease", transform: open ? "rotate(45deg)" : "none" }} />
                </Box>
                <Collapse in={open}>
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: { xs: 14, md: 15 }, lineHeight: 1.75, color: INK, pb: 2 }}>
                    {f.a}
                  </Typography>
                </Collapse>
              </Box>
            );
          })}
        </Box>

        {/* Mobile CTA (the grey sidebar is hidden on small screens) */}
        <Box sx={{ display: { xs: "block", md: "none" }, mt: 4 }}>
          <CtaCard />
        </Box>
      </Box>

      {/* RIGHT 30% — light-grey panel with the jump list + CTA */}
      <Box sx={{ flex: "0 0 30%", maxWidth: "30%", bgcolor: "#fafafa", display: { xs: "none", md: "block" }, pt: 5, pb: 10, px: "3%" }}>
        <Box sx={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 2.5 }}>
          <Box>
            <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: 19, letterSpacing: "-0.4px", color: INK, mb: 1.25 }}>
              On This Page
            </Typography>
            {SECTIONS.map((s) => {
              const on = active === s.id;
              return (
                <Box
                  key={s.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollTo(s.id)}
                  onKeyDown={(e) => { if (e.key === "Enter") scrollTo(s.id); }}
                  sx={{
                    px: 2, py: 1.1, cursor: "pointer",
                    borderLeft: on ? `5px solid ${VIOLET}` : "5px solid transparent",
                    background: on ? "linear-gradient(90deg, rgba(138,24,255,0.4), rgba(255,255,255,0))" : "transparent",
                  }}
                >
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 14, letterSpacing: "-0.28px", color: on ? INK900 : MUTED }}>
                    {s.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <CtaCard />
        </Box>
      </Box>
      </Box>
    </>
  );
}
