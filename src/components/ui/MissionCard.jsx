import React from 'react'

const MissionCard = ({ 
  image, 
  label, 
  title, 
  position = 'left',
  onHoverEnter,
  onHoverLeave,
  cardRef,
  overlayRef
}) => {
  const isLeft = position === 'left'
  const textAlignClass = isLeft ? 'top-5 left-5' : 'md:text-right top-5 right-5'

  return (
    <div
      ref={cardRef}
      className='flex-1 relative overflow-hidden'
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      <img src={image} className='h-full object-cover' alt={label} />
      <div
        className='absolute inset-0 pointer-events-none z-0'
        style={{ background: 'linear-gradient(180deg, #000000, rgba(0,0,0,0.3), transparent)' }}
      />
      <div
        ref={overlayRef}
        className='absolute inset-0 bg-gray-900/80 opacity-0 pointer-events-none z-1'
      />

      <div className={`absolute ${textAlignClass}`}>
        <div className='text-white max-w-[200px] space-y-3'>
          <p className='text-xs tracking-tight font-normal'>{label}</p>
          <h2 className='font-normal tracking-tight leading-tight text-[1.5rem] md:text-2xl'>
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default MissionCard

