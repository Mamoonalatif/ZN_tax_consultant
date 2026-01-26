import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';
import career1Img from '../assets/images/Careers_1.jpg';
import career2Img from '../assets/images/Careers_2.jpg';
import service01Icon from '../assets/images/services01-copy.png';
import service02Icon from '../assets/images/services02-copy.png';
import service03Icon from '../assets/images/services03-copy.png';
import service04Icon from '../assets/images/services04-copy.png';
import service05Icon from '../assets/images/services05-copy.png';
import service06Icon from '../assets/images/services06-copy.png';

const Careers = () => {
    return (
        <div className="careers-page" style={{
            backgroundImage: `url(${whiteBg})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light careers-hero" style={{ minHeight: '200px', display: 'flex', alignItems: 'center', paddingTop: '40px', paddingBottom: '50px' }}>
                <div
                    className="wp-block-cover__image-background"
                    style={{ backgroundColor: 'rgba(141, 138, 138, 0.9)', opacity: '0.3' }}
                ></div>
                <div className="wp-block-cover__inner-container container">
                    <h1 className="wp-block-heading careers-main-title" style={{ fontSize: '48px', color: '#000000ff', fontWeight: '500' }}>Join the ZN Tax Consultant <strong>Team</strong></h1>
                    <p style={{ fontSize: '20px', color: '#555', maxWidth: '800px', margin: '20px 0' }}>Apply Today If You Want to Work for a Company Dedicated to Helping Businesses and Nonprofits Make an Impact</p>
                    <div className="wp-block-buttons" style={{ marginTop: '20px' }}>
                        <div className="wp-block-button">
                            <a className="wp-block-button__link wp-element-button" href="/careers/openings" style={{ backgroundColor: '#d13239', color: '#fff', borderRadius: '30px', padding: '10px 25px', fontWeight: 'bold' }}>See Job Openings</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Growing Team Section */}
            <div className="wp-block-cover alignfull is-light" style={{ backgroundColor: 'transparent', paddingTop: '40px', paddingBottom: '40px', minHeight: 'auto' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns is-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '100%' }}>
                            <h2 className="wp-block-heading" style={{ fontSize: '28px', fontWeight: '500' }}><strong>Our Team</strong> is Always Growing</h2>
                            <p className="careers-intro-text" style={{ lineHeight: '1.5', fontSize: '13px' }}>Are you looking to build a career with an accounting job that gives you a chance to grow? Or are you an experienced CPA looking to move into a comfortable bookkeeper job? We want to provide you with a position that meets your needs and builds our team to be the best it can be.</p>
                            <p className="careers-intro-text" style={{ lineHeight: '1.5', fontSize: '13px' }}>Our team is full of lifelong learners, passionate workers, and good people. When you join us, we will welcome you with open arms and give you every opportunity to grow your career and experience alongside our company. If you are interested in developing a career with us, call today!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* What to Expect Section (Overlapping) */}
            <div className="wp-block-cover alignfull is-light section-padding" style={{ backgroundColor: 'white', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '40%' }}>
                            <figure className="wp-block-image size-full negative-right-margin" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                <img src={career1Img} alt="ZN Tax Consultant Team" style={{ borderRadius: '0' }} />
                            </figure>
                        </div>
                        <div className="wp-block-column cta extra-left-padding" style={{
                            flexBasis: '60%',
                            padding: '40px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                            border: '1px solid #eee'
                        }}>
                            <h2 className="wp-block-heading" style={{ fontSize: '28px', fontWeight: '500' }}><strong>What to Expect</strong> When Working at ZN Tax Consultant</h2>
                            <p style={{ fontSize: '13px', lineHeight: '1.6', marginTop: '15px', color: '#444' }}>Are you excited to build a career with a team-oriented business? Hoping to build a name for yourself based on robust skills and experience? ZN Tax Consultant is a growing firm seeking outstanding accounting professionals interested in a long-term career helping small businesses and nonprofits in the Southcentral PA area.</p>
                            <p style={{ fontSize: '13px', lineHeight: '1.6', marginTop: '15px', color: '#444' }}>When you join us, you will find your teammates are honest, motivated, and dedicated to providing the highest level of service and integrity to each of their clients. You will discover a company culture that is team-oriented and works together to foster an environment that is both rewarding and respectful.</p>
                            <p style={{ fontSize: '13px', lineHeight: '1.6', marginTop: '15px', color: '#444' }}>By working for an established firm committed to growth, your time at ZN Tax Consultant will prove to be remarkably valuable. Our team members thrive in an environment we’ve created and that aligns with our core values of Honesty, Humility, and Dependability.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits & Locations Section */}
            <div className="wp-block-cover alignfull is-light" style={{ backgroundColor: '#eeeeee', padding: '60px 0' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '75%' }}>
                            <div style={{ backgroundColor: '#fff', padding: '10px 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '2px' }}>
                                <h2 className="wp-block-heading" style={{ fontSize: '26px', marginBottom: '15px', fontWeight: '500' }}>You’ll <strong>Enjoy These Benefits</strong> When You Work for Us</h2>
                                <p style={{ marginBottom: '15px', color: 'black', fontSize: '12px' }}>We think our employees deserve the best, and that’s why we all have these benefits:</p>
                                <ul className="wp-block-list checkmark benefits-list" style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        'Medical, Dental, & Vision Insurance (eligible after 60 days of employment)',
                                        'Group Life Insurance ($20K, eligible after 90 days of employment)',
                                        'Company 401K Plan with 6% match (eligible after 6 months of employment)',
                                        'Volunteer PTO (16 hours)',
                                        'Half-day Fridays over the summer',
                                        'Flexible Hours',
                                        'Hybrid Work-From-Home Schedule',
                                        'Retail Club Membership (Costco, Sam\'s, BJ\'s – 1st level)',
                                        'Company-Paid Professional Dues & Continuing Education',
                                        'Competitive Salary',
                                        'Fun Culture'
                                    ].map((benefit, idx) => (
                                        <li key={idx} style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start', color: '#333', fontSize: '12px', lineHeight: '1.4' }}>
                                            <i className="fa-solid fa-check" style={{ color: '#28a745', marginRight: '8px', marginTop: '3px', fontSize: '10px' }}></i>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ marginTop: '20px', fontSize: '11px', color: '#666' }}>For more information about the benefits offered by ZN Tax Consultant, <a href="/contact" style={{ color: '#d13239', textDecoration: 'underline' }}>contact us</a> and learn more about our currently open bookkeeping and accounting jobs.</p>
                            </div>
                        </div>
                        <div className="wp-block-column" style={{ flexBasis: '48%', paddingLeft: '10px' }}>
                            <h2 className="wp-block-heading" style={{ fontSize: '26px', marginBottom: '12px', fontWeight: '500' }}>Work in One of <strong>Four Locations</strong></h2>
                            <p style={{ color: '#444', marginBottom: '15px', fontSize: '12px', lineHeight: '1.5' }}>Four offices across Southcentral PA means that we can serve more clients in a personal manner and that we can have home offices that are conveniently located for our talented accounting professionals.</p>
                            <p style={{ fontWeight: '500', marginBottom: '8px', fontSize: '12px' }}>You'll find ZN Tax Consultant in the following cities:</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
                                {['Harrisburg', 'Myerstown', 'Lancaster', 'Mechanicsburg'].map(loc => (
                                    <li key={loc} style={{ marginBottom: '5px', fontSize: '12px' }}>
                                        <span style={{ color: '#d13239', marginRight: '8px' }}>•</span>
                                        <a href={`/location/${loc.toLowerCase()}`} style={{ color: '#d13239', textDecoration: 'none' }}>{loc}</a>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '12px', marginBottom: '25px', color: '#444', lineHeight: '1.5' }}>Which office is closest to you? See what open accounting and bookkeeping jobs fit your skillset and apply today.</p>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a className="wp-block-button__link" href="/careers/openings" style={{ backgroundColor: '#d13239', color: '#fff', borderRadius: '30px', padding: '12px 25px', fontWeight: 'bold', fontSize: '12px', border: 'none' }}>View Open Positions</a>
                                <a className="wp-block-button__link" href="/careers/apply" style={{ backgroundColor: '#d13239', color: '#fff', borderRadius: '30px', padding: '12px 25px', fontWeight: 'bold', fontSize: '12px', border: 'none' }}>Apply Today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="wp-block-cover alignfull is-light has-parallax section-padding" style={{ backgroundColor: 'transparent', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '100%' }}>
                            <h2 className="wp-block-heading text-center" style={{ fontSize: '28px', fontWeight: '500' }}>Does This <strong>Sound Like You?</strong></h2>
                            <p className="text-center" style={{ fontSize: '13px', lineHeight: '1.6', maxWidth: '900px', margin: '20px auto' }}>
                                What do you prioritize in life? Do you want to help small businesses? Are you committed to making a difference in people’s lives? Do you want to build lifelong relationships between your coworkers, your clients, and beyond? Our company is full of people just like this, and we have built this family based on our core company values:
                            </p>
                            <div className="values-grid" style={{ marginTop: '40px' }}>
                                <div className="value-item">
                                    <h3 style={{ color: '#d13239', marginBottom: '10px' }}>Honesty</h3>
                                    <p style={{ fontSize: '12px', lineHeight: '1.5' }}>Every accounting job demands full transparency, on top of being a sign of a good person who won’t mince words during difficult conversations with clients and coworkers alike.</p>
                                </div>
                                <div className="value-item">
                                    <h3 style={{ color: '#d13239', marginBottom: '10px' }}>Humility</h3>
                                    <p style={{ fontSize: '12px', lineHeight: '1.5' }}>Taking accountability and working alongside others requires a humble mindset and a sense of perspective that values our clients’ input and our teammates’ advice.</p>
                                </div>
                                <div className="value-item">
                                    <h3 style={{ color: '#d13239', marginBottom: '10px' }}>Dependability</h3>
                                    <p style={{ fontSize: '12px', lineHeight: '1.5' }}>Working consistently day in and day out is one part of dependability, but it also means being responsive, following up, and staying organized – a critical value for a bookkeeper job.</p>
                                </div>
                            </div>
                            <p className="text-center" style={{ marginTop: '40px', fontSize: '13px', lineHeight: '1.6', maxWidth: '900px', margin: '40px auto 0' }}>
                                We lead with our values and aren’t just driven by simple numbers. We think strategically around the reality of what our clients do, building them towards their short- and long-term goals. We hire those who are committed to personal values that align with ours, who want to help small businesses and nonprofits, and who want to build a career in the financial field. If this sounds like the kind of place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Qualifications Section */}
            <div className="wp-block-cover alignfull is-light" style={{ backgroundColor: '#d4d2d2ff', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="wp-block-cover__inner-container container">
                    <h2 className="wp-block-heading" style={{ fontSize: '32px', fontWeight: '500', marginBottom: '20px' }}><strong>Qualifications</strong> <span style={{ color: '#666' }}>We Look For</span></h2>
                    <p style={{
                        fontSize: '13px', color: '#0d0d0dff', marginBottom: '10px'
                    }}>When we seek an accountant or bookkeeper for one of our branches, we have a few major qualifications that we take an interest in:</p>

                    <div className="wp-block-columns" style={{ gap: '60px' }
                    } >
                        {/* Hard Skills */}
                        < div className="wp-block-column" style={{ flexBasis: '50%' }}>
                            <h3 className="wp-block-heading" style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '500' }}>Hard Skills</h3>
                            <ul className="wp-block-list" style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px', fontSize: '12px', lineHeight: '1.6', position: 'relative', paddingLeft: '10px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#000' }}>•</span>
                                    <strong>CPA or EA:</strong> As an accounting firm, most positions demand certifications and authorizations for managing finances and advising on financial decisions.
                                </li>
                                <li style={{ marginBottom: '15px', fontSize: '12px', lineHeight: '1.6', position: 'relative', paddingLeft: '10px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#000' }}>•</span>
                                    <strong>Technology Experience:</strong> Most of our accounts use Thomson products such as UltraTax, and the ability to learn and use new technology is a plus.
                                </li>
                                <li style={{ marginBottom: '15px', fontSize: '12px', lineHeight: '1.6', position: 'relative', paddingLeft: '10px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#000' }}>•</span>
                                    <strong>Experience or Training in Tax Preparation:</strong> Individual, fiduciary, corporate, and partnership income tax returns are a large part of our services, including quarterly and year-end payroll tax returns and tax planning.
                                </li>
                            </ul>
                        </div>

                        {/* Soft Skills */}
                        <div className="wp-block-column" style={{ flexBasis: '50%' }}>
                            <h3 className="wp-block-heading" style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '500' }}>Soft Skills</h3>
                            <ul className="wp-block-list" style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px', fontSize: '12px', lineHeight: '1.6', position: 'relative', paddingLeft: '10px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#000' }}>•</span>
                                    <strong>Strategizing:</strong> Giving small businesses big-picture strategies for success with innovative solutions for growth.
                                </li>
                                <li style={{ marginBottom: '15px', fontSize: '12px', lineHeight: '1.6', position: 'relative', paddingLeft: '10px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#000' }}>•</span>
                                    <strong>Communication Skills:</strong> Effective communication with clients and team members must ensure professionalism and clarity with people of all walks of life.
                                </li>
                                <li style={{ marginBottom: '15px', fontSize: '12px', lineHeight: '1.6', position: 'relative', paddingLeft: '10px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#000' }}>•</span>
                                    <strong>Ability to Learn:</strong> Financial tools are constantly changing for better or worse, and it is essential to keep up with advancements.
                                </li>
                                <li style={{ marginBottom: '15px', fontSize: '12px', lineHeight: '1.6', position: 'relative', paddingLeft: '10px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#000' }}>•</span>
                                    <strong>Self-reliance:</strong> While you will have a team at your back, it's important to be able to juggle multiple engagements and complete projects quickly.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p style={{ marginTop: '20px', fontSize: '13px', color: '#444', fontStyle: 'italic', maxWidth: '1000px' }}>
                        These are a few of the broad qualifications we seek out during the hiring process, but every position will have its own unique demands and requirements, so be sure to check our latest openings often to see if you fit.
                    </p>
                </div>
            </div >

            {/* People Difference Section */}
            < div className="wp-block-cover alignfull is-light has-parallax section-padding" style={{ backgroundColor: 'transparent', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '50%' }}>
                            <figure className="wp-block-image size-full" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', margin: 0 }}>
                                <img src={career2Img} alt="ZN Tax Consultant Team" style={{ borderRadius: '0', width: '100%', height: 'auto', display: 'block' }} />
                                <figcaption className="wp-element-caption text-center" style={{ fontSize: '11px', marginTop: '10px', color: '#666' }}>ZN Tax Consultant Office Olympics</figcaption>
                            </figure>
                        </div>
                        <div className="wp-block-column" style={{ flexBasis: '50%', paddingLeft: '10px' }}>
                            <h2 className="wp-block-heading" style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '400' }}><strong>Our People</strong> Make the Difference</h2>
                            <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'black', marginBottom: '25px' }}>
                                When you work with us, you aren’t just a lone person with a bookkeeping job. We believe in <em>TEAM</em>, and we know that when we all work together to help our clients succeed, we succeed too. Every accounting job requires a high-level perspective that can be difficult to achieve alone. We think our team is our most important asset, and that respect is evident in every interaction.
                            </p>
                            <div className="wp-block-buttons">
                                <div className="wp-block-button">
                                    <a className="wp-block-button__link wp-element-button" href="/our-people" style={{ backgroundColor: '#d13239', color: '#fff', borderRadius: '30px', padding: '12px 30px', fontWeight: 'bold', fontSize: '14px' }}>Meet The Team</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Services Grid Section */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', backgroundColor: '#1b5779', paddingTop: '30px', paddingBottom: '30px' }}>
                <div className="wp-block-cover__inner-container container">
                    <h2 className="wp-block-heading text-center" style={{ fontSize: '30px', fontWeight: '400', marginBottom: '10px' }}><strong>The Services</strong> Delivered by ZN Tax Consultant</h2>
                    <p className="text-center" style={{ marginBottom: '40px', fontSize: '14px', opacity: 0.9 }}>Our clients receive a full range of services from our accounting professionals:</p>

                    <div className="services-grid-careers" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        {[
                            {
                                title: 'Bookkeeping',
                                icon: service01Icon,
                                text: 'When you work a bookkeeping job, you are a part of a team committed to consistent and quality management of payroll and monitoring financials.',
                                link: '/service/bookkeeping'
                            },
                            {
                                title: 'QuickBooks®',
                                icon: service06Icon,
                                text: 'Quickbooks® is the leading business accounting software for small and mid-sized businesses, simplifying bookkeeping for millions of businesses.',
                                link: '/quickbooks'
                            },
                            {
                                title: 'Tax Preparation & Planning',
                                icon: service02Icon,
                                text: 'Tax season is deeply stressful for businesses of all sizes - your work in a bookkeeping job can provide relief to overworked people who struggle without you.',
                                link: '/service/tax-prep'
                            },
                            {
                                title: 'Acquisitions & Startups',
                                icon: service03Icon,
                                text: 'If you want a more sizable impact, acquisition and startup finances can be complex. Help businesses grow from the ground up through expert advice.',
                                link: '/service/acquisitions'
                            },
                            {
                                title: 'Business & Financial Consulting',
                                icon: service04Icon,
                                text: 'Many small businesses are run by passionate individuals. Help them navigate complex financial systems and make better business decisions.',
                                link: '/service/consulting'
                            },
                            {
                                title: 'Business Valuations',
                                icon: service05Icon,
                                text: 'Valuations provide deep insights and long-term perspectives to businesses of all sizes, helping them understand their true worth.',
                                link: '/service/valuations'
                            }
                        ].map((s, i) => (
                            <div key={i} className="service-card-careers text-center" style={{ padding: '40px 25px', backgroundColor: '#f7f7f7', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: '1px solid #e5e5e5' }}>
                                <a href={s.link} style={{ textDecoration: 'none' }}>
                                    <div style={{
                                        width: '130px',
                                        height: '130px',
                                        margin: '0 auto 25px auto',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
                                        }}
                                    >
                                        <img src={s.icon} alt={s.title} width="100" style={{ display: 'block', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px', color: '#d13239', textDecoration: 'underline' }}>{s.title}</h3>
                                </a>
                                <p style={{ fontSize: '12.5px', lineHeight: '1.6', color: '#444' }}>{s.text}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ height: '40px' }}></div>
                    <div className="cta-bottom-bar text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
                        <h2 className="wp-block-heading text-center" style={{ color: '#fff', fontSize: '30px', fontWeight: '500', marginBottom: '15px' }}>Work with ZN Tax Consultant Today!</h2>
                        <p className="text-center" style={{ color: '#fff', marginBottom: '30px', fontSize: '14px', opacity: 0.95 }}>
                            If you’d like to explore how you can help provide our clients with these services, look into the <a href="/careers/openings" style={{ color: '#fff', textDecoration: 'none', borderBottom: '2px solid #d13239', paddingBottom: '2px', transition: 'border-color 0.3s ease' }} onMouseOver={e => e.target.style.borderBottomColor = '#fff'} onMouseOut={e => e.target.style.borderBottomColor = '#d13239'}>positions currently open</a> at ZN Tax Consultant.
                        </p>
                        <div className="wp-block-buttons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'nowrap' }}>
                            <div className="wp-block-button">
                                <a className="wp-block-button__link wp-element-button" href="/careers/openings" style={{ backgroundColor: '#d13239', color: '#fff', borderRadius: '30px', padding: '12px 30px', fontWeight: 'bold', fontSize: '14px', border: 'none', whiteSpace: 'nowrap' }}>View Open Positions</a>
                            </div>
                            <div className="wp-block-button">
                                <a className="wp-block-button__link wp-element-button" href="/careers/apply" style={{ backgroundColor: '#d13239', color: '#fff', borderRadius: '30px', padding: '12px 30px', fontWeight: 'bold', fontSize: '14px', border: 'none', whiteSpace: 'nowrap' }}>Apply Today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Careers;
