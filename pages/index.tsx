import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/hero'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Preview from '@/components/preview'
import desimg1 from '@/public/desimg1.png';
import desimg2 from '@/public/desimg2.png';
import desimg5 from '@/public/desimg5.png';
import c1 from '@/public/websiteprev1.png'
import c2 from '@/public/bdeathgame.png'
import c3 from '@/public/calcproj.png'



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
        <Hero />
            <Preview
            header="Design Work"
            caption="Some of the design projects that I've worked on."
            imageArray={[desimg1, desimg2, desimg5]}
            vertexes="3"
            />
            <Preview
            header="CS Work"
            caption="Computer Science projects that I've worked on."
            imageArray={[c1, c2, c3]}
            vertexes="4"
            />
        </div>
        <Footer />
      </main>
    </>
  )
}
