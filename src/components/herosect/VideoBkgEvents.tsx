'use client'
import { useRef, useState } from 'react';

const videos = [
    'https://res.cloudinary.com/q3ilhui6/video/upload/v1792583574/SJ.mov',
    'https://res.cloudinary.com/q3ilhui6/video/upload/v1792583574/SJ.mov',
]

export default function VideoBackgroundEvents() {
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
      className="absolute inset-0 w-full h-full object-cover saturate-200"
    />
  )
}