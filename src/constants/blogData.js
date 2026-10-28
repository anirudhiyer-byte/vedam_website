// Blog content for the (currently unlisted) /blogs section.
// Only posts with `published: true` are clickable; others render as "Coming soon".

export const blogCategories = [
  "All",
  "Admissions",
  "VSAT",
  "Curriculum",
  "Fees & Scholarships",
  "Campus Life",
];

// Brand-gradient placeholders used for cards without real art yet.
export const categoryGradient = {
  Admissions: "linear-gradient(135deg, #6C10BC, #AD5DFF)",
  VSAT: "linear-gradient(135deg, #FB7F05, #6C10BC)",
  Curriculum: "linear-gradient(135deg, #7629FC, #BA6BFF)",
  "Fees & Scholarships": "linear-gradient(135deg, #FB7F05, #BA6BFF)",
  Degrees: "linear-gradient(135deg, #6C10BC, #1E1E1E)",
  "Campus Life": "linear-gradient(135deg, #AD5DFF, #FB7F05)",
};

export const blogPosts = [
  {
    slug: "vedam-cs-ai-curriculum",
    title: "Vedam CS & AI Curriculum: What You Learn Each Year",
    category: "Curriculum",
    author: "Ranita Sharma",
    date: "28 Oct 2026",
    readTime: "6 min read",
    summary:
      "All 8 semesters of Vedam's CS & AI program, the electives you can choose, and how projects and internships fit in.",
    image: "/img/blog/cs-ai-hero.png",
    keyword: "Curriculum",
    featured: true,
    published: true,
  },
  {
    slug: "vedam-admissions-2027",
    title: "Vedam Admissions 2027: VSAT, Eligibility, Fees & Process",
    category: "Admissions",
    author: "Vedam Team",
    date: "Coming soon",
    readTime: "8 min read",
    summary:
      "Who can apply, how VSAT and the interview work, what it costs, and who awards the degree — all in one place.",
    keyword: "Admissions",
    published: false,
  },
  {
    slug: "vsat-2027-syllabus-pattern",
    title: "VSAT 2027: Syllabus, Pattern & Sample Questions",
    category: "VSAT",
    author: "Vedam Team",
    date: "Coming soon",
    readTime: "5 min read",
    summary:
      "What VSAT tests, the exam pattern, and practice questions to train on before test day.",
    keyword: "VSAT",
    published: false,
  },
  {
    slug: "vedam-fees-scholarships-2027",
    title: "Vedam Fees & Scholarships 2027",
    category: "Fees & Scholarships",
    author: "Vedam Team",
    date: "Coming soon",
    readTime: "4 min read",
    summary:
      "Tuition, the three scholarships, and how education loans work at Vedam.",
    keyword: "Fees",
    published: false,
  },
  {
    slug: "is-a-new-age-degree-valid",
    title: "Is a New-Age College Degree Valid? Partner-University B.Tech Explained",
    category: "Admissions",
    author: "Vedam Team",
    date: "Coming soon",
    readTime: "7 min read",
    summary:
      "Who awards the Vedam B.Tech, what UGC approval means, and how it affects higher study.",
    keyword: "Degrees",
    published: false,
  },
  {
    slug: "vsat-preparation-30-day-plan",
    title: "VSAT Preparation: A 30-Day Plan",
    category: "VSAT",
    author: "Vedam Team",
    date: "Coming soon",
    readTime: "6 min read",
    summary:
      "A simple week-by-week plan to get ready for VSAT in a month.",
    keyword: "Prep",
    published: false,
  },
  {
    slug: "semester-1-real-projects",
    title: "Real Projects From Semester 1: What Vedam Students Build",
    category: "Campus Life",
    author: "Vedam Team",
    date: "Coming soon",
    readTime: "5 min read",
    summary:
      "From AI chatbots to live apps — what first-semester students ship at Vedam.",
    keyword: "Projects",
    published: false,
  },
];

export const REGISTER_VSAT_URL =
  "https://one.vedam.org/apply?utm_source=vedam_website&utm_medium=blog_cta&utm_campaign=vsat_early_registration";
