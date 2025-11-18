import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "../../assets/hero-video-low.mp4";
import heroOverlay from "../../assets/hero_bg_mask.webp";
import card1 from "../../assets/card 1.jpg";

gsap.registerPlugin(ScrollTrigger);

const Herosection = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const rightImage2Ref = useRef(null);

  useEffect(() => {
    // VIDEO SHRINK (0 → 0.5)
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

    // TEXT SCALE-IN (0.85 → 1)
    gsap.fromTo(
      textRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "85% top",
          end: "100% top",
          scrub: true,
        },
      }
    );

    // LEFT IMAGE APPEARS FIRST (0.9 → 0.94)
    gsap.fromTo(
      leftImageRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "90% bottom",
          end: "94% bottom",
          scrub: true,
        },
      }
    );

    // RIGHT IMAGE APPEARS AFTER LEFT (0.96 → 1)
    gsap.fromTo(
      rightImageRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightImageRef.current,
          start: "96% bottom",
          end: "100% bottom",
          scrub: true,
        },
      }
    );

    // RIGHT IMAGE 2 APPEARS
    gsap.fromTo(
      rightImage2Ref.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightImage2Ref.current,
          start: "98% bottom",
          end: "102% bottom",
          scrub: true,
        },
      }
    );

  
  }, []);

  return (
    <div className="relative min-h-[320vh] w-full bg-black">
      {/* STICKY VIDEO */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover rounded-xl"
        />

        <img
          src={heroOverlay}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          alt=""
        />

        {/* TEXT */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
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

      {/* IMAGES SECTION */}
      <div className="relative max-w-5xl mx-auto pt-32 pb-40">

        {/* LEFT */}
        <img
          ref={leftImageRef}
          src={card1}
          alt="left-card"
          className="absolute left-0 translate-y-[30vh] h-[600px] max-w-md rounded-2xl opacity-0"
        />

        {/* RIGHT */}
        <img
          ref={rightImageRef}
          src={card1}
          alt="right-card"
          className="absolute right-0 translate-y-[40vh] h-[600px] max-w-md rounded-2xl opacity-0"
        />
        
      

      </div>
    </div>
  );
};

export default Herosection;