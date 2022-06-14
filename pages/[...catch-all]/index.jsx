import React from 'react';
import Link from 'next/link';

export default function Page({ page }) {
  return (
    <div>
      <Link href="/">GO to Homepage</Link>
      <h1>CATCH ALL</h1>
      <p>{page.slug}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const param = params['catch-all'] || '';
  const slug = Array.isArray(param) ? param.join('/') : param;
  return {
    props: {
      page: { slug },
    },
  };
}

export const catchAllRoutesData = [
  { params: { "catch-all": ["One", "one"] } },
  { params: { "catch-all": ["two-two"] } },
  { params: { "catch-all": ["Three"] } },
];

export async function getStaticPaths() {
  return {
    paths: catchAllRoutesData,
    fallback: false,
  };
}
