import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';
import shootImg from '../assets/images/Gift-CPA-Commercial-Shoot-304-copy-edited-scaled.jpg';
import giftCPA006 from '../assets/images/GiftCPA006.jpg';
import blueBg from '../assets/images/blue-bg.jpg';

// Service Icons
import service01Img from '../assets/images/services01.png';
import service02Img from '../assets/images/services02.png';
import service04Img from '../assets/images/services04.png';
import service05Img from '../assets/images/services05.png';
import service06Img from '../assets/images/services06.png';

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
            <div className="wp-block-cover alignfull is-light careers-hero" style={{
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '40px',
                paddingBottom: '40px',
                background: `#f5f7f8`,
                position: 'relative'
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
                    <h1 className="wp-block-heading" style={{ fontSize: '48px', color: '#000', fontWeight: '300', lineHeight: '1.2' }}>
                        Business <strong>Acquisition & Startup Consulting</strong> in Central Pennsylvania
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '850px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                        When You Have an Experienced Startup Consultant or Business Evaluation Partner on Your Side, You Can Expect a More Efficient Transition.
                    </p>
                    <div className="wp-block-buttons" style={{ marginTop: '30px' }}>
                        <a className="wp-block-button__link wp-element-button" href="/contact" style={{ background: '#d13239' }}>
                            Consult With ZN Tax Consultant
                        </a>
                    </div>
                </div>
            </div>

            {/* SECTION 1: Simplify Business Acquisition */}
            <div className="section-padding bg-white" style={{ padding: '40px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <img src={shootImg} alt="Business Handshake" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Simplify <strong>Business Acquisition</strong> with Expert CPA Guidance
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    Are you searching for a business acquisition consultant who offers more than just accounting expertise? Whether you're buying a business to expand your current holdings or entering a new industry, the right guidance can make all the difference.
                                </p>
                                <p>
                                    With a strategic <a href="#" style={{ color: '#d13239', textDecoration: 'underline' }}>business acquisition strategy</a>, you can make informed decisions, minimize risks, and ensure financial stability. A CPA for startups and acquisitions provides the due diligence, financial structuring, and cash flow analysis needed for a seamless transition. Get expert insights to navigate mergers and acquisitions with confidence.
                                </p>
                            </div>
                            <a className="wp-block-button__link wp-element-button" href="/schedule" style={{ background: '#d13239', padding: '15px 40px' }}>
                                Book An Acquisition Consultation
                            </a>
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
                                        <span style={{ position: 'absolute', left: 0, color: '#d13239', fontWeight: 'bold' }}>•</span> {item}
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
                                            <span style={{ position: 'absolute', left: 0, color: '#d13239' }}>-</span> {item}
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
                                Navigating a business acquisition comes with many uncertainties. Here are answers to some common questions to help you make an informed decision. If you have additional concerns or need personalized guidance, a business acquisition consultant can <a href="/contact" style={{ color: '#d13239', textDecoration: 'underline' }}>provide expert insight</a> tailored to your situation.
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
                            <img src={giftCPA006} alt="Startup Consulting" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
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
                                    Strategic <a href="#" style={{ color: '#d13239', textDecoration: 'underline' }}>startup financial consulting</a> helps turn your passion into a profitable business. Whether you're navigating compliance requirements, securing funding, or optimizing tax benefits, a knowledgeable advisor can help you make informed decisions and avoid costly mistakes.
                                </p>
                                <p>
                                    With the right startup CPA service, you gain the financial insight needed to grow your business with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 4: Startup Key Questions & FAQ Grid */}
            <div className="section-padding bg-light" style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
                        {/* Left Column: Startup Considerations */}
                        <div style={{ background: '#fff', padding: '50px', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: '300', marginBottom: '25px', color: '#1a1a1a', lineHeight: '1.3' }}>
                                Starting a business is an exciting venture, but <strong>making the right financial decisions early on is crucial</strong> for long-term success.
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', marginBottom: '25px' }}>
                                A knowledgeable business startup consulting expert can help you navigate key financial considerations, including:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                                {[
                                    'Should I start my own business?',
                                    'Can I afford this venture, and how should I structure the purchase?',
                                    'What is the best way to secure financing?',
                                    'Which entity structure—sole proprietor, partnership, corporation, or nonprofit—is best for my goals?'
                                ].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative', fontSize: '14px', color: '#444' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#d13239', fontWeight: 'bold' }}>•</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '15px', color: '#333', fontWeight: '700', marginBottom: '20px' }}>
                                Once these foundational questions are answered, a CPA for startups will guide you through:
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px 20px', marginBottom: '30px' }}>
                                {[
                                    'Business Structure Selection', 'Cost-Reduction Strategies',
                                    'Financial Planning', 'Risk Management',
                                    'Tax Compliance', 'Regulations & Compliance',
                                    'Accounting Systems', 'Business Expansion',
                                    'Financial Analysis', 'Profit Maximization',
                                    'Fundraising Support', 'Advisory Services'
                                ].map((item, i) => (
                                    <div key={i} style={{ fontSize: '13px', color: '#555', marginBottom: '8px', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#d13239' }}>•</span> {item}
                                    </div>
                                ))}
                            </div>
                            <p style={{ fontSize: '14px', color: '#555', fontStyle: 'italic', lineHeight: '1.6' }}>
                                A strong startup CPA service ensures your business starts on a solid financial footing, helping you avoid costly mistakes and maximize opportunities. Take the first step toward success—<a href="/schedule" style={{ color: '#d13239', textDecoration: 'underline' }}>schedule a consultation today!</a>
                            </p>
                        </div>

                        {/* Right Column: Startup FAQ */}
                        <div>
                            <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Frequently Asked <strong>Startup Consulting</strong> Questions
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
                                Starting a new business comes with many uncertainties. Below are answers to some of the most common questions entrepreneurs ask. For personalized guidance, a business startup consulting expert can provide tailored solutions for your specific needs.
                            </p>
                            <FAQ items={[
                                {
                                    question: "Do I Need an Accountant for My Startup?",
                                    answer: "While many entrepreneurs start by doing their own books, a professional accountant provides strategic value far beyond data entry. We help with entity selection, tax planning, and setting up accounting systems that scale with your growth."
                                },
                                {
                                    question: "Why is Accounting Important for Startups?",
                                    answer: "Accurate accounting is the only way to track your burn rate, manage cash flow, and demonstrate financial health to potential investors or lenders."
                                }
                            ]} />
                            <div style={{ borderLeft: '4px solid #d13239', background: '#fff', padding: '30px', marginTop: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                <p style={{ fontSize: '14px', marginBottom: '20px' }}>
                                    <a href="/contact" style={{ color: '#d13239', textDecoration: 'underline', fontWeight: 'bold' }}>Our team</a> will work closely with you to help make your startup a success. Let's schedule a consultation to get started.
                                </p>
                                <a className="wp-block-button__link wp-element-button" href="/schedule" style={{ background: '#d13239' }}>
                                    Book A Startup Consultation
                                </a>
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

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '15px',
                        marginBottom: '40px'
                    }}>
                        {[
                            { title: 'Bookkeeping', icon: 'fa-book', link: '/bookkeeping' },
                            { title: 'QuickBooks® Services', icon: 'fa-arrows-rotate', link: '/quickbooks' },
                            { title: 'Tax Preparation & Planning', icon: 'fa-calculator', link: '/tax' },
                            { title: 'Business Valuations', icon: 'fa-chart-pie', link: '/valuations' },
                            { title: 'Business & Financial Consulting', icon: 'fa-users-gear', link: '/consulting' }
                        ].map((s, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '30px 20px',
                                borderRadius: '4px',
                                textAlign: 'center',
                                color: '#333'
                            }}>
                                <div style={{ fontSize: '40px', color: '#d13239', marginBottom: '20px' }}>
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <a href={s.link} style={{
                                    color: '#d13239',
                                    fontWeight: '700',
                                    fontSize: '15px',
                                    textDecoration: 'underline',
                                    lineHeight: '1.3'
                                }}>
                                    {s.title}
                                </a>
                            </div>
                        ))}
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '30px', opacity: 0.9, maxWidth: '800px', margin: '0 auto 30px auto' }}>
                        The bookkeeping or accounting services you need are just a call or message away. Let us help you cultivate success—starting today!
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <a className="wp-block-button__link wp-element-button" href="/find-accountant" style={{ background: '#d13239' }}>
                            Find An Accountant
                        </a>
                        <a className="wp-block-button__link wp-element-button" href="/contact" style={{ background: '#d13239' }}>
                            Find A Bookkeeper
                        </a>
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
                            We can help you <a href="/consulting" style={{ color: '#d13239', textDecoration: 'underline' }}>develop a strategic approach</a> to handling your startup or acquisition. Make an appointment at one of our four locations in <a href="/harrisburg" style={{ color: '#d13239', textDecoration: 'underline' }}>Harrisburg</a>, <a href="/mechanicsburg" style={{ color: '#d13239', textDecoration: 'underline' }}>Mechanicsburg</a>, <a href="/myerstown" style={{ color: '#d13239', textDecoration: 'underline' }}>Myerstown</a>, or <a href="/lancaster" style={{ color: '#d13239', textDecoration: 'underline' }}>Lancaster</a>, PA.
                        </p>
                    </div>
                    <a className="wp-block-button__link wp-element-button" href="/contact" style={{ background: '#d13239', padding: '15px 50px' }}>
                        Contact ZN Tax Consultant
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Acquisitions;
