import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    gsap.fromTo(
      textRef.current,
      { opacity: 0.2 },
      {
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <div className='text-white pt-[156px] pr-[32px] pb-[180px] pl-[32px] '>
        <div ref={textRef} className='max-w-[1000px] mx-auto w-full'>
           <span className='mb-[18px] txet-xs uppercase'>
                about
           </span>
           <p className='text-[72px] leading-normal  text-white/80'>
             DAM is a powerhouse of expertise and innovation, dedicated to advancing maritime engineering and design.
           </p>
        </div>
    </div>
  )
}

export default About