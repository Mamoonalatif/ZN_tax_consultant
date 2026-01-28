import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';

// Import images
import heroImg from '../assets/images/hero.jpg';
import adobeBg from '../assets/images/white-bg.jpg';

const Home = () => {
    const location = useLocation();
    const profileRefs = useRef([]);
    const serviceRefs = useRef([]);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.05 });

        profileRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });
        serviceRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });
        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (direction) => {
        if (trackRef.current) {
            const cardWidth = trackRef.current.offsetWidth / 2;
            const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
            trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            // Minimal dot tracking logic
            const newIndex = direction === 'next' ? Math.min(activeIndex + 1, 1) : Math.max(activeIndex - 1, 0);
            setActiveIndex(newIndex);
        }
    };

    return (
        <div className="content-wrapper">
            {/* SECTION 1: HERO */}
            <div className="wp-block-cover alignfull is-light hero-section" style={{ paddingTop: '25px', paddingBottom: '60px' }}>
                <img
                    fetchPriority="high"
                    decoding="async"
                    className="wp-block-cover__image-background"
                    alt="ZN Tax Consultant Hero"
                    src={heroImg}
                    style={{ objectFit: 'cover' }}
                />
                <span aria-hidden="true" className="wp-block-cover__background has-background-dim-0 has-background-dim" style={{ backgroundColor: '#e3e3e3' }}></span>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns is-layout-flex hero-columns" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <div className="wp-block-column hero-content-column" style={{ flex: '1 1 500px', minWidth: '300px', zIndex: 10 }}>
                            <h1 className="wp-block-heading" style={{ fontWeight: '500', fontSize: '48px', lineHeight: '1.1', marginBottom: '20px' }}>Central Pennsylvania CPA-Services Firm <strong style={{ fontWeight: '700' }}>For Your Business</strong></h1>
                            <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.6', marginBottom: '30px', color: '#333' }}>You Want to Impact Lives and Turn Dreams Into Reality. ZN Tax Consultant is Ready to Help with Accounting Services, Tax Services, Bookkeeping, and More.</p>
                            <div className="wp-block-buttons">
                                <div className="wp-block-button">
                                    <Link className="wp-block-button__link" to="/schedule" style={{ padding: '18px 40px', fontSize: '18px', fontWeight: '600' }}>Let’s Talk About It</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wp-block-column" style={{ flex: '1 1 300px' }}></div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: SERVICES GRID */}
            <div className="wp-block-cover alignfull is-light" style={{ paddingTop: '25px', paddingBottom: '40px' }}>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#ffffff' }}></span>
                <div className="wp-block-cover__inner-container container">
                    <h2 className="wp-block-heading" style={{ marginBottom: '15px', fontSize: '28px', fontWeight: '500' }}>Find the <strong style={{ fontWeight: '700' }}>Bookkeeping & Tax Services</strong> Your Small Business Needs</h2>
                    <p style={{ maxWidth: '1300px', margin: '0 auto', fontSize: '13px' }}>You don't have to know which services your business or non-profit requires in order to take advantage of everything ZN Tax Consultant provides. We'll help you select the services that are most suited to your business's unique needs.</p>

                    <div className="service-grid-v2 center-last-item">
                        {/* Service 1: Bookkeeping */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[0] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-book-bookmark"></i>
                            </div>
                            <div className="text-box">
                                <h3>Bookkeeping</h3>
                                <p>Are you feeling the effects of not having an in-house bookkeeper? Outsource it to start breathing easier.</p>
                                <Link to="/bookkeeping">Outsource Bookkeeping</Link>
                            </div>
                        </div>

                        {/* Service 2: Tax Planning */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[1] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                            </div>
                            <div className="text-box">
                                <h3>Tax Prep & Planning</h3>
                                <p>File on time, say goodbye to extensions, and make sure you’re not paying more in taxes than you should be.</p>
                                <Link to="/tax">File Without Worry</Link>
                            </div>
                        </div>

                        {/* Service 3: Acquisitions */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[2] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-handshake"></i>
                            </div>
                            <div className="text-box">
                                <h3>Acquisitions & Startups</h3>
                                <p>Whether you're buying, selling, or starting a new business, having your books in order is a crucial step in the process.</p>
                                <Link to="/acquisitions">Get A Consultant's Help</Link>
                            </div>
                        </div>

                        {/* Service 4: Consulting */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[3] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-users-gear"></i>
                            </div>
                            <div className="text-box">
                                <h3>Business & Financial Consulting</h3>
                                <p>Will financial reporting, analysis, budgeting, forecasting, and planning help your business to thrive? Let's find out.</p>
                                <Link to="/consulting">Improve Your Business</Link>
                            </div>
                        </div>

                        {/* Service 5: Valuations */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[4] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-chart-pie"></i>
                            </div>
                            <div className="text-box">
                                <h3>Business Valuations</h3>
                                <p>What's your business worth? If you don't know, you may have to endure difficult negotiations and get less than you deserve.</p>
                                <Link to="/valuations">Know What You're Worth</Link>
                            </div>
                        </div>

                        {/* Service 6: QuickBooks */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[5] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <div className="text-box">
                                <h3>QuickBooks</h3>
                                <p>From setup and installation to training and support, we'll help you get the most from QuickBooks and all its features.</p>
                                <Link to="/quickbooks">Optimize QuickBooks</Link>
                            </div>
                        </div>

                        {/* Service 7: BOI */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[6] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <div className="text-box">
                                <h3>Beneficial Ownership Information Reporting (BOI)</h3>
                                <p>Many companies are required to report information to FinCEN about the individuals who ultimately own or control them.</p>
                                <Link to="/coming-soon">Are You One of Them?</Link>
                            </div>
                        </div>
                    </div>
                    <p style={{ maxWidth: '1300px', margin: '40px auto 0', fontSize: '13px', textAlign: 'center' }}>Contact our team about supplementing your in-house bookkeeping, using CPA outsourcing services to your advantage, discovering all the perks of virtual CPA services, or just feeling more confident in your CPA tax services. It's all waiting for you at ZN Tax Consultant.</p>
                </div>
            </div>
            {/* LEADERSHIP SECTION: ZULQARNAIN NASEER */}
            <div className="manager-section">
                <div className="leadership-shape"></div>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '0px', position: 'relative', zIndex: 1 }}>
                        <div style={{ marginBottom: '0px' }}>
                            <span className="difference-tag" style={{ background: 'rgba(27, 87, 121, 0.1)', color: '#1b5779', padding: '10px 40px' }}>The Visionary</span>
                        </div>
                        <h2 className="wp-block-heading" style={{ fontSize: '28px', fontWeight: '400', color: '#000', marginTop: '0', marginBottom: '10px' }}>Our Leadership</h2>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        {/* ZULQARNAIN NASIR */}
                        <div
                            className="profile-card-minimal"
                            ref={el => profileRefs.current[0] = el}
                            style={{ flex: '1 1 100%', maxWidth: '800px', padding: '20px 40px' }}
                        >
                            <div className="leadership-card-top" style={{ textAlign: 'center', marginBottom: '0px' }}>
                                <span className="title" style={{ fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Principal Accountant & CEO</span>
                            </div>

                            <div className="leadership-main-row" style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="leadership-image-container" style={{ width: '120px', height: '120px' }}>
                                    <div className="manager-image-wrapper" style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundColor: '#1b5779', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa-solid fa-user" style={{ fontSize: '70px', color: '#fff' }}></i>
                                    </div>
                                </div>
                                <div className="leadership-text-container" style={{ textAlign: 'center', maxWidth: '700px' }}>
                                    <h2 className="leadership-name" style={{ fontWeight: '700', color: '#000', margin: '0', marginBottom: '2px', fontSize: '28px' }}>Zulqarnain <strong style={{ color: '#000', fontWeight: '700' }}>Nasir</strong></h2>
                                    <p className="leadership-location" style={{ color: '#d13239', fontWeight: '700', fontSize: '16px', margin: '0', marginBottom: '3px' }}>
                                        <i className="fa-solid fa-location-dot" style={{ marginRight: '8px' }}></i> Central Pennsylvania
                                    </p>
                                    <div className="manager-bio" style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: '12px', lineHeight: '1.8', color: '#555', margin: '0' }}>
                                            As the Principal Accountant and visionary behind ZN Tax Consultant, Zulqarnain Nasir provides comprehensive financial services through our firm. Under his leadership, the firm has established a hierarchy of excellence, ensuring that every financial strategy is vetted through rigorous professional standards.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="expertise-grid" style={{ paddingTop: '8px', marginTop: '8px', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                                <div className="expertise-item" style={{ padding: '10px 10px', backgroundColor: '#f0f2f5', borderRadius: '15px', border: '1px solid transparent' }}>
                                    <i className="fa-solid fa-chart-line" style={{ color: '#1b5779', marginBottom: '4px', fontSize: '22px' }}></i>
                                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#333' }}>Tax Strategy</span>
                                </div>
                                <div className="expertise-item" style={{ padding: '10px 10px', backgroundColor: '#f0f2f5', borderRadius: '15px', border: '1px solid transparent' }}>
                                    <i className="fa-solid fa-handshake" style={{ color: '#1b5779', marginBottom: '4px', fontSize: '22px' }}></i>
                                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#333' }}>M&A Advisory</span>
                                </div>
                                <div className="expertise-item" style={{ padding: '10px 10px', backgroundColor: '#f0f2f5', borderRadius: '15px', border: '1px solid transparent' }}>
                                    <i className="fa-solid fa-chart-pie" style={{ color: '#1b5779', marginBottom: '4px', fontSize: '22px' }}></i>
                                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#333' }}>Business Valuation</span>
                                </div>
                                <div className="expertise-item" style={{ padding: '10px 10px', backgroundColor: '#f0f2f5', borderRadius: '15px', border: '1px solid transparent' }}>
                                    <i className="fa-solid fa-users-gear" style={{ color: '#1b5779', marginBottom: '4px', fontSize: '22px' }}></i>
                                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#333' }}>Consulting</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: The Difference */}
            <div className="wp-block-cover alignfull is-light has-parallax" style={{ marginTop: '0', paddingTop: '25px', paddingBottom: '25px' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${adobeBg})`, backgroundPosition: '50% 50%' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background has-background-dim" style={{ backgroundColor: '#f0f2f5', opacity: 0.9 }}></span>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center difference-row" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                        <div className="wp-block-column difference-image-col" style={{ zIndex: 10 }}>
                            <figure className="wp-block-image size-full" style={{ margin: '0' }}>
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" alt="Corporate Growth" className="hover-pop-image" style={{ width: '100%', display: 'block', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.2)', position: 'relative' }} />
                            </figure>
                        </div>
                        <div className="wp-block-column difference-content-box" style={{ zIndex: 1 }}>
                            <span className="difference-tag" style={{ marginBottom: '15px' }}>Why Choose Us</span>
                            <h2 className="wp-block-heading" style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '500' }}>The ZN Tax Consultant<strong style={{ fontWeight: '700' }}> Difference</strong></h2>
                            <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#444', marginBottom: '30px' }}>
                                Our firm operates on a structured hierarchy of professional excellence. Led by our Principal Accountant, our specialized teams are aligned to ensure that every client engagement benefits from multi-layered expertise and strategic oversight. We don't just provide services; we provide a corporate partnership built on the pillars of integrity, precision, and a commitment to your long-term success.
                            </p>
                            <div className="wp-block-buttons">
                                <div className="wp-block-button">
                                    <Link className="wp-block-button__link" to="/why-choose-zn" style={{ background: '#1b5779', padding: '15px 40px', borderRadius: '12px', fontSize: '15px', fontWeight: '700' }}>Explore Our Methodology</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 4: Professional Image */}
            <div className="section-padding clarity-section" style={{ paddingTop: '30px', paddingBottom: '30px', background: '#ffffff' }}>
                <div className="container">
                    <div className="wp-block-columns is-vertically-aligned-center clarity-row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
                        <div className="wp-block-column clarity-text-col">
                            <span className="difference-tag" style={{ background: 'rgba(209, 50, 57, 0.1)', color: '#d13239', marginTop: '10px' }}>Your Success</span>
                            <h2 className="wp-block-heading" style={{ fontSize: '32px', marginBottom: '15px', fontWeight: '500', marginTop: '10px', color: '#000', lineHeight: '1.2' }}>Committed to Your <strong style={{ fontWeight: '700' }}>Financial Clarity</strong></h2>
                            <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#555' }}>We provide specialized guidance for small businesses and non-profits, helping you navigate the complexities of tax laws and financial management with ease. Our goal is to empower you with the insights needed to make informed decisions and achieve sustainable growth through professional excellence.</p>
                        </div>
                        <div className="wp-block-column clarity-image-col">
                            <div style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
                                <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '100%', height: '100%', background: 'rgba(27, 87, 121, 0.05)', borderRadius: '30px', zIndex: 0 }}></div>
                                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" alt="Financial Analytics" className="hover-pop-image" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 5 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 5: Easy as 1, 2, 3 */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', paddingTop: '25px', paddingBottom: '25px' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${adobeBg})`, backgroundPosition: '50% 50%' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#0f4b6eff', opacity: 0.85, zIndex: 1 }}></span>
                <div className="wp-block-cover__inner-container container text-center" style={{ zIndex: 2, position: 'relative' }}>
                    <h2 className="wp-block-heading text-center" style={{ marginBottom: '15px', fontSize: '28px', fontWeight: '500', lineHeight: '1.2' }}>Finding a CPA or Bookkeeper <strong style={{ fontWeight: '700' }}>is Easy as 1, 2, 3</strong></h2>
                    <p className="steps-intro-text text-center" style={{ margin: '0 auto 40px auto', maxWidth: '850px', fontSize: '13px' }}>With ZN Tax Consultant, matching you with the professional who's best suited to your business's needs is simple:</p>
                    <div className="wp-block-columns" style={{ marginTop: '30px', justifyContent: 'center', gap: '2em', marginBottom: '0', paddingBottom: '30px' }}>
                        <div className="wp-block-column text-center">
                            <p className="step">Step 1</p>
                            <Link className="consultation-link aligncenter" to="/schedule">Schedule a Consultation</Link>
                        </div>
                        <div className="wp-block-column text-center">
                            <p className="step">Step 2</p>
                            <p style={{ fontSize: '15px' }}>Tell Us About Your Challenges, Goals</p>
                        </div>
                        <div className="wp-block-column text-center">
                            <p className="step">Step 3</p>
                            <p style={{ fontSize: '15px' }}>Meet Your Financial Professional</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 6: Career & Work With Us */}
            <div className="wp-block-cover alignfull is-light " style={{ backgroundColor: '#f0f2f5', paddingTop: '30px', paddingBottom: '30px' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '40%', paddingBottom: '0px', marginBottom: '0px' }}>
                            <span className="difference-tag" style={{ marginBottom: '0px' }}>Join Our Team</span>
                        </div>
                        <div className="wp-block-column cta-modern career-section" style={{ flexBasis: '60%', marginLeft: '10px', paddingTop: '0px', background: '#fff' }}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Professional Career" style={{ width: '100%' }} />
                            <div className="career-content" style={{ paddingTop: '0px' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '15px', lineHeight: '1.2' }}>Interested in a Career with <strong style={{ fontWeight: '700' }}>a Respected Tax Firm</strong>?</h3>
                                <p style={{ color: '#666', marginBottom: '20px', fontSize: '13px' }}>Join a culture of professional growth and excellence. We are always looking for talented individuals to join our hierarchy of experts.</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                    <Link className="career-link" to="/careers" style={{ fontSize: '16px' }}>Work For ZN Tax <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="consultation-section-modern" style={{ backgroundColor: '#ffffff', paddingTop: '30px', paddingBottom: '20px', marginTop: '0', position: 'relative', overflow: 'hidden' }}>
                <div className="consultation-pattern" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03, backgroundImage: 'radial-gradient(circle, #1b5779 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(27, 87, 121, 0.03) 0%, rgba(209, 50, 57, 0.03) 100%)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(27, 87, 121, 0.1)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                        <div style={{ flex: '1 1 auto', display: 'flex', alignItems: 'center', gap: '25px' }}>
                            <div className="consultation-icon-wrapper" style={{ flex: '0 0 auto', width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #1b5779 0%, #0d2b3c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(27, 87, 121, 0.3)' }}>
                                <i className="fa-solid fa-calendar-check" style={{ fontSize: '30px', color: '#fff' }}></i>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '24px', fontWeight: '500', margin: '0 0 8px 0', color: '#000', lineHeight: '1.2' }}>Schedule a Consultation</h3>
                                <p style={{ margin: '0', fontSize: '13px', color: '#666', lineHeight: '1.2' }}>Discover how our structured approach can transform your business's financial future.</p>
                            </div>
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <Link className="consultation-btn-modern" to="/schedule" style={{ padding: '16px 40px', borderRadius: '50px', fontSize: '15px', fontWeight: '700', whiteSpace: 'nowrap', background: 'linear-gradient(135deg, #d13239 0%, #b02830 100%)', color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 8px 20px rgba(209, 50, 57, 0.3)', transition: 'all 0.3s ease' }}>Book Now <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* SECTION 7: Google Reviews */}
            <GoogleReviews />
        </div>
    );
};

export default Home;
