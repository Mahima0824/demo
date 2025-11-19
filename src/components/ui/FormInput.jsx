import React from 'react'

const FormInput = ({ 
  type = 'text', 
  placeholder, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'w-full bg-form-dark border border-gray-secondary rounded-sm px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-form-focus transition-colors'
  
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

