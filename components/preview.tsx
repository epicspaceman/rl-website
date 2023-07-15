import styles from '@/styles/preview.module.css'
import Image, { StaticImageData } from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface Props {
  title: string;
  caption: string;
  img: StaticImageData;
  imgalt: string;
  href: string;
}

export default function Preivew({title, caption, img, imgalt, href}: Props) {
    return (
      <>
        <main className={styles.preview}>
            <div className={styles.previewText}>
                <h1 className={styles.previewHeader}>{title}</h1>
                <h3 className={styles.previewCaption}>{caption}</h3>
                <Link href={href}><motion.button type='button' className={styles.previewBtn} whileHover={{ scale: 1.1}} whileTap={{ scale: .9}}>Explore</motion.button></Link>
            </div>
            <Image src={img} alt={imgalt} height={400} className={styles.previewImg}/>
        </main>
      </>
    )
  }