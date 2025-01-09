import React, { useState } from 'react';
import './review.css';
import p1 from '../../assets/user1.avif';
import p2 from '../../assets/user2.avif';
import p3 from '../../assets/user3.avif';
import p4 from '../../assets/user4.avif';

const reviews = [
  {
    name: 'John Doe',
    image: p1,
    review: 'This is an amazing university! The faculty and the environment are really welcoming. I have learned so much here.',
  },
  {
    name: 'Jane Smith',
    image: p2,
    review: 'A great place to study and grow. The campus is beautiful, and the courses are well-structured. Highly recommend!',
  },
  {
    name: 'Alex Brown',
    image: p3,
    review: 'The professors are very supportive, and the campus facilities are top-notch. I am grateful for the opportunities here.',
  },
  {
    name: 'Emily White',
    image: p4,
    review: 'An excellent learning experience! The university offers a variety of resources to help students succeed.',
  },
];

const StudentReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="review-section" id="students-review">
      <h2 className="review-heading">Student Reviews</h2>
      <div className="review-container">
        <div className="review-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="profile">
                <img src={review.image} alt={review.name} className="profile-image" />
                <p className="student-name">{review.name}</p>
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button
            className="prev-btn"
            onClick={prevReview}
            aria-label="Previous Review"
          >
            ❮
          </button>
          <button
            className="next-btn"
            onClick={nextReview}
            aria-label="Next Review"
          >
            ❯
          </button>
        </div>
        <div className="slider-indicators">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to review ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReviewSection;
