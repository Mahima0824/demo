import React from 'react'

const FormSelect = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <select
      className={`w-full bg-form-dark border border-gray-secondary rounded-sm px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-form-focus transition-colors ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

export default FormSelect

