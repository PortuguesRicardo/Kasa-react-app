import { useParams, Navigate } from 'react-router-dom';
import accommodations from '../data/accommodations.json';

function Property() {
    const { id } = useParams();
    const accommodation = accommodations.find(item => item.id === id);

    if (!accommodation) {
        return <Navigate to="*" />;
    }

    return (
        <div>
            <h1>{accommodation.title}</h1>
            <p>Location: {accommodation.location}</p>
            <img src={accommodation.cover} alt={accommodation.title} />
        </div>
    );
}

export default Property;

