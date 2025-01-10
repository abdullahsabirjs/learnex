import React from 'react';
import './home.css';
import heroImage from '../../assets/hero.avif';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="overlay"></div>
      <div className="home-text">
        <h1>
          Transform Your Future at <span>Learnex University</span>
        </h1>
        <p>
          Explore programs, connect with experts, and start your academic journey today.
        </p>
        <a href="#programs" className="btn" aria-label="Start Exploring">
          Start Exploring
        </a>
      </div>
    </div>
  );
};

export default Home;
