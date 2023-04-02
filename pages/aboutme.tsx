import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Aboutme.module.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Me from '@/public/me.jpg'
import Slider from '@/components/slider'
import s2 from '@/public/newtechshirtback.png'
import s1 from '@/public/newtechshirtfront.png'
import Shapes from '@/components/shapes'

export default function About() {
  return (
    <>
      <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
          <Shapes vertexes="5" maxY="60" minY="0"/>
          <div className={styles.header}>
            <h1>About Me</h1>
            <h5><a href='https://www.bulbapp.com/u/about-me~75392' target='_blank' style={{textDecoration: 'none'}}>Bulb</a></h5>
          </div>
          <div className={styles.about}>
            <div className={styles.para}>
              <p>
              Hello! My name is Robert Lockay, I am currently a sophomore at Akins Early College High School in Austin, TX. 
              I am an aspiring designer/software or web developer. 
              Some hobbies of mine include gaming with friends, programming, and biking.
              </p>
              <div className={styles.image}>
                <Image src={Me} alt="picture of me" height={300} width={200} style={{borderRadius: '3px'}}/>
              </div>
              <p>
              As a student at Akins, I am a part of the New Tech Academy, where students learn about today&apos;s newest technology and how to use it. 
              Whether that be through coding programs for it or using programs on it. 
              Through this academy, I have been able to take classes in computer science (Fundamentals of Computer Science & Computer Science 1) and graphic design (Yearbook).
              </p>
              <p>
              These pursuits aren&apos;t only limited to school though, 
              I also enjoy programming outside of school and have even attempted to program my own website twice along with many other personal projects I have decided to take on in order to improve my skills. 
              I have also done some design work outside of my Yearbook responsibilities. 
              I have put forward my attempt to design a t-shirt for my academy&apos;s own t-shirt along with some minor help from my friend (Pictured below).
              </p>
              <div className={styles.slider}>
                <Slider imgArray={[s1, s2]} />
                <Shapes vertexes="5" maxY="75" minY="60"/>
              </div>
              <p>
              I value freedom of creativity, constructive criticism, and good leadership. 
              I think that the best creative work comes from having freedom to explore ideas and make mistakes. 
              Along with that comes good constructive criticism, 
              I think that since we all make mistakes, we should be allowed opportunities to grow from those mistakes, 
              and along with that comes constructive criticism. 
              There have been multiple times where I&apos;ve created something, and have been told it wasn&apos;t the best, 
              but wasn&apos;t told why or how I could improve it and those times have been some of the most frustrating.
              </p>
              <p>
              I think being both an aspiring programmer along with an aspiring designer allows me a unique perspective of being able to look at online design elements and be able to deconstruct them.
              </p>
              <p>
              The only awards I&apos;ve won so far were from my freshman year of high school,
              which include A honor roll, AISD Trustee Award, and the New Tech Computer Science award. The most important to me was probably the comp sci award, 
              because only two students were awarded it, and I was able to get it as only a freshman. 
              Another success to me was being able to work on and complete the mugshots section of the Akins Aerie 2023, and generally the whole yearbook.
              </p>
              <p>
              You can read more about it <a href='https://www.bulbapp.com/u/akins-aerie-2022-2023-work' target='_blank'>here</a>.
              </p>
              <p>
              In the future I want to eventually be able to attend university and get a degree in computer science, graphic design,
               or some other science major. 
               And maybe even earn my own PhD. 
               After that I hope to get a job either as a software/web developer or a freelance worker.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}