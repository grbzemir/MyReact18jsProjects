import React from 'react';
import BannerImage from '../assets/banneryeni.jpg'; // Burger resmi
import '../styles/About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}>
            </div>

            <div className='aboutBottom'>
                <h1>Hakkımızda</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

        </div>
    );
};

export default About;
