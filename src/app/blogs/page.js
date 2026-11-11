import Blogs from "./Blogs";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Vedam Blog",
  description:
    "Guides and stories on admissions, VSAT, the CS & AI curriculum and life at Vedam.",
  url: "https://www.vedam.org/blogs",
  publisher: {
    "@type": "CollegeOrUniversity",
    name: "Vedam School of Technology",
    url: "https://www.vedam.org/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.vedam.org/img/vedam_logo.webp",
    },
  },
};

export const metadata = {
  title: "Blog — Admissions, VSAT & CS & AI Guides",
  description:
    "Guides and stories on admissions, VSAT, the CS & AI curriculum and life at Vedam.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Vedam Blog — Admissions, VSAT & CS & AI Guides",
    description:
      "Guides and stories on admissions, VSAT, the CS & AI curriculum and life at Vedam.",
    url: "https://www.vedam.org/blogs",
    siteName: "Vedam School of Technology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedam Blog — Admissions, VSAT & CS & AI Guides",
    description:
      "Guides and stories on admissions, VSAT, the CS & AI curriculum and life at Vedam.",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Blogs />
    </>
  );
}
