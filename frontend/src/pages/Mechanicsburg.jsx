import React from 'react';
import LocationInfo from '../components/locations/LocationInfo';
import OtherLocations from '../components/locations/OtherLocations';
import LocationReviews from '../components/locations/LocationReviews';

// Import images
import mechanicsburgOffice from '../assets/images/mechanicsburg-office.jpg';
import whiteBg from '../assets/images/white-bg.jpg';
import shootoutImg from '../assets/images/writing.jpg';

const Mechanicsburg = () => {
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
                        Professional Bookkeeping & Accounting Services in <strong style={{ fontWeight: '700' }}>Mechanicsburg, PA</strong>
                    </h1>
                    <p style={{ fontSize: '16px', color: '#444', marginBottom: '30px', maxWidth: '850px', lineHeight: '1.6' }}>
                        Mechanicsburg, PA Businesses Trust ZN Tax Consultant to Deliver Superior Bookkeeping, Accounting, and Tax Planning Services.
                    </p>
                    <div className="wp-block-buttons" style={{ justifyContent: 'flex-start' }}>
                        <div className="wp-block-button">
                            <a className="wp-block-button__link wp-element-button" href="/schedule" style={{ backgroundColor: '#d13239', color: '#fff', padding: '15px 40px', borderRadius: '50px', fontWeight: '700', fontSize: '14px' }}>Book A Consultation</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="location-content-section">
                <div className="container">
                    <div className="location-flex-container">
                        <div className="location-image-side">
                            <img src={mechanicsburgOffice} alt="Mechanicsburg Office" />
                            <div className="location-meta-info">
                                <span className="location-meta-label">Conveniently located at: <strong><em>1205 Manor Drive, Suite 100, Mechanicsburg, PA 17055</em></strong></span>
                                <a href="tel:7177663555" className="location-meta-phone">(717) 766-3555</a>
                            </div>
                        </div>
                        <div className="location-card-side">
                            <h2 className="location-card-title">
                                <strong style={{ fontWeight: '700' }}>Get Accounting Services</strong> and More from a Fellow Mechanicsburg Business
                            </h2>
                            <div className="location-card-text">
                                <p>
                                    With deep roots in the Mechanicsburg development boom, we understand the specific commercial real estate and business challenges of the West Shore. Our team ensures your financial baseline is solid so you can focus on making an impact in the community.
                                </p>
                                <p>
                                    The ZN Tax Consultant team is ready to help you navigate these dynamic market conditions. If you think improvements to operations can help your business, then we’re ready with the <a href="/tax">accounting</a> and <a href="/bookkeeping">bookkeeping</a> services that will help make that possible.
                                </p>
                                <p>
                                    From payroll administration to detailed financial analysis, we give you the clarity required to scale efficiently. You will also benefit from our comprehensive <a href="/tax">tax planning and preparation</a> services designed to help you stay in compliance and save money.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="location-contact-box">
                        <p>
                            <a href="/contact">Contact us</a> now to book a consultation. We’re ready to learn about your Mechanicsburg-area business or nonprofit so we help you make an impact in our community—and beyond.
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
                            <h2>Typical Accounting Services—and so Much More—in <strong>Mechanicsburg, PA</strong></h2>
                            <p>Not all financial services companies are alike. At ZN Tax Consultant's Mechanicsburg location, you'll find accounting, bookkeeping, and tax planning services that small businesses rely on because we deliver:</p>
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
                            <p>If you're looking for broad advice about how to improve your overall business, our <a href="/consulting">business and financial consulting</a> can:</p>
                            <ul className="checkmark-list">
                                <li>Offer guidance on day-to-day financial operations</li>
                                <li>Help you create business goals and monitor progress</li>
                                <li>Strategize ways to minimize tax obligations</li>
                                <li>Assist with executive-level business decisions</li>
                                <li>Evaluate succession planning options and help create an exit strategy</li>
                            </ul>
                            <p>And for those interested in starting a new business or expanding a business through the purchase of an existing company, ZN Tax Consultant <a href="/acquisitions">acquisition & startup services</a> will:</p>
                            <ul className="checkmark-list">
                                <li>Evaluate purchase costs to ensure fair pricing</li>
                                <li>Assist with obtaining financing</li>
                                <li>Complete required paperwork for various taxing agencies</li>
                                <li>Estimate required capital expenditures</li>
                                <li>Conduct due diligence (licenses, permits, zoning requirements, environmental concerns)</li>
                                <li>Work with your team and other trusted advisors for a unified, strategic approach</li>
                            </ul>
                            <p>You can also count on us for periodic or one-time <a href="/valuations">business valuations</a>.</p>
                        </div>
                    </div>

                    <div className="location-inline-cta">
                        <p>Are you ready to see what a partnership with ZN Tax Consultant can do for your business? It all starts with a no-cost consultation.</p>
                        <div className="wp-block-button">
                            <a className="wp-block-button__link wp-element-button" href="/schedule">Schedule A Consultation</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Need More Reasons Section */}
            <div className="reasons-section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '28px' }}>Even More Reasons to Choose ZN Tax Consultant <strong>in Mechanicsburg</strong></h2>
                    <p className="text-center" style={{ maxWidth: '900px' }}>
                        ZN Tax Consultant have been trusted advisors to small businesses across central Pennsylvania. We provide the expertise and services of a large firm but with offices conveniently located where you are in Mechanicsburg.
                    </p>
                    <p className="text-center" style={{ maxWidth: '900px' }}>
                        Our local experts know your community and understand what's happening in your backyard, because it's their backyard, too. We are proud to support small businesses, the backbone of our local, national, and global communities.
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

            <OtherLocations currentLocation="Mechanicsburg" />

            <LocationReviews locationName="Mechanicsburg" />
        </div>
    );
};
export default Mechanicsburg;