import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

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
          <Link href="/One/one" passHref>
            <a className={styles.card}>
              <h3>1</h3>
              <p>/One/one</p>
            </a>
          </Link>

          <Link href="/two-two" passHref>
            <a className={styles.card}>
              <h3>2</h3>
              <p>/two-two</p>
            </a>
          </Link>

          <Link href="/Four" passHref>
            <a className={styles.card}>
              <h3>4</h3>
              <p>/Four</p>
            </a>
          </Link>

          <Link href="/Five" passHref>
            <a className={styles.card}>
              <h3>5</h3>
              <p>/Five</p>
            </a>
          </Link>
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
