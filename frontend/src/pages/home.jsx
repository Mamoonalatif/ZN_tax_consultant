import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import images
import heroImg from '../assets/images/hero.jpg';
import service01Img from '../assets/images/services01.png';
import service02Img from '../assets/images/services02.png';
import service03Img from '../assets/images/services03.png';
import service04Img from '../assets/images/services04.png';
import service05Img from '../assets/images/services05.png';
import service06Img from '../assets/images/services06.png';
import service07Img from '../assets/images/services07.png';
import differenceImg from '../assets/images/GiftCPA006.jpg';
import adobeBg from '../assets/images/white-bg.jpg';
import GiftCPACommercialShoot304CopyEditedScaled from '../assets/images/Gift-CPA-Commercial-Shoot-304-copy-edited-scaled.jpg';

const Home = () => {
    const location = useLocation();
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (direction) => {
        if (trackRef.current) {
            const cardWidth = trackRef.current.offsetWidth / 2;
            const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
            trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            // Minimal dot tracking logic
            const newIndex = direction === 'next' ? Math.min(activeIndex + 1, 7) : Math.max(activeIndex - 1, 0);
            setActiveIndex(newIndex);
        }
    };

    return (
        <div className="content-wrapper">
            {/* SECTION 1: HERO */}
            <div className="wp-block-cover alignfull is-light" style={{ paddingTop: '30px', paddingBottom: '60px' }}>
                <img
                    fetchpriority="high"
                    decoding="async"
                    className="wp-block-cover__image-background"
                    alt="ZN Tax Consultant Hero"
                    src={heroImg}
                    style={{ objectFit: 'cover' }}
                />
                <span aria-hidden="true" className="wp-block-cover__background has-background-dim-0 has-background-dim" style={{ backgroundColor: '#e3e3e3' }}></span>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns is-layout-flex">
                        <div className="wp-block-column" style={{ flexBasis: '2%' }}>
                            <h1 className="wp-block-heading" style={{ fontWeight: '500', fontSize: '40px' }}>Central Pennsylvania CPA-Services Firm <strong>For Your Business</strong></h1>
                            <p style={{ fontSize: '16px', fontWeight: '500' }}>You Want to Impact Lives and Turn Dreams Into Reality. ZN Tax Consultant is Ready to Help with Accounting Services, Tax Services, Bookkeeping, and More.</p>
                            <div className="wp-block-buttons">
                                <div className="wp-block-button">
                                    <Link className="wp-block-button__link" to="/schedule">Let’s Talk About It</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wp-block-column"></div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: SERVICES GRID */}
            <div className="wp-block-cover alignfull is-light" style={{ paddingTop: '25px' }}>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#ffffff' }}></span>
                <div className="wp-block-cover__inner-container container">
                    <h2 className="wp-block-heading" style={{ marginBottom: '15px', fontSize: '28px', fontWeight: '500' }}>Find the <strong>Bookkeeping & Tax Services</strong> Your Small Business Needs</h2>
                    <p style={{ maxWidth: '1300px', margin: '0 px', fontSize: '14px' }}>You don’t have to know which services your business or non-profit requires in order to take advantage of everything ZN Tax Consultant provides. We’ll help you select the services that are most suited to your business’s unique needs.</p>

                    <div className="service-grid-v2">
                        {/* Service 1: Bookkeeping */}
                        <div className="service-card-v2">
                            <div className="icon-box">
                                <img src={service01Img} alt="Bookkeeping" />
                            </div>
                            <div className="text-box">
                                <h3>Bookkeeping</h3>
                                <p>Are you feeling the effects of not having an in-house bookkeeper? Outsource it to start breathing easier.</p>
                                <Link to="/bookkeeping" className={location.pathname === '/bookkeeping' ? 'active' : ''}>Outsource Bookkeeping</Link>
                            </div>
                        </div>

                        {/* Service 2: Tax Prep */}
                        <div className="service-card-v2">
                            <div className="icon-box">
                                <img src={service02Img} alt="Tax Prep" />
                            </div>
                            <div className="text-box">
                                <h3>Tax Prep & Planning</h3>
                                <p>File on time, say goodbye to extensions, and make sure you’re not paying more in taxes than you should be.</p>
                                <Link to="/tax">File Without Worry</Link>
                            </div>
                        </div>

                        {/* Service 3: Acquisitions */}
                        <div className="service-card-v2">
                            <div className="icon-box">
                                <img src={service03Img} alt="Acquisitions" />
                            </div>
                            <div className="text-box">
                                <h3>Acquisitions & Startups</h3>
                                <p>Whether you’re buying, selling, or starting a new business, having your books in order is a crucial step in the process.</p>
                                <Link to="/acquisitions">Get A Consultant’s Help</Link>
                            </div>
                        </div>

                        {/* Service 4: Consulting */}
                        <div className="service-card-v2">
                            <div className="icon-box">
                                <img src={service04Img} alt="Consulting" />
                            </div>
                            <div className="text-box">
                                <h3>Business & Financial Consulting</h3>
                                <p>Will financial reporting, analysis, budgeting, forecasting, and planning help your business to thrive? Let's find out.</p>
                                <Link to="/consulting">Improve Your Business</Link>
                            </div>
                        </div>

                        {/* Service 5: Valuations */}
                        <div className="service-card-v2">
                            <div className="icon-box">
                                <img src={service05Img} alt="Valuations" />
                            </div>
                            <div className="text-box">
                                <h3>Business Valuations</h3>
                                <p>What's your business worth? If you don't know, you may have to endure difficult negotiations and get less than you deserve.</p>
                                <Link to="/valuations">Know What You're Worth</Link>
                            </div>
                        </div>

                        {/* Service 6: QuickBooks */}
                        <div className="service-card-v2">
                            <div className="icon-box">
                                <img src={service06Img} alt="QuickBooks" />
                            </div>
                            <div className="text-box">
                                <h3>QuickBooks</h3>
                                <p>From setup and installation to training and support, we’ll help you get the most from QuickBooks and all its features.</p>
                                <Link to="/quickbooks">Optimize QuickBooks</Link>
                            </div>
                        </div>
                        <div className="service-card-v2">
                            <div className="icon-box">
                                <img src={service07Img} alt=" Beneficial Ownership Information Reporting (BOI)" />
                            </div>
                            <div className="text-box">
                                <h3>Beneficial Ownership Information Reporting (BOI)</h3>
                                <p>Many companies are required to report information to FinCEN about the individuals who ultimately own or control them.</p>
                                <Link to="/BOI">Are You One of Them?</Link>
                            </div>
                        </div>
                    </div>
                    <p style={{ maxWidth: '1300px', margin: '40px auto 0', fontSize: '14px' }}>Contact our team about supplementing your in-house bookkeeping, using CPA outsourcing services to your advantage, discovering all the perks of virtual CPA services, or just feeling more confident in your CPA tax services. It’s all waiting for you at ZN Tax Consultant.</p>
                </div>
            </div>


            {/* --- SECTION: The ZN Tax Consultant Difference (Overlapping Layout) --- */}
            <div className="wp-block-cover alignfull is-light has-parallax">
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${adobeBg})`, backgroundPosition: '50% 50%' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background has-background-dim" style={{ backgroundColor: '#eaeaea' }}></span>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center" style={{ gap: '0' }}>
                        <div className="wp-block-column" style={{ flexBasis: '48%', margin: '0', zIndex: 2, marginRight: '-80px' }}>
                            <figure className="wp-block-image size-full" style={{ margin: '0' }}>
                                <img src={differenceImg} alt="ZN Tax Consultant Difference" style={{ width: '90%', display: 'block' }} />
                            </figure>
                        </div>
                        <div className="wp-block-column cta bg-white" style={{ flexBasis: '52%', padding: '40px 40px 40px 50px', zIndex: 1, marginRight: '0' }}>
                            <h2 className="wp-block-heading" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>The ZN Tax Consultant <strong>Difference</strong></h2>
                            <p style={{ fontSize: '12px', lineHeight: '1.4', marginBottom: '10px' }}>All financial services companies are not alike, and you’ll discover that during your first interaction with the ZN Tax Consultant team.</p>
                            <p style={{ fontSize: '12px', lineHeight: '1.4', marginBottom: '10px' }}>We’ll ensure that your books are in order, that you’re not paying more taxes than you need to, that your business valuation is accurate—and we’ll do it all with your ultimate success in mind.</p>
                            <p style={{ fontSize: '12px', lineHeight: '1.4', marginBottom: '10px' }}>We’ll handle the bookkeeping, accounting, or other services, so you can focus on your business’s mission.</p>
                            <div className="wp-block-buttons" style={{ marginTop: '15px' }}>
                                <div className="wp-block-button">
                                    <Link className="wp-block-button__link wp-element-button" to="/why-choose-zn" style={{ padding: '10px 25px', fontSize: '12px' }}>Get To Know US</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECTION: Four Locations & Staff Grid --- */}
            <div className="wp-block-cover alignfull is-light bg-white" style={{ padding: '80px 0' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '25%' }}>
                            <h2 className="wp-block-heading locations-heading">
                                <strong>Four Pennsylvania Locations</strong>—All with Seasoned, Caring Professionals to Serve You
                            </h2>
                        </div>
                        <div className="wp-block-column" style={{ flexBasis: '60%', paddingLeft: '40px', fontWeight: '600px' }}>
                            <p className="locations-intro-text">The community where you’re operating your business or nonprofit has become your home. You know the landscape, the commerce, and the people—how they spend their time and what they need most.</p>
                            <p className="location-links">You want your bookkeeper or accountant to be part of that same community to help you succeed locally and beyond. That’s why we have offices in <Link to="/mechanicsburg">Mechanicsburg</Link>, <Link to="/myerstown">Myerstown</Link>, <Link to="/harrisburg">Harrisburg</Link>, and <Link to="/lancaster">Lancaster</Link>—to serve you, so you can serve the community your business calls home.</p>
                        </div>
                    </div>

                    <div className="wp-block-query" style={{ marginTop: '50px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {[
                                { name: 'Zulqarnain Nasir', title: 'CPA, EA, Principal' }
                            ].map((staff, i) => (
                                <div key={i} className="wp-block-post" style={{ width: '300px' }}>
                                    <div className="agent-location text-center">
                                        <div style={{
                                            width: '120px',
                                            height: '120px',
                                            margin: '0 auto 20px auto',
                                            backgroundColor: '#f1f1f1',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#1b5779',
                                            fontSize: '50px',
                                            border: '4px solid #fff',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                        }}>
                                            <i className="fa-solid fa-user-tie"></i>
                                        </div>
                                        <h3 className="wp-block-post-title" style={{ fontSize: '20px', marginBottom: '5px' }}>{staff.name}</h3>
                                        <div className="wp-block-post-subtitle" style={{ fontSize: '14px', color: '#686c6d', fontWeight: '500' }}>{staff.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dual Action Buttons Added per image */}
                    <div style={{ textAlign: 'center', marginTop: '50px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link className="wp-block-button__link" to="/schedule" style={{ padding: '12px 35px', fontSize: '16px', fontWeight: 'bold' }}>Find An Accountant</Link>
                        <Link className="wp-block-button__link" to="/our-people" style={{ padding: '12px 35px', fontSize: '16px', fontWeight: 'bold' }}>See All Staff</Link>
                    </div>
                </div>
            </div>

            {/* --- SECTION: Easy as 1, 2, 3 (Blue Parallax with Overlay) --- */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', padding: '40px 0' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${adobeBg})`, backgroundPosition: '50% 50%' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#0f4b6eff', opacity: 0.85, zIndex: 1 }}></span>
                <div className="wp-block-cover__inner-container container text-center" style={{ zIndex: 2, position: 'relative' }}>
                    <h2 className="wp-block-heading text-center" style={{ marginBottom: '15px', fontSize: '26px' }}>Finding a CPA or Bookkeeper <strong>is Easy as 1, 2, 3</strong></h2>
                    <p className="steps-intro-text text-center" style={{ margin: '0 auto 40px auto', maxWidth: '850px', fontSize: '14px' }}>If you’ve been putting off hiring a CPA or accountant because it sounds like too much of a hassle, get ready to be pleasantly surprised! With ZN Tax Consultant, matching you with the professional who’s best suited to your business’s needs is simple:</p>
                    <div className="wp-block-columns" style={{ marginTop: '30px', justifyContent: 'center', gap: '0.5em', marginBottom: '0', paddingBottom: '30px' }}>
                        <div className="wp-block-column text-center">
                            <p className="step">Step<br />1</p>
                            <Link className="consultation-link aligncenter" to="/schedule" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.4' }}>Schedule a Consultation</Link>
                        </div>
                        <div className="wp-block-column text-center">
                            <p className="step">Step<br />2</p>
                            <p className="text-center" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.4' }}>Tell Us About Your Challenges, Goals,<br />and How You Define Success</p>
                        </div>
                        <div className="wp-block-column text-center">
                            <p className="step">Step<br />3</p>
                            <p className="text-center" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.4' }}>Meet Your Financial Professional<br />and Get Back to Business</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Work With ZN Tax Consultant Section */}
            <div className="wp-block-cover alignfull is-light" style={{ backgroundColor: '#e8e8e8', padding: '60px 0', marginTop: '0' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '40%' }}>
                            <h2 className="wp-block-heading" style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: '500' }}>Work with ZN Tax Consultant for the Tax Services <strong>You Need</strong> and the Relationship <strong>You Want</strong></h2>
                            <p style={{ marginTop: '30px' }}>Your Tax Professional should know your business. They should understand your goals, your challenges, and your definition of success. Only then can tax services be tailored to your unique business and help you move forward.</p>
                            <p style={{ marginTop: '20px' }}>Whether it's bookkeeping, tax preparation, general accounting services, or other tax services you're searching for, you'll find it at ZN Tax Consultant. Schedule a consultation so we can discuss your needs today.</p>
                            <div className="wp-block-buttons" style={{ marginTop: '30px' }}>
                                <div className="wp-block-button">
                                    <Link className="wp-block-button__link" to="/schedule">Book A Consultation</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wp-block-column cta" style={{ flexBasis: '60%', marginLeft: '30px', padding: '24px', overflow: 'hidden' }}>
                            <img src={GiftCPACommercialShoot304CopyEditedScaled} alt="Careers" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} />
                            <div style={{ padding: '0px 10px 5px' }}>
                                <h3 className="wp-block-heading" style={{ fontSize: '22px', margin: '10px 0 10px', fontWeight: '500' }}>Interested in a Career with <strong>a Respected Tax Firm</strong> in Central PA?</h3>
                                <p style={{ fontSize: '12px', color: '#444', lineHeight: '1.5' }}>No matter if you're new to the financial services sector or you're a seasoned professional, we'd like to talk to you about joining the ZN Tax Consultant team. If you're dedicated to excellence and you find fulfillment in helping businesses succeed, then we encourage you to apply.</p>
                                <div style={{ marginTop: '10px' }}>
                                    <Link className="career-link" to="/careers">Work For ZN Tax Consultant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECTION: Google Reviews (Exact Replica) --- */}
            <div className="reviews-section alignfull">
                <div className="container">
                    <div className="reviews-container">
                        {/* Left Side: Google Summary */}
                        <div className="reviews-left">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="google-logo-large" />
                            <h2 style={{ fontSize: '36px', fontWeight: '400', margin: '0 0 10px 0' }}>Reviews</h2>
                            <div className="google-stars-main">★★★★★</div>
                            <div className="rating-summary-box">
                                <div className="rating-value">4.9</div>
                                <div className="rating-stars-small">★★★★★</div>
                                <div className="review-count">108 User Reviews</div>
                            </div>
                        </div>

                        {/* Right Side: Slider */}
                        <div className="reviews-right">
                            {/* Prev Arrow */}
                            <div className="slider-arrow arrow-prev" onClick={() => handleScroll('prev')}>
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>

                            <div className="reviews-slider-track" ref={trackRef}>
                                {/* Card 1 */}
                                <div className="review-card-wrapper">
                                    <div className="review-card">
                                        <div className="quote-icon">“</div>
                                        <div className="review-stars">★★★★★</div>
                                        <p className="review-content">
                                            We wish to express our gratitude to Chad Schweighart. We greatly appreciate his professionalism, expertise and courteousness during our dealings. We rate him a 10 out of 10 in all categories.
                                        </p>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="google-g-icon" />
                                    </div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Bill and Nancy Walker</span>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="review-card-wrapper">
                                    <div className="review-card">
                                        <div className="quote-icon">“</div>
                                        <div className="review-stars">★★★★★</div>
                                        <p className="review-content">
                                            David has prepared our personal income taxes for two years. David is easy to work with and very responsive. Wholeheartedly recommend!
                                        </p>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="google-g-icon" />
                                    </div>
                                    <div className="reviewer-info">
                                        <span className="reviewer-name">Kurt Patberg</span>
                                    </div>
                                </div>

                                {/* Padding cards for visual consistency in track */}
                                <div className="review-card-wrapper">
                                    <div className="review-card" style={{ opacity: 0.5 }}>
                                        <div className="review-stars">★★★★★</div>
                                        <p className="review-content italic">More stunning reviews from our happy clients in the Central PA community...</p>
                                    </div>
                                </div>
                            </div>

                            {/* Next Arrow */}
                            <div className="slider-arrow arrow-next" onClick={() => handleScroll('next')}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>

                            {/* Dots */}
                            <div className="slider-dots">
                                {[...Array(8)].map((_, i) => (
                                    <span key={i} className={`dot ${activeIndex === i ? 'active' : ''}`} onClick={() => setActiveIndex(i)}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
