import React from 'react';
import './program.css';

import program1 from '../../assets/program1.jpg';
import program2 from '../../assets/program2.webp';
import program3 from '../../assets/program3.jpeg';

const programsData = [
  {
    id: 1,
    image: program1,
    name: 'Computer Science',
    description: 'Learn the fundamentals of computer science, programming, and algorithms.',
  },
  {
    id: 2,
    image: program2,
    name: 'Business Administration',
    description: 'Master the skills needed for business management and entrepreneurship.',
  },
  {
    id: 3,
    image: program3,
    name: 'Graphic Design',
    description: 'Explore creativity with advanced graphic design techniques and tools.',
  },
];

const Program = () => {
  return (
    <div id="programs" className="programs-section">
      <h2 className="section-title">Our Programs</h2>
      <div className="programs-grid">
        {programsData.map((program) => (
          <div
            key={program.id}
            className="program-card"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${program.image})`,
            }}
          >
            <h3 className="program-name">{program.name}</h3>
            <div className="program-details">
              <p className="program-description">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
