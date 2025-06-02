import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import accommodations from '../data/accommodations.json';

function Property() {
    const { id } = useParams();
    const accommodation = accommodations.find(item => item.id === id);

    if (!accommodation) {
        return <Navigate to="*" />;
    }

    // return (
    //     <div>
    //         <h1>{accommodation.title}</h1>
    //         <p>Location: {accommodation.location}</p>
    //         <img src={accommodation.cover} alt={accommodation.title} />
    //     </div>
    // );

    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isAmenitiesOpen, setAmenitiesOpen] = useState(false);

    return (
        <div>
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
            <img src={accommodation.cover} alt={accommodation.title} />

            {/* Tags */}
            <div>
                {accommodation.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>

            {/* Host */}
            <p>Host: {accommodation.host.name}</p>

            {/* Rating */}
            <p>Rating: {accommodation.rating}</p>

            {/* Description */}
            <div>
                <button onClick={() => setDescriptionOpen(!isDescriptionOpen)}>
                    Description {isDescriptionOpen ? '▲' : '▼'}
                </button>
                {isDescriptionOpen && <p>{accommodation.description}</p>}
            </div>

            {/* Amenities */}
            <div>
                <button onClick={() => setAmenitiesOpen(!isAmenitiesOpen)}>
                    Amenities {isAmenitiesOpen ? '▲' : '▼'}
                </button>
                {isAmenitiesOpen && (
                    <ul>
                        {accommodation.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Gallery */}
            <div>
                {accommodation.pictures.map((pic, index) => (
                    <img key={index} src={pic} alt={`${accommodation.title} ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default Property;

