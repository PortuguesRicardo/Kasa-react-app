import React, { useState } from 'react';
import '../styles/Carousel.scss';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            {images.length > 1 && (
                <>
                    <button className="arrow left" onClick={prevSlide}>&#10094;</button>
                    <button className="arrow right" onClick={nextSlide}>&#10095;</button>
                    <div className="counter">
                        {currentIndex + 1} / {images.length}
                    </div>
                </>
            )}

            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={src} alt={`Property image ${index + 1}`} />
                    </div>
                ))}
            </div>

        </div>

    );
}

export default Carousel;