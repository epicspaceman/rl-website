import styles from '@/styles/Hero.module.css'
import Image from 'next/image'
import Logo from '@/public/LogoA.png'

export default function Hero() {
    return (
      <>
        <main className={styles.hero}>
            <div className={styles.heroItems}>
                <Image src={Logo} alt="Logo" height={500} className={styles.heroImg}/>
                <div className={styles.heroText}>
                  <h1>Robert Lockay</h1>
                  <h4>I am a<span className={styles.bold}>Graphic Designer & Programmer</span></h4>
                </div>
            </div>
        </main>
      </>
    )
  }