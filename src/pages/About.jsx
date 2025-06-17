import React from 'react';
import Collapse from '../components/Collapse';
import '../styles/About.scss';
import aboutBanner from '../assets/mountainLake.jpg';
import Banner from '../components/Banner';
const aboutItems = [
    { title: 'Reliability', content: 'All listings on Kasa are thoroughly reviewed to ensure total reliability. The photos are verified to match the actual properties, and all information is regularly checked by our team for accuracy.' },
    { title: 'Respect', content: 'Respect is a core value at Kasa. Any discriminatory behavior or actions that disturb the peace of the neighborhood will result in removal from our platform.' },
    { title: 'Service', content: 'Kindness and helpfulness are fundamental to the Kasa community. Hosts and guests are expected to treat each other with courtesy and resolve any issues with understanding and cooperation.' },
    { title: 'Security', content: 'Safety is our top priority. Each property must meet security standards set by our team. Reviews from both hosts and guests help ensure that these standards are upheld. We also offer safety workshops for our hosts.' }
];

function About() {
    return (
        <div className="about">
            <Banner image={aboutBanner} text="" />
            <div className="about-collapses">
                {aboutItems.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
}
export default About;