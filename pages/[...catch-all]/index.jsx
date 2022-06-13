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

export async function getStaticPaths() {
  const data = [
    {
      'catch-all': 'One/one',
    },
    {
      'catch-all': 'two-two',
    },
    {
      'catch-all': 'Three',
    },
  ];
  return {
    paths:
      data?.map((b) => ({
        params: { 'catch-all': b['catch-all'].split('/') },
      })) || [],
    fallback: false,
  };
}
