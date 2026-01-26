import React from 'react';
import FAQ from '../components/FAQ';

// Import images
import taxPlanningImg from '../assets/images/Gift-CPA-Commercial-Shoot-174-1-edited.jpg';
import whiteBg from '../assets/images/white-bg.jpg';
import blueBg from '../assets/images/blue-bg.jpg';
import service01Img from '../assets/images/services01.png';
import service03Img from '../assets/images/services03.png';
import service04Img from '../assets/images/services04.png';
import service05Img from '../assets/images/services05.png';
import service06Img from '../assets/images/services06.png';

const TaxPreparation = () => {
    const faqItems = [
        {
            question: "Will Hiring a CPA Save My Business Money?",
            answer: "Yes, a CPA can help identify deductions and credits that may otherwise go unnoticed, potentially lowering your tax burden. Additionally, working with a CPA saves time and eliminates the stress of tax preparation, allowing you to focus on running your business."
        },
        {
            question: "What is Tax Planning?",
            answer: "Tax planning is the process of analyzing your financial situation throughout the year to ensure all elements work together to minimize your tax liability. Businesses can take advantage of tax-saving opportunities and avoid costly surprises by making informed decisions ahead of time."
        },
        {
            question: "Why is Tax Preparation Important?",
            answer: "Accurate tax planning and preparation ensures your returns are filed correctly and on time while maximizing the tax breaks available to you. Through business tax services, a tax professional helps you remain compliant with tax laws while optimizing your financial position."
        }
    ];

    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light careers-hero" style={{
                minHeight: '350px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '60px',
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
                        <strong>Tax Preparation & Planning Service</strong> in Central Pennsylvania
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '850px', margin: '25px 0', lineHeight: '1.5', fontWeight: '400' }}>
                        Ensure Your Business Stays Compliant and Maximizes Savings With Professional Business Tax Services.
                    </p>
                    <div className="wp-block-buttons" style={{ marginTop: '30px' }}>
                        <div className="wp-block-button">
                            <a className="wp-block-button__link wp-element-button" href="/contact" style={{
                                background: '#d13239',
                                color: '#fff',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }}>
                                Contact ZN Tax Consultant
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: Eliminate Surprises (Overlapping Layout) */}
            <div className="section-padding bg-white" style={{ position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src={taxPlanningImg} alt="Tax Planning" style={{ width: '90%', borderRadius: '4px', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>

                        {/* Overlapping Text Card */}
                        <div className="cta" style={{
                            flex: '60%',
                            padding: '60px 80px',
                            background: '#fff',
                            boxShadow: '0 40px 40px rgba(0,0,0,0.1)',
                            zIndex: 1,
                            marginLeft: '-10%',
                            borderRadius: '4px'
                        }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Eliminate Tax-Time Surprises <strong>with ZN Tax Consultant</strong>
                            </h2>
                            <div style={{ color: '#555', fontSize: '15px', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '15px' }}>Do you often find yourself uncertain about your tax obligations? With year-round small business tax planning and business tax preparation services from ZN Tax Consultant, tax liabilities are managed, obligations reduced, and deductions maximized.</p>
                                <p>Stay ahead of changing federal, state, and local regulations without the stress of last-minute surprises. effective business tax planning services go beyond filing returns on time—they involve proactive strategies that optimize your financial position year-round.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: What to Expect & More About Tax Planning */}
            <div className="section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '60px', alignItems: 'start' }}>
                        {/* Left Column: Expectation Card */}
                        <div style={{
                            background: '#fff',
                            padding: '50px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                            borderRadius: '4px'
                        }}>
                            <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                <strong>What to Expect</strong> from Our Tax Preparation Services
                            </h2>
                            <p style={{ fontSize: '14px', color: '#666', marginBottom: '25px' }}>
                                When you choose ZN Tax Consultant for your business tax preparation services, you can rely on thorough, accurate, and timely filings. Our comprehensive approach includes:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', columns: 1 }}>
                                {[
                                    'Gather Financial Information',
                                    'Organize Data',
                                    'Prepare Federal, State, and Local Tax Forms',
                                    'Maximize Tax Deductions and Credits',
                                    'Estimate Tax Payments',
                                    'File Electronically',
                                    'Assist You in Corresponding with Tax Agencies',
                                    'Support You in the Event of an Audit',
                                    'Offer Year-Round Support',
                                    'Advise on Appropriate Record-Keeping',
                                    'Review Past Returns',
                                    'Provide Tax Planning Services'
                                ].map((benefit, i) => (
                                    <li key={i} style={{ marginBottom: '12px', fontSize: '13px', color: '#444', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span> {benefit}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                                <p style={{ marginBottom: '15px' }}>With a proactive and detail-oriented approach, our team ensures that your business remains financially secure and prepared for tax season. By leveraging expert strategies and industry insights, we help you make informed financial decisions that align with your long-term goals.</p>
                                <p>Trust ZN Tax Consultant to handle your taxes with precision, so you can focus on running and growing your business.</p>
                            </div>
                        </div>

                        {/* Right Column: More About Planning */}
                        <div>
                            <h2 style={{ fontSize: '30px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                <strong>More About</strong> Tax Planning Services
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                                Business tax planning is an essential part of managing a successful company. Instead of simply reacting to tax obligations at the end of the year, strategic tax planning ensures that your business is making smart financial decisions throughout the year.
                            </p>
                            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
                                You deserve to work with someone who will proactively approach business tax planning services. We have experience helping businesses of all sizes find legal and effective ways to reduce their tax burden, not just file their tax returns. Our tax planning strategies focus on maximizing deductions, identifying available credits, and structuring transactions to align with your long-term financial goals.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        'Entity Structure Evaluation',
                                        'Tax Credits & Incentives',
                                        'Deductions Maximization',
                                        'Capital Expenditure Planning',
                                        'Year-End Planning',
                                        'Strategic Income Deferral',
                                        'Tax Treaty Planning',
                                        'Succession Planning'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '10px', fontSize: '13px', color: '#444', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <span style={{ color: '#d13239' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        'State & Local Tax Planning',
                                        'Quarterly Reviews',
                                        'Employee Benefits Planning',
                                        'International Tax Planning',
                                        'IRS Compliance Reviews',
                                        'Transaction Structuring',
                                        'Tax Reform Impact Analysis'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '10px', fontSize: '13px', color: '#444', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <span style={{ color: '#d13239' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ background: '#fcfcfc', borderLeft: '4px solid #d13239', padding: '20px', fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                                <p>Tax planning services help businesses like yours maximize their tax efficiency while remaining compliant with tax laws. When we help you implement the appropriate strategies, you can potentially reduce your tax burden, improve cash flow, and increase your bottom line.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: Why Choose Us */}
            <div className="section-padding bg-white" style={{
                position: 'relative',
                backgroundImage: `url(${whiteBg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div
                    className="wp-block-cover__background"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1
                    }}
                ></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px' }}>
                            Why Choose <strong>ZN Tax Consultant</strong> for Your Business Tax Services?
                        </h2>
                        <p className="text-center" style={{ fontSize: '16px', color: '#555', marginBottom: '50px', lineHeight: '1.6' }}>
                            When selecting a tax planning advisor, it’s important to work with a team that prioritizes your business’s financial success. ZN Tax Consultant stands out from the competition by offering personalized service, expert guidance, and a commitment to maximizing your tax benefits. Here’s why businesses trust us:
                        </p>
                        <div style={{ display: 'grid', gap: '30px' }}>
                            {[
                                { title: 'Decades of Experience', text: 'With years of expertise in business tax services, we have a deep understanding of industry-specific tax challenges and opportunities.' },
                                { title: 'Customized Tax Strategies', text: 'No two businesses are alike, which is why we tailor our business tax planning services to fit your company’s unique needs and goals.' },
                                { title: 'Proactive Tax Planning', text: 'We don’t just focus on tax season—we work with you year-round to implement strategies that reduce liabilities and improve cash flow.' },
                                { title: 'Regulatory Expertise', text: 'Our team stays up to date on changing tax laws at the federal, state, and local levels, ensuring compliance and minimizing risk.' },
                                { title: 'Dedicated Client Support', text: 'We take pride in building lasting relationships with our clients, offering responsive support and clear communication every step of the way.' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.7)', padding: '25px', borderRadius: '4px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
                                    <div style={{ color: '#d13239', fontSize: '24px', fontWeight: 'bold' }}>{i + 1}</div>
                                    <div>
                                        <h4 style={{ color: '#333', marginBottom: '10px', fontWeight: '600', fontSize: '18px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center" style={{ marginTop: '50px', fontSize: '16px', color: '#333', fontStyle: 'italic' }}>
                            Choosing ZN Tax Consultant means partnering with a team that is invested in your success, helping you navigate tax complexities with confidence and efficiency.
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 4: Much More (Blue Parallax) */}
            <div className="section-padding" style={{
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(27, 87, 121, 0.9), rgba(27, 87, 121, 0.9)), url(${blueBg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '15px', color: '#fff' }}>
                        Tax Preparation Services, Tax Planning Services—<strong>and Much More</strong>
                    </h2>
                    <p style={{ fontSize: '14px', marginBottom: '50px', opacity: 0.9 }}>
                        At ZN Tax Consultant, we also offer these services to our clients:
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '20px',
                        marginBottom: '40px'
                    }}>
                        {[
                            { title: 'Bookkeeping', img: service01Img, link: '/bookkeeping' },
                            { title: 'Acquisitions & Startup Support', img: service03Img, link: '/acquisitions' },
                            { title: 'Business Valuations', img: service05Img, link: '/valuations' },
                            { title: 'Business & Financial Consulting', img: service04Img, link: '/consulting' },
                            { title: 'QuickBooks® Services', img: service06Img, link: '/quickbooks' }
                        ].map((service, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '40px 20px',
                                borderRadius: '4px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                minHeight: '280px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}>
                                <div style={{ height: '80px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <img src={service.img} alt={service.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <a href={service.link} style={{
                                    color: '#d13239',
                                    fontWeight: '700',
                                    fontSize: '15px',
                                    textDecoration: 'underline',
                                    lineHeight: '1.3'
                                }}>
                                    {service.title}
                                </a>
                            </div>
                        ))}
                    </div>

                    <p style={{ fontSize: '14px', marginBottom: '30px', opacity: 0.9, maxWidth: '800px', margin: '0 auto 30px auto' }}>
                        Find the services you need, provided by people who want to see your business succeed. <span style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline' }}>The ZN Tax Consultant team</span> is waiting to hear from you.
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

            {/* SECTION 5: Exhausted / Get in Touch */}
            <div className="section-padding bg-white">
                <div className="container text-center">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                        If Just Thinking About Taxes has You Exhausted, <strong>Get in Touch with ZN Tax Consultant</strong>
                    </h2>
                    <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', maxWidth: '900px', margin: '0 auto 40px auto' }}>
                        <p style={{ marginBottom: '15px' }}>
                            We can relieve tax time pressure and help you <a href="/consulting" style={{ color: '#d13239', textDecoration: 'underline' }}>develop a strategic approach</a> to handling your tax obligations. Make an appointment at one of our four locations in <a href="/harrisburg" style={{ color: '#d13239', textDecoration: 'underline' }}>Harrisburg</a>, <a href="/mechanicsburg" style={{ color: '#d13239', textDecoration: 'underline' }}>Mechanicsburg</a>, <a href="/myerstown" style={{ color: '#d13239', textDecoration: 'underline' }}>Myerstown</a>, or <a href="/lancaster" style={{ color: '#d13239', textDecoration: 'underline' }}>Lancaster</a>, PA.
                        </p>
                    </div>
                    <a className="wp-block-button__link wp-element-button" href="/contact" style={{ background: '#d13239', padding: '15px 50px' }}>
                        Contact ZN Tax Consultant
                    </a>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="section-padding" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '30px', fontWeight: '300', marginBottom: '40px' }}>
                            <strong>Frequently Asked Questions</strong> About Tax Preparation & Planning
                        </h2>
                        <FAQ items={faqItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaxPreparation;
