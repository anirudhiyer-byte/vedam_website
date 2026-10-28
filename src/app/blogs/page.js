import Blogs from "./Blogs";

// Unlisted for now: tell search engines not to index the blog section.
export const metadata = {
  title: "Blog",
  description:
    "Guides and stories on admissions, VSAT, the CS & AI curriculum and life at Vedam.",
  robots: { index: false, follow: false },
};

export const revalidate = 3600;

export default function Page() {
  return <Blogs />;
}
