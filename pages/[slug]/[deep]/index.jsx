import React from "react";
import Link from "next/link";

export default function Page({ page }) {
  return (
    <div>
      <Link href="/">GO to Homepage</Link>
      <h1>SLUG DEEP</h1>
      <p>{page.slug}</p>
      <p>{page.deep}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug, deep } = params;
  return {
    props: {
      page: { slug, deep },
    },
  };
}

export const slugDeepRoutesData = [
  { params: { slug: "four", deep: "four-four" } },
  { params: { slug: "five", deep: "five-five" } },
  { params: { slug: "six", deep: "six-six" } },
];

export async function getStaticPaths() {
  return {
    paths: slugDeepRoutesData,
    fallback: false,
  };
}
