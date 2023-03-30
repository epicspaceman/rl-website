import styles from '@/styles/Slider.module.css'
import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import Image from 'next/image'

export default function Slider(props: any) {
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? props.imgArray.length -1 : currentIndex -1;
      setCurrentIndex(newIndex); 
  }

  const nextSlide = () => {
      const isLastSlide = currentIndex === props.imgArray.length -1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex); 
  }

  const randomRGB = () => {
    return Math.random() * (255-1) + 1;
  } 

  const randomA = () => {
    return Math.random() * (100-1) + 70;
  }

  const randomB = () => {
    return Math.random() * (25-1) + 3;
  }

  const randomC = () => {
    return Math.random() * (65-1) + 25;
  }

  const polygon = `${randomB()}% ${randomB()}%, ${randomA()}% ${randomB()}%, ${randomA()}% ${randomC()}%, ${randomA()}% ${randomA()}%, ${randomB()}% ${randomA()}%, ${randomB()}% ${randomC()}%`;
  console.log(props.imgArray[currentIndex]);
    
  return (
    <main className={styles.slider} style={{height: '400px', width: '600px', position: 'relative'}}>
      <div className={styles.sliderBorder} style={{clipPath: `polygon(${polygon})`, backgroundColor: `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`}}>
        <div className={styles.sliderObject} style={{clipPath: `polygon(${polygon})`}}><Image src={props.imgArray[currentIndex]} alt="example of my design work" width={575} height={375} /></div>
      </div>

      <div className={styles.arrowLeft}>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className={styles.arrowRight}>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </main>
  )
  }