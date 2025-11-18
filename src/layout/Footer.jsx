import React from 'react'
import footerVideo from "../assets/footer.mp4"

const Footer = () => {
  return (
    <div className='max-h-[700px] pb-[180px] relative bg-black flex items-center justify-center'>
      <svg width="100%" height="400" viewBox="0 0 128 31" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Mask define karein - text shapes use karke */}
          <mask id="textMask">
            <rect width="100%" height="100%" fill="black"/>
            <g fill="white">
              <path d="M25.6615 22.9553H3.92281L0.779297 30.1458H25.92C33.3985 30.1458 39.4615 24.0827 39.4615 16.6043V15.1199C39.4615 7.64145 33.3985 1.57843 25.92 1.57843H0.779297L3.92281 8.76642H25.6591C29.2334 8.76642 32.1307 11.6638 32.1307 15.2381V16.4837C32.1307 20.058 29.2334 22.9553 25.6591 22.9553"></path>
              <path d="M65.1591 2.60493L62.6507 0.145752L60.1398 2.60493C52.4989 10.0932 46.682 19.6149 43.3096 30.1458H50.9037C53.5697 22.7756 57.5698 16.0209 62.6507 10.3591C67.7315 16.0209 71.7292 22.7756 74.3976 30.1458H81.9918C78.6193 19.6149 72.8025 10.0932 65.1615 2.60493"></path>
              <path d="M118.63 1.58081C115.986 7.49367 112.357 12.924 107.897 17.5667C103.436 12.924 99.8055 7.49367 97.1617 1.58081H88.541V30.1457H95.7709V13.4804C98.5525 17.6972 101.819 21.5816 105.531 25.0033L107.897 27.1868L110.263 25.0033C113.96 21.5939 117.217 17.7242 119.991 13.5247V30.1432H127.221V1.58081H118.63Z"></path>
            </g>
          </mask>
        </defs>
        
        {/* Video ko mask ke saath apply karein */}
        <foreignObject x="0" y="0" width="128" height="31" mask="url(#textMask)">
          <video 
            src={footerVideo}
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </foreignObject>
      </svg>
    </div>
  )
}

export default Footer