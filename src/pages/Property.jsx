import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import accommodations from '../data/accommodations.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';


function Property() {
    const { id } = useParams();
    const accommodation = accommodations.find(item => item.id === id);

    if (!accommodation) {
        return <Navigate to="*" />;
    }

    // Star rating rendering 
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
            );
        }
        return stars;
    };

    return (
        <>

            <main className="property">
                <Carousel images={accommodation.pictures} />

                <h1>{accommodation.title}</h1>
                <p>{accommodation.location}</p>

                <div className="tags">
                    {accommodation.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="host-rating">
                    <div className="host">{accommodation.host.name}</div>
                    <div className="rating">{renderStars(accommodation.rating)}</div>
                </div>

                <div className="collapse-sections">
                    <Collapse title="Description" content={accommodation.description} />
                    <Collapse
                        title="Amenities"
                        content={
                            <ul>
                                {accommodation.equipments.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            </main>

        </>
    );
}

export default Property;