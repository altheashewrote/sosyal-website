'use client'
import { useRef, useState } from 'react';

const videos = [
    'https://res.cloudinary.com/dmw0dgiw0/video/upload/v1774513638/C1825_Proxy_tcwb7m.mov',
    'https://res.cloudinary.com/dmw0dgiw0/video/upload/v1774513622/C1771_Proxy_krsh9n.mov',
    'https://res.cloudinary.com/dmw0dgiw0/video/upload/v1774941372/ARA_VIDEO_PROMO-2_rmcfg2.mov',
    'https://res.cloudinary.com/dmw0dgiw0/video/upload/v1774941512/Untitled_d2irjl.mp4',
    'https://res.cloudinary.com/dmw0dgiw0/video/upload/v1774513624/StudiosClip-ARA-1_w4b4uc.mov',
]

export default function VideoBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  return (
    <video
      ref={videoRef}
      key={currentIndex}        // forces remount on index change
      src={videos[currentIndex]}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
      className="absolute inset-0 w-full h-full object-cover saturate-120"
    />
  )
}