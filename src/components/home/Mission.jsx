import React, { useRef } from 'react'
import { gsap } from "gsap"
import card1 from "../../assets/VisionWide.webp"
import card2 from "../../assets/VisionWide1.webp"
import MissionCard from '../ui/MissionCard'

const Mission = () => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const leftOverlayRef = useRef(null)
  const rightOverlayRef = useRef(null)

  const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768

  const resetCards = () => {
    if (isMobile() || !leftRef.current || !rightRef.current) return

    gsap.to([leftRef.current, rightRef.current], {
      flex: 1,
      duration: 1.2,
      ease: "power3.inOut",
    })

    gsap.to([leftOverlayRef.current, rightOverlayRef.current], {
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
    })
  }

  const handleRightHoverEnter = () => {
    if (isMobile() || !leftRef.current || !rightRef.current) return

    gsap.to(rightRef.current, {
      flex: 2,
      duration: 1.2,
      ease: "power3.inOut",
    })

    gsap.to(leftRef.current, {
      flex: 0.6,
      duration: 1.2,
      ease: "power3.inOut",
    })

    gsap.to(leftOverlayRef.current, {
      opacity: 1,
      duration: 1.0,
      ease: "power3.inOut",
    })

    gsap.to(rightOverlayRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
    })
  }

  const handleLeftHoverEnter = () => {
    if (isMobile() || !leftRef.current || !rightRef.current) return

    gsap.to(leftRef.current, {
      flex: 2,
      duration: 1.2,
      ease: "power3.inOut",
    })

    gsap.to(rightRef.current, {
      flex: 0.6,
      duration: 1.2,
      ease: "power3.inOut",
    })

    gsap.to(rightOverlayRef.current, {
      opacity: 1,
      duration: 1.0,
      ease: "power3.inOut",
    })

    gsap.to(leftOverlayRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
    })
  }

  return (
    <div className='w-full flex flex-col md:flex-row h-auto md:h-200'>
      <MissionCard
        image={card1}
        label="MISSION"
        title="Setting new benchmarks redefining what's possible on water"
        position="left"
        cardRef={leftRef}
        overlayRef={leftOverlayRef}
        onHoverEnter={handleLeftHoverEnter}
        onHoverLeave={resetCards}
      />
      <MissionCard
        image={card2}
        label="VISION"
        title="A more sustainable and advanced future in marine engineering"
        position="right"
        cardRef={rightRef}
        overlayRef={rightOverlayRef}
        onHoverEnter={handleRightHoverEnter}
        onHoverLeave={resetCards}
      />
    </div>
  )
}

export default Mission