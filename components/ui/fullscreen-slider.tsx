"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FullscreenSliderProps {
  images: {
    src: string
    alt: string
    color: string
  }[]
  initialSlide?: number
  onClose: () => void
}

export function FullscreenSlider({ images, initialSlide = 0, onClose }: FullscreenSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide)

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white z-50" onClick={onClose}>
        <Maximize2 className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <div className={`${image.color} w-full h-full flex items-center justify-center`}>
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" priority />
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentSlide === index ? "bg-white w-4" : "bg-white/50",
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
