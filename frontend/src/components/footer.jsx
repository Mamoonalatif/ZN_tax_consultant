import React, { useState } from 'react';
import logoWithoutBg from '../assets/images/logo-withoutbg.png';
import logoNameOnly from '../assets/images/logo-nameonly.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log('Newsletter signup:', { email, firstName });
        // Add your newsletter signup logic here
    };

    return (
        <>
            <footer id="footer-wrapper">
                <div id="footer" className="container">
                    <div className="footer-columns">
                        {/* Column 1: Logo, Info & Socials */}
                        <div className="footer-col-1">
                            <div id="footer-logo">
                                <a href="/">
                                    <img src={logoWithoutBg} alt="ZN Tax Consultant logo" width="180" height="auto" />
                                </a>
                            </div>
                            <p className="footer-description">
                                ZN Tax Consultant offers expert coaching to small businesses throughout Central PA, providing guidance and advice on how to address the day-to-day challenges of business operations and to develop plans for reaching big-picture, long-term goals and objectives.
                            </p>

                            <div className="footer-contact-info">
                                <div className="contact-item">
                                    <i className="fa-solid fa-phone"></i>
                                    <a href="tel:+17172199094">(717) 219-9094</a>
                                </div>
                                <div className="contact-item">
                                    <i className="fa-solid fa-envelope"></i>
                                    <a href="/contact">Email Us</a>
                                </div>
                                <div className="contact-item">
                                    <i className="fa-solid fa-calendar-days"></i>
                                    <a href="/schedule">Schedule a Consultation</a>
                                </div>
                            </div>

                            <ul className="social-icons">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>

                        {/* Column 2: Locations & Resources */}
                        <div className="footer-col-2">
                            <div className="footer-heading">Locations</div>
                            <ul className="footer-menu">
                                <li><a href="/mechanicsburg">Mechanicsburg, PA</a></li>
                                <li><a href="/myerstown">Myerstown, PA</a></li>
                                <li><a href="/harrisburg">Harrisburg, PA</a></li>
                                <li><a href="/lancaster">Lancaster, PA</a></li>
                            </ul>

                            <div className="footer-heading" style={{ marginTop: '30px' }}>Resources</div>
                            <ul className="footer-menu">
                                <li><a href="/blogs">Blog</a></li>
                                <li><a href="/videos">Videos</a></li>
                                <li><a href="/guides">Guides</a></li>
                                <li><a href="/checklists">Checklists</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Accounting Services */}
                        <div className="footer-col-3">
                            <div className="footer-heading">Accounting Services</div>
                            <ul className="footer-menu footer-menu-underlined">
                                <li><a href="/bookkeeping">Bookkeeping</a></li>
                                <li><a href="/tax">Tax Prep & Planning</a></li>
                                <li><a href="/acquisitions">Acquisitions & Startups</a></li>
                                <li><a href="/consulting">Business & Financial Consulting</a></li>
                                <li><a href="/valuations">Business Valuations</a></li>
                                <li><a href="/quickbooks">QuickBooks®</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Newsletter Signup */}
                        <div className="footer-col-4" style={{ flexBasis: '35%', minWidth: '320px' }}>
                            <div className="newsletter-signup">
                                <h3 className="newsletter-heading">Sign Up for Insights!</h3>
                                <p className="newsletter-description">
                                    Stay informed with expert tips, practical insights & more delivered right to your inbox.
                                </p>

                                <form onSubmit={handleSubmit} className="newsletter-form">
                                    <div className="form-group">
                                        <label htmlFor="newsletter-email"><span style={{ color: '#d13239', fontWeight: 'bold' }}>*</span> Email</label>
                                        <input
                                            type="email"
                                            id="newsletter-email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="newsletter-firstname"><span style={{ color: '#d13239', fontWeight: 'bold' }}>*</span> First Name</label>
                                        <input
                                            type="text"
                                            id="newsletter-firstname"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <p className="newsletter-disclaimer">
                                        By submitting this form, you are consenting to receive marketing emails from: ZN Tax Consultant, 1205 Manor Drive, Suite 100, Mechanicsburg, PA, 17055, US, http://www.zntaxconsultant.com. You can revoke your consent to receive emails at any time by using the SafeUnsubscribe® link, found at the bottom of every email. <a href="/privacy-policy">Emails are serviced by Constant Contact.</a>
                                    </p>

                                    <button type="submit" className="newsletter-submit">Sign Up!</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer Links */}
                    <div className="footer-bottom-links">
                        <ul className="copyright-menu">
                            <li><a href="/why-choose-zn">Why Choose ZN Tax Consultant</a></li>
                            <li><a href="/find-accountant">Find an Accountant</a></li>
                            <li><a href="/our-people">Our People</a></li>
                            <li><a href="/our-process">Our Process</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/client-hub">Client Hub</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div id="copyright-wrapper">
                    <div id="copyright" className="container">
                        <div className="copyright-left">
                            <img src={logoNameOnly} alt="ZN Tax Consultant icon" width="40" height="auto" />
                            <span>©2025, ZN Tax Consultant. All Rights Reserved. <a href="/privacy-policy">Privacy Policy</a></span>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;
