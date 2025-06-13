import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import accommodations from '../data/accommodations.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import "../styles/Property.scss";

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

    const [firstName, lastName] = accommodation.host.name.split(" ");   // created place firstName and lastName on each line, after them being uploaded through json. 
    return (
        <>

            <main className="property">
                <Carousel images={accommodation.pictures} />

                <div className="property-header">
                    <div className="left-info">
                        <h1>{accommodation.title}</h1>
                        <p className="location">{accommodation.location}</p>

                        <div className="tags">
                            {accommodation.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="right-info">
                        <div className="host">
                            <span className="host-name">
                                {firstName} <br />
                                {lastName}
                            </span>
                            <img
                                src={accommodation.host.picture}
                                alt={accommodation.host.name}
                                className="host-picture"
                            />
                        </div>

                        <div className="rating">{renderStars(accommodation.rating)}</div>
                    </div>
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