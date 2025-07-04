import { Link } from 'react-router-dom';
import '../styles/Card.scss'

function Card({ id, title, cover }) {
    const fallbackImage = "https://via.placeholder.com/400x250?text=No+Image";

    return (
        <Link to={`/property/${id}`} className="card">
            <img src={cover || fallbackImage} alt={title} />
            <div className="gradient-overlay"></div>
            <h3>{title}</h3>
        </Link>
    );
}

export default Card;