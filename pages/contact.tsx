import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/contact.module.css'
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
          <a href='mailto: robertlockay@gmail.com?' target='_blank'><h1 className={styles.text}>Contact Me</h1></a>
        </div>
      </main>
    </>
  )
}
