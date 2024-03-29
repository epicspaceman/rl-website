import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Logo from '@/public/LogoA.png'
import Link from 'next/link'
import bg from '@/public/Artboard 1.jpg'


export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
          <div className={styles.cover}>
            <div className={styles.heroText}>
              <h1 className={styles.heroText1}>Graphic Designer<span>.</span></h1>
              <h1 className={styles.heroText2}>Programmer<span>.</span></h1>
              <h1 className={styles.heroText3}>Student<span>.</span></h1>
            </div>
          </div>
          <Image src={Logo} alt="Logo" className={styles.img}/>
        </div>
      </main>
    </>
  )
}
