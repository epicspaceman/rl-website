import styles from '@/styles/Preview.module.css'
import Shapes from '@/components/shapes'
import Slider from '@/components/slider'

export default function Footer(props: any) {
    return (
      <>
        <main className={styles.preview}>
            <Shapes vertexes={props.vertexes} maxY="1900" minY="1000"/>
                <div className={styles.pItems}>
                    <div className={styles.pText}>
                        <h1 className={styles.pHeader}>{props.header}</h1>
                        <p className={styles.pCaption}>{props.caption}</p>
                    </div>
                    
                    <Slider imgArray={props.imageArray}/>
                </div>
        </main>
      </>
    )
  }