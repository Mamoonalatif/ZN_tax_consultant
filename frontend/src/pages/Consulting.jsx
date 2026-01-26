import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';
import officeImg from '../assets/images/Gift-CPA-Commercial-Shoot-174-edited.jpg';
import workingImg from '../assets/images/Gift-CPA-Commercial-Shoot-174-1-edited.jpg';

const Consulting = () => {
    const faqItems = [
        {
            question: "Why Should I Hire a Consultant to Grow My Business?",
            answer: "Business consultants provide an objective, expert perspective on your operations. We help you identify hidden inefficiencies, stress-test your growth plans, and provide the financial clarity required to make high-stakes decisions with confidence."
        },
        {
            question: "How Can Small Business Consulting Help My Business?",
            answer: "Our consulting helps you move from reactive to proactive management. We assist with cash flow analysis, tax minimization strategies, and long-term goal setting, ensuring that your financial foundation is strong enough to support your ambitions."
        },
        {
            question: "When Should I Hire a Small Business Financial Consultant?",
            answer: "The best time is before you hit a plateau or a crisis. Whether you are planning a startup, preparing for an acquisition, or navigating a period of rapid growth, a consultant provides the roadmap to ensure your expansion is sustainable."
        }
    ];

    return (
        <div className="service-page">
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
                        Small Business <strong>Consulting</strong> in Central Pennsylvania
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '900px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                        With ZN Tax Consultant on Your Side, You Can Set Your SME or Nonprofit Up for Success
                    </p>
                    <div style={{ fontSize: '15.5px', color: '#555', maxWidth: '900px', lineHeight: '1.7', marginBottom: '30px' }}>
                        <p style={{ marginBottom: '15px' }}>
                            You know how your business works right now, but do you know what it will look like in 5 years? We can't tell you what it will look like, but getting there can be a path full of financial roadblocks, frustrations, and stress. You need a small business consultant who can help you get there without the struggles and frustration entrepreneurs and owners often go through.
                        </p>
                        <p>
                            Whether starting a business or trying to grow beyond your current limits, a small and mid-sized business (SME) consultant can give you a new perspective and the benefit of broader business experiences - call us at one of our PA branches to get the winning consultation services you need!
                        </p>
                    </div>
                    <div className="wp-block-buttons">
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#d13239' }}>
                            Consult With ZN Tax Consultant
                        </Link>
                    </div>
                </div>
                {/* Decorative background element mirroring the site's design language */}
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

            {/* SECTION 1: Take Your Small Business to the Next Level */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src={officeImg} alt="ZN Tax Consultant Office" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        {/* Floating Text Card */}
                        <div style={{
                            flex: '65%',
                            background: '#fff',
                            padding: '60px 60px 60px 115px',
                            marginLeft: '-10%',
                            zIndex: 1,
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                            borderRadius: '4px'
                        }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Take Your Small Business <strong>to the Next Level?</strong>
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    When the opportunity presents itself to grow your business, you might be frozen by indecision - how do you grow your business without creating waste or making costly mistakes? What if you grow too fast and suffer from success? What if you grow too slow and miss an opportunity?
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    These questions can leave you spinning in circles, but with small business financial consultants, you can have the answers you need - even before you ask. Our business financial consultants can assess your business with an honest and experienced eye. Then, you'll get advice based on three decades of experience CPA financial consulting with clients throughout Pennsylvania.
                                </p>
                                <p style={{ fontWeight: '500' }}>
                                    Lead your business more confidently after <Link to="/contact" style={{ color: '#d13239', textDecoration: 'underline' }}>contacting our team</Link> and scheduling a no-cost consultation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: Get These Services */}
            <div className="section-padding bg-light" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '60px', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Get These Services with <strong>Small Business Financial Consulting</strong>
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', marginBottom: '25px', lineHeight: '1.7' }}>
                                Business strategy consulting can improve your business by leaps and bounds if you are a small business or nonprofit in <Link to="/mechanicsburg" style={{ color: '#d13239', textDecoration: 'underline' }}>Mechanicsburg</Link>, <Link to="/myerstown" style={{ color: '#d13239', textDecoration: 'underline' }}>Myerstown</Link>, <Link to="/harrisburg" style={{ color: '#d13239', textDecoration: 'underline' }}>Harrisburg</Link>, and <Link to="/lancaster" style={{ color: '#d13239', textDecoration: 'underline' }}>Lancaster</Link>. You can expect a partnership with ZN Tax Consultant to:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                                {[
                                    'Provide Cash-Flow Analysis',
                                    'Guide Daily Financial Operations',
                                    'Create Long-Term Business Goals and Monitor Progress',
                                    'Strategize Ways to Minimize Tax Obligations',
                                    'Assist with Executive-Level Business Decisions',
                                    'Explain PA Sales Tax & Use Tax',
                                    'Evaluate Succession Planning Options',
                                    'Help to Develop an Exit Strategy'
                                ].map((service, i) => (
                                    <li key={i} style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative', fontSize: '15.5px', color: '#444' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#d13239', fontWeight: 'bold' }}>✓</span> {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src={workingImg} alt="Working on financial strategy" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>

                    {/* Red Box Statement - Moved to Full Width */}
                    <div style={{ borderLeft: '6px solid #d13239', background: '#fff', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginTop: '40px' }}>
                        <p style={{ fontSize: '15.5px', color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                            Your success is not a one-time achievement; it is constantly changing and moving ahead. A successful business is built by constantly re-assessing and redefining your goals. Our team is committed to helping you reach your goals again and again. Our business financial consultants go beyond developing strategies - we'll develop a relationship that gives a deeper understanding of your business's needs.
                        </p>
                        <p style={{ fontSize: '17px', fontWeight: '700', color: '#333', marginBottom: '25px' }}>
                            It's time to build a better business together!
                        </p>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#d13239', padding: '15px 40px' }}>
                            Contact ZN Tax Consultant
                        </Link>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: One Service Offered (Blue Parallax) */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', padding: '80px 0' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', filter: 'grayscale(1)' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#0f4b6eff', opacity: 0.9, zIndex: 1 }}></span>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '20px' }}>
                            Small Business Financial Consulting <br /><strong>is Just One Service Offered by ZN Tax Consultant</strong>
                        </h2>
                        <p style={{ fontSize: '15px', color: '#e0e0e0', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.6' }}>
                            Small business financial consulting is a critical part of your success, but it’s only one part. Once you have begun moving towards greater success for your business, you might wonder what else can be improved by small business consulting services. <Link to="/client-hub" style={{ color: '#ff7b7b', textDecoration: 'underline' }}>Our clients</Link> also benefit from these services:
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', marginBottom: '40px' }}>
                        {[
                            { title: 'Bookkeeping', icon: 'fa-book' },
                            { title: 'Acquisitions & Startup Support', icon: 'fa-handshake' },
                            { title: 'Business Valuations', icon: 'fa-chart-pie' },
                            { title: 'Tax Preparation & Planning', icon: 'fa-calculator' },
                            { title: 'QuickBooks® Services', icon: 'fa-arrows-rotate' }
                        ].map((s, idx) => (
                            <div key={idx} style={{ background: '#fff', color: '#333', padding: '30px 20px', borderRadius: '4px', textAlign: 'center' }}>
                                <div style={{ fontSize: '40px', color: '#d13239', marginBottom: '20px' }}>
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#d13239', textDecoration: 'underline', cursor: 'pointer' }}>{s.title}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p style={{ fontSize: '15px', marginBottom: '30px', opacity: 0.9 }}>
                            Find the services you need, provided by people who want to see your business succeed. The ZN Tax Consultant team is waiting to hear from you.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ background: '#d13239', padding: '12px 35px' }}>Find An Accountant</Link>
                            <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#d13239', padding: '12px 35px' }}>Find A Bookkeeper</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: Industries We Serve */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', color: '#333', marginBottom: '25px' }}>
                        Industries <strong>We Serve</strong>
                    </h2>
                    <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                        <p style={{ marginBottom: '15px' }}>
                            At ZN Tax Consultant, we understand that every industry faces unique financial challenges and opportunities. Our business financial consulting services are tailored to meet the specific needs of your organization—no matter the field you're in. By combining industry expertise with personalized attention, we help businesses make informed decisions that drive profitability and long-term success.
                        </p>
                        <p style={{ fontWeight: '700', color: '#333' }}>Industries we proudly serve include:</p>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                        {[
                            { name: 'Construction', link: '/construction', desc: 'Offering specialized Construction Accounting Services that help contractors and builders manage project costs, improve cash flow, and ensure compliance.' },
                            { name: 'Healthcare', link: '/healthcare', desc: 'Providing financial clarity and operational support to healthcare practices and medical professionals with our Healthcare Accounting Services.' },
                            { name: 'Manufacturing', link: '/manufacturing', desc: 'Streamlining accounting processes and helping manufacturers manage inventory, costs, and growth strategies with our Manufacturing Accounting Services.' },
                            { name: 'Real Estate', link: '/real-estate', desc: 'Delivering insights for property management firms, developers, and real estate investors to enhance profitability with our Real Estate Accounting Services.' },
                            { name: 'Law Firms', link: '/law-firms', desc: 'Offering solutions designed to simplify trust accounting, billing, and expense tracking with our Law Firm Accounting Services.' },
                            { name: 'E-commerce', link: '/ecommerce', desc: 'Assisting online retailers in managing revenue recognition, taxes, and growth forecasting with our E-commerce Accounting Services.' },
                            { name: 'Agricultural', link: '/agricultural', desc: 'Supporting farms and agribusinesses with budgeting, forecasting, and financial management for sustainable growth with our Agricultural Accounting Services.' }
                        ].map((industry, i) => (
                            <li key={i} style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative', fontSize: '14.5px', color: '#444' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#333', fontWeight: 'bold' }}>•</span>
                                <strong>{industry.name}</strong> – {industry.desc.split(industry.name + ' Accounting Services')[0]}
                                <Link to={industry.link} style={{ color: '#d13239', textDecoration: 'underline' }}>{industry.name} Accounting Services</Link>
                                {industry.desc.split(industry.name + ' Accounting Services')[1]}
                            </li>
                        ))}
                    </ul>

                    <p style={{ fontSize: '14px', color: '#555', fontStyle: 'italic' }}>
                        Each industry benefits from our deep understanding of its unique accounting and consulting needs, helping clients achieve financial confidence and stability.
                    </p>
                </div>
            </div>

            {/* NEW SECTION: Frequently Asked Questions */}
            <div className="section-padding bg-light" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '15px' }}>
                            Frequently Asked Questions <strong>About Small Business Financial Consulting</strong>
                        </h2>
                        <p style={{ fontSize: '15.5px', color: '#666', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.6' }}>
                            If you've made it this far, you already have questions for us to answer and need them answered now. Here are some of the most common questions we answer daily – if we haven't addressed your question here or you'd like more information, please <Link to="/contact" style={{ color: '#d13239', textDecoration: 'underline' }}>contact our team</Link>.
                        </p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <FAQ items={faqItems} />
                    </div>

                    <div className="text-center" style={{ marginTop: '50px' }}>
                        <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', maxWidth: '850px', margin: '0 auto 40px auto' }}>
                            When you work with the ZN Tax Consultant team, you will always have a team of professional business accounting experts available to answer your most pressing questions. If you want to learn more about our areas of expertise and what you can expect from our small business financial consultants, call us today and start the conversation!
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

export default Consulting;
