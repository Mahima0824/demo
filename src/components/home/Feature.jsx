import React from 'react'
import useScrollTextFade from '../../hooks/useScrollTextFade'
import Section from '../ui/Section'
import TransizioneBarca from "../../assets/TransizioneBarca.webp"

const Feature = () => {
  const pointRef = useScrollTextFade()

  const values = [
    {
      id: 'customer-centricity',
      title: 'Customer Centricity',
      description:
        'We make possible the previously unfulfilled navigation desires of our clients.',
      badge: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <g clipPath="url(#clip0_2_107)">
            <mask
              id="mask0_2_107"
              style={{ maskType: 'luminance' }}
              maskUnits="userSpaceOnUse"
              x="1"
              y="0"
              width="44"
              height="45"
            >
              <path
                d="M22.837 44.3987C34.849 44.3987 44.5866 34.661 44.5866 22.649C44.5866 10.6371 34.849 0.899414 22.837 0.899414C10.825 0.899414 1.0874 10.6371 1.0874 22.649C1.0874 34.661 10.825 44.3987 22.837 44.3987Z"
                fill="currentColor"
              />
            </mask>
            <g>
              <path
                d="M9.27002 39.5874L10.3258 28.8257L35.3409 28.9388L36.3816 39.429"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M22.8371 23.1015C26.6981 23.1015 29.8281 19.9716 29.8281 16.1106C29.8281 12.2496 26.6981 9.11963 22.8371 9.11963C18.9761 9.11963 15.8462 12.2496 15.8462 16.1106C15.8462 19.9716 18.9761 23.1015 22.8371 23.1015Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </g>
            <path
              d="M22.837 44.3987C34.849 44.3987 44.5866 34.661 44.5866 22.649C44.5866 10.6371 34.849 0.899414 22.837 0.899414C10.825 0.899414 1.0874 10.6371 1.0874 22.649C1.0874 34.661 10.825 44.3987 22.837 44.3987Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_107">
              <rect
                width="45"
                height="45"
                fill="currentColor"
                transform="translate(0.333252 0.145508)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      description:
        'We use clean energy motors and fuel-efficient vessels to minimize environmental impact.',
      badge: (
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><g clip-path="url(#clip0_2_239)"><mask id="mask0_2_239" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="0" width="44" height="45"><path d="M23.1703 44.3987C35.1823 44.3987 44.9199 34.661 44.9199 22.649C44.9199 10.6371 35.1823 0.899414 23.1703 0.899414C11.1583 0.899414 1.42065 10.6371 1.42065 22.649C1.42065 34.661 11.1583 44.3987 23.1703 44.3987Z" fill="white"></path></mask><g mask="url(#mask0_2_239)"><path d="M18.7962 32.2191L17.1446 31.5479C13.9168 30.2432 11.8882 27.9506 11.4206 25.0924C10.9229 22.0306 12.3029 18.8481 15.2064 16.3669C17.7554 14.1874 24.0601 10.8918 27.7102 10.1301C28.1928 10.0321 29.7011 9.71533 29.7011 9.71533C29.7011 9.71533 31.0586 11.6686 31.4809 12.385L31.6091 12.6037C34.1204 16.7666 36.1416 23.2146 34.2939 28.8254C32.9515 32.9129 29.6257 35.2357 25.6137 34.8662C24.7464 34.7908 24.1581 34.5042 23.6378 34.2478M11.858 37.3247C12.7177 36.9552 14.309 36.0351 15.0782 35.5298C20.4025 31.9929 24.588 26.1784 26.6619 19.4665" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path></g><path d="M23.1703 44.3987C35.1823 44.3987 44.9199 34.661 44.9199 22.649C44.9199 10.6371 35.1823 0.899414 23.1703 0.899414C11.1583 0.899414 1.42065 10.6371 1.42065 22.649C1.42065 34.661 11.1583 44.3987 23.1703 44.3987Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_2_239"><rect width="45" height="45" fill="white" transform="translate(0.666504 0.145508)"></rect></clipPath></defs></svg>
      ),
      tall: true,
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description:
        'We create unique masterpieces that navigate beyond the ordinary.',
      badge: (
        <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9998 15.1455L14.9998 2.02051" stroke="currentColor" stroke-width="1.5"></path><path d="M14.9998 43.2705L14.9998 30.1455" stroke="currentColor" stroke-width="1.5"></path><path d="M30.9373 15.1455L30.9373 2.02051" stroke="currentColor" stroke-width="1.5"></path><path d="M30.9373 43.2705L30.9373 30.1455" stroke="currentColor" stroke-width="1.5"></path><circle cx="22.4998" cy="22.6455" r="21.75" stroke="currentColor" stroke-width="1.5"></circle><path d="M8.79489 26.208H7.70623V17.9193H8.79489V26.208ZM10.9028 17.9193H17.2244V18.8596H14.6141V26.208H13.5131V18.8596H10.9028V17.9193ZM25.1426 26.208H23.856L23.0642 24.142H19.2292L18.4374 26.208H17.1508L20.5158 17.9193H21.7653L25.1426 26.208ZM20.8498 19.9111L19.5879 23.2018H22.6931L21.4312 19.9111L21.1591 19.0204H21.122L20.8498 19.9111ZM28.1477 17.9193V25.2678H32.2426V26.208H27.0591V17.9193H28.1477ZM35.5099 21.9523L37.6749 17.9193H38.9615L36.0666 23.0286V26.2575H34.9656V23.0286L32.0707 17.9193H33.345L35.5099 21.9523Z" fill="currentColor"></path></svg>
      ),
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'We are driven by innovation, research, and development.',
      badge: (
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><g clip-path="url(#clip0_2_167)"><mask id="mask0_2_167" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="0" width="44" height="45"><path d="M22.837 44.3987C34.849 44.3987 44.5866 34.661 44.5866 22.649C44.5866 10.6371 34.849 0.899414 22.837 0.899414C10.825 0.899414 1.0874 10.6371 1.0874 22.649C1.0874 34.661 10.825 44.3987 22.837 44.3987Z" fill="currentColor"></path></mask><g><path d="M6.78125 26.3746L11.1855 17.6114L17.7918 17.5284C18.9984 15.7109 20.454 13.9839 22.2865 12.7848C25.7858 10.4922 34.3906 11.0578 34.3906 11.0578C34.3906 11.0578 34.6395 12.0231 34.6847 12.2645C35.2352 15.4244 34.9487 18.5541 33.6289 21.4802C32.4524 24.0971 30.3031 26.1483 27.92 27.6717L27.8823 34.3007L19.1191 38.6974V31.4802L16.0799 32.3701L12.9728 29.2253L13.923 26.3746H6.78879H6.78125Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path></g><path d="M22.837 44.3987C34.849 44.3987 44.5866 34.661 44.5866 22.649C44.5866 10.6371 34.849 0.899414 22.837 0.899414C10.825 0.899414 1.0874 10.6371 1.0874 22.649C1.0874 34.661 10.825 44.3987 22.837 44.3987Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_2_167"><rect width="45" height="45" fill="currentColor" transform="translate(0.333252 0.145508)"></rect></clipPath></defs></svg>
      ),
    },
    {
      id: 'collaborations',
      title: 'Collaborations',
      description:
        'We collaborate with the best in the industry to create unique masterpieces.',
      badge: (
        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none"><path d="M23.4998 46.1455C35.9262 46.1455 45.9998 36.0719 45.9998 23.6455C45.9998 11.2191 35.9262 1.14551 23.4998 1.14551C11.0733 1.14551 0.999756 11.2191 0.999756 23.6455C0.999756 36.0719 11.0733 46.1455 23.4998 46.1455Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M24.6286 36.7602V33.0934C16.2886 34.2402 8.41673 25.5492 13.1601 17.6071C17.5525 10.2501 29.4734 10.2267 33.8424 17.6071C38.1957 24.9562 31.7047 32.4692 25.6896 36.1984C25.3697 36.3935 24.9953 36.6743 24.6286 36.7602Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
      ),
    },
  ]

  return (
    <>
      <section className='text-white px-[156px] py-[128px]'>
        <div className='mx-auto flex flex-col gap-12 md:gap-24'>
          <div className='md:w-xs text-sm md:text-[24px] leading-tight'>
            <p>
              For owners who love the sea and demand the very best, we deliver yachts
              built for true performance and resilience.
            </p>
          </div>

          <div className='md:w-[500px] self-end text-xs md:text-sm leading-relaxed text-[#6b7582]'>
            <p className='mb-2'>
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

            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-red-500' />
              <span className='h-2 w-2 rounded-full bg-green-500' />
              <span className='h-2 w-2 rounded-full bg-white' />
              <span className='h-2 w-2 rounded-full border border-white' />
            </div>
          </div>
        </div>
      </section>

      <img src={TransizioneBarca} className='w-full' alt="Transition" />
      <Section className='bg-[#091523]'>
        <div className='max-w-[1000px] mx-auto w-full'>
          <span className='mb-[48px] block text-xs uppercase text-white/60'>
            Our point of difference
          </span>
          <p
            ref={pointRef}
            className='text-[36px] md:text-[56px] lg:text-[72px] leading-[1.05] text-white/80'
          >
            Revolutionary hull, engine and propulsion design that improves speed, efficiency and sustainability.
          </p>
        </div>
      </Section>
      <section style={{
        background: 'linear-gradient(180deg,#091523,#091523,rgba(9,21,35,0))',
      }}>
        <Section>

          <div className='max-w-[1100px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center'>
            {/* Left stacked cards */}
            <div className='relative w-full md:w-1/2 flex justify-center md:justify-start'>
              {/* Front portrait-style card */}
              <div className='relative w-[260px] h-[340px] md:w-[320px] z-10 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-800'>
                <img
                  src={TransizioneBarca}
                  alt='Team lead portrait'
                  className='h-full w-full object-cover grayscale'
                />
              </div>

              {/* Back marina card */}
              <div className='absolute -top-16 left-16 md:-top-20 md:left-28 w-[260px] h-[180px] md:w-[320px] md:h-[220px] rounded-3xl overflow-hidden shadow-xl bg-slate-700'>
                <img
                  src={TransizioneBarca}
                  alt='Marina aerial view'
                  className='h-full w-full object-cover'
                />
              </div>
            </div>

            {/* Right text column */}
            <div className='w-full md:w-1/2 max-w-xl  text-sm md:text-base text-white/70'>
              <h3 className='text-3xl md:text-7xl text-white mb-24 tracking-tight'>A Visionary Team</h3>
              <p className='text-base text-[#6b7582]'>Daniele Pianon, our General and Executive Manager, is an expert in luxury-sector with over two decades of experience. Daniele brings a sharp eye for excellence and a vision for sustainable, high-performance luxury products and services.<br />His leadership has been instrumental in building a global team of elite professionals, driven by passion, commitment, and determination, and poised for continued growth.  He oversees a dedicated research and development team. Together, they are pioneering the design of hulls with incredibly efficient water lines, pushing the boundaries of what is possible in marine technology.</p>
            </div>
          </div>
        </Section>
      </section>

      {/* Values section */}
      <section className=''>
        <div className=''>
          {/* Header row */}
          <div className='flex items-center justify-between gap-6 mb-10 px-10 md:mb-16'>
            <h3 className='text-lg md:text-xl text-white font-semibold tracking-tight'>Our solid Values</h3>
            <p className='text-xs md:text-sm text-white whitespace-nowrap'>Where Vision Meets Performance</p>
          </div>

          {/* Cards grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-1 bg-[#111820] overflow-hidden'>
            {values.map((item) => (
              <div
                key={item.id}
                className={`bg-[#252e38] p-8 flex rounded-md overflow-hidden flex-col gap-16 justify-between transition-all duration-300 ease-out transform  hover:shadow-xl hover:bg-[#3d4552] ${item.tall ? 'md:row-span-2' : ''
                  }`}
              >
                <div className='w-1/2'>
                  <p className='text-[11px] md:text-xs font-semibold tracking-tight uppercase text-white  mb-4'>
                    {item.title}
                  </p>
                  <p className='text-xs md:text-sm text-[#6b7582] max-w-xs'>
                    {item.description}
                  </p>
                </div>
                <div className='mt-8 flex justify-end'>
                  <div className='h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/60'>
                    {item.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature