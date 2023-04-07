import styles from '@/styles/pSection.module.css'
import Image from 'next/image'
import Shapes from './shapes'

export default function pSection(props: any) {
  const randomRGB = () => {
    return Math.random() * (255-1) + 1;
  } 

  const randomA = () => {
    return Math.random() * (100-1) + 70;
  }

  const randomB = () => {
    return Math.random() * (25-1) + 0;
  }

  const randomC = () => {
    return Math.random() * (65-1) + 25;
  }

  const polygon = `${randomC()}% ${randomB()}%, ${randomA()}% ${randomB()}%, ${randomA()}% ${randomC()}%, ${randomA()}% ${randomC()}%, ${randomA()}% ${randomA()}%, ${randomC()}% ${randomA()}%, ${randomB()}% ${randomC()}%, ${randomB()}% ${randomC()}%, ${randomB()}% ${randomB()}%`;

  return (
    <>
      <main className={styles.main}>
        <Shapes vertexes="1000" maxY="1500" minY="0"/>
        <div className={styles.text}>
          <h1>{props.title}</h1>
          <h5>{props.subcaption}</h5>
        </div>
        
        <div className={styles.bgShape} style={{clipPath: `polygon(${polygon})`, backgroundColor: `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`}}></div>
        <div className={styles.items}>  
            <Image className={styles.img2} src={props.img1}  alt="Design Work" height={225} width={375}/>
            <Image className={styles.img1} src={props.img2} alt="Design Work" height={225} width={425}/>
            <Image className={styles.img4} src={props.img3} alt="Design Work" height={225} width={325}/>
        </div>
      </main>
    </>
  )
}