import React from 'react';
import '../styles/Error.scss';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/">Return to Home</Link>
        </div>
    );
}

export default Error;