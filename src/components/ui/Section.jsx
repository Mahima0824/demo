import React from 'react'

const Section = ({ 
  children, 
  className = '', 
  padding = 'pt-[156px] pr-[32px] pb-[180px] pl-[32px]',
  ...props 
}) => {
  return (
    <section className={`text-white ${padding} ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section

