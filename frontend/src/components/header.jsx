import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import logo
import logoImg from '../assets/images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <div id="top-wrapper">
                <div id="top" className="responsive">
                    <nav className="right">
                        <div className="menu-utility-nav-container">
                            <ul id="menu-utility-nav" className="top-menu">
                                <li className="menu-item">
                                    <Link
                                        to="/"
                                        className={location.pathname === '/' ? 'active' : ''}
                                    >
                                        <i className="fa-solid fa-house"></i>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link>
                                </li>
                                <li className="menu-item has-children">
                                    <a style={{ cursor: 'pointer' }} className={['/mechanicsburg', '/myerstown', '/harrisburg', '/lancaster', '/ephrata'].includes(location.pathname) ? 'active' : ''}>Locations</a>
                                    <ul className="sub-menu">
                                        <li><Link to="/mechanicsburg">Mechanicsburg</Link></li>
                                        <li><Link to="/myerstown">Myerstown</Link></li>
                                        <li><Link to="/harrisburg">Harrisburg</Link></li>
                                        <li><Link to="/lancaster">Lancaster</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/client-hub" className={location.pathname === '/client-hub' ? 'active' : ''}>
                                        <i className="fa-solid fa-user"></i> Client Hub
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/schedule" className={location.pathname === '/schedule' ? 'active' : ''}>Schedule A Consultation</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="clear"></div>
                </div>
            </div>

            <header id="header-wrapper">
                <div id="header" className="responsive">
                    <div id="logo">
                        <Link to="/">
                            <img
                                src={logoImg}
                                alt="ZN Tax Consultant logo"
                                width="360"
                                height="123"
                            />
                        </Link>
                    </div>
                    <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
                        <nav className="right">
                            <div className="menu-menu-container">
                                <ul id="menu-menu" className="menu">
                                    <li className="menu-item"><Link to="/bookkeeping" className={location.pathname === '/bookkeeping' ? 'active' : ''}>Bookkeeping</Link></li>
                                    <li className="menu-item has-children">
                                        <Link to="/accounting" className={['/accounting', '/tax', '/acquisitions', '/consulting', '/valuations'].includes(location.pathname) ? 'active' : ''}>Accounting</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/tax">Tax Prep & Planning</Link></li>
                                            <li><Link to="/acquisitions">Acquisitions & Startups</Link></li>
                                            <li><Link to="/consulting">Business Consulting</Link></li>
                                            <li><Link to="/valuations">Business Valuations</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><Link to="/quickbooks" className={location.pathname === '/quickbooks' ? 'active' : ''}>QuickBooks®</Link></li>
                                    <li className="menu-item"><Link to="/find-accountant" className={location.pathname === '/find-accountant' ? 'active' : ''}>Find an Accountant</Link></li>
                                    <li className="menu-item has-children">
                                        <a style={{ cursor: 'pointer' }} className={['/why-choose-zn', '/our-people', '/our-process', '/testimonials'].includes(location.pathname) ? 'active' : ''}>About</a>
                                        <ul className="sub-menu">
                                            <li><Link to="/why-choose-zn">Why Choose ZN Tax Consultant</Link></li>
                                            <li><Link to="/our-people">Our People</Link></li>
                                            <li><Link to="/our-process">Our Process</Link></li>
                                            <li><Link to="/testimonials">Testimonials</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a style={{ cursor: 'pointer' }} className={['/blogs', '/videos', '/guides', '/checklists', '/questionnaires'].includes(location.pathname) ? 'active' : ''}>Resources</a>
                                        <ul className="sub-menu">
                                            <li><Link to="/blogs">Blogs</Link></li>
                                            <li><Link to="/videos">Videos</Link></li>
                                            <li><Link to="/guides">Guides</Link></li>
                                            <li><Link to="/checklists">Checklists</Link></li>
                                            <li><Link to="/questionnaires">Questionnaires</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
