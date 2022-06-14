import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { catchAllRoutesData } from "./[...catch-all]";
import { slugRoutesData } from "./[slug]";
import React from "react";

const LinkAnchorComponent = ({ href }) => (
  <div className={styles.grid_2} key={href}>
    <Link href={href} passHref>
      <a>
        <p>
          {"with <Link> component"} {href}
        </p>
      </a>
    </Link>
    <a href={href}>
      <p>
        {"with <a> tag"} {href}
      </p>
    </a>
  </div>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <div>
            <h1>CATCH ALL</h1>
            {catchAllRoutesData.map((cr) => (
              <LinkAnchorComponent href={cr.params["catch-all"].join("/")} />
            ))}
          </div>
          <div>
            <h1>SLUG</h1>
            {slugRoutesData.map((sr) => (
              <LinkAnchorComponent href={sr.params.slug} />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
