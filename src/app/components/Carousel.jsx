"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container mt-20">
        <div className="embla__slide">
            <Image src='/tech1.webp' alt='technology' width={1000} height={250}/>
        </div>
        <div className="embla__slide">
            <Image src='/tech2.webp' alt='technology' width={1000} height={250}/>
        </div>
        <div className="embla__slide">
            <Image src='/tech3.webp' alt='technology' width={1000} height={250}/>
        </div>
        <div className="embla__slide">
            <Image src='/tech4.jpg' alt='technology' width={1000} height={250}/>
        </div>
      </div>
    </div>
  )
}
