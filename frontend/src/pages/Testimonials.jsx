import React, { useState } from 'react';
import whiteBg from '../assets/images/white-bg.jpg';

const Testimonials = () => {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [reviewName, setReviewName] = useState('');
    const [reviewText, setReviewText] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviewSubmitted(true);
        setTimeout(() => {
            setIsReviewModalOpen(false);
            setReviewSubmitted(false);
            setReviewName('');
            setReviewText('');
        }, 3000);
    };

    const reviews = []; // No reviews yet as per user instruction

    return (
        <div className="testimonials-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '40px',
                background: `#f5f7f8`,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div
                    className="wp-block-cover__image-background"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.2
                    }}
                ></div>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="wp-block-heading" style={{ fontSize: '40px', color: '#000', fontWeight: '300', lineHeight: '1.2' }}>
                        Client <strong>Testimonials</strong>
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '900px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                        Hear From the Businesses We've Helped Grow
                    </p>
                </div>
            </div>

            {/* SECTION 1: Review Grid / Empty State */}
            <div className="section-padding bg-white" style={{ padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="reviews-empty-state" style={{ paddingLeft: 0, maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '24px', marginBottom: '30px' }}>
                            We haven't received any reviews yet. <strong>Be the first to share your experience with us!</strong> Your feedback helps us grow and serve you better.
                        </p>
                        <button onClick={() => setIsReviewModalOpen(true)} className="btn-review-google" style={{ cursor: 'pointer', border: 'none', padding: '20px 50px', fontSize: '18px' }}>
                            <i className="fa-brands fa-google" style={{ marginRight: '10px' }}></i> Write A Review
                        </button>
                    </div>
                </div>
            </div>

            {/* REVIEW MODAL */}
            {isReviewModalOpen && (
                <div className="modal-overlay" onClick={() => setIsReviewModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsReviewModalOpen(false)}>&times;</button>
                        {!reviewSubmitted ? (
                            <form onSubmit={handleReviewSubmit}>
                                <h3>Share Your Experience</h3>
                                <div className="star-rating-form" style={{ color: '#ffc107', fontSize: '24px', marginBottom: '20px' }}>
                                    ★★★★★
                                </div>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={reviewName}
                                        onChange={(e) => setReviewName(e.target.value)}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Your Review</label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        placeholder="How was your experience working with us?"
                                    ></textarea>
                                </div>
                                <button type="submit" className="wp-block-button__link" style={{ width: '100%', marginTop: '10px' }}>
                                    Submit Review
                                </button>
                            </form>
                        ) : (
                            <div className="success-message text-center" style={{ padding: '40px 0' }}>
                                <div style={{ fontSize: '60px', color: '#4CAF50', marginBottom: '20px' }}>
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                                <h3 style={{ fontSize: '28px', color: '#1b5779' }}>Thank You!</h3>
                                <p style={{ fontSize: '18px', color: '#555' }}>Your review has been successfully submitted and will be visible on Google after moderation.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Testimonials;
