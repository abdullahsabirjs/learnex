import React from 'react';
import './about.css';
import universityImage from '../../assets/about.jpeg';

const About = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={universityImage} alt="University" />
        </div>
        <div className="about-content">
          <h2>About LearnEx University</h2>
          <p>
            Welcome to our prestigious institution, where excellence meets innovation. 
            We pride ourselves on providing a world-class education that empowers students 
            to excel in their chosen fields. With state-of-the-art facilities, experienced 
            faculty, and a vibrant campus life, we ensure a holistic learning experience.
          </p>
          <p>
            Our university fosters a culture of research, creativity, and community engagement. 
            Join us to unlock your potential and be a part of a legacy of success and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
