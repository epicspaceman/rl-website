import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Logo from '@/public/LogoA.png'
import {useEffect, useState} from 'react'
import Link from 'next/link'


export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
          <div className={clicked? styles.hlinks : styles.hamburger} id="ham" onClick={e => {setClicked(true)}}>
            <div className={clicked? styles.hlink1 : styles.hamline1}></div>
            <div className={clicked? styles.hlink2 : styles.hamline2}></div>
            <div className={clicked? styles.hlink3 : styles.hamline3}></div>
            <div className={clicked? styles.hlink4 : styles.hamline4}></div>
          </div>
          <div className={clicked? styles.nocover : styles.cover}>
            <div className={styles.heroText}>
              <h1 className={styles.heroText1}>Graphic Designer<span>.</span></h1>
              <h1 className={styles.heroText2}>Programmer<span>.</span></h1>
              <h1 className={styles.heroText3}>Student<span>.</span></h1>
            </div>
          </div>
          <div className={clicked? styles.links : styles.linksb}>
            <Link href="/aboutme" className={styles.link1}>About</Link>
            <div className={styles.aboutIcon}>?</div>
            <Link href="/ybwork" className={styles.link2}>Akins Aerie</Link>
            <Link href="/personaldesigns" className={styles.link3}>Designs</Link>
            <div className={styles.link4}>Contact Me</div>
            <button className={clicked? styles.back : styles.noback} onClick={e => {setClicked(false)}}>Back</button>
          </div>
          <Image src={Logo} alt="Logo" className={styles.img}/>
        </div>
      </main>
    </>
  )
}
