import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import styles from '@/styles/pdesigns.module.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import poster1 from '@/public/machupicchuposter.jpg'
import poster2 from '@/public/Emergency Blimp posterv2.jpg'
import poster3 from '@/public/Untitled-1.jpg'
import poster4 from '@/public/dearfutureself.jpg'
import poster5 from '@/public/skyposter.jpg'
import { BsFillPlayCircleFill } from "react-icons/bs";


interface Props {
  songInfo: string,
  link: string,
  img: StaticImageData,
  left: boolean
}

export function SongPoster({songInfo, link, img, left}: Props) {
  return (
    <div className={styles.section} style={{flexDirection: {left}? "row" : "row-reverse"}}>
      <Image src={img} alt={songInfo} className={styles.img}/>
      <div className={styles.caption}>
        <a href={link} target='_blank'><BsFillPlayCircleFill className={styles.icon}/></a>
        <div className={styles.para}>
          <p>{songInfo}</p>
        </div>
      </div>
    </div>
  )
}

export default function PersonalDesigns() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
            <SongPoster left={true} img={poster1} songInfo="The Strokes - Machu Picchu" link="https://open.spotify.com/track/6mVD1SfTvlFAPVi7txFL5H?si=979a5f472baa41f6"/>
            <SongPoster left={false} img={poster2} songInfo="King Krule - Emergency Blimp" link="https://open.spotify.com/track/6mVD1SfTvlFAPVi7txFL5H?si=979a5f472baa41f6"/>
            <SongPoster left={true} img={poster3} songInfo="Quasimoto - LAX to JFK" link="https://open.spotify.com/track/6mVD1SfTvlFAPVi7txFL5H?si=979a5f472baa41f6"/>
            <SongPoster left={false} img={poster4} songInfo="Kero Kero Bonito - Dear Future Self" link="https://open.spotify.com/track/6mVD1SfTvlFAPVi7txFL5H?si=979a5f472baa41f6"/>
            <SongPoster left={true} img={poster5} songInfo="Playboi Carti - Sky" link="https://open.spotify.com/track/6mVD1SfTvlFAPVi7txFL5H?si=979a5f472baa41f6"/>
        </div>
        <Footer />
      </main>
    </>
  )
}