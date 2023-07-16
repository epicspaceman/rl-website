import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import desimg1 from '@/public/desimg1.png';
import desimg2 from '@/public/desimg2.png';
import desimg5 from '@/public/desimg5.png';
import c1 from '@/public/websiteprev1.png'
import c2 from '@/public/bdeathgame.png'
import c3 from '@/public/calcproj.png'
import Logo from '@/public/LogoA.png'
import Hero from '@/components/hero'
import Preview from '@/components/preview'
import {Reveal} from '@/components/reveal'
import cover from '@/public/ycover.png'
import poster from '@/public/machupicchuposter.jpg'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
          <section className={styles.section}>
            <Reveal>
              <Hero />
            </Reveal>
          </section>
          <section className={styles.section}>
            <Reveal>
                <Preview title="Akins Aerie 2023" caption="My design work on Akins' 2023 Yearbook rendition." img={cover} imgalt="Akins 2023 Yearbook Cover" href="/ybwork"/>
            </Reveal>
          </section>
          <section className={styles.section}>
            <Reveal>
                <Preview title="Personal Designs" caption="Posters and such designed in my free time." img={poster} imgalt="Poster for The Strokes' Machu Picchu" href="/aboutme"/>
            </Reveal>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}
