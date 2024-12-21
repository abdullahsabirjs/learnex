import React from 'react';
import './campus.css';
import img1 from '../../assets/gallery1.avif';
import img2 from '../../assets/gallery2.jpg';
import img3 from '../../assets/gallery3.jpg';
import img4 from '../../assets/gallery4.jpg';

const Campus = () => {
  return (
    <section className="campus-section" id="campus">
      <div className="campus-heading">
        <h2>Our Campus</h2>
        <p>Gallery</p>
      </div>
      
      <div className="gallery">
        <div className="gallery-item">
          <img src={img1}alt='Campus1'/>
        </div>
        <div className="gallery-item">
          <img src={img2} alt="Campus 2" />
        </div>
        <div className="gallery-item">
          <img src={img3} alt="Campus 3" />
        </div>
        <div className="gallery-item">
          <img src={img4} alt="Campus 4" />
        </div>
      </div>

      <button className="see-more-btn">See More</button>
    </section>
  );
};

export default Campus;
