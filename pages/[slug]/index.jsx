import React from 'react';
import Link from 'next/link';

export default function Page({ page }) {
  return (
    <div>
      <Link href="/">GO to Homepage</Link>
      <h1>SLUG</h1>
      <p>{page.slug}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  return {
    props: {
      page: { slug },
    },
  };
}

export const slugRoutesData = [
  { params: { slug: "four" } },
  { params: { slug: "five" } },
  { params: { slug: "six" } },
];

export async function getStaticPaths() {
  return {
    paths: slugRoutesData,
    fallback: false,
  };
}
