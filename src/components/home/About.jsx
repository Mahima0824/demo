import React from 'react'
import useScrollTextFade from '../../hooks/useScrollTextFade'
import Section from '../ui/Section'

const About = () => {
  const textRef = useScrollTextFade()

  return (
    <div className=''>
      <Section>
        <div className='max-w-[1000px] mx-auto w-full'>
          <span className='mb-[48px] block text-xs uppercase text-white/60'>
            about
          </span>
          <p
            ref={textRef}
            className='text-[36px] md:text-[56px] lg:text-[72px] leading-[1.05] text-white/80'
          >
            DAM is a powerhouse of expertise and innovation, dedicated to advancing maritime engineering and design.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default About