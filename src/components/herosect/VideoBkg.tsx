'use client'
import { useRef, useState } from 'react';

const videos = [
    '/videos/events/chris_being_chris.mp4',
    '/videos/events/C0306.mp4',
    '/videos/events/C0407.mp4',
    '/videos/events/C1771_Proxy.mov',
    '/videos/events/C1825_Proxy.mov',
    '/videos/events/StudiosClip-ARA-1.mov',
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