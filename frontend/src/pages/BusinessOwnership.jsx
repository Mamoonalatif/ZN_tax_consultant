import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';

const BusinessOwnership = () => {
    const faqItems = [
        {
            question: "What is BOI Reporting and Why Does It Matter?",
            answer: "The Beneficial Ownership Information (BOI) reporting requirement is a federal mandate designed to increase transparency and combat financial crimes. Most businesses must report information about their beneficial owners to FinCEN to remain compliant."
        },
        {
            question: "Who Needs to File BOI Reports?",
            answer: "Most corporations, LLCs, and similar entities created or registered to do business in the United States must file BOI reports. There are exemptions for certain large operating companies and regulated entities."
        },
        {
            question: "What Happens If I Don't File BOI Reports?",
            answer: "Failure to file required BOI reports can result in significant civil and criminal penalties, including fines up to $10,000 and potential imprisonment. Compliance is critical to avoid these consequences."
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
                                Business <strong>Ownership Information</strong>
                            </h1>
                            <p style={{ fontSize: '22px', color: '#444', maxWidth: '850px', margin: '25px 0', lineHeight: '1.5', fontWeight: '400' }}>
                                Expert guidance on BOI reporting and beneficial ownership compliance to keep your business protected.
                            </p>
                            <div className="wp-block-buttons" style={{ marginTop: '30px' }}>
                                <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                    background: '#d13239',
                                    borderRadius: '30px',
                                    padding: '15px 40px',
                                    boxShadow: '0 10px 20px rgba(209, 50, 57, 0.2)'
                                }}>
                                    Get BOI Compliance Help
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <div className="floating-icon-stack">
                                <div className="icon-blob"></div>
                                <i className="fa-solid fa-shield-halved main-decorated-icon"></i>
                                <i className="fa-solid fa-building sub-icon sub-icon-1"></i>
                                <i className="fa-solid fa-file-contract sub-icon sub-icon-2"></i>
                                <i className="fa-solid fa-user-check sub-icon sub-icon-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: Understanding BOI Reporting (Overlapping Layout) */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Business Compliance" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
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
                                Understanding <strong>Beneficial Ownership Information (BOI) Reporting</strong>
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    The Corporate Transparency Act requires most U.S. businesses to report information about their beneficial owners to the Financial Crimes Enforcement Network (FinCEN). This federal mandate aims to prevent money laundering, tax fraud, and other illicit activities by increasing transparency in business ownership.
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    At ZN Tax Consultant, we help businesses navigate BOI reporting requirements, ensuring accurate and timely compliance. Our team stays current with evolving regulations to protect your business from penalties and maintain your good standing.
                                </p>
                            </div>
                            <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#d13239', padding: '12px 35px', marginTop: '10px' }}>
                                Schedule a BOI Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: What You Need to Know */}
            <div className="section-padding bg-light" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333', textAlign: 'center' }}>
                        What You Need to Know About <strong>BOI Reporting</strong>
                    </h2>
                    <p style={{ fontSize: '15px', color: '#555', marginBottom: '40px', lineHeight: '1.7', textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                        BOI reporting affects most businesses in the United States. Here's what you need to understand to stay compliant:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            {
                                icon: 'fa-calendar-check',
                                title: 'Filing Deadlines',
                                text: 'Existing companies have until January 1, 2025, to file. New companies must file within 90 days of formation. Updates must be filed within 30 days of any changes.'
                            },
                            {
                                icon: 'fa-users',
                                title: 'Who Must Report',
                                text: 'Most corporations, LLCs, and similar entities must file BOI reports unless they qualify for an exemption. We help determine if your business is required to file.'
                            },
                            {
                                icon: 'fa-file-lines',
                                title: 'Required Information',
                                text: 'Reports must include beneficial owner names, addresses, dates of birth, and identification numbers. We ensure all required information is accurately submitted.'
                            },
                            {
                                icon: 'fa-triangle-exclamation',
                                title: 'Penalties for Non-Compliance',
                                text: 'Failure to file can result in civil penalties up to $500 per day and criminal penalties including fines up to $10,000 and imprisonment up to 2 years.'
                            }
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                <div style={{ fontSize: '40px', color: '#d13239', marginBottom: '15px' }}>
                                    <i className={`fa-solid ${item.icon}`}></i>
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#333' }}>{item.title}</h3>
                                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 3: How We Help */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333', textAlign: 'center' }}>
                        How <strong>ZN Tax Consultant</strong> Helps with BOI Compliance
                    </h2>
                    <p style={{ fontSize: '15px', color: '#555', marginBottom: '40px', lineHeight: '1.7', textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                        Navigating BOI reporting requirements can be complex. Our team provides comprehensive support to ensure your business remains compliant:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
                        <div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Determine if your business must file BOI reports',
                                    'Identify all beneficial owners and required information',
                                    'Prepare and submit accurate BOI reports to FinCEN',
                                    'Monitor deadlines and filing requirements',
                                    'File updates when ownership changes occur',
                                    'Maintain compliance with evolving regulations'
                                ].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative', fontSize: '15px', color: '#444' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#d13239', fontWeight: 'bold', fontSize: '18px' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop" alt="Compliance Support" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>

                    <div style={{ borderLeft: '6px solid #d13239', background: '#f9f9f9', padding: '40px', marginTop: '50px' }}>
                        <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.7', marginBottom: '20px', fontWeight: '600' }}>
                            Don't risk penalties for non-compliance. Let ZN Tax Consultant handle your BOI reporting requirements.
                        </p>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#d13239', padding: '15px 40px' }}>
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </div>

            {/* SECTION 4: Related Services (Blue Parallax) */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', padding: '80px 0' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', filter: 'grayscale(1)' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#0f4b6eff', opacity: 0.9, zIndex: 1 }}></span>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '300', marginBottom: '15px', color: '#fff' }}>
                        BOI Reporting and <strong>Much More</strong>
                    </h2>
                    <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '50px', opacity: 0.9 }}>
                        At ZN Tax Consultant, we offer comprehensive business services to support your success:
                    </p>

                    <div className="service-grid-v2 center-last-item" style={{ marginTop: '40px', marginBottom: '20px' }}>
                        {[
                            { title: 'Bookkeeping', icon: 'fa-book-bookmark', link: '/bookkeeping' },
                            { title: 'Tax Preparation & Planning', icon: 'fa-file-invoice-dollar', link: '/tax' },
                            { title: 'Business Valuations', icon: 'fa-chart-pie', link: '/valuations' },
                            { title: 'Business Consulting', icon: 'fa-users-gear', link: '/consulting' },
                            { title: 'Acquisitions & Startups', icon: 'fa-handshake', link: '/acquisitions' },
                            { title: 'QuickBooks® Services', icon: 'fa-laptop-code', link: '/quickbooks' }
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
                        Find the services you need, provided by people who want to see your business succeed.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ background: '#d13239' }}>
                            Find An Accountant
                        </Link>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#d13239' }}>
                            Find A Bookkeeper
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="section-padding" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '30px', fontWeight: '300', marginBottom: '40px', textAlign: 'center' }}>
                            <strong>Frequently Asked Questions</strong> About BOI Reporting
                        </h2>
                        <FAQ items={faqItems} />
                    </div>

                    <div className="text-center" style={{ marginTop: '50px' }}>
                        <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', maxWidth: '850px', margin: '0 auto 40px auto' }}>
                            Have more questions about BOI reporting or beneficial ownership compliance? Our team is here to help you navigate these requirements and protect your business.
                        </p>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#d13239', padding: '15px 50px' }}>
                            Contact ZN Tax Consultant
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessOwnership;
