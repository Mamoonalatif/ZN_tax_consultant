import React from 'react';
import { Link } from 'react-router-dom';

// Import images/assets
import logoImg from '../assets/images/logoconc.png';
import whiteBg from '../assets/images/white-bg.jpg';

const Schedule = () => {
    return (
        <div className="schedule-page">
            {/* HERO SECTION */}
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
                    <h1 style={{ fontWeight: '400', fontSize: '42px', color: '#000' }}>Schedule a Consultation <strong style={{ color: '#000' }}>with ZN Tax Consultant</strong></h1>
                    <p style={{ fontSize: '18px', color: '#222' }}>Our Team is Ready to Speak with You About Bookkeeping, Tax Preparation and Planning, Accounting, Business Consulting, and More. Request a Consultation Here.</p>
                </div>
            </div>

            {/* MAIN CONTENT SECTION */}
            <div className="contact-main-section">
                <div className="container">
                    <div className="contact-flex">
                        {/* LEFT: FORM */}
                        <div className="contact-form-side">
                            <form className="contact-form">
                                {/* Location */}
                                <div className="form-group full-width">
                                    <label>Location <span>(Required)</span></label>
                                    <select className="filter-select" style={{ width: '100%', maxWidth: 'none' }}>
                                        <option>Choose the closest location</option>
                                        <option>Harrisburg, PA</option>
                                        <option>Mechanicsburg, PA</option>
                                        <option>Myerstown, PA</option>
                                        <option>Lancaster, PA</option>
                                    </select>
                                </div>

                                {/* Services */}
                                <div className="form-group full-width">
                                    <label>Services I am interested in: <span>(Required)</span></label>
                                    <div style={{
                                        marginTop: '15px',
                                        maxWidth: '700px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px'
                                    }}>
                                        {[
                                            'Bookkeeping', 'Accounting',
                                            'Tax Preparation & Planning', 'Acquisitions & New Business Startup',
                                            'Business & Financial Consulting', 'Business Valuations',
                                            'QuickBooks Consulting'
                                        ].map(service => (
                                            <label key={service} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                fontSize: '14px',
                                                fontWeight: '400',
                                                cursor: 'pointer',
                                                lineHeight: '1.3'
                                            }}>
                                                <input type="checkbox" name="services" value={service} style={{ marginTop: '3px', width: 'auto' }} />
                                                <span>{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Name <span>(Required)</span></label>
                                        <input type="text" placeholder="" />
                                        <span className="form-sub-label">First</span>
                                    </div>
                                    <div className="form-group" style={{ paddingTop: '28px' }}>
                                        <input type="text" placeholder="" />
                                        <span className="form-sub-label">Last</span>
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Company Name</label>
                                        <input type="text" />
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '20px', margin: '30px 0 20px 0', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>How Can We Reach You?</h3>

                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Preferred Method of Contact</label>
                                        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                                            {['Phone', 'Email', 'Text'].map(method => (
                                                <label key={method} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: '400', cursor: 'pointer' }}>
                                                    <input type="checkbox" name="contact_method" value={method} style={{ width: 'auto' }} /> {method}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Best time to reach you?</label>
                                        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                                            {['Morning', 'Afternoon', 'Evening'].map(time => (
                                                <label key={time} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: '400', cursor: 'pointer' }}>
                                                    <input type="checkbox" name="best_time" value={time} style={{ width: 'auto' }} /> {time}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email <span>(Required)</span></label>
                                        <input type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone <span>(Required)</span></label>
                                        <input type="tel" />
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '20px', margin: '30px 0 20px 0', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Scheduling Preferences</h3>

                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Preferred Date:</label>
                                        <input type="date" />
                                    </div>
                                    <div className="form-group">
                                        <label>Preferred Time:</label>
                                        <input type="time" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Please provide a brief description of your needs, or reason for appointment:</label>
                                        <textarea style={{ height: '120px' }}></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Sign Up for Insights!</label>
                                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                                        Stay informed with expert tips, practical insights & more delivered right to your inbox.
                                    </p>
                                    <div style={{ display: 'flex', gap: '20px', fontSize: '13px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '400', cursor: 'pointer' }}>
                                            <input type="radio" name="subscribe" value="yes" style={{ width: 'auto' }} /> Yes
                                        </label>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '400', cursor: 'pointer' }}>
                                            <input type="radio" name="subscribe" value="no" style={{ width: 'auto' }} /> No
                                        </label>
                                    </div>
                                </div>

                                <div className="captcha-placeholder">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '24px', height: '24px', border: '2px solid #c1c1c1', borderRadius: '2px', backgroundColor: '#fff' }}></div>
                                        <span style={{ fontSize: '14px', color: '#000' }}>I'm not a robot</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" style={{ width: '32px', height: '32px' }} />
                                        <div style={{ fontSize: '8px', color: '#555', textAlign: 'center', lineHeight: '1' }}>reCAPTCHA<br /><span style={{ fontSize: '7px' }}>Privacy - Terms</span></div>
                                    </div>
                                </div>

                                <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>Submit</button>
                            </form>
                        </div>

                        {/* RIGHT: SIDEBAR */}
                        <aside className="contact-sidebar">
                            <img src={logoImg} alt="ZN Tax Consultant Logo" className="sidebar-logo" />

                            <hr className="sidebar-divider" />

                            <h3 className="sidebar-title">Follow Us On Social</h3>
                            <div className="sidebar-social-icons">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </div>

                            <hr className="sidebar-divider" />

                            <h3 className="sidebar-title" style={{ textAlign: 'left', paddingLeft: '20px' }}>Visit a Location:</h3>
                            <ul style={{ listStyle: 'none', padding: '0 0 0 20px', textAlign: 'left', fontSize: '14px', lineHeight: '2' }}>
                                <li><Link to="/mechanicsburg" style={{ color: '#d13239', textDecoration: 'none' }}><i className="fa-solid fa-caret-right" style={{ marginRight: '8px' }}></i> Mechanicsburg, PA</Link></li>
                                <li><Link to="/myerstown" style={{ color: '#d13239', textDecoration: 'none' }}><i className="fa-solid fa-caret-right" style={{ marginRight: '8px' }}></i> Myerstown, PA</Link></li>
                                <li><Link to="/harrisburg" style={{ color: '#d13239', textDecoration: 'none' }}><i className="fa-solid fa-caret-right" style={{ marginRight: '8px' }}></i> Harrisburg, PA</Link></li>
                                <li><Link to="/lancaster" style={{ color: '#d13239', textDecoration: 'none' }}><i className="fa-solid fa-caret-right" style={{ marginRight: '8px' }}></i> Lancaster, PA</Link></li>
                            </ul>

                            <hr className="sidebar-divider" />

                            <h3 className="sidebar-title">Subscribe to Our Blogs</h3>
                            <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic', marginBottom: '15px' }}>No spam, only sound advice.</p>
                            <Link to="/blogs" className="sidebar-btn">Sign Up Today!</Link>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
