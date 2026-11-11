import BlogCsAiCurriculum from "./BlogCsAiCurriculum";

const POST_URL = "https://www.vedam.org/blogs/vedam-cs-ai-curriculum";
const POST_TITLE = "Vedam CS & AI Curriculum: What You Learn Each Year";
const POST_DESC =
  "Vedam CS & AI curriculum, semester by semester: Java, DSA, full-stack, AI and ML, electives and 6-month industry internship.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: POST_TITLE,
  description: POST_DESC,
  image: "https://www.vedam.org/img/blog/cs-ai-hero.png",
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  author: {
    "@type": "Person",
    name: "Ranita Sharma",
    url: "https://www.linkedin.com/in/ranita-sharma-a6b189173/",
  },
  publisher: {
    "@type": "CollegeOrUniversity",
    name: "Vedam School of Technology",
    url: "https://www.vedam.org/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.vedam.org/img/vedam_logo.webp",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
};

export const metadata = {
  title: POST_TITLE,
  description: POST_DESC,
  alternates: { canonical: "/blogs/vedam-cs-ai-curriculum" },
  openGraph: {
    title: POST_TITLE,
    description: POST_DESC,
    url: POST_URL,
    siteName: "Vedam School of Technology",
    type: "article",
    publishedTime: "2026-10-28",
    modifiedTime: "2026-10-28",
    authors: ["Ranita Sharma"],
    images: [
      {
        url: "/img/blog/cs-ai-hero.png",
        width: 1145,
        height: 561,
        alt: "Vedam CS & AI curriculum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: POST_TITLE,
    description: POST_DESC,
    images: ["/img/blog/cs-ai-hero.png"],
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogCsAiCurriculum />
    </>
  );
}
