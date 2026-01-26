import React, { useState, useRef } from 'react';

const LocationReviews = ({ locationName }) => {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (direction) => {
        if (trackRef.current) {
            const cardWidth = trackRef.current.offsetWidth / 2;
            const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
            trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            const newIndex = direction === 'next' ? Math.min(activeIndex + 1, 3) : Math.max(activeIndex - 1, 0);
            setActiveIndex(newIndex);
        }
    };

    const reviews = [
        {
            name: 'HELENA L. BOWES',
            content: 'After relocating to Harrisburg I had the good luck to find ZN Tax Consultant. They are very professional and prompt with their follow through and knowledgeable with the Tax Code.',
            initial: 'H'
        },
        {
            name: 'TIM BARGER',
            content: 'I have had the pleasure of working with Diana from ZN Tax Consultant for our payroll needs for the past 5 years, and I am extremely satisfied with her exceptional service and expertise. Diana\'s dedication and knowledge in handling our payroll processes have been invaluable. She consistently demonstrates professionalism and attention to detail, ensuring that our... read more',
            initial: 'T'
        }
    ];

    return (
        <div className="location-reviews-section alignfull">
            <div className="container">
                <div className="reviews-flex-container">
                    {/* Left side summary */}
                    <div className="reviews-summary-side">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="google-logo-main" />
                        <h2 className="reviews-title">Reviews <span className="stars-orange">★★★★★</span></h2>

                        <div className="rating-score-box">
                            <div className="score-value">4.9</div>
                            <div className="score-stars">
                                <span className="stars-orange">★★★★★</span>
                                <div className="score-count">108 User Reviews</div>
                            </div>
                        </div>

                        <a href="https://search.google.com/local/writereview?placeid=ChIJN1t-p46Kz4kR7zS2r9ZfXU8" target="_blank" rel="noreferrer" className="write-review-btn">
                            Write a Google Review for Our {locationName} Team!
                        </a>
                    </div>

                    {/* Right side slider */}
                    <div className="reviews-slider-side">
                        <div className="slider-nav nav-prev" onClick={() => handleScroll('prev')}><i className="fa-solid fa-chevron-left"></i></div>

                        <div className="slider-track" ref={trackRef}>
                            {reviews.map((rev, i) => (
                                <div key={i} className="location-review-card-wrapper">
                                    <div className="location-review-card">
                                        <div className="quote-mark">“</div>
                                        <div className="stars-orange">★★★★★</div>
                                        <p className="review-text">{rev.content}</p>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google G" className="google-g-small" />
                                    </div>
                                    <div className="reviewer-meta">
                                        <div className="reviewer-avatar" style={{ backgroundColor: i % 2 === 0 ? '#1b5779' : '#00a3da' }}>{rev.initial}</div>
                                        <span className="reviewer-name-label">{rev.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="slider-nav nav-next" onClick={() => handleScroll('next')}><i className="fa-solid fa-chevron-right"></i></div>

                        <div className="slider-pagination">
                            {[...Array(4)].map((_, i) => (
                                <span key={i} className={`pag-dot ${activeIndex === i ? 'active' : ''}`}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationReviews;
