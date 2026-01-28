import React from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';

const WhyChoose = () => {
    const differences = [
        {
            title: "Expertise You Can Trust",
            desc: "ZN Tax Consultant brings a level of financial depth that generalist firms simply can't match. We don't just 'do taxes'—we strategize your entire financial future.",
            icon: "fa-certificate"
        },
        {
            title: "Client-First Philosophy",
            desc: "You aren't just a number on a spreadsheet. We build long-term relationships based on honesty and dependability. When you call, we answer. When you have a problem, we solve it together.",
            icon: "fa-heart"
        },
        {
            title: "Transparent & Predictable",
            desc: "No hidden fees. No 'billable hour' surprises. We offer flat monthly fees for many of our services so you can plan your budget with total confidence.",
            icon: "fa-eye"
        },
        {
            title: "Technology-Driven",
            desc: "We leverage the best tools in the industry, from QuickBooks® to secure cloud-based document portals, to make your financial management as seamless as possible.",
            icon: "fa-microchip"
        }
    ];

    return (
        <div className="why-choose-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light careers-hero" style={{
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
                        Why Choose <strong>ZN Tax Consultant?</strong>
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '900px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                        Experience the Difference of a Financial Partner Invested in Your Growth
                    </p>
                    <div className="wp-block-buttons">
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#bb3b41' }}>
                            Start Your Journey Today
                        </Link>
                    </div>
                </div>
                {/* Decorative background element */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '45%',
                    height: '100%',
                    background: '#e9ecef',
                    clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                    zIndex: 1,
                    opacity: 0.5
                }}></div>
            </div>

            {/* SECTION 1: The ZN Advantage (Overlapping) */}
            <div className="section-padding bg-white" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" alt="ZN Professional Team" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        {/* Floating Text Card */}
                        <div className="process-floating-card" style={{
                            flex: '65%',
                            background: '#fff',
                            padding: '60px 60px 60px 115px',
                            marginLeft: '-10%',
                            zIndex: 1,
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                            borderRadius: '4px'
                        }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                A Legacy of Excellence <strong>in Pennsylvania</strong>
                            </h2>
                            <div style={{ fontSize: '15.5px', color: '#555', lineHeight: '1.8' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    For over three decades, ZN Tax Consultant has been the backbone for small businesses and nonprofits across Central Pennsylvania. We started with a simple mission: to provide high-level accounting expertise with the personal touch of a neighbor.
                                </p>
                                <p>
                                    Today, we continue that legacy by helping our clients navigate complex tax laws, optimize their cash flow, and plan for generational success. When you choose ZN Tax Consultant, you aren't just hiring an accountant—you're gaining a strategic partner.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: Difference Grid */}
            <div className="section-padding" style={{ background: '#1b5779', color: '#fff', padding: '100px 0' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '300', marginBottom: '20px' }}>
                            The ZN Tax Consultant <strong>Difference</strong>
                        </h2>
                        <div style={{ width: '80px', height: '4px', background: '#bb3b41', margin: '0 auto' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                        {differences.map((diff, i) => (
                            <div key={i} style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                                <div style={{
                                    minWidth: '70px',
                                    height: '70px',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '30px'
                                }}>
                                    <i className={`fa-solid ${diff.icon}`} style={{ color: '#fff' }}></i>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '600' }}>{diff.title}</h3>
                                    <p style={{ fontSize: '15px', lineHeight: '1.6', opacity: 0.9 }}>{diff.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 3: Final Call to Action (Parallax Style) */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', padding: '100px 0' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', filter: 'grayscale(1)' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#0f4b6eff', opacity: 0.9, zIndex: 1 }}></span>
                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h2 style={{ fontSize: '42px', fontWeight: '300', marginBottom: '30px' }}>
                        Ready to Transform <strong>Your Business Finances?</strong>
                    </h2>
                    <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6', opacity: 0.9 }}>
                        Join the hundreds of satisfied clients who trust ZN Tax Consultant to manage their most important assets.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ background: '#bb3b41', padding: '15px 45px' }}>
                            Book A Consultation
                        </Link>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: 'transparent', border: '2px solid #fff', padding: '13px 45px' }}>
                            Send A Message
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
