import React from 'react';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';

// Import images
import bookkeepingImg from '../assets/images/Gift-CPA-Commercial-Shoot-174-edited.jpg';
import fractionalImg from '../assets/images/Gift-CPA-Commercial-Shoot-375-edited-scaled.jpg';
import whatWillImg from '../assets/images/AdobeStock_306647077.jpg';

const Bookkeeping = () => {
    const faqItems = [
        {
            question: "What is a Fractional Bookkeeper?",
            answer: "A fractional bookkeeper will provide bookkeeping services to your small business or nonprofit on a part-time basis, saving you from having to hire a full-time bookkeeper. This is a cost-effective method used by many businesses."
        },
        {
            question: "Why Should a Small Business Outsource Bookkeeping?",
            answer: "When you spend your precious time plugging away at tasks that could be handled by someone else, you lose time that could be spent doing what you love and are an expert at. For small business owners who feel like they are wasting time attempting to handle their own bookkeeping, an outsourced bookkeeper may be the right option."
        },
        {
            question: "What Services Does a Fractional Bookkeeper Perform?",
            answer: "Fractional bookkeepers offer a range of services, including but not limited to recording financial transactions, managing accounts payable and accounts receivable, reconciling bank statements, preparing financial statements, generating reports for tax purposes, and providing financial analysis."
        },
        {
            question: "What Qualifications Should I Look for in a Bookkeeper?",
            answer: "Ideally, you’ll want to hire a fractional bookkeeper who has relevant education and certifications, as well as practical experience working with businesses similar to yours. Look for candidates with a track record of reliability, accuracy, and attention to detail—and consider asking for references or examples of their work."
        }
    ];

    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="contact-hero alignfull">
                <div
                    className="wp-block-cover__image-background has-parallax"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.3
                    }}
                ></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '48px', color: '#000', fontWeight: '400' }}><strong style={{ color: 'black' }}>Outsourced Bookkeeping Services</strong> in Central Pennsylvania</h1>
                    <p style={{ fontSize: '22px', color: '#222', fontWeight: '400', marginBottom: '30px' }}>With Outsourced Bookkeeping Services, You’ll Have More Time to Focus on What Matters</p>
                    <div className="wp-block-buttons">
                        <div className="wp-block-button">
                            <a className="wp-block-button__link wp-element-button" href="/contact">Contact ZN Tax Consultant</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: What Will a Bookkeeper Do? */}
            <div className="section-padding bg-white" style={{ position: 'relative', overflow: 'hidden', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src={whatWillImg} alt="What will a bookkeeper do" style={{ width: '90%', borderRadius: '4px', display: 'block' }} />
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
                                What Will <strong>a Bookkeeper</strong> Do for <br />Your Small Business?
                            </h2>
                            <div style={{ color: '#555', fontSize: '15px', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '15px' }}>Are your books suffering because your staff is too busy attending to your customers, expanding your operations, or making sure that your business is fulfilling its purpose? There's nothing wrong with that. In fact, for many small businesses, the ledger is the last item to get attention when things get busy.</p>
                                <p style={{ marginBottom: '15px' }}>What separates average from great is recognizing the need for help.</p>
                                <p style={{ marginBottom: '30px' }}>
                                    Perhaps it's time to <a href="/find-accountant" style={{ color: '#d13239', textDecoration: 'underline', fontWeight: '600' }}>hire a fractional bookkeeper</a> to help you get back on track, ready for tax season, informed about your finances, and in compliance. ZN Tax Consultant can help.
                                </p>
                            </div>
                            <div>
                                <a className="wp-block-button__link wp-element-button" href="/find-accountant" style={{
                                    background: '#d13239',
                                    color: '#fff',
                                    padding: '12px 35px',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    display: 'inline-block'
                                }}>
                                    Find A Bookkeeper
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: What is a Fractional Bookkeeper? */}
            <div className="section-padding bg-light" style={{ backgroundColor: '#eeeeee ' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'start' }}>
                        {/* Left Column */}
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '300', marginBottom: '40px', lineHeight: '1.2' }}>
                                What is a <br /><strong>Fractional Bookkeeper?</strong>
                            </h2>
                            <div style={{ fontSize: '12px', lineHeight: '1.7', color: '#333' }}>
                                <p style={{ marginBottom: '25px' }}>A fractional bookkeeper is a professional who provides bookkeeping services to businesses on a part-time basis. Instead of being a full-time employee of a single company, they typically work with multiple clients, allocating a portion of their time to each client's accounting needs.</p>
                                <p style={{ marginBottom: '25px' }}>Businesses, particularly SMEs, opt for fractional bookkeeping services to save costs. These services can represent significant savings compared to having a full-time, in-house bookkeeper. These outsourced bookkeepers offer expertise in various accounting software, handle day-to-day financial transactions, reconcile accounts, prepare financial statements, and provide insights into the business's financial health.</p>
                                <p>Fractional bookkeeping arrangements allow businesses to access professional services without the commitment and expense of hiring a full-time employee. This flexible solution can adapt to the business's changing needs, scaling up or down as needed.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            <p style={{ fontSize: '12px', lineHeight: '1.7', color: '#333', marginBottom: '10px' }}>
                                A fractional bookkeeper, also known as an outsourced, contract, remote, on-demand, offsite, or external bookkeeper, gives you the flexibility of having a bookkeeping professional at your service without having to search for, hire, and add a new member to your staff.
                            </p>
                            <img src={fractionalImg} alt="Fractional Bookkeeper" style={{ width: '100%', height: 'auto', borderRadius: '4px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }} />
                        </div>
                    </div>

                    {/* Notice Box */}
                    <div style={{
                        marginTop: '60px',
                        background: '#f1f1f1',
                        padding: '40px 50px',
                        borderLeft: '5px solid #d13239',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <p style={{ margin: 0, fontSize: '18px', fontWeight: '500', color: '#1a1a1a' }}>
                            Are you ready to see what a fractional bookkeeper could do for your business? A member of the ZN Tax Consultant team is ready to discuss it with you.
                        </p>
                        <div>
                            <a className="wp-block-button__link wp-element-button" href="/contact" style={{
                                background: '#d13239',
                                color: '#fff',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                display: 'inline-block'
                            }}>
                                Contact ZN Tax Consultant
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: Service Plans & Difference */}
            <div className="section-padding bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '60px', alignItems: 'start' }}>
                        {/* Left Column: Plans */}
                        <div>
                            <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '25px', lineHeight: '1.2', color: '#333' }}>
                                Get Affordability & Predictability with <br />
                                <strong>Monthly Bookkeeping Service Plans</strong>
                            </h2>
                            <div style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>
                                <p style={{ marginBottom: '20px' }}>As a small business owner, you know that unexpected costs can be the enemy of your budget. You also know that having your books in disarray is a situation that won’t end well.</p>
                                <p style={{ marginBottom: '20px' }}>You can solve both of these problems by paying one flat fee every month to have a professional bookkeeper at your service, performing the tasks you elect. These tasks may include:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', columns: 1, gap: '20px' }}>
                                    {['Recording Transactions', 'Accounts Receivable', 'Accounts Payable', 'Bank Reconciliation', 'Expense Tracking', 'Financial Reporting', 'Payroll Processing', 'Tax Preparation Support', 'Financial Analysis', 'Budgeting & Forecasting', 'Compliance', 'Advisory Services'].map((task, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#d13239' }}>•</span> {task}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontWeight: '500' }}>
                                    <a href="/contact" style={{ color: '#d13239', textDecoration: 'underline' }}>Get in touch with ZN Tax Consultant</a> today to see if our bookkeeping services for small businesses can help you take your company from great to outstanding!
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Difference Card */}
                        <div style={{
                            background: '#fff',
                            padding: '20px 40px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                            borderRadius: '4px',
                            borderTop: '1px solid #eee'

                        }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Experience the ZN Tax Consultant <strong>Difference</strong>
                            </h3>
                            <p style={{ fontSize: '12px', color: '#666', marginBottom: '25px', lineHeight: '1.5' }}>
                                When you have a bookkeeping service designed specifically for small businesses (and even more specifically, for your business), your chances of success multiply. That's partially because your books will be accurate—but there's so much more.
                            </p>
                            <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '20px' }}>
                                When you <span style={{ color: '#d13239', textDecoration: 'underline' }}>partner with ZN Tax Consultant</span> for all your bookkeeping services, you'll get all these benefits:
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', fontSize: '12px' }}>
                                {[
                                    'A dedicated bookkeeper who knows your business',
                                    'Fixed monthly service plans for predictable, manageable expenses',
                                    'Tailored guidance and advice for addressing day-to-day business challenges',
                                    'Active search for progressive systems to increase efficiency and service to you',
                                    'Attention to your current stage of business, as well as your goals for the future',
                                    'Proactive bookkeeping management for greater visibility and superior planning',
                                    'The ability to anticipate financial needs before they\'re staring you in the face',
                                    'Controlled costs, thanks to not having to hire a full-time bookkeeper',
                                    'More time to focus on running and growing your business',
                                    'Compliance, which prevents costly fines, penalties, and legal trouble',
                                    'Smooth filing at tax time, with the possibility of reduced tax liabilities'
                                ].map((benefit, i) => (
                                    <li key={i} style={{ marginBottom: '10px', fontSize: '12px', color: '#444', display: 'flex', alignItems: 'start', gap: '10px' }}>
                                        <span style={{ color: '#d13239', fontWeight: 'bold' }}>✓</span> {benefit}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ background: '#fcfcfc', borderLeft: '4px solid #d13239', padding: '20px', marginBottom: '25px' }}>
                                <p style={{ fontSize: '12px', margin: 0, color: '#444', lineHeight: '1.5' }}>
                                    Isn't it time to have confidence in the accuracy of your financial records while saving time, money, and maybe even tax dollars? Today is the day to contact ZN Tax Consultant to discuss how a fractional bookkeeper can help you.
                                </p>
                            </div>
                            <a className="wp-block-button__link wp-element-button" href="/contact" style={{
                                background: '#d13239',
                                color: '#fff',
                                padding: '12px 35px',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                display: 'inline-block'
                            }}>
                                Contact ZN Tax Consultant
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: Bookkeeping Services are Just the Beginning */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', padding: '80px 0' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', filter: 'grayscale(1)' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#0f4b6eff', opacity: 0.9, zIndex: 1 }}></span>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '300', marginBottom: '20px' }}>
                        <strong>Bookkeeping Services</strong> are Just the Beginning at ZN Tax Consultant
                    </h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px', fontSize: '16px', opacity: 0.9 }}>
                        You know that we offer comprehensive, customizable bookkeeping services for small businesses. But did you also know that we offer a variety of accounting services as well?
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', marginBottom: '40px' }}>
                        {[
                            { title: 'Tax Preparation & Planning', icon: 'fa-file-invoice-dollar' },
                            { title: 'Acquisitions & Startup Support', icon: 'fa-handshake' },
                            { title: 'Business & Financial Consulting', icon: 'fa-users-gear' },
                            { title: 'Business Valuations', icon: 'fa-chart-line' },
                            { title: 'QuickBooks Services', icon: 'fa-calculator' }
                        ].map((s, i) => (
                            <div key={i} style={{ background: '#fff', padding: '30px 20px', borderRadius: '4px', textAlign: 'center', color: '#333' }}>
                                <div style={{ fontSize: '40px', color: '#d13239', marginBottom: '20px' }}>
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#d13239', textDecoration: 'underline', cursor: 'pointer' }}>{s.title}</h4>
                            </div>
                        ))}
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '15px', marginBottom: '30px' }}>
                        Find the services you need, provided by people who want to see your business succeed. The ZN Tax Consultant team is waiting to hear from you.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a className="wp-block-button__link" href="/contact" style={{ padding: '12px 35px', background: '#d13239', borderRadius: '50px', fontWeight: 'bold' }}>Find An Accountant</a>
                        <a className="wp-block-button__link" href="/about" style={{ padding: '12px 35px', background: '#d13239', borderRadius: '50px', fontWeight: 'bold' }}>See All Staff</a>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="section-padding bg-light" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '20px', color: '#333' }}>
                            <strong>Frequently Asked Questions</strong> About Bookkeeping Services for Small Businesses
                        </h2>
                        <p style={{ color: '#777', marginBottom: '40px', fontSize: '15px' }}>
                            If you’re thinking about hiring a bookkeeper, you’re bound to have questions. We’re answering some of the most commonly asked ones here, and you’re encouraged to <a href="/contact" style={{ color: '#d13239', textDecoration: 'underline' }}>contact us</a> for answers to your specific questions.
                        </p>
                        <FAQ items={faqItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookkeeping;
