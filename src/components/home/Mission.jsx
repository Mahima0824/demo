import React, { useRef } from 'react'
import { gsap } from "gsap";
import card1 from "../../assets/VisionWide.webp";
import card2 from "../../assets/VisionWide1.webp";



const Mission = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftOverlayRef = useRef(null);
  const rightOverlayRef = useRef(null);

  const handleRightHoverEnter = () => {
    if (!leftRef.current || !rightRef.current) return;

    gsap.to(rightRef.current, {
      flex: 2,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(leftRef.current, {
      flex: 0.6,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(leftOverlayRef.current, {
      opacity: 1,
      duration: 1.0,
      ease: "power3.inOut",
    });

    gsap.to(rightOverlayRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
    });
  };

  const handleRightHoverLeave = () => {
    if (!leftRef.current || !rightRef.current) return;

    gsap.to(rightRef.current, {
      flex: 1,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(leftRef.current, {
      flex: 1,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(leftOverlayRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
    });
  };

  const handleLeftHoverEnter = () => {
    if (!leftRef.current || !rightRef.current) return;

    gsap.to(leftRef.current, {
      flex: 2,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(rightRef.current, {
      flex: 0.6,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(rightOverlayRef.current, {
      opacity: 1,
      duration: 1.0,
      ease: "power3.inOut",
    });

    gsap.to(leftOverlayRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
    });
  };

  const handleLeftHoverLeave = () => {
    if (!leftRef.current || !rightRef.current) return;

    gsap.to(leftRef.current, {
      flex: 1,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(rightRef.current, {
      flex: 1,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(leftOverlayRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
    });
  };

  return (
    <div className='w-full flex h-[50rem]'>
      <div
        ref={leftRef}
        className='flex-1 relative overflow-hidden'
        onMouseEnter={handleLeftHoverEnter}
        onMouseLeave={handleLeftHoverLeave}
      >
        <img src={card1} className=' h-full object-cover' />
        <div
          ref={leftOverlayRef}
          className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 pointer-events-none flex items-center px-10'
        >
        </div>
        <div className='absolute inset-0'>

          <div className='text-white max-w-md space-y-3'>
            <p className='text-xs font-semibold tracking-[0.25em]'>MISSION</p>
            <h2 className='text-3xl font-semibold leading-snug'>
              Setting new benchmarks redefining what&apos;s possible on water
            </h2>
          </div>
        </div>
      </div>
      <div
        ref={rightRef}
        className='flex-1 relative overflow-hidden'
        onMouseEnter={handleRightHoverEnter}
        onMouseLeave={handleRightHoverLeave}
      >
        <img src={card2} className=' h-full object-cover' />
        <div
          ref={rightOverlayRef}
          className='absolute inset-0 bg-black/40 opacity-0 pointer-events-none'
        />

        <div className='absolute  px-10'>
          <div className='text-white max-w-md text-center space-y-3'>
            <p className='text-xs font-semibold tracking-[0.25em]'>VISION</p>
            <h2 className='text-3xl font-semibold leading-snug'>
              A more sustainable and advanced future in marine engineering
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission