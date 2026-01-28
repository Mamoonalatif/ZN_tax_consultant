import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';
import blueBg from '../assets/images/blue-bg.jpg';
import strategicPlanningImg from '../assets/images/strategicplanning.png';

// FontAwesome Icons are used directly in the JSX

const Acquisitions = () => {
    const faqItems = [
        {
            question: "What Should I Consider When Acquiring a Business?",
            answer: "A successful acquisition requires thorough due diligence. You must evaluate the target company's financial health, cultural fit, market position, and potential for growth. Our team helps you analyze financial statements, assess asset quality, and identify hidden liabilities to ensure you're making a sound investment."
        },
        {
            question: "Can I Afford a Business Acquisition?",
            answer: "Affordability goes beyond the purchase price. You must consider the impact on your current cash flow, the cost of financing, and the capital required for post-acquisition integration and growth. We provide detailed financial modeling and cash flow projections to help you understand the full financial commitment."
        },
        {
            question: "Should I Change My Business Entity Structure?",
            answer: "Acquiring a business often presents an opportunity to optimize your entity structure for tax efficiency and liability protection. Whether it's an S-Corp, LLC, or C-Corp, we'll evaluate your situation and recommend the best structure to protect your assets and minimize your tax burden during and after the acquisition."
        }
    ];

    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light careers-hero page-responsive-padding" style={{
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '60px',
                background: `linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h1 className="wp-block-heading" style={{ fontSize: '48px', color: '#000', fontWeight: '700', lineHeight: '1.2' }}>
                                Business <strong>Acquisition & Startup</strong>
                            </h1>
                            <p style={{ fontSize: '22px', color: '#444', maxWidth: '850px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                                Expert guidance for seamless transitions, whether you're launching a new venture or expanding your portfolio.
                            </p>
                            <div className="wp-block-buttons" style={{ marginTop: '30px' }}>
                                <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                    background: '#bb3b41',
                                    borderRadius: '30px',
                                    padding: '15px 40px',
                                    boxShadow: '0 10px 20px rgba(187, 59, 65, 0.2)'
                                }}>
                                    Consult With ZN Tax Consultant
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <div className="floating-icon-stack">
                                <div className="icon-blob"></div>
                                <i className="fa-solid fa-handshake main-decorated-icon"></i>
                                <i className="fa-solid fa-seedling sub-icon sub-icon-1"></i>
                                <i className="fa-solid fa-chart-line sub-icon sub-icon-2"></i>
                                <i className="fa-solid fa-briefcase sub-icon sub-icon-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: Simplify Business Acquisition (Overlapping Layout) */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src={strategicPlanningImg} alt="Strategic Planning" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        {/* Floating Text Card */}
                        <div className="process-floating-card" style={{
                            flex: '65%',
                            padding: '60px 60px 60px 115px',
                            background: '#fff',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                            zIndex: 1,
                            marginLeft: '-10%',
                            borderRadius: '4px'
                        }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Simplify <strong>Business Acquisition</strong> with Expert CPA Guidance
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    Are you searching for a business acquisition consultant who offers more than just accounting expertise? Whether you're buying a business to expand your current holdings or entering a new industry, the right guidance can make all the difference.
                                </p>
                                <p>
                                    With a strategic <a href="#" style={{ color: '#bb3b41', textDecoration: 'underline' }}>business acquisition strategy</a>, you can make informed decisions, minimize risks, and ensure financial stability. A CPA for startups and acquisitions provides the due diligence, financial structuring, and cash flow analysis needed for a seamless transition. Get expert insights to navigate mergers and acquisitions with confidence.
                                </p>
                            </div>
                            <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ background: '#bb3b41', padding: '15px 40px' }}>
                                Book An Acquisition Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: Key Questions & FAQ Grid */}
            <div className="section-padding bg-light" style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
                        {/* Left Column: Key Questions */}
                        <div style={{ background: '#fff', padding: '50px', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Key <strong>Questions to Consider</strong> Before Buying a Business
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', marginBottom: '25px' }}>
                                A successful business acquisition strategy starts with answering critical questions:
                            </p>
                            <ul className="checkmark-list" style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Is acquiring another company the right move for my small business?',
                                    'Should I retain certain assets or restructure after the purchase?',
                                    'Can I afford this acquisition, and how will it impact cash flow?',
                                    'What is the best way to secure financing for the deal?',
                                    'Should I adjust my entity structure for tax and operational efficiency?'
                                ].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative', fontSize: '14px', color: '#444' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#bb3b41', fontWeight: 'bold' }}>•</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ fontSize: '14px', color: '#555', marginTop: '25px', lineHeight: '1.6' }}>
                                <p style={{ marginBottom: '15px' }}>Once these questions are addressed, a comprehensive business evaluation is the next step.</p>
                                <p style={{ marginBottom: '15px' }}>A business acquisition consultant helps ensure you're making an informed decision with services such as:</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        'Assessing the purchase price to confirm it’s fair and financially viable.',
                                        'Identifying financing options and connecting you with the right financial institutions.',
                                        'Handling tax and legal documentation required for compliance.',
                                        'Evaluating capital expenditures and future financial commitments.',
                                        'Conducting due diligence on licenses, permits, zoning, and environmental concerns.',
                                        'Collaborating with your trusted advisors to guide strategic financial decisions.'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#bb3b41' }}>-</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
                                    With expert acquisition consulting, you can move forward confidently knowing your investment is backed by thorough financial planning and risk assessment.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: FAQ */}
                        <div>
                            <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Frequently Asked <strong>Business Acquisition</strong> Questions
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
                                Navigating a business acquisition comes with many uncertainties. Here are answers to some common questions to help you make an informed decision. If you have additional concerns or need personalized guidance, a business acquisition consultant can <Link to="/contact" style={{ color: '#bb3b41', textDecoration: 'underline' }}>provide expert insight</Link> tailored to your situation.
                            </p>
                            <FAQ items={faqItems} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: Startup Consulting Intro (Image Left, Text Right) */}
            <div className="section-padding bg-white" style={{ padding: '40px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Financial Analysis" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Startup Consulting: <strong>Build a Strong Financial Foundation</strong>
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    Launching a business comes with challenges, but having an experienced business startup consulting expert by your side can set you up for long-term success. A CPA for startups provides essential guidance on entity structuring, cash flow management, and tax strategies to ensure financial stability from day one.
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    Strategic <a href="#" style={{ color: '#bb3b41', textDecoration: 'underline' }}>startup financial consulting</a> helps turn your passion into a profitable business. Whether you're navigating compliance requirements, securing funding, or optimizing tax benefits, a knowledgeable advisor can help you make informed decisions and avoid costly mistakes.
                                </p>
                                <p>
                                    With the right startup CPA service, you gain the financial insight needed to grow your business with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* SECTION 5: Acquisitions, Startup Consulting, and Much More (Blue Parallax) */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', padding: '80px 0' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', filter: 'grayscale(1)' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#0f4b6eff', opacity: 0.9, zIndex: 1 }}></span>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '300', marginBottom: '15px', color: '#fff' }}>
                        Business Acquisitions, Startup Consulting, <strong>and Much More</strong>
                    </h2>
                    <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '50px', opacity: 0.9 }}>
                        At ZN Tax Consultant, business evaluations and startup consultations are just two of the areas where our accountants and other staff excel. We also offer:
                    </p>

                    <div className="service-grid-v2 center-last-item" style={{ marginTop: '40px', marginBottom: '20px' }}>
                        {[
                            { title: 'Bookkeeping', icon: 'fa-book-bookmark', link: '/bookkeeping' },
                            { title: 'Tax Preparation & Planning', icon: 'fa-file-invoice-dollar', link: '/tax' },
                            { title: 'Business Valuations', icon: 'fa-chart-pie', link: '/valuations' },
                            { title: 'Business Consulting', icon: 'fa-users-gear', link: '/consulting' },
                            { title: 'QuickBooks® Services', icon: 'fa-laptop-code', link: '/quickbooks' },
                            { title: 'BOI Reporting', icon: 'fa-shield-halved', link: '/coming-soon' }
                        ].map((s, i) => (
                            <div key={i} className="service-card-v2 animate-card revealed" style={{ opacity: 1, transform: 'none' }}>
                                <div className="icon-box-fa">
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <div className="text-box">
                                    <h3 style={{ margin: 0 }}>{s.title}</h3>
                                    <Link to={s.link} style={{ color: '#1b5779', fontWeight: '600' }}>Learn More</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '30px', marginTop: '30px', opacity: 0.9, maxWidth: '800px', margin: '0 auto 30px auto' }}>
                        The bookkeeping or accounting services you need are just a call or message away. Let us help you cultivate success—starting today!
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Link className="wp-block-button__link wp-element-button" to="/find-accountant" style={{ background: '#bb3b41' }}>
                            Find An Accountant
                        </Link>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#bb3b41' }}>
                            Find A Bookkeeper
                        </Link>
                    </div>
                </div>
            </div>

            {/* SECTION 6: Bottom Contact Info */}
            <div className="section-padding bg-white" style={{ padding: '40px 0' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#1a1a1a' }}>
                        If You Have Questions, <strong>Get in Touch with ZN Tax Consultant</strong>
                    </h2>
                    <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                        <p style={{ marginBottom: '15px' }}>
                            We can help you <Link to="/consulting" style={{ color: '#bb3b41', textDecoration: 'underline' }}>develop a strategic approach</Link> to handling your startup or acquisition. Make an appointment at one of our four locations in <Link to="/harrisburg" style={{ color: '#bb3b41', textDecoration: 'underline' }}>Harrisburg</Link>, <Link to="/mechanicsburg" style={{ color: '#bb3b41', textDecoration: 'underline' }}>Mechanicsburg</Link>, <Link to="/myerstown" style={{ color: '#bb3b41', textDecoration: 'underline' }}>Myerstown</Link>, or <Link to="/lancaster" style={{ color: '#bb3b41', textDecoration: 'underline' }}>Lancaster</Link>, PA.
                        </p>
                    </div>
                    <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#bb3b41', padding: '15px 50px' }}>
                        Contact ZN Tax Consultant
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Acquisitions;
