import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { catchAllRoutesData } from "./[...catch-all]";
import { slugRoutesData } from "./[slug]";
import { slugDeepRoutesData } from "./[slug]/[deep]";

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
              <Link href={cr.params["catch-all"].join("/")} passHref>
                <a>
                  <p>{cr.params["catch-all"].join("/")}</p>
                </a>
              </Link>
            ))}
          </div>
          <div>
            <h1>SLUG</h1>
            {slugRoutesData.map((sr) => (
              <Link href={sr.params.slug} passHref>
                <a>
                  <p>{sr.params.slug}</p>
                </a>
              </Link>
            ))}
          </div>
          <div>
            <h1>SLUG DEEP</h1>
            {slugDeepRoutesData.map((sdr) => (
              <Link href={`${sdr.params.slug}/${sdr.params.deep}`} passHref>
                <a>
                  <p>{`${sdr.params.slug}/${sdr.params.deep}`}</p>
                </a>
              </Link>
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
