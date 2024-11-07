import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar o slide ativo
    const slides = [
        "/imagens/banner1.png",
        "/imagens/banner2.png",
        "/imagens/banner3.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Muda o slide a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, [slides.length]);

    return (
        <div id="bannerArea">
            <div id="sliders">
                {slides.map((src, index) => (
                    <div
                        key={index}
                        className={`slide ${index === activeIndex ? 'active' : ''}`}
                    >
                        <img src={src} alt={`Banner Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div id="sliderStatus">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;


