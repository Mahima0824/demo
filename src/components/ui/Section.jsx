import React from 'react'

/**
 * Reusable Section wrapper component with common padding
 */
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

