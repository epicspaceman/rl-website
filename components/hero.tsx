import styles from '@/styles/Hero.module.css'
import Image from 'next/image'
import cutout from '@/public/cutout.png'
import Shapes from '@/components/shapes'


export default function Hero({}) {
    return (
      <>
        <main className={styles.hero}>
            <Shapes vertexes="5" maxY="500" minY="1" />
                <div className={styles.heroItems}>
                    <div className={styles.heroText}>
                        <h1>Hi, I&apos;m Robert Lockay.<br/>Designer, Coder, Student.</h1>
                        <p>I&apos;m currently a student at Akins ECHS in Austin, Texas pursuing a career in design/software or web developement.</p>
                    </div>
                    <Image src={cutout} alt="cutout img of me"/>
                </div>
        </main>
      </>
    )
  }

