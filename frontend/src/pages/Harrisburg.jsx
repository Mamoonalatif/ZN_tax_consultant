import React from 'react';
import LocationInfo from '../components/locations/LocationInfo';
import OtherLocations from '../components/locations/OtherLocations';
import LocationReviews from '../components/locations/LocationReviews';

// Import images
import harrisburgOffice from '../assets/images/harrisburg-office.jpg';
import whiteBg from '../assets/images/white-bg.jpg';
import shootoutImg from '../assets/images/writing.jpg';

const Harrisburg = () => {
    return (
        <div className="location-page">
            <div className="wp-block-cover alignfull is-light has-parallax hero-section" style={{ minHeight: '350px', display: 'flex', alignItems: 'center', paddingTop: '60px', paddingBottom: '60px', position: 'relative' }}>
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
                        Professional Bookkeeping & Accounting Services in <strong style={{ fontWeight: '700' }}>Harrisburg, PA</strong>
                    </h1>
                    <p style={{ fontSize: '16px', color: '#444', marginBottom: '30px', maxWidth: '850px', lineHeight: '1.6' }}>
                        Harrisburg, PA Businesses Trust ZN Tax Consultant to Deliver Superior Bookkeeping, Accounting, and Tax Planning Services.
                    </p>
                    <div className="wp-block-buttons" style={{ justifyContent: 'flex-start' }}>
                        <div className="wp-block-button">
                            <a className="wp-block-button__link wp-element-button" href="/schedule" style={{ backgroundColor: '#d13239', color: '#fff', padding: '15px 40px', borderRadius: '50px', fontWeight: '700', fontSize: '14px' }}>Book A Consultation</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlapping Card Section */}
            <div className="location-content-section">
                <div className="container">
                    <div className="location-flex-container">
                        <div className="location-image-side">
                            <img src={harrisburgOffice} alt="Harrisburg Office" />
                            <div className="location-meta-info">
                                <span className="location-meta-label">Conveniently located at: <strong><em>4050 Crums Mill Rd, Suite 101, Harrisburg, PA 17112</em></strong></span>
                                <a href="tel:7176578907" className="location-meta-phone">(717) 657-8907</a>
                            </div>
                        </div>
                        <div className="location-card-side">
                            <h2 className="location-card-title">
                                <strong style={{ fontWeight: '700' }}>Get Accounting Services</strong> and More from a Fellow Harrisburg Business
                            </h2>
                            <div className="location-card-text">
                                <p>
                                    The Harrisburg area is booming with new and growing businesses. That brings new opportunities—and new challenges for every size, age, and type of business. Our team of accounting professionals is ready to help you tackle and navigate those opportunities and challenges so you can enhance your company’s performance and profitability.
                                </p>
                                <p>
                                    If you think improvements to operations can help your business, then we’re ready with the <a href="/tax">accounting</a> and <a href="/bookkeeping">bookkeeping</a> services that will help make that possible. Those services might include check-writing for accounts payable, general ledgers, performance graphs, operating statements, balance sheets, bank reconciliations, and more. And don’t forget <a href="/tax">tax preparation and planning</a> that will help you stay in compliance and save money on taxes!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="location-contact-box">
                        <p>
                            <a href="/contact">Contact us</a> now to book a consultation. We’re ready to learn about your Harrisburg-area business or nonprofit so we help you make an impact in our community—and beyond.
                        </p>
                    </div>
                </div>
            </div>

            {/* Detailed Services Section */}
            <div className="location-services-detailed" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <div
                    className="wp-block-cover__image-background has-parallax"
                    style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', backgroundAttachment: 'fixed', opacity: 0.15, zIndex: 0 }}
                ></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="services-detailed-flex">
                        <div className="services-left-card">
                            <h2>Typical Accounting Services—and so Much More—in <strong>Harrisburg, PA</strong></h2>
                            <p>You may have already discovered that every accounting firm is unique. When you work with ZN Tax Consultant in Harrisburg, you’ll immediately see differences from the rest—like our core values and processes. And when you start to experience the results of our tax planning, bookkeeping, and <a href="/bookkeeping">accounting services for your Harrisburg business</a>, you’ll also notice our:</p>
                            <ul className="wp-block-list">
                                <li>Dedication to getting to know your business so we can better serve you</li>
                                <li>Service plans with fixed monthly rates, including unlimited access to our team</li>
                                <li>Unparalleled expertise and readiness to tackle challenges if they arise</li>
                                <li>Proactive management approach, resulting in better planning and transparency</li>
                                <li>Ability to support your business as it grows</li>
                            </ul>
                            <p>Those are just a few of the things you’ll enjoy about partnering with ZN Tax Consultant for basic accounting services. And there’s more!</p>
                        </div>
                        <div className="services-right-info">
                            <p>Are you looking for targeted, qualified advice on how to improve your operations, future-proof your business, and make it more profitable? Take a look at our <a href="/consulting">business and financial consulting</a>, in which we will:</p>
                            <ul className="checkmark-list">
                                <li>Provide direction for improving everyday operations</li>
                                <li>Work with you to establish business goals and track progress</li>
                                <li>Minimize tax obligations wherever feasible</li>
                                <li>Offer advice when needed for C-level business decisions</li>
                                <li>Assess succession planning alternatives and strategize an exit strategy</li>
                            </ul>
                            <p>If you’re starting a new business or buying another business to expand operations, our <a href="/acquisitions">acquisition & startup services</a> will help with:</p>
                            <ul className="checkmark-list">
                                <li>Purchase cost evaluation to ensure fair pricing</li>
                                <li>Financing assistance</li>
                                <li>Paperwork completion for submission to various tax agencies</li>
                                <li>Capital expenditure estimation</li>
                                <li>Due diligence (environmental concerns, permits, licenses, zoning requirements)</li>
                                <li>Development of a strategic approach that’s both unified and effective</li>
                            </ul>
                            <p>Need a <a href="/valuations">business valuation</a>? You can count on us.</p>
                        </div>
                    </div>

                    <div className="location-inline-cta">
                        <p>What can a partnership with ZN Tax Consultant bring to your business? Let’s find out with a consultation.</p>
                        <div className="wp-block-button">
                            <a className="wp-block-button__link wp-element-button" href="/schedule">Schedule A Consultation</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Need More Reasons Section */}
            <div className="reasons-section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '28px' }}>Need More Reasons to Work With ZN Tax Consultant <strong>in Harrisburg?</strong></h2>
                    <p className="text-center" style={{ maxWidth: '900px' }}>
                        We’ve been trusted small-business advisors in Southcentral PA. The ZN Tax Consultant team provides a wide range of services with the expertise you need, like a large firm would—plus the personalized attention you’d expect from a small firm. And it’s all right here, in Harrisburg, PA.
                    </p>
                    <p className="text-center" style={{ maxWidth: '900px' }}>
                        We know the community because we live and work here, too. We care about what happens here, and we’re working to make Harrisburg a better place to live and do business.
                    </p>

                    <div className="reasons-flex">
                        <div className="reasons-image">
                            <img src={shootoutImg} alt="ZN Tax Consultant Professionals" />
                        </div>
                        <div className="reasons-content">
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

                            <h3 style={{ marginTop: '20px', marginBottom: '0px', fontSize: '18px' }}>Actively participating with:</h3>
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

            <OtherLocations currentLocation="Harrisburg" />

            <LocationReviews locationName="Harrisburg" />
        </div>
    );
};
export default Harrisburg;
