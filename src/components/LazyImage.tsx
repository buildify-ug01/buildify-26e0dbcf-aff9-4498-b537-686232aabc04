
import { useState, useEffect } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholderColor?: string
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderColor = '#f3f4f6' 
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let observer: IntersectionObserver
    let didCancel = false

    if (imageRef && !isLoaded) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
                observer.unobserve(imageRef)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%'
          }
        )
        observer.observe(imageRef)
      } else {
        // Fallback for older browsers
        setImageSrc(src)
      }
    }
    
    return () => {
      didCancel = true
      if (observer && imageRef) {
        observer.unobserve(imageRef)
      }
    }
  }, [src, imageRef, isLoaded])

  return (
    <div 
      className={`relative overflow-hidden bg-gray-200 ${className}`}
      style={{ backgroundColor: placeholderColor }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse"></div>
      )}
      <img
        ref={setImageRef}
        src={imageSrc || ''}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default LazyImage