
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import logo
import logoImg from '../assets/images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedDropdown, setExpandedDropdown] = useState(null);
    const location = useLocation();

    const closeMenu = () => setIsMenuOpen(false);

    const toggleDropdown = (menuName) => {
        setExpandedDropdown(expandedDropdown === menuName ? null : menuName);
    };

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
                                alt="ZN TAX AND ACCOUNTING SERVICES PROFESSIONAL CORPORATION logo"
                                width="360"
                                height="123"
                            />
                        </Link>
                    </div>
                    <button
                        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
                        <nav className="right">
                            <div className="menu-menu-container">
                                <ul id="menu-menu" className="menu">
                                    {/* Mobile Only Utility Links */}
                                    <li className="menu-item mobile-only-item">
                                        <Link to="/" onClick={closeMenu} className="utility-highlight mobile-link">
                                            <i className="fa-solid fa-house"></i> Home
                                        </Link>
                                    </li>
                                    <li className="menu-item mobile-only-item">
                                        <Link to="/schedule" onClick={closeMenu} className="utility-highlight mobile-link cta-link">
                                            Schedule A Consultation
                                        </Link>
                                    </li>
                                    <li className="menu-item mobile-only-item divider"></li>

                                    <li className="menu-item"><Link to="/bookkeeping" onClick={closeMenu} className={location.pathname === '/bookkeeping' ? 'active' : ''}>Bookkeeping</Link></li>
                                    <li className="menu-item has-children">
                                        <a onClick={() => toggleDropdown('accounting')} style={{ cursor: 'pointer' }} className={['/accounting', '/tax', '/acquisitions', '/consulting', '/valuations', '/business-ownership', '/boi'].includes(location.pathname) ? 'active' : ''}>Accounting</a>
                                        <ul className={`sub-menu ${expandedDropdown === 'accounting' ? 'expanded' : ''}`}>
                                            <li><Link to="/tax" onClick={closeMenu}>Tax Prep & Planning</Link></li>
                                            <li><Link to="/acquisitions" onClick={closeMenu}>Acquisitions & Startups</Link></li>
                                            <li><Link to="/consulting" onClick={closeMenu}>Business Consulting</Link></li>
                                            <li><Link to="/valuations" onClick={closeMenu}>Business Valuations</Link></li>
                                            <li><Link to="/business-ownership" onClick={closeMenu}>Business Ownership Info</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><Link to="/quickbooks" onClick={closeMenu} className={location.pathname === '/quickbooks' ? 'active' : ''}>QuickBooks®</Link></li>
                                    <li className="menu-item has-children">
                                        <a onClick={() => toggleDropdown('locations')} style={{ cursor: 'pointer' }} className={['/mechanicsburg', '/myerstown', '/harrisburg', '/lancaster'].includes(location.pathname) ? 'active' : ''}>Locations</a>
                                        <ul className={`sub-menu ${expandedDropdown === 'locations' ? 'expanded' : ''}`}>
                                            <li><Link to="/mechanicsburg" onClick={closeMenu}>Mechanicsburg</Link></li>
                                            <li><Link to="/myerstown" onClick={closeMenu}>Myerstown</Link></li>
                                            <li><Link to="/harrisburg" onClick={closeMenu}>Harrisburg</Link></li>
                                            <li><Link to="/lancaster" onClick={closeMenu}>Lancaster</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><Link to="/find-accountant" onClick={closeMenu} className={location.pathname === '/find-accountant' ? 'active' : ''}>Find an Accountant</Link></li>
                                    <li className="menu-item has-children">
                                        <a onClick={() => toggleDropdown('about')} style={{ cursor: 'pointer' }} className={['/why-choose-zn', '/our-people', '/our-process', '/testimonials'].includes(location.pathname) ? 'active' : ''}>About</a>
                                        <ul className={`sub-menu ${expandedDropdown === 'about' ? 'expanded' : ''}`}>
                                            <li><Link to="/why-choose-zn" onClick={closeMenu}>Why Choose ZN Tax</Link></li>
                                            <li><Link to="/our-people" onClick={closeMenu}>Our People</Link></li>
                                            <li><Link to="/our-process" onClick={closeMenu}>Our Process</Link></li>
                                            <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
                                        </ul>
                                    </li>
                                    {/* Removed Resources Dropdown */}

                                    {/* Mobile Only House/Careers/Contact */}
                                    <li className="menu-item mobile-only-item">
                                        <Link to="/careers" onClick={closeMenu}>Careers</Link>
                                    </li>
                                    <li className="menu-item mobile-only-item">
                                        <Link to="/contact" onClick={closeMenu}>Contact</Link>
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
