import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "../../assets/hero-video-low.mp4";
import heroOverlay from "../../assets/hero_bg_mask.webp";
import card1 from "../../assets/card 1.jpg";
import TransizioneBarca from "../../assets/TransizioneBarca.webp";
import VisionWide from "../../assets/VisionWide.webp";
import VisionWide1 from "../../assets/VisionWide1.webp";
import userImg from "../../assets/user.webp";

gsap.registerPlugin(ScrollTrigger);

const Herosection = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const postersRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !textRef.current) return;

    // Set initial state for text
    gsap.set(textRef.current, {
      scale: 0,
      opacity: 0,
    });

    // Set initial state for scroll indicator
    if (scrollIndicatorRef.current) {
      gsap.set(scrollIndicatorRef.current, {
        opacity: 1,
        scale: 1,
      });
    }

    // VIDEO SHRINK (0 → 0.5) - Scroll indicator scales with video
    gsap.to(videoRef.current, {
      scale: 0.85,
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "50% top",
        scrub: true,
      },
    });

    // Scroll indicator scales with video (0 → 0.5)
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        scale: 0.85,
        opacity: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });
    }

    // VIDEO VANISH + BORDER RADIUS (0.5 → 0.9)
    gsap.to(videoRef.current, {
      scale: 0,
      borderRadius: "80px",
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "50% top",
        end: "90% top",
        scrub: true,
      },
    });

    // Scroll indicator scales with video (0.5 → 0.9) and fades out
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        scale: 0,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "50% top",
          end: "90% top",
          scrub: true,
        },
      });
    }

    // TEXT SCALE-IN (0.85 → 1)
    gsap.to(textRef.current, {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "85% top",
        end: "100% top",
        scrub: true,
      },
    });

    // IMAGE GRID APPEAR AFTER TEXT
    if (postersRef.current) {
      gsap.fromTo(
        postersRef.current,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: postersRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const gridImages = [
    {
      id: 1,
      src: card1,
      alt: "Grid image 1",
      layout: { top: 0, left: 0, width: 200, height: 260 },
    },
    {
      id: 2,
      src: VisionWide,
      alt: "Grid image 2",
      layout: { top: 60, left: 230, width: 180, height: 200 },
    },
    {
      id: 3,
      src: VisionWide1,
      alt: "Grid image 3",
      layout: { top: 0, left: 440, width: 220, height: 280 },
    },
    {
      id: 4,
      src: TransizioneBarca,
      alt: "Grid image 4",
      layout: { top: 300, left: 30, width: 230, height: 280 },
    },
    {
      id: 5,
      src: userImg,
      alt: "Grid image 5",
      layout: { top: 320, left: 300, width: 170, height: 210 },
    },
    {
      id: 6,
      src: card1,
      alt: "Grid image 6",
      layout: { top: 360, left: 520, width: 210, height: 250 },
    },
    {
      id: 7,
      src: VisionWide1,
      alt: "Grid image 7",
      layout: { top: 620, left: 120, width: 230, height: 260 },
    },
    {
      id: 8,
      src: TransizioneBarca,
      alt: "Grid image 8",
      layout: { top: 640, left: 370, width: 200, height: 230 },
    },
    {
      id: 9,
      src: VisionWide,
      alt: "Grid image 9",
      layout: { top: 860, left: 220, width: 240, height: 260 },
    },
  ];

  return (
    <div className="relative min-h-[200vh] w-full bg-black">
      {/* STICKY VIDEO */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover rounded-2xl"
        />

        <img
          src={heroOverlay}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          alt=""
        />

        {/* SCROLL INDICATOR */}
        <div
          ref={scrollIndicatorRef}
          className="absolute left-1/2 bottom-10 -translate-x-1/2 z-20 pointer-events-none"
          style={{
            transformOrigin: "center bottom",
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Scrollbar oval with dot */}
            <div className="relative w-6 h-12 border-2 border-white rounded-full flex items-start justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-dot"></div>
            </div>
            {/* Downward arrows */}
            <div className="flex flex-col items-center mt-2 space-y-1">
              <svg
                className="w-4 h-4 text-white animate-scroll-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                className="w-4 h-4 text-white animate-scroll-arrow-delayed"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-10">
          <h2
            ref={textRef}
            className="text-3xl md:text-5xl font-semibold text-white opacity-0 scale-0"
          >
            Designed for Performance,
            <br />
            Driven by Sustainability.
          </h2>
        </div>
      </div>

      {/* IMAGE GRID SECTION */}
      <div ref={postersRef} className="w-full bg-black py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Mobile grid */}
          <div className="grid grid-cols-2 gap-2 auto-rows-[120px] md:hidden">
            {gridImages.map((image) => (
              <div
                key={`mobile-${image.id}`}
                className="relative overflow-hidden rounded-lg bg-gray-900"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop collage */}
          <div className="hidden md:block relative h-[1150px]">
            {gridImages.map((image) => (
              <div
                key={image.id}
                className="absolute overflow-hidden rounded-2xl bg-gray-900 shadow-xl"
                style={{
                  top: `${image.layout.top}px`,
                  left: `${image.layout.left}px`,
                  width: `${image.layout.width}px`,
                  height: `${image.layout.height}px`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;