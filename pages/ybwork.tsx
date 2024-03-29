import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/ybwork.module.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import desimg1 from '@/public/desimg1.png';
import desimg2 from '@/public/desimg2.png';
import desimg5 from '@/public/desimg5.png';
import desimg3 from '@/public/desimg3.png';
import desimg4 from '@/public/desimg4.png';
import desimg6 from '@/public/desimg6.png';

export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
            <div className={styles.section}>
              <Image src={desimg1} alt="Spread of a yearbook feature on the Robotics Club" className={styles.img}/>
              <div className={styles.para}>
                <p>As a part of the 2023 Akins Aerie staff, I had the opportunity to work on and design parts of the yearbook. I was mainly a part of the Mugshots section where all the photos and quote sections are housed I was able to work on other spreads. The main spread I worked on was the club&aposs spread for the second part of the year. I was able to design the main feature for the page (pictured above). I had the privilege of making that because I was a part of the Robotics club. So I took photos that I and my friend (Adrian Orduna) took and formatted them into a main feature.</p>
              </div>
            </div>
            <div className={styles.section}>
              <Image src={desimg6} alt="Yearbook module feature Akins' french club" className={styles.img} />
              <div className={styles.para}>
                <p>Pictured above is the french club section of the aforementioned club&aposs page. Since I had a friend in french club I decided to advocate for a french club feature on the page. </p>
              </div>
            </div>
            <div className={styles.section}>
              <Image src={desimg4} alt="Yearbook feature of Akins' pep rallies" className={styles.img} />
              <div className={styles.para}>
                <p>While working on deadline for the Yearbook I took on the responsibility of creating a Pep Rally feature for the tail end of the Yearbook. For this feature, I decided to focus on the community of a pep rally. Since pep rallies are some of the only times when there are so many students gathered in one place for one purpose. Going with that I decided to make the title, “Akins Eagles REunite!” and make the main photo a picture of the stands during a pep rally. </p>
              </div>
            </div>
        </div>
        <Footer />
      </main>
    </>
  )
}