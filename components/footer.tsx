import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return (
      <>
        <main className={styles.main} style={{position: 'absolute', bottom: '0',}}>
            <p>Built by me.</p>
            <p>Contact me.</p>
        </main>
      </>
    )
  }