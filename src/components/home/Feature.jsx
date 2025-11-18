import React from 'react'
import TransizioneBarca from "../../assets/TransizioneBarca.webp"

const Feature = () => {
  return (
 <>
       <section className='w-full bg-black text-white px-10 md:px-20 py-16 md:py-24'>
      <div className=' mx-auto flex flex-col md:flex-row gap-12 md:gap-24'>
        <div className='md:w-5/12 text-sm md:text-base leading-relaxed'>
          <p>
            For owners who love the sea and demand the very best, we deliver yachts
            built for true performance and resilience.
          </p>
        </div>

        <div className='md:w-7/12 flex flex-col justify-between gap-8 text-xs md:text-sm leading-relaxed text-gray-200'>
          <p>
            In luxury yachting, the pursuit of size has often eclipsed core principles
            like optimized hull design, speed dynamics, and advanced hull/propulsion
            systems. DAM takes a different approach: we prioritize technical excellence,
            starting with high-performance hulls, whether displacement, semi-planning,
            planning, or high-speed. Located in the heart of Dubai Maritime City, DAM is
            set to deliver high quality solutions in technology and luxury craftsmanship,
            merging Italian design excellence with the United Arab Emirates technological
            supremacy. Creating a new protected designation of origin, "Proudly Made in
            UAE".
          </p>

          <div className='flex items-center gap-2 mt-4'>
            <span className='h-2 w-2 rounded-full bg-green-400' />
            <span className='h-2 w-2 rounded-full bg-gray-500' />
            <span className='h-2 w-2 rounded-full bg-gray-500' />
            <span className='h-2 w-2 rounded-full bg-gray-500' />
          </div>
        </div>
      </div>
    </section>
      <img src={TransizioneBarca} className='w-full'/>
 </>
  )
}

export default Feature