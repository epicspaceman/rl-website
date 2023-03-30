import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Portfolio.module.css'
import Hero from '@/components/hero'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import PSection from '@/components/pSection'
import Preview from '@/components/preview'
import w_img from '@/public/woopersk8.jpg';
import n_img from '@/public/notfunny.png';
import desimg1 from '@/public/desimg1.png';
import desimg2 from '@/public/desimg2.png';
import desimg5 from '@/public/desimg5.png';


const inter = Inter({ subsets: ['latin'] })

export default function Portfolio() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
        <div className={styles.header}><h1>Portfolio</h1></div>
        <PSection 
        title="Design Portfolio"
        subcaption="Design Portfolio"
        />
        </div>
        <Footer />
      </main>
    </>
  )
}
