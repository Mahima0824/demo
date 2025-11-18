import React from 'react'

/**
 * Reusable form input component with consistent styling
 */
const FormInput = ({ 
  type = 'text', 
  placeholder, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'w-full bg-[#05070a] border border-[#6b7582] rounded-sm px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-[#090d13] transition-colors'
  
  if (type === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        className={`${baseClasses} resize-none ${className}`}
        {...props}
      />
    )
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  )
}

export default FormInput

