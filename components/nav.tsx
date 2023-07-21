import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [clicked, setClicked] = useState(false);

    return (
      <>
        <main className={styles.nav}>
        <div className={clicked? styles.hlinks : styles.hamburger} id="ham" onClick={e => {setClicked(true)}}>
            <div className={clicked? styles.hlink1 : styles.hamline1}></div>
            <div className={clicked? styles.hlink2 : styles.hamline2}></div>
            <div className={clicked? styles.hlink3 : styles.hamline3}></div>
            <div className={clicked? styles.hlink4 : styles.hamline4}></div>
          </div>
          <div className={clicked? styles.links : styles.linksb}>
            <Link href="/aboutme" className={styles.link1}>About</Link>
            <Link href="/ybwork" className={styles.link2}>Akins Aerie</Link>
            <Link href="/personaldesigns" className={styles.link3}>Designs</Link>
            <Link href="/contact" className={styles.link4}>Contact Me</Link>
            <button className={clicked? styles.back : styles.noback} onClick={e => {setClicked(false)}}>Back</button>
          </div>
          <h2 className={styles.linkWrapper}><Link href="/" className={styles.link}><div className={styles.robert}>Robert</div><div className={styles.lockay}>Lockay</div></Link></h2>
        </main>
      </>
    )
  }