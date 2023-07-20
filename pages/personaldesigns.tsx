import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/pdesigns.module.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import poster1 from '@/public/machupicchuposter.jpg'
import poster2 from '@/public/Emergency Blimp posterv2.jpg'
import poster3 from '@/public/Untitled-1.jpg'
import poster4 from '@/public/dearfutureself.jpg'
import poster5 from '@/public/skyposter.jpg'


export default function PersonalDesigns() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
            <div className={styles.section}>
              <Image src={poster1} alt="Poster Based On: The Strokes - Machu Picchu" className={styles.img}/>
              <div className={styles.para}>
                <p>Poster Based On: The Strokes - Machu Picchu</p>
              </div>
            </div>
            <div className={styles.section}>
              <Image src={poster2} alt="Poster Based On: King Krule - Emergency Blimp" className={styles.img}/>
              <div className={styles.para}>
                <p>Poster Based On: King Krule - Emergency Blimp</p>
              </div>
            </div>
            <div className={styles.section}>
              <Image src={poster3} alt="Poster Based On: Quasimoto - LAX to JFK" className={styles.img}/>
              <div className={styles.para}>
                <p>Poster Based On: Quasimoto - LAX to JFK</p>
              </div>
            </div>
            <div className={styles.section}>
              <Image src={poster4} alt="Poster Based On: Kero Kero Bonito - Dear Future Self" className={styles.img}/>
              <div className={styles.para}>
                <p>Kero Kero Bonito - Dear Future Self</p>
              </div>
            </div>
            <div className={styles.section}>
              <Image src={poster5} alt="Poster Based On: Playboi Carti - Sky" className={styles.img}/>
              <div className={styles.para}>
                <p>Poster Based On: Playboi Carti - Sky</p>
              </div>
            </div>
        </div>
        <Footer />
      </main>
    </>
  )
}