import styles from '@/styles/pSection.module.css'

export default function pSection(props: any) {
    return (
      <>
        <main className={styles.main}>
          <div className={styles.text}>
            <h1>{props.title}</h1>
            <h5>{props.subcaption}</h5>
          </div>
          
          <div className={styles.items}>
              
          </div>
        </main>
      </>
    )
  }