import React from 'react';
import { Link } from 'react-router-dom';
import LocationInfo from '../components/locations/LocationInfo';
import OtherLocations from '../components/locations/OtherLocations';
import GoogleReviews from '../components/GoogleReviews';

// Import images
import lancasterOffice from '../assets/images/lancaster-office.jpg';
import whiteBg from '../assets/images/white-bg.jpg';
import shootoutImg from '../assets/images/writing.jpg';

const Lancaster = () => {
    return (
        <div className="location-page">
            <div className="wp-block-cover alignfull is-light has-parallax hero-section" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', paddingTop: '60px', paddingBottom: '60px', position: 'relative' }}>
                <div
                    className="wp-block-cover__image-background has-parallax"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.3
                    }}
                ></div>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="wp-block-heading" style={{ fontSize: '38px', fontWeight: '300', color: '#222', marginBottom: '20px', lineHeight: '1.2' }}>
                        Professional Bookkeeping & Accounting Services in <strong style={{ fontWeight: '700' }}>Lancaster, PA</strong>
                    </h1>
                    <p style={{ fontSize: '16px', color: '#444', marginBottom: '30px', maxWidth: '850px', lineHeight: '1.6' }}>
                        Lancaster, PA Businesses Trust ZN Tax Consultant to Deliver Superior Bookkeeping, Accounting, and Tax Planning Services.
                    </p>
                    <div className="wp-block-buttons" style={{ justifyContent: 'flex-start' }}>
                        <div className="wp-block-button">
                            <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ backgroundColor: '#d13239', color: '#fff', padding: '15px 40px', borderRadius: '50px', fontWeight: '700', fontSize: '14px' }}>Book A Consultation</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="location-content-section" style={{ paddingTop: '80px' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="location-flex-container">
                        <div className="location-card-side">
                            <h2 className="location-card-title">
                                <strong style={{ fontWeight: '700' }}>Get Accounting Services</strong> and More from a Fellow Lancaster Business
                            </h2>
                            <div className="location-card-text">
                                <p>
                                    From its vibrant downtown to its sprawling rural landscapes, Lancaster relies on the strength and resilience of its small business community. Our team acts as your outsourced financial department, providing the clarity and stability needed to thrive in any season.
                                </p>
                                <p>
                                    If you think improvements to operations can help your business, then we’re ready with the <Link to="/tax">accounting</Link> and <Link to="/bookkeeping">bookkeeping</Link> services that will help make that possible.
                                </p>
                                <p>
                                    From bank reconciliations to <Link to="/valuations">business valuations</Link> and expert tax preparation, we deliver the insights you need to make informed decisions. You will also benefit from our comprehensive <Link to="/tax">tax planning and preparation</Link> services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="location-contact-box">
                        <p>
                            <Link to="/contact">Contact us</Link> now to book a consultation. We’re ready to learn about your Lancaster-area business or nonprofit so we help you make an impact in our community—and beyond.
                        </p>
                    </div>
                </div>
            </div>

            {/* Detailed Services Section */}
            <div className="location-services-detailed" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div
                    className="wp-block-cover__image-background has-parallax"
                    style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', backgroundAttachment: 'fixed', opacity: 0.15, zIndex: 0 }}
                ></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="services-detailed-flex">
                        <div className="services-left-card">
                            <h2>Typical Accounting Services—and so Much More—in <strong>Lancaster, PA</strong></h2>
                            <p>Not all financial services companies are alike. At ZN Tax Consultant's Lancaster location, you'll find accounting, bookkeeping, and tax planning services that small businesses rely on because we deliver:</p>
                            <ul className="wp-block-list">
                                <li>A CPA and bookkeeping team that's dedicated to knowing your business</li>
                                <li>Fixed monthly service plans with unlimited access for predictable and manageable expenses</li>
                                <li>Ready access to unmatched expertise to address challenges when they arise</li>
                                <li>Proactive management approach, resulting in greater visibility and superior planning</li>
                                <li>Scalable plans for every business stage</li>
                            </ul>
                            <p>And that's just the beginning of what you'll experience when you partner with ZN Tax Consultant.</p>
                        </div>
                        <div className="services-right-info">
                            <p>If you're looking for broad advice about how to improve your overall business, our <Link to="/consulting">business and financial consulting</Link> can:</p>
                            <ul className="checkmark-list">
                                <li>Offer guidance on day-to-day financial operations</li>
                                <li>Help you create business goals and monitor progress</li>
                                <li>Strategize ways to minimize tax obligations</li>
                                <li>Assist with executive-level business decisions</li>
                                <li>Evaluate succession planning options and help create an exit strategy</li>
                            </ul>
                            <p>And for those interested in starting a new business or expanding a business through the purchase of an existing company, ZN Tax Consultant <Link to="/acquisitions">acquisition & startup services</Link> will:</p>
                            <ul className="checkmark-list">
                                <li>Evaluate purchase costs to ensure fair pricing</li>
                                <li>Assist with obtaining financing</li>
                                <li>Complete required paperwork for various taxing agencies</li>
                                <li>Estimate required capital expenditures</li>
                                <li>Conduct due diligence (licenses, permits, zoning requirements, environmental concerns)</li>
                                <li>Work with your team and other trusted advisors for a unified, strategic approach</li>
                            </ul>
                            <p>You can also count on us for periodic or one-time <Link to="/valuations">business valuations</Link>.</p>
                        </div>
                    </div>

                    <div className="location-inline-cta">
                        <p>Are you ready to see what a partnership with ZN Tax Consultant can do for your business? It all starts with a no-cost consultation.</p>
                        <div className="wp-block-button">
                            <Link className="wp-block-button__link wp-element-button" to="/schedule">Schedule A Consultation</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Need More Reasons Section */}
            <div className="reasons-section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '32px', marginBottom: '30px' }}>Even More Reasons to Choose ZN Tax Consultant <strong>in Lancaster</strong></h2>
                    <p className="text-center" style={{ maxWidth: '900px', margin: '0 auto 20px auto' }}>
                        ZN Tax Consultant have been trusted advisors to small businesses across central Pennsylvania. We provide the expertise and services of a large firm but with offices conveniently located where you are in Lancaster.
                    </p>
                    <p className="text-center" style={{ maxWidth: '900px', margin: '0 auto 40px auto' }}>
                        Our local experts know your community and understand what's happening in your backyard, because it's their backyard, too. We are proud to support small businesses, the backbone of our local, national, and global communities.
                    </p>

                    <div className="reasons-flex" style={{ display: 'block' }}>
                        <div className="reasons-content" style={{ maxWidth: '100%', padding: '0' }}>
                            <h3>Community Support & Recognition</h3>
                            <ul className="wp-block-list">
                                <li>Simply the Best Lifetime Achievement Award (10+ years of awards!)</li>
                                <li><a href="https://www.harrisburgmagazine.com/" target="_blank" rel="noreferrer" className="simply-red-link">Harrisburg Magazine’s Simply the Best Accounting Firm</a></li>
                                <li><a href="https://www.harrisburgmagazine.com/" target="_blank" rel="noreferrer" className="simply-red-link">Harrisburg Magazine’s Readers’ Choice Accounting Firm</a></li>
                                <li>Best of Cumberland County Favorite Accounting Firm</li>
                                <li>Susquehanna Style Best Accounting Firm</li>
                                <li>Central Penn Business Journal Reader Rankings</li>
                                <li>LNP Readers' Choice Award</li>
                            </ul>

                            <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '20px' }}>Actively participating with:</h3>
                            <div className="two-col-list">
                                <ul className="wp-block-list">
                                    <li><a href="https://jacentralpa.org/" target="_blank" rel="noreferrer">Junior Achievement (JA) of South-Central PA</a></li>
                                    <li>Habitat for Humanity</li>
                                    <li>Central PA Food Bank</li>
                                    <li>The Salvation Army</li>
                                    <li>10 Thousand Villages</li>
                                    <li>The Rotary Club</li>
                                    <li>Make-A-Wish</li>
                                    <li>Girls on the Run</li>
                                </ul>
                                <ul className="wp-block-list">
                                    <li>Leadership Harrisburg Area</li>
                                    <li>Leadership Lancaster</li>
                                    <li>Harrisburg Regional Chamber & CREDC</li>
                                    <li>PICPA</li>
                                    <li>PASBA</li>
                                    <li>American Cancer Society</li>
                                    <li>Capital Area Head Start</li>
                                    <li>Wildheart Ministries | Love the Hill</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OtherLocations currentLocation="Lancaster" />

            <GoogleReviews />
        </div>
    );
};
export default Lancaster;