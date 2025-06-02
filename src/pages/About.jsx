import React from 'react';
import Collapse from '../components/Collapse';
import '../styles/About.scss';
import aboutBanner from '../assets/mountainLake.jpg';
const aboutItems = [
    { title: 'Reliability', content: 'Lorem ipsum...' },
    { title: 'Respect', content: 'Lorem ipsum...' },
    { title: 'Service', content: 'Lorem ipsum...' },
    { title: 'Security', content: 'Lorem ipsum...' }
];

function About() {
    return (
        <div className="about">
            <div className="about-banner">
                {/* Using placeholder image for now */}
                <img src={aboutBanner} alt="About Banner" />
            </div>
            <div className="about-collapses">
                {aboutItems.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
}
export default About;