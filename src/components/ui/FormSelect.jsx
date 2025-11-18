import React from 'react'

/**
 * Reusable form select component with consistent styling
 */
const FormSelect = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <select
      className={`w-full bg-[#05070a] border border-[#6b7582] rounded-sm px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-[#090d13] transition-colors ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

export default FormSelect

