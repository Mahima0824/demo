import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "../../assets/hero-video-low.mp4";
import heroOverlay from "../../assets/hero_bg_mask.webp";
import card1 from "../../assets/card 1.jpg";
import card2 from "../../assets/card 2.jpg";
import card3 from "../../assets/card 3.jpg";
import card5 from "../../assets/card 5.jpg";
import card6 from "../../assets/card 6.jpg";
import card7 from "../../assets/card 7.jpg";
import card8 from "../../assets/card 8.jpg";

gsap.registerPlugin(ScrollTrigger);

const Herosection = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const radialBgRef = useRef(null);
  const postersRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (!videoRef.current || !textRef.current) return;

    gsap.set(textRef.current, {
      scale: 0,
      opacity: 0,
    });

    if (radialBgRef.current) {
      gsap.set(radialBgRef.current, {
        opacity: 0,
      });
    }

    if (scrollIndicatorRef.current) {
      gsap.set(scrollIndicatorRef.current, {
        opacity: 1,
        scale: 1,
      });
    }

    imageRefs.current.forEach((imgRef) => {
      if (imgRef) {
        gsap.set(imgRef, {
          opacity: 0,
          scale: 0.8,
          y: 50,
        });
      }
    });

    gsap.to(videoRef.current, {
      scale: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "50% top",
        scrub: true,
      },
    });

    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        scale: 0.5,
        opacity: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });
    }

    gsap.to(videoRef.current, {
      scale: 0,
      opacity: 0,
      borderRadius: "80px",
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "50% top",
        end: "100% top",
        scrub: true,
      },
    });

    gsap.to(textRef.current, {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "70% top",
        end: "100% top",
        scrub: true,
      },
    });

    if (radialBgRef.current) {
      gsap.to(radialBgRef.current, {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "70% top",
          end: "100% top",
          scrub: true,
        },
      });
    }

    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        scale: 0,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "50% top",
          end: "100% top",
          scrub: true,
        },
      });
    }

    if (postersRef.current && imageRefs.current.length > 0) {
      const validImageRefs = imageRefs.current.filter((ref) => ref !== null && ref !== undefined);
      
      if (validImageRefs.length > 0) {
        ScrollTrigger.create({
          trigger: postersRef.current,
          start: "top bottom",
          onEnter: () => {
            gsap.to(validImageRefs, {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: "power2.out",
              duration: 0.6,
              stagger: 0.15, 
            });
          },
        });
      }
    }
  }, []);

  const gridImages = [
    {
      id: 1,
      src: card1,
      alt: "Grid image 1",
      layout: { top: 2000, left: 200, width: 230, height: 350 },
    },
    {
      id: 2,
      src: card2,
      alt: "Grid image 2",
      layout: { top: 2500, left: 400, width: 230, height: 350  },
    },
    {
      id: 3,
      src: card3,
      alt: "Grid image 3",
      layout: { top: 3000, left: 0, width: 230, height: 350 },
    },
    {
      id: 4,
      src: card5,
      alt: "Grid image 5",
      layout: { top: 3500, left: 300, width: 230, height: 350 },
    },
    {
      id: 5,
      src: card6,
      alt: "Grid image 6",
      layout: { top: 4000, left: 520, width: 230, height: 350 },
    },
    {
      id: 6,
      src: card7,
      alt: "Grid image 7",
      layout: { top: 4500, left: 120, width: 230, height: 350 },
    },
    {
      id: 7,
      src: card8,
      alt: "Grid image 8",
      layout: { top: 4600, left: 370, width: 230, height: 350 },
    },
  ];

  return (
    <div className="relative min-h-[400vh] w-full bg-black">
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

        <div
          ref={scrollIndicatorRef}
          className="absolute left-1/2 bottom-10 -translate-x-1/2 z-20 pointer-events-none"
          style={{
            transformOrigin: "center bottom",
          }}
        >
          <div className="relative flex flex-col items-center">
            <div className="relative w-6 h-12 border-2 border-white rounded-full flex items-start justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-dot"></div>
            </div>
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

        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div
            ref={radialBgRef}
            className="absolute"
            style={{
              zIndex: -1,
              width: "60vmax",
              height: "60vmax",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(43, 84, 117, 0.88) 0, rgba(42, 40, 101, 0) 100%)",
              opacity: 0,
            }}
          />
          <h2
            ref={textRef}
            className="text-3xl md:text-[32px] font-semibold text-white opacity-0 scale-0 relative z-10"
          >
            Designed for Performance,
            <br />
            Driven by Sustainability.
          </h2>
        </div>
      </div>

      <div ref={postersRef} className="w-full bg-black pt-20 pb-40 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-2 auto-rows-[120px] md:hidden">
            {gridImages.map((image, index) => (
              <div
                key={`mobile-${image.id}`}
                ref={(el) => {
                  if (el) imageRefs.current[index] = el;
                }}
                className="relative overflow-hidden bg-gray-900"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="hidden md:block relative overflow-hidden" style={{ height: "5000px" }}>
            {gridImages.map((image, index) => (
              <div
                key={image.id}
                ref={(el) => {
                  if (el) imageRefs.current[index] = el;
                }}
                className="absolute overflow-hidden bg-gray-900 shadow-xl"
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