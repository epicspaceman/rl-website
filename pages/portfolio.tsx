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
        <div className={styles.header}>
          <h1>Portfolio</h1>
          <h5><a href='https://www.bulbapp.com/robertlockay/portfolio' target='_blank' style={{textDecoration: 'none'}}>Bulb Portfolio</a></h5>
        </div>
        <PSection 
        title="Design Portfolio"
        subcaption="
        My design portfolio, all this work is from my work on the 2022-2023 Akins Aerie (Yearbook). The first image is one of the dividers between sections.
        The second image is a main feature on Robotics club for the second clubs page. The final image is another main feature on Pep Rallies throughout the year.
        You can read more about my creative process on my Bulb portfolio.
        "
        />
        <PSection 
        title="Comp Sci Portfolio"
        subcaption="
        My Computer Science Portfolio. Mostly personal or school projects. Even though right now it's a majority school projects, 
        I hope to be able to make more personal projects like this.
        "
        />
        </div>
        <Footer />
      </main>
    </>
  )
}
