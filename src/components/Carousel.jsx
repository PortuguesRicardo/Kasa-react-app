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
                    <div className="slide-counter">
                        {currentIndex + 1} / {images.length}
                    </div>
                </>
            )}
            <img
                src={images[currentIndex]}
                alt={`Property image ${currentIndex + 1}`}
                className="carousel-image"
            />
        </div>
    );
}

export default Carousel;