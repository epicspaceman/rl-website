import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/hero'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Preview from '@/components/preview'
import w_img from '@/public/woopersk8.jpg';
import n_img from '@/public/notfunny.png';
import desimg1 from '@/public/desimg1.png';
import desimg2 from '@/public/desimg2.png';
import desimg5 from '@/public/desimg5.png';


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
            caption="Computer Science projects that I've worken on."
            imageArray={[w_img, n_img, w_img]}
            vertexes="4"
            />
        </div>
        <Footer />
      </main>
    </>
  )
}
