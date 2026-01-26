import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';

const Testimonials = () => {
    const reviews = [
        {
            author: "Sarah J.",
            role: "Small Business Owner",
            text: "ZN Tax Consultant has completely changed the way I look at my business finances. Their expertise in tax planning saved me thousands, and their ongoing support gives me total peace of mind.",
            stars: 5
        },
        {
            author: "Michael R.",
            role: "Nonprofit Executive Director",
            text: "The team at ZN understands the unique challenges of nonprofits. Their guidance on compliance and financial reporting has been invaluable to our board of directors.",
            stars: 5
        },
        {
            author: "David L.",
            role: "Construction Contractor",
            text: "Reliable, honest, and professional. I've been with them for 5 years and wouldn't trust anyone else with my books.",
            stars: 5
        },
        {
            author: "Emily W.",
            role: "Entrepreneur",
            text: "Starting a new venture was stressful, but having a ZN consultant by my side made the financial setup a breeze. Highly recommend!",
            stars: 5
        }
    ];

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

            {/* SECTION 1: Review Grid */}
            <div className="section-padding bg-white" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                        {reviews.map((rev, i) => (
                            <div key={i} style={{
                                padding: '50px',
                                background: '#f8f9fa',
                                borderRadius: '8px',
                                border: '1px solid #eee',
                                position: 'relative'
                            }}>
                                <div style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '40px', color: '#d13239', opacity: 0.1 }}>
                                    <i className="fa-solid fa-quote-left"></i>
                                </div>
                                <div style={{ marginBottom: '20px', color: '#ffc107' }}>
                                    {[...Array(rev.stars)].map((_, j) => (
                                        <i key={j} className="fa-solid fa-star" style={{ marginRight: '5px' }}></i>
                                    ))}
                                </div>
                                <p style={{ fontSize: '16px', color: '#444', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '30px' }}>
                                    "{rev.text}"
                                </p>
                                <div style={{ borderLeft: '3px solid #d13239', paddingLeft: '20px' }}>
                                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1b5779' }}>{rev.author}</div>
                                    <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>{rev.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 2: Trust Banner */}
            <div className="section-padding" style={{ background: '#1b5779', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '20px' }}>
                        Over <strong>30 Years</strong> of Trusted Financial Guidance
                    </h2>
                    <p style={{ fontSize: '16px', opacity: 0.9 }}>
                        Our reputation is built on the success of our clients.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
