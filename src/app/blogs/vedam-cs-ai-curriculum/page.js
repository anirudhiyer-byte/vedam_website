import BlogCsAiCurriculum from "./BlogCsAiCurriculum";

// Unlisted for now: keep the post out of search indexes.
export const metadata = {
  title: "Vedam CS & AI Curriculum: What You Learn Each Year",
  description:
    "Vedam CS & AI curriculum, semester by semester: Java, DSA, full-stack, AI and ML, electives and 6-month industry internship.",
  robots: { index: false, follow: false },
};

export const revalidate = 3600;

export default function Page() {
  return <BlogCsAiCurriculum />;
}
