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

export async function getStaticPaths() {
  const data = [
    {
      slug: 'Four',
    },
    {
      slug: 'Five',
    },
    {
      slug: 'Six',
    },
  ];
  return {
    paths: data?.map((b) => `/${b.slug}`) || [],
    fallback: false,
  };
}
