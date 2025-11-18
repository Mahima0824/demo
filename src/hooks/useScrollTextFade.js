import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Custom hook for scroll-triggered text fade animation
 * Splits text into words and animates opacity based on scroll progress
 */
const useScrollTextFade = () => {
  const textRef = useRef(null)

  useLayoutEffect(() => {
    if (!textRef.current) return
    const el = textRef.current
    const originalHTML = el.innerHTML

    // Get original text and split into words
    const originalText = el.innerText
    const words = originalText.trim().split(/\s+/)

    // Clear and rebuild as spans
    el.innerHTML = ''
    const wordSpans = words.map((word, index) => {
      const span = document.createElement('span')
      span.textContent = word + (index === words.length - 1 ? '' : ' ')
      span.style.opacity = '0.1'
      span.style.display = 'inline'
      el.appendChild(span)
      return span
    })

    // One ScrollTrigger driving opacity of all words
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress // 0 → 1
        const total = wordSpans.length

        wordSpans.forEach((span, index) => {
          // Map scroll progress to a smooth 0 → 1 curve per word
          const base = (progress * (total * 0.9)) - index * 0.6
          const clamped = Math.max(0, Math.min(1, base))
          // easeOutCubic for smoother fade
          const eased = 1 - Math.pow(1 - clamped, 3)
          const opacity = 0.08 + eased * 0.92 // 0.08 → 1
          span.style.opacity = opacity
        })
      },
    })

    ScrollTrigger.refresh()

    return () => {
      trigger.kill()
      el.innerHTML = originalHTML
    }
  }, [])

  return textRef
}

export default useScrollTextFade

