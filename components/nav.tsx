import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
      <>
        <main className={styles.nav}>
          <h2><Link href="/" className={styles.link}><div className={styles.robert}>Robert</div><div className={styles.lockay}>Lockay</div></Link></h2>
        </main>
      </>
    )
  }