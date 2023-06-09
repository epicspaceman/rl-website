import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
      <>
        <main className={styles.nav}>
        <h2><Link href="/"  style={{ textDecoration: 'none' }}>Robert Lockay</Link></h2>
            <div className={styles.navItems}>
                <h2><Link href="/portfolio" style={{ textDecoration: 'none' }}>Portfolio</Link></h2>
                <h2><Link href="/aboutme" style={{ textDecoration: 'none' }}>About Me</Link></h2>
            </div>
        </main>
      </>
    )
  }