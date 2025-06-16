import React from 'react';
import '../styles/Error.scss';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">Return to home page</Link>
        </div>
    );
}

export default Error;