import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
      <>
        <main className={styles.nav}>
          <h2><Link href="/" className={styles.link}>Robert Lockay</Link></h2>
          <h2><Link href="/aboutme" className={styles.link}>About Me</Link></h2>
        </main>
      </>
    )
  }