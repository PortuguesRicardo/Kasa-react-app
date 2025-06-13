import React, { useState } from 'react';
import '../styles/Collapse.scss';
import { ReactComponent as ArrowIcon } from '../assets/arrow-white.svg';
function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-header">
                <h3>{title}</h3>





                <ArrowIcon
                    className={`arrow-icon ${isOpen ? 'open' : ''}`}
                    onClick={toggleCollapse}
                />


            </div>

            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
        </div>
    );
}

export default Collapse;