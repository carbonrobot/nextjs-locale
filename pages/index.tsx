import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Localization Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Localization
        </h1>

        <div className={styles.grid}>
          <Link href="/us/en" className={styles.card}>
            <h2>Locale US-EN</h2>
          </Link>
          <Link href="/jp/ja" className={styles.card}>
            <h2>Locale JP-JA</h2>
          </Link>
        </div>
      </main>
    </div>
  )
}
