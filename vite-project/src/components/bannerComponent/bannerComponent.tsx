// src/components/ImageCarousel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { gsap } from 'gsap';
import '../../public_views/homeView/homeView.css';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Animación para el texto al cambiar de imagen
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: '-100%' },
        { duration: 0.6, opacity: showText ? 1 : 0, x: showText ? '0%' : '-100%', ease: 'power2.out' }
      );
    }
  }, [showText]);

  // Animación para la imagen al cambiar de imagen
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { x: '100%', opacity: 0, filter: 'blur(10px)' }, // Más desenfoque al inicio
        { duration: 1.2, x: '0%', opacity: 1, filter: 'blur(0)', ease: 'power2.out' } // Aumentar duración a 1.2s
      );
    }
  }, [currentIndex]);

  // Intervalo para cambiar la imagen automáticamente
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowText(true);
      }, 800); // Delay para mostrar/ocultar texto (ajustar a 800ms)
    }, 5000); // Cambiar imagen cada 5 segundos (ajustar a 5s)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  // Cambiar a la imagen siguiente
  const handleNext = () => {
    setShowText(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowText(true);
    }, 800); // Delay para mostrar/ocultar texto (ajustar a 800ms)
  };

  // Cambiar a la imagen anterior
  const handlePrev = () => {
    setShowText(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setShowText(true);
    }, 800); // Delay para mostrar/ocultar texto (ajustar a 800ms)
  };

  return (
    <Box className="carousel-container">
      <Box className="carousel-image-container">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="carousel-image"
          ref={imageRef}
        />
      </Box>
      <div className="carousel-text" ref={textRef}>
        <Typography variant="h6" className="carousel-text-content">
          Some Text Here
        </Typography>
      </div>
      <Button onClick={handlePrev} className="carousel-button-prev">
        Prev
      </Button>
      <Button onClick={handleNext} className="carousel-button-next">
        Next
      </Button>
    </Box>
  );
};

export default ImageCarousel;
